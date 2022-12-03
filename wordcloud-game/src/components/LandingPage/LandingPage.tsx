import React from "react";
import { useContext, useEffect, useState } from "react";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const [name, setName] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Wordcloud Game</h1>
        <form>
          <input
            type="text"
            placeholder="Enter your nickname here..."
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={(e) => setName(name)}>play</button>

          <p>{name}</p>
        </form>
      </div>
    </div>
  );
};
