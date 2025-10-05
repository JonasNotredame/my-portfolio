import "./Header.scss";
import LanguageSwitch from "../components/language/LanguageSwitch";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NavigationLinks from "./navigation/NavigationLinks";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-content">
        <NavigationLinks />
        <LanguageSwitch />
      </div>

      {/* Mobile menu */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <MenuIcon fontSize="large" />
      </button>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-content">
          <NavigationLinks onClick={() => setIsOpen(false)} />
          <LanguageSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Header;
