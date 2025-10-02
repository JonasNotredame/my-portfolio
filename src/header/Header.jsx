import { useTranslation } from "react-i18next";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import LanguageSwitch from "../components/language/LanguageSwitch";

function Header() {
  const { t } = useTranslation();

  return (
        <nav className="header">
          <NavLink className="header-nav-item" to="my-portfolio/home">
            {t("HEADER_NAV_HOME")}
          </NavLink>
          <NavLink className="header-nav-item" to="my-portfolio/about">
            {t("HEADER_NAV_ABOUT")}
          </NavLink>
          <NavLink className="header-nav-item" to="my-portfolio/projects">
            {t("HEADER_NAV_PROJECTS")}
          </NavLink>
          <NavLink className="header-nav-item" to="my-portfolio/contact">
            {t("HEADER_NAV_CONTACT")}
          </NavLink>
          <LanguageSwitch />
        </nav>
  );
}

export default Header;
