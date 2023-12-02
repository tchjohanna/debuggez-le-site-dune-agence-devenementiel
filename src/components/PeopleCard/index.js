// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";
// Importation du fichier de style Sass
import "./style.scss";

/**
 * PeopleCard - Un composant pour afficher une carte représentant une personne.
 *
 * @param {string} imageSrc - Source de l'image de la personne.
 * @param {string} imageAlt - Texte alternatif pour l'image.
 * @param {string} position - Position ou rôle de la personne.
 * @param {string} name - Nom de la personne.
 */
const PeopleCard = ({ imageSrc, imageAlt, position, name }) => (
  // Conteneur principal de la carte
  <div className="PeopleCard">
    {/* Conteneur pour l'image */}
    <div className="PeopleCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    {/* Conteneur pour la description */}
    <div className="PeopleCard__descriptionContainer">
      {/* Nom de la personne */}
      <div className="PeopleCard__name">{name}</div>
      {/* Position ou rôle de la personne */}
      <div className="PeopleCard__position">{position}</div>
    </div>
  </div>
);

// Définition des propTypes pour la validation des types de props
PeopleCard.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Source de l'image, requise
  imageAlt: PropTypes.string,            // Texte alternatif pour l'image
  name: PropTypes.string.isRequired,     // Nom de la personne, requis
  position: PropTypes.string.isRequired, // Position de la personne, requise
};

// Valeurs par défaut pour les props
PeopleCard.defaultProps = {
  imageAlt: "", // Texte alternatif par défaut vide
};

export default PeopleCard;
