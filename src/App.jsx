import React, { useState, useEffect } from "react";

import "./assets/css/App.css";
import "./assets/css/Cylindre.css";
import "./assets/css/chronometre.css";

function App() {
  // ---------------------------- Vitesse et Distance
  const [distance, setDistance] = useState(75);
  const [speed, setSpeed] = useState(0); // Ajout du state pour la vitesse

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(Math.floor(Math.random() * 181)); // Met à jour la vitesse
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const marks = Array.from({ length: 13 }, (_, i) => i * 20); // 0 à 240 par pas de 20

  // ---------------------------- Niveau de carburant
  const [fillPercentage, setFillPercentage] = useState(40);
  const handleSliderChange = (e) => {
    setFillPercentage(e.target.value);
  };

  // ---------------------------- Horloge
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // ---------------------------- Calcul de l'angle de l'aiguille
  const needleAngle = -84 + (speed * 0.7); // Ajustement de l'angle selon la vitesse

  return (
    <>
      <div className="app-container">
        <div className="speedometer-wrapper">
          <div className="speedometer">
            <div className="half-circle">
              {marks.map((value) => {
                const angle = -84 + value * 0.7;
                const isMainMark = value % 20 === 0;
                const markLineClass = isMainMark ? "mark-line main-mark" : "mark-line";

                return (
                  <div key={value} className="mark" style={{ transform: `rotate(${angle}deg)` }}>
                    <div className={markLineClass}></div>
                    {isMainMark && (
                      <div
                        className="mark-value"
                        style={{
                          transform: `rotate(${-angle}deg) translateX(-50%)`,
                          position: "absolute",
                          top: "30px",
                          color: "white",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        {value}
                      </div>
                    )}
                  </div>
                );
              })}

              <div
                className="needle"
                style={{
                  transform: `rotate(${needleAngle}deg)`, // Correction ici
                }}
              >
                <div className="needle-base"></div>
              </div>

              <div className="digital-display">
                <span>{speed}</span>
                <small> km/h</small>
              </div>
            </div>
          </div>
        </div>

        <div className="cylinder">
          <div
            className="cylinder-fill"
            style={{
              height: `${fillPercentage}%`,
              backgroundColor: "green",
            }}
          ></div>
        </div>
        <div className="remplissage">
          <input
            type="range"
            min="0"
            max="100"
            value={fillPercentage}
            onChange={handleSliderChange}
            className="fill-slider"
          />
          <div className="fill-percentage">Volume de carburant : {fillPercentage} L</div>
        </div>
      </div>

      <div className="digital-clock">
        <div className="time-section">
          <div className="hours">{formatNumber(time.getHours())}</div>
          <div className="separator">:</div>
          <div className="minutes">{formatNumber(time.getMinutes())}</div>
          <div className="separator">:</div>
          <div className="seconds">{formatNumber(time.getSeconds())}</div>
        </div>

        <div className="info-section">
          <div className="day-date">
            <span className="day">{days[time.getDay()]}</span>
            <span className="date">
              {formatNumber(time.getDate())} {formatNumber(time.getMonth() + 1)} {time.getFullYear()}
            </span>
          </div>
          {/* <div className="temperature">TEMP {Math.round(Math.random() * 35)}°C</div> */}
        </div>
      </div>

    </>
  );
}

export default App;
