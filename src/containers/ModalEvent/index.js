import PropTypes from "prop-types";
import "./style.scss";

/**
 * ModalEvent - Component to display detailed information about an event.
 * It shows the event's cover image, title, period, description,
 * number of participants, and a list of services (prestations) offered.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.event - Event data to display.
 */
const ModalEvent = ({ event }) => (
  <div className="ModalEvent">
    {/* Image Container */}
    <div className="ModalEvent__imageContainer">
      <img
        data-testid="card-image-testid"
        src={event.cover}
        alt={event.title}
      />
    </div>

    {/* Title and Period */}
    <div className="ModalEvent__title">
      <div className="ModalEvent__titleLabel">{event.title}</div>
      <div className="ModalEvent__titlePeriode">{event.periode}</div>
    </div>

    {/* Description */}
    <div className="ModalEvent__descriptionContainer">
      <h3>Description</h3>
      <div>{event.description}</div>
    </div>

    {/* Number of Participants */}
    <div className="ModalEvent__descriptionContainer">
      <h3>Participants</h3>
      <div>{event.nb_guesses} participants</div>
    </div>

    {/* List of Services (Prestations) */}
    <div className="ModalEvent__descriptionContainer">
      <h3>Prestations</h3>
      {event.prestations.map((presta) => (
        <div key={presta}>{presta}</div>
      ))}
    </div>
  </div>
);

// Defining propTypes for the ModalEvent component.
ModalEvent.propTypes = {
  event: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    periode: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    nb_guesses: PropTypes.number.isRequired,
    prestations: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ModalEvent;
