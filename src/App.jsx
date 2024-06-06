import { useState, useRef } from "react";
import "./App.css";

const soundArray = [
  {
    letter: "Q",
    id: "heater-1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    letter: "W",
    id: "heater-2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    letter: "E",
    id: "heater-3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    letter: "A",
    id: "heater-4",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    letter: "S",
    id: "Clap",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    letter: "D",
    id: "Open-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    letter: "Y",
    id: "Kick-n'-Hat",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    letter: "X",
    id: "Kick",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    letter: "C",
    id: "Closed-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function App() {
  return (
    <div id="drum-machine">
      <div id="display"></div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          height: "90vh",
          width: "250px",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {soundArray.map((sound) => (
          <Sound key={sound.id} sound={sound}></Sound> //key braucht React, immer wenn man aus Listen Komponenten durch Schleifen macht
        ))}
      </div>
    </div>
  );
}

function Sound({ sound }) {
  //hier bei onclick curlybraces nötig
  //Daten in Objekt speichern, damit wiederverwendbar (Code nicht verändert werden muss)

  const audioRef = useRef(null);

  function playSound() {
    const audio = document.getElementById(sound.id);
    audio.currentTime = 0;
    audio.play();
  }

  function f2() {
    audioRef.current?.play();
  }

  return (
    <>
      <button className="drum-pad" onClick={f2} id={sound.id}>
        {sound.letter}
        <audio
          className="clip"
          ref={audioRef}
          id={sound.id}
          src={sound.url}
        ></audio>
      </button>
    </>
  );
}

export default App;
