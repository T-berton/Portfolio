import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";


const skillbar = () => {
    return (
        <div>
             <ProgressBar
              completed={100}
              // customLabel="Comprendre les notions de base des capteurs et des chaîne de mesure: aspects physique/électronique et métrologique "
              labelColor="#ffffff"
              bgColor="#2d1950"
              className="wrapper"
              animateOnRender={true}
              labelClassName="label"
            />
        </div>
    );
};

export default skillbar;