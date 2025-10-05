import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./NavigationLinks.scss";

const NAV_LINKS = [
  { path: "my-portfolio/home", labelKey: "HEADER_NAV_HOME" },
  { path: "my-portfolio/about", labelKey: "HEADER_NAV_ABOUT" },
  { path: "my-portfolio/projects", labelKey: "HEADER_NAV_PROJECTS" },
  { path: "my-portfolio/contact", labelKey: "HEADER_NAV_CONTACT" },
];

function NavigationLinks({onClick}) {
  const { t } = useTranslation();

  return (
    <div className="navigation-links">
      {NAV_LINKS.map(({ path, labelKey }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={onClick}
        >
          {t(labelKey)}
        </NavLink>
      ))}
    </div>
  );
}

export default NavigationLinks;
