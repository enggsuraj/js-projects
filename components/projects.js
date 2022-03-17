import styles from "../styles/Projects.module.css";
import Image from "next/image";
import shortly from "../public/shortly.png";
import yt from "../public/yt.png";

function projects() {
  return (
    <div className={styles.projects} id="projects">
      <h2>Idea to Ideate 🚀</h2>
      <p>
        Projects list where maximum javascript concepts are covered in one
        project work. More projects will be added soon as that is the only way
        to become a good javascript developer.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <a href="https://shortly.vercel.app" target="_blank">
            <Image src={shortly} alt="Project One" />{" "}
            <h3>Shortly - URL Shortner</h3>
          </a>
        </div>
        <div className={styles.card}>
          <a href="http://youtubetools.herokuapp.com/">
            <Image src={yt} alt="Project One" />{" "}
            <h3>Youtube Tool Converter & Downloader</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default projects;
