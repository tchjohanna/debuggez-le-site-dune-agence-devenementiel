// Importation des hooks et composants nécessaires
import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

// Importation du fichier de style Sass
import "./style.scss";

/**
 * Slider - Un composant pour créer un carrousel d'événements.
 * Utilise les données fournies par useData et les trie par date.
 */
const Slider = () => {
  // Récupération des données d'événements
  const { data } = useData();
  // État pour l'index de l'événement actuellement affiché
  const [index, setIndex] = useState(0);
  // État pour les événements triés
  const [sortedEvents, setSortedEvents] = useState([]);
  // État pour le contrôle de lecture (play/pause)
  const [isPlaying, setIsPlaying] = useState(true);

  // Effet pour trier les événements par date
  useEffect(() => {
    if (data?.focus) {
      const sorted = [...data.focus].sort((evtA, evtB) =>
        new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
      );
      setSortedEvents(sorted);
    }
  }, [data?.focus]);

  // Effet pour faire défiler automatiquement les événements
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < sortedEvents.length - 1 ? prevIndex + 1 : 0));
    }, 5000); // Défilement toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [isPlaying, sortedEvents.length]);

  return (
    <div className="SlideCardList">
      {/* Contrôles pour jouer ou mettre en pause le carrousel */}
      <div className="SliderControl">
        {isPlaying ? (
          <FaPauseCircle className="icon" onClick={() => setIsPlaying(false)} />
        ) : (
          <FaPlayCircle className="icon" onClick={() => setIsPlaying(true)} />
        )}
      </div>

      {/* Affichage des cartes d'événements */}
      {sortedEvents.map((event, idx) => (
        <div
          key={event.id || idx}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination pour le carrousel */}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {sortedEvents.map((_, radioIdx) => (
            <input
              key={`radio-${radioIdx}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
