import { useTranslation } from "react-i18next";
import profileImg from "../../assets/profile.jpeg";
import "./HomePage.scss";
import InfoBlock from "../../components/infoBlock/InfoBlock";

function HomePage() {
  const { t } = useTranslation();

  return (
    <InfoBlock extraClass="info-block-full">
      <div className="home-page">
        <img src={profileImg} alt="profile" className="profile-image" />
        <span className="intro-section">
          <div className="badge">{t("HOME_INTRO_ROLE")}</div>
          <div className="intro-name">
            {t("HOME_INTRO_NAME")}
          </div>
        </span>
      </div>
    </InfoBlock>
  );
}

export default HomePage;
