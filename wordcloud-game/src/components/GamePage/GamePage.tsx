import styles from "./GamePage.module.css";
import { Options } from "./Option";
import { options } from "../../data/options";

export const GamePage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Select animals</h2>
      <div className={styles.container}>
        {options.map((option: any) => (
          <div key={option.answer} />
        ))}
      </div>
    </div>
  );
};
