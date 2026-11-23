import { hasLocale } from "next-intl";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en", "ru"],
  defaultLocale: "en",
  localePrefix: "always",
});

export function resolveLocale(locale?: string) {
  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
}
