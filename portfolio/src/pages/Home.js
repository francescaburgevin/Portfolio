import React from "react";
import Sidebar from "../containers/Sidebar";
import CVfile from "../assets/files/CV_Francesca_Burgevin_DevOps.pdf";
import Button from "../components/CustomButton";

const Home = () => {

  return (
    <div className="page-split">
      <Sidebar />
      <div className="left-hidden"></div>

      <div className="right-side">
        <h1>ACCUEIL</h1>

        <div className="home-text">
          <p>Ingénieure de production DevOps et Développeuse Web Full-Stack avec +10 ans d'expériences en pilotage de projets Business-to-Client.</p>
          <p>Débrouillarde, aimant le goût du challenge, je vise un travail fait en autonomie, propre et complet.</p>

          <div className="button">
            <a href={CVfile} download title="CV en PDF">
              <Button label={"Télécharger mon CV"}></Button>
            </a>
          </div>

        </div>
      </div>

    </div >
  );
};

export default Home;