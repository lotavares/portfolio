import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale && locales.includes(locale as any) ? locale : "en";

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});
