import { locale as getLocaleParam } from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { resolveLocale } from "./routing";

export default getRequestConfig(async ({ locale: override }) => {
  const locale = resolveLocale(override ?? (await getLocaleParam()));

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
