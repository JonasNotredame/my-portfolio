import "./LanguageSwitch.scss";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";

function LanguageSwitch() {
  const { i18n } = useTranslation();

  function setLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  }

  return (
    <div className="lang-switch">
      <Button
        className={`lang-toggle ${i18n.language === "nl" ? "active" : ""}`}
        onClick={() => setLanguage("nl")}
        text={"nl"}
      />
      <Button
        className={`lang-toggle ${i18n.language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
        text={"en"}
      />
    </div>
  );
}
export default LanguageSwitch;
