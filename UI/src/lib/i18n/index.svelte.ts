import { en, type TranslationKey } from './locales/en';
import { zhCN } from './locales/zh-CN';
import { zhTW } from './locales/zh-TW';

export type Locale = 'en' | 'zh-CN' | 'zh-TW';

export const LOCALES: { value: Locale; label: string }[] = [
	{ value: 'en', label: 'English' },
	{ value: 'zh-CN', label: '简体中文' },
	{ value: 'zh-TW', label: '繁體中文' }
];

const dictionaries: Record<Locale, Record<TranslationKey, string>> = {
	en,
	'zh-CN': zhCN,
	'zh-TW': zhTW
};

/** BCP 47 tag for `Intl` / `toLocaleDateString` calls. */
const DATE_LOCALE: Record<Locale, string> = {
	en: 'en-US',
	'zh-CN': 'zh-CN',
	'zh-TW': 'zh-TW'
};

const STORAGE_KEY = 'kuayle-language';

class I18nState {
	locale = $state<Locale>('en');

	private initialized = false;

	/** BCP 47 tag suitable for `Intl` APIs. */
	get dateLocale(): string {
		return DATE_LOCALE[this.locale];
	}

	init() {
		if (this.initialized) return;
		this.initialized = true;

		this.loadLocal();

		$effect(() => {
			document.documentElement.lang = this.locale;
		});
	}

	private loadLocal() {
		try {
			const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
			if (stored && stored in dictionaries) {
				this.locale = stored;
				return;
			}
		} catch {
			// localStorage unavailable
		}

		// Fall back to browser language
		const browser = navigator.language;
		if (browser.startsWith('zh-CN') || browser.startsWith('zh-Hans')) {
			this.locale = 'zh-CN';
		} else if (
			browser.startsWith('zh-TW') ||
			browser.startsWith('zh-Hant') ||
			browser.startsWith('zh-HK') ||
			browser.startsWith('zh-MO')
		) {
			this.locale = 'zh-TW';
		}
	}

	setLocale(locale: Locale) {
		this.locale = locale;
		try {
			localStorage.setItem(STORAGE_KEY, locale);
		} catch {
			// ignore
		}
	}

	t(key: string, params?: Record<string, string | number>): string {
		const dict = dictionaries[this.locale] ?? dictionaries.en;
		let value = (dict as Record<string, string>)[key] ?? (dictionaries.en as Record<string, string>)[key] ?? key;
		if (params) {
			for (const [k, v] of Object.entries(params)) {
				value = value.replaceAll(`{${k}}`, String(v));
			}
		}
		return value;
	}
}

export const i18n = new I18nState();
