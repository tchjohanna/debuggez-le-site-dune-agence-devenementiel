import PropTypes from "prop-types";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

/**
 * EventCard - Un composant pour afficher une carte d'événement.
 * 
 * @param {string} imageSrc - Source de l'image de la carte.
 * @param {string} imageAlt - Texte alternatif pour l'image.
 * @param {Date} date - La date de l'événement.
 * @param {string} title - Le titre de l'événement.
 * @param {string} label - Étiquette supplémentaire pour la carte (comme le type d'événement).
 * @param {boolean} small - Si vrai, la carte est affichée dans un style plus petit.
 * @param {object} props - Autres props à passer à la carte.
 */
const EventCard = ({
  imageSrc,
  imageAlt = "image", // Valeur par défaut pour imageAlt
  date = new Date(),   // Valeur par défaut pour date
  title,
  label,
  small = false,       // Valeur par défaut pour small
  ...props
}) => (
  <div
    data-testid="card-testid"
    className={`EventCard${small ? " EventCard--small" : ""}`}
    {...props}
  >
    <div className="EventCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
      <div className="EventCard__label">{label}</div>
    </div>
    <div className="EventCard__descriptionContainer">
      <div className="EventCard__title">{title}</div>
      <div className="EventCard__month">{getMonth(date)}</div>
    </div>
  </div>
);

// Définition des types de props et des props obligatoires
EventCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string,
  small: PropTypes.bool,
  label: PropTypes.string,
};

// Définition des valeurs par défaut pour les props non obligatoires
EventCard.defaultProps = {
  imageAlt: "image",
  small: false,
};

export default EventCard;