import { useTranslation } from "react-i18next";
import "./Header.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

function Header() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  function toggleLanguage() {
    const newLang = lang === "en" ? "nl" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  }

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  return (
    <div className="header">
      {/* <Button
        className="header-title"
        onClick={() => navigate("/my-portfolio/")}
        text={t("HEADER_TITLE")}
      /> */}
      <h1 className="header-title" onClick={() => navigate("/my-portfolio/")}>{t("HEADER_TITLE")}</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <NavLink to="/about">{t("HEADER_NAV_ABOUT")}</NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="/projects">{t("HEADER_NAV_PROJECTS")}</NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink to="/contact">{t("HEADER_NAV_CONTACT")}</NavLink>
          </li>
          <li className="header-nav-item">
            <Button className="lang-toggle" onClick={toggleLanguage} text={lang} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
