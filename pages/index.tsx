import Head from "next/head";
import HeaderComp from "./components/header";
import FooterComp from "./components/footer";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);
  const [clock, setClock] = useState(Date.now());

  function clicked() {
    setValue(value + 1);
  }

  useEffect(() => {
    var intrVal = setInterval(() => {
      setValue(value + 1);
      console.log(value);
      
    }, 1000);

    return()=>{
      clearInterval(intrVal);
    }
  }, [value]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <HeaderComp />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to</h1>
        <button onClick={clicked}>click me</button>
        <input type="text" name="search" />
        <span>{value}</span>
        <div className={styles.grid}>
          <h1>HELLO WORLD</h1>
        </div>
      </main>
      <FooterComp />
    </div>
  );
}
