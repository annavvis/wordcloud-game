import React from "react";
import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provders/global";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const { name, setName } = useContext(AuthContext);
  const navigate = useNavigate();

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

          <button onClick={(e) => navigate("game")}>play</button>

          <p>{name}</p>
        </form>
      </div>
    </div>
  );
};
