import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import home from "../public/home.png";
import rectangle from "../public/rectangle.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

function landing() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <main className={styles.main}>
      {/* 1 */}
      <nav>
        <div>
          <Image
            src={logo}
            alt="Picture of the author"
            width={50}
            height={50}
          />{" "}
        </div>

        <ul className={toggleMenu ? "mobile-menu-link" : "menu-link"}>
          <li>
            <a
              href="http://blogtheorem.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ( Portfolio )
            </a>
          </li>
          <li>
            <a
              href="https://reactconcepts.blogtheorem.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              ( React-Projects )
            </a>
          </li>
        </ul>

        <ul className={styles.desktopMenu}>
          <li>
            <a
              href="http://blogtheorem.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ( Portfolio )
            </a>
          </li>
          <li>
            <a
              href="https://reactconcepts.blogtheorem.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              ( React-Projects )
            </a>
          </li>
        </ul>

        {toggleMenu ? (
          <FontAwesomeIcon
            width="20px"
            icon={faXmark}
            onClick={toggleNav}
            className={styles.toggleButton}
          />
        ) : (
          <FontAwesomeIcon
            width="20px"
            icon={faBars}
            onClick={toggleNav}
            className={styles.toggleButton}
          />
        )}
      </nav>
      {/* 2 */}
      <div className={styles.home}>
        <div className={styles.left}>
          <p>function letBegin();</p>
          <h1>
            Showcasing <br />
            Javscript skill and <br />
            Projects
          </h1>
          <p>
            Application of javascript programming language with deep knowledge
            of ES6 concepts. List down are few vanilla javascript projects build
            from scratch that provides solution to the problem.
          </p>
          <div className={styles.button}>
            <a href="#projects" className={styles.btn}>
              View{" "}
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src={home}
            alt="Picture of the author"
            width={700}
            height={500}
          />{" "}
        </div>
      </div>
      {/* Rectangle */}
      <img className={styles.rectangle} src="../rectangle.png" />{" "}
    </main>
  );
}

export default landing;
