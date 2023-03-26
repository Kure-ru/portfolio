import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";

function App() {
  return (
    <>
      <nav>
        <h2>Claire Inada</h2>
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
            <a href="#">Contactez-moi</a>
          </div>
          <img src="http://placekitten.com/450/600" alt="profil" />
        </section>
      </header>
      <main>
        <section className="skills">
          <div>
            <h2>HTML</h2>
          </div>
          <div>
            <h2>CSS</h2>
          </div>
          <div>
            <h2>Javascript</h2>
          </div>
          <div>
            <h2>React</h2>
          </div>
          <div>
            <h2>Tailwind CSS</h2>
          </div>
          <div>
            <h2>Sass</h2>
          </div>
          <div>
            <h2>MongoDB</h2>
          </div>
          <div>
            <h2>Git</h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
