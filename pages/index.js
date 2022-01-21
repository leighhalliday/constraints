import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const options = [
  "must involve js",
  "must involve css",
  "must involve ruby",
  "must be with the signup page",
  "must be for workers",
  "must be for companies",
  "must be with timecards",
  "must be with any form",
  "must be for any text inputs",
  "must be for any buttons",
  "must involve sidebar",
  "must reuse an idea already presented",
  "must involve the DB",
  "must involve surprise",
  "must involve the mouse",
  "must involve recursion",
  "must be unethical",
  "must be a big security risk",
  "must be subtle",
  "must change the codebase",
  "must involve find/replace",
  "must involve tests",
  "must use color",
  "must involve other sites",
  "must be child friendly",
  "must be less than clear",
  "must use any custom wrapbook slackmoji",
  "must involve music in some way",
  "must use a new gem",
  "must be interactive",
  "must use images",
  "must increase loading times",
  "must involve animations",
  "must be a good idea for exactly one person",
  "do nothing but try to convince everyone you did something",
];

export default function Home() {
  const [constraints, setConstraints] = useState(null);

  const spin = () => {
    const chosen = [];
    for (let i = 0; i < 3; i++) {
      chosen.push(options[Math.floor(Math.random() * options.length)]);
    }
    setConstraints(chosen);
  };

  return (
    <div className={styles.container}>
      <h1>Your Destiny Awaits</h1>

      {constraints === null ? (
        <button onClick={spin}>Spin</button>
      ) : (
        <div>
          <ul>
            {constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
          <button onClick={spin}>Spin Again</button>
        </div>
      )}
    </div>
  );
}
