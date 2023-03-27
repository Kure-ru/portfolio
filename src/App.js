import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

function App() {
  return (
    <>
      <nav>
        <h3>Claire Inada</h3>
        <div className="header__div">
          <IoLogoGithub />
          <IoLogoLinkedin />
          <IoLogoTwitter />
        </div>
      </nav>
      <header>
        <section className="hero">
          <div>
            <h1>
              Enchantée, je m'appelle <br />
              <span className="header__name">Claire Inada</span>
            </h1>
            <p>
              Développeuse full-stack créative et minutieuse, je suis passionnée
              par les possibilités offertes par l'Intelligence Artificielle. Je
              suis actuellement à la recherche d'une entreprise informatique
              établie pour mettre en pratique mes compétences et contribuer à
              des projets innovants.
            </p>
            <a href="#" className="contact">
              Contactez-moi
            </a>
          </div>
          <img src="http://placekitten.com/450/600" alt="profil" />
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
          <h2>Projets récents</h2>
          <div className="projects__container">
            <div className="projects__project">
              <img src="/projet_1.png" alt="projet de todo list " />
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
              <img src="/projet_2.png" alt="projet de calculatrice" />
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
              <img src="/projet_2.png" alt="projet de calculatrice" />
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
              <img src="/projet_2.png" alt="projet de calculatrice" />
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
          </div>
        </section>
        <section className="contact">
          <div className="contact__text">
            <h2>Contactez-moi</h2>
            <p>
              J'aimerais en savoir plus sur votre projet et sur la meilleure
              façon de vous aider. Remplissez ce formulaire ou contactez moi à
              inada.kureru@gmail.com
            </p>
          </div>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Nom <input type="text" name="name" required />
              </label>
            </p>
            <p>
              <label>
                Email <input type="email" name="email" required />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Envoyer</button>
            </p>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
