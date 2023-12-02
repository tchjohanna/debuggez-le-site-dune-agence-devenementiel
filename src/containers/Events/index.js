// Importation des hooks et composants nécessaires
import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

// Importation du fichier de style CSS
import "./style.css";

// Définition du nombre d'événements par page
const PER_PAGE = 9;

const EventList = () => {
  // Utilisation du contexte pour récupérer les données et gérer les erreurs
  const { data, error } = useData();

  // États pour le filtrage par type et la pagination
  const [type, setType] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  // Fonction pour changer la page actuelle
  const handlePageChange = (page) => setCurrentPage(page);

  // Fonction pour changer le type d'événement sélectionné
  const handleChangeType = (evtType) => {
    setCurrentPage(1); // Réinitialiser la page à 1 lors du changement de type
    setType(evtType);
  };

  // Filtrage et tri des événements selon le type et la pagination
  const filteredEvents = data?.events
    .filter(event => !type || event.type === type) // Filtrage par type
    .slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE) // Pagination
    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Tri par date
    || [];

  // Calcul du nombre total de pages
  const totalPages = Math.ceil((data?.events.length || 0) / PER_PAGE);

  // Création d'une liste de types uniques pour le sélecteur
  const typeList = new Set(data?.events.map(event => event.type));

  return (
    <>
      {error && <div>An error occurred</div>} // Affichage d'une erreur, le cas échéant
      {!data ? (
        <div>Loading...</div> // Affichage d'un message de chargement en l'absence de données
      ) : (
        <>
          <h3 className="SelectTitle">Catégories</h3>
          <Select
            selection={Array.from(typeList)} // Conversion du Set en Array pour le composant Select
            onChange={handleChangeType}
          />
          <div id="events" className="ListContainer">
            {/* Mappage des événements filtrés pour afficher chaque carte d'événement */}
            {filteredEvents.map(event => (
              <Modal key={event.id} Content={<ModalEvent event={event} />}>
                {({ setIsOpened }) => (
                  <EventCard
                    onClick={() => setIsOpened(true)} // Gestion de l'ouverture du modal
                    imageSrc={event.cover}
                    title={event.title}
                    date={new Date(event.date)}
                    label={event.type}
                  />
                )}
              </Modal>
            ))}
          </div>
          <div className="Pagination">
            {/* Création des liens de pagination */}
            {[...Array(totalPages)].map((_, n) => (
              <a 
                key={n} 
                href="#events" 
                onClick={() => handlePageChange(n + 1)}
              >
                {n + 1}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default EventList;
