import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { Car } from "@swiftcarrot/react-ionicons";
import {useRef} from 'react';

function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <nav>
        <h3 className="top__name">Claire Inada</h3>
        <div className="header__div">
          <a href="https://github.com/Kure-ru">
            <IoLogoGithub />{" "}
          </a>
          <a href="https://www.linkedin.com/in/claire-inada-873006124/">
            <IoLogoLinkedin />
          </a>
          <a href="https://twitter.com/home">
            <IoLogoTwitter />
          </a>
        </div>
      </nav>
      <header>
        <section className="hero">
          <div>
            <div className="lines"></div>
            <h1>
              Enchantée, je m'appelle <br />
              <span className="header__name">Claire Inada</span>
            </h1>
            <p>
              Développeuse full-stack créative et minutieuse, je suis passionnée
              par les possibilités offertes par l'Intelligence Artificielle.
            </p>
            <button onClick={handleClick} className="header__contact">
              Contactez-moi
            </button>
          </div>
          <img src="/profile_pic.png" alt="profil" />
        </section>
      </header>
      <main>
        <section className="skills">
          <div>
            <h3>HTML</h3>
          </div>
          <div>
            <h3>CSS</h3>
          </div>
          <div>
            <h3>Javascript</h3>
          </div>
          <div>
            <h3>Typescript</h3>
          </div>
          <div>
            <h3>React</h3>
          </div>
          <div>
            <h3>Tailwind CSS</h3>
          </div>
          <div>
            <h3>Sass</h3>
          </div>
          <div>
            <h3>MongoDB</h3>
          </div>
          <div>
            <h3>Git</h3>
          </div>
        </section>
        <section className="projects">
          <h2>Projets</h2>
          <div className="projects__container">
            <div className="projects__project">
              <img src="/projet_1.jpg" alt="projet de todo list " />
              <h4>Application Todo</h4>
              <span>REACT CSS</span>
              <ul>
                <li>
                  <a href="https://todo-kure-ru.vercel.app/">voir le site</a>
                </li>
                <li>
                  <a href="https://github.com/Kure-ru/Todo">voir le code</a>
                </li>
              </ul>
            </div>

            <div className="projects__project">
              <img src="/projet_2.jpg" alt="projet de calculatrice" />
              <h4>Calculatrice Y2K</h4>
              <span>HTML CSS JS</span>
              <ul>
                <li>
                  <a href="https://kure-ru.github.io/Calculator/">
                    voir le site
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kure-ru/Calculator">
                    voir le code
                  </a>
                </li>
              </ul>
            </div>

            <div className="projects__project">
              <img src="/projet_3.jpg" alt="projet de morpion" />
              <h4>Morpion</h4>
              <span>HTML CSS JS</span>
              <ul>
                <li>
                  <a href="https://kure-ru.github.io/tic-tac-toe/">
                    voir le site
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kure-ru/tic-tac-toe">
                    voir le code
                  </a>
                </li>
              </ul>
            </div>

            <div className="projects__project">
              <img src="/projet_4.jpg" alt="site de recettes de cocktails" />
              <h4>The Cocktail Collective</h4>
              <span>HTML CSS JS API</span>
              <ul>
                <li>
                  <a href="https://kure-ru.github.io/The_Cocktail_Collective/">
                    voir le site
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kure-ru/The_Cocktail_Collective">
                    voir le code
                  </a>
                </li>
              </ul>
            </div>
            <div className="projects__project">
              <img src="/projet_5.jpg" alt="site de tirages de tarot" />
              <h4>Enlightened Tarot</h4>
              <span>HTML CSS JS API</span>
              <ul>
                <li>
                  <a href="https://kure-ru.github.io/Enlightened_Tarot/">
                    voir le site
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kure-ru/Enlightened_Tarot">
                    voir le code
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>
        <section ref={ref} className="contact">
          <div className="contact__text">
            <h2>Contactez-moi</h2>
            <p>
              Je serais ravie de discuter avec vous de votre projet et de voir
              comment je peux vous aider à le concrétiser. Pour en savoir plus,
              remplissez simplement ce formulaire ou envoyez-moi un e-mail à
              inada.kureru@gmail.com !
            </p>
          </div>
          <form id="contact " name="contact" method="POST" data-netlify="true">
            <ul>
              <li>
                <input type="text" name="name" placeholder="NOM" required />
              </li>
              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="ADRESSE EMAIL"
                  required
                />
              </li>
              <li>
                <label>MESSAGE</label>
                <br />
                <textarea name="message"></textarea>
              </li>
              <li>
                <button type="submit">Envoyer</button>
              </li>
            </ul>
          </form>
        </section>
      </main>
      <footer>
        <h3>Claire Inada</h3>
        <div className="header__div">
          <a href="https://github.com/Kure-ru">
            <IoLogoGithub />{" "}
          </a>
          <a href="https://www.linkedin.com/in/claire-inada-873006124/">
            <IoLogoLinkedin />
          </a>
          <a href="https://twitter.com/home">
            <IoLogoTwitter />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
