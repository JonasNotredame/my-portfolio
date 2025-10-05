import "./LanguageSwitch.scss";
import { useTranslation } from "react-i18next";

const LANGUAGES = ["nl", "en"];

function LanguageSwitch() {
  const { i18n } = useTranslation();

  function setLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  }

  return (
    <div className="lang-switch">
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          onClick={() => setLanguage(lng)}
          className={`lang-switch-button ${
            i18n.resolvedLanguage === lng ? "active" : ""
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
export default LanguageSwitch;
