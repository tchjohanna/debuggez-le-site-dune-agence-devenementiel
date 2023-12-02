/* eslint-disable no-return-assign */
// Désactivation d'une règle ESLint spécifique pour ce fichier

// Importation des composants nécessaires
import Button from "../../components/Button";
import Logo from "../../components/Logo";

// Importation du fichier de style Sass
import "./style.scss";

/**
 * Menu - Un composant pour afficher la barre de navigation.
 * Ce composant utilise le composant Logo et le composant Button.
 */
const Menu = () => (
  // Utilisation de la balise <nav> pour la sémantique HTML
  <nav>
    {/* Affichage du logo */}
    <Logo />

    {/* Liste de liens de navigation */}
    <ul>
      {/* Chaque élément de la liste est un lien vers une section différente du site */}
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>

    {/* Bouton de contact */}
    <Button 
      title="contact" 
      // Gestion de l'événement onClick pour naviguer vers la section contact
      onClick={() => (window.document.location.hash = "#contact")}
    >
      Contact
    </Button>
  </nav>
);

export default Menu;
