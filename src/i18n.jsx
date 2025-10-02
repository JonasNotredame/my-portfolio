import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./components/language/translate/en.json";
import nl from "./components/language/translate/nl.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
