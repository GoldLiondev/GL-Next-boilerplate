// eslint-disable-next-line no-undef
module.exports = {
  locales: ["en", "cn", "es", "jp"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
  },
  loadLocaleFrom: (lang, ns) => {
    return import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default);
  },
};
