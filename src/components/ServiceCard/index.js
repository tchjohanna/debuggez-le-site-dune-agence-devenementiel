// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";
// Importation du fichier de style Sass
import "./style.scss";

/**
 * ServiceCard - Un composant pour afficher une carte de service.
 * 
 * @param {string} imageSrc - Source de l'image de la carte de service.
 * @param {string} imageAlt - Texte alternatif pour l'image.
 * @param {node} children - Contenu textuel ou autres éléments à afficher dans la carte.
 */
const ServiceCard = ({ imageSrc, imageAlt, children }) => (
  // Conteneur principal de la carte de service
  <div className="ServiceCard">
    {/* Conteneur pour l'image */}
    <div className="ServiceCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    {/* Conteneur pour le texte ou le contenu supplémentaire */}
    <div className="ServiceCard__textContainer">{children}</div>
  </div>
);

// Définition des propTypes pour la validation des types de props
ServiceCard.propTypes = {
  imageSrc: PropTypes.string.isRequired, // Source de l'image, requise
  imageAlt: PropTypes.string,            // Texte alternatif pour l'image
  children: PropTypes.node.isRequired,   // Contenu de la carte, requis
};

// Valeurs par défaut pour les props
ServiceCard.defaultProps = {
  imageAlt: "image" // Texte alternatif par défaut pour l'image
};

export default ServiceCard;
