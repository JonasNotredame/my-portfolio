import { useTranslation } from "react-i18next";
import profileImg from "../../assets/profile.jpeg";
import "./HomePage.scss";

function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div className="home-page">
      <img src={profileImg} alt="profile" className="profile-image" />
      <div className="intro-text">
        {t("HOME_INTRO_PRE")}{" "}
        <span className="intro-name">{t("HOME_INTRO_NAME")}. </span>
        {t("HOME_INTRO_POST")}
      </div>
    </div>
  );
}

export default HomePage;
