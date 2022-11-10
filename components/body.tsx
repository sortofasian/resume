import {
  faCloudflare,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
  faStripeS,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowsLeftRightToLine,
  faBrain,
  faLeaf,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./body.module.css";
export function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.experience}>
        <h2>Experience</h2>

        <ul className={styles.list}>
          <li>
            <div className={styles.xp}>
              <h4>Engineering Design and Development</h4>
              <div>
                <h4>Class Project</h4>
                <h4>Ongoing since Sept. 2022</h4>
              </div>
            </div>
            <p>Designing a system to address the vaping issue in schools</p>
            <ul className={styles.sublist}>
              <li>Uses networked edge devices</li>
              <li>Aggregates data from a sensor network</li>
              <li>Will likely perform automatic analysis on data</li>
            </ul>
          </li>

          <li>
            <div className={styles.xp}>
              <h4>MI Technical Solutions</h4>
              <div>
                <h4>Internship</h4>
                <h4>Jul. 2022 to Aug. 2022</h4>
              </div>
            </div>
            <p>Introduced us to CAD, Cybersec, and Server administration</p>
            <ul className={styles.sublist}>
              <li>Created prototypes in Fusion 360</li>
              <li>Set up a LAMP Stack</li>
              <li>Hardened a LAMP stack</li>
              <li>Learned about dictionary attacks against WPA2</li>
            </ul>
          </li>

          <li>
            <div className={styles.xp}>
              <h4>Dimension Cubed</h4>
              <div>
                <h4>Startup Contract</h4>
                <h4>May 2022 to Sept. 2022</h4>
              </div>
            </div>
            <p>
              Built a web-based storefront at{" "}
              <a href="https://dimensioncubed.xyz/store">dimensioncubed.xyz</a>
            </p>
            <ul className={styles.sublist}>
              <li>Accepts online payments in a scalable manner</li>
              <li>Built for Docker and scalability</li>
              <li>UI and site were designed personally</li>
              <li>Implemented Cloudflare for speed & security</li>
            </ul>
          </li>

          <li>
            <div className={styles.xp}>
              <h4>The Hull Group, LLC.</h4>
              <div>
                <h4>Startup Contract</h4>
                <h4>May 2021 to Jun. 2022</h4>
              </div>
            </div>
            <p>Built and integrated a resume management system</p>
            <ul className={styles.sublist}>
              <li>
                Uses a user-facing micro-frontend with a seperate admin panel
              </li>
              <li>Scrapes resumes for structured information with regex</li>
              <li>
                Searches for skills using a Word2Vec model trained on scraped
                data
              </li>
              <li>Required lots of research and consideration for end users</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={styles.skill}>
        <h2>Skills</h2>
        <div className={styles.skillicons}>
          <div>
            <FontAwesomeIcon
              icon={faJs}
              color="rgb(240, 220, 78)"
              style={{ backgroundColor: "rgb(50, 50, 50)" }}
            />
            <div>Javascript</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faPython} color="rgb(60, 123, 172)" />
            <div>Python</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faHtml5} color="rgb(243, 101, 40)" />
            <div>HTML 5</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faCss3Alt} color="rgb(37, 100, 176)" />
            <div>CSS 3</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faReact} color="rgb(96, 218, 250)" />
            <div>React</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faStripeS} color="rgb(106, 112, 228)" />
            <div>Stripe</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faCloudflare} color="rgb(239, 127, 44)" />
            <div>Cloudflare</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faNodeJs} color="rgb(110, 165, 97)" />
            <div>Node.js</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faLeaf} color="rgb(105, 159, 78)" />
            <div>MongoDB</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faDocker} color="rgb(15, 160, 220)" />
            <div>Docker</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faLinux} />
            <div>Linux</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faGitAlt} color="rgb(241, 81, 52)" />
            <div>Git</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faBrain} />
            <div>ML</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faMicrochip} />
            <div>MCUs</div>
          </div>

          <div>
            <FontAwesomeIcon icon={faArrowsLeftRightToLine} />
            <div>APIs</div>
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <h2>Education</h2>
        <br />

        <h3>Governor&apos;s STEM Academy</h3>
        <h4>2019-2023</h4>
        <p>Grassfield High School</p>
        <br />

        <h3>Online Courses</h3>
        <h4>2019-2022</h4>
        <p>
          <a href="https://udemy.com">udemy.com</a>,{" "}
          <a href="https://egghead.io">egghead.io</a>,{" "}
          <a href="https://youtube.com">youtube.com</a>, & various articles
        </p>
      </div>
    </div>
  );
}
