// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";
// Importation du fichier de style Sass
import "./style.scss";

/**
 * ModalEvent - Composant pour afficher des informations détaillées sur un événement.
 * Il montre l'image de couverture de l'événement, son titre, sa période, sa description,
 * le nombre de participants et une liste des services (prestations) offerts.
 *
 * @param {Object} props - Propriétés du composant.
 * @param {Object} props.event - Données de l'événement à afficher.
 */
const ModalEvent = ({ event }) => (
  <div className="ModalEvent">
    {/* Conteneur de l'image */}
    <div className="ModalEvent__imageContainer">
      <img
        data-testid="card-image-testid" // Attribut pour les tests
        src={event.cover} // Source de l'image de couverture
        alt={event.title} // Texte alternatif de l'image
      />
    </div>

    {/* Titre et période */}
    <div className="ModalEvent__title">
      <div className="ModalEvent__titleLabel">{event.title}</div>
      <div className="ModalEvent__titlePeriode">{event.periode}</div>
    </div>

    {/* Description */}
    <div className="ModalEvent__descriptionContainer">
      <h3>Description</h3>
      <div>{event.description}</div>
    </div>

    {/* Nombre de participants */}
    <div className="ModalEvent__descriptionContainer">
      <h3>Participants</h3>
      <div>{event.nb_guesses} participants</div>
    </div>

    {/* Liste des services (prestations) */}
    <div className="ModalEvent__descriptionContainer">
      <h3>Prestations</h3>
      {/* Mappage des prestations pour les afficher */}
      {event.prestations.map((presta) => (
        <div key={presta}>{presta}</div> // Affichage de chaque prestation
      ))}
    </div>
  </div>
);

// Définition des propTypes pour le composant ModalEvent.
ModalEvent.propTypes = {
  event: PropTypes.shape({
    cover: PropTypes.string.isRequired, // Image de couverture
    title: PropTypes.string.isRequired, // Titre de l'événement
    periode: PropTypes.string.isRequired, // Période de l'événement
    description: PropTypes.string.isRequired, // Description de l'événement
    nb_guesses: PropTypes.number.isRequired, // Nombre de participants
    prestations: PropTypes.arrayOf(PropTypes.string).isRequired, // Liste des prestations
  }).isRequired,
};

export default ModalEvent;
