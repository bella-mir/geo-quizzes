import React from "react";
import styles from "./menu.module.scss";
import peoples from "../../images/ind4.jpeg";
import dagestan from "../../images/dagestan.avif";
import tymen from "../../images/tymen.avif";
// import spb from "../../images/spb4.JPG";
import chukotka from "../../images/chukotka.avif";
// import bratsk from "../../images/bratsk.JPG";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <section className={styles.grid}>
        {/* <a
          href="https://belka-mironova.github.io/IndigenousPeoplesRussia/"
          className={styles.grid__content}
          target="_blank"
        > */}
        <div className={styles.grid__content}>
          <img
            src={peoples}
            alt="Indigenous Peoples Russia"
            className={styles.grid__item}
          />
          <div className={styles.grid__overlay}>
            <h2 className={styles.grid__title}>Indigenous peoples</h2>
            <div className={styles.links}>
              <Link className={styles.link} to="/map">
                Learn
              </Link>
              <Link className={styles.link} to="/quiz">
                Play
              </Link>
            </div>
          </div>
        </div>
        {/* </a> */}

        {/* <a
          href="https://belka-mironova.github.io/geo-quiz/"
          className={styles.grid__content}
          target="_blank"
        > */}
        <div className={styles.grid__content}>
          <img
            src={dagestan}
            alt="Вид из окна поезда"
            className={styles.grid__item}
          />
          {/* <!-- <div className={styles.grid__item} style="background-color: #FA7755;"></div> --> */}
          <div className={styles.grid__overlay}>
            <h2 className={styles.grid__title}>Regions</h2>
            <div className={styles.links}>
              <Link className={styles.link} to="/map">
                Learn
              </Link>
              <Link className={styles.link} to="/quiz">
                Play
              </Link>
            </div>
          </div>
        </div>

        {/* </a> */}

        {/* <a href="" className={styles.grid__content} target="_blank"> */}
        <div className={styles.grid__content}>
          <img src={tymen} alt="Тюмень" className={styles.grid__item} />
          {/* <!-- <div className={styles.grid__item} style="background-color: #EEB1D2;"></div> --> */}
          <div className={styles.grid__overlay}>
            <h2 className={styles.grid__title}>Cities</h2>
            <p className={styles.grid__subtitle}>Coming soon...</p>
          </div>
        </div>
        {/* </a> */}

        {/* <a href="#" className={styles.grid__content} target="_blank">
    <img
      src={spb}
      alt="Вид из окна поезда"
      className={styles.grid__item}
    />
    
    <div className={styles.grid__overlay}>
      <h2 className={styles.grid__title}>Renamed Cities</h2>
      <p className={styles.grid__subtitle}>Coming soon...</p>
    </div>
  </a> */}

        {/* <a href="#" className={styles.grid__content} target="_blank"> */}
        <div className={styles.grid__content}>
          <img
            src={chukotka}
            alt="Вид из окна поезда"
            className={styles.grid__item}
          />
          {/* <!-- <div className={styles.grid__item} style="background-color: #93BBA0;"></div> --> */}
          <div className={styles.grid__overlay}>
            <h2 className={styles.grid__title}>Geographical Darts</h2>
            <p className={styles.grid__subtitle}>Coming soon...</p>
          </div>
        </div>

        
        {/* </a> */}

        {/* <a href="{{url_for('contact')}}" className={styles.grid__content} target="_blank">
    <img
      src={bratsk}
      alt="Братск"
      className={styles.grid__item}
    />
    
    <div className={styles.grid__overlay}>
      <h2 className={styles.grid__title}>???</h2>
      <p className={styles.grid__subtitle}>Tell us what you want to see here!</p>
    </div>
  </a> */}
      </section>
    </div>
  );
}
