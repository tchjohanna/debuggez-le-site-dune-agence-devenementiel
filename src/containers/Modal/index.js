// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";
// Importation du hook useState de React
import { useState } from "react";
// Importation du composant Icon
import Icon from "../../components/Icon";
// Importation du fichier de style Sass
import "./style.scss";

/**
 * Modal - Un composant pour afficher un modal.
 * @param {boolean} opened - Indique si le modal doit être ouvert initialement.
 * @param {node} Content - Le contenu à afficher dans le modal.
 * @param {function} children - Une fonction qui renvoie les éléments enfants.
 */
const Modal = ({ opened, Content, children }) => {
  // État pour contrôler l'affichage du modal
  const [isOpened, setIsOpened] = useState(opened);

  return (
    <>
      {/* Appel de la fonction children, en lui passant l'état et la fonction pour le modifier */}
      {children({ isOpened, setIsOpened })}

      {/* Affichage conditionnel du modal si isOpened est true */}
      {isOpened && (
        <div className="modal">
          {/* Conteneur pour le contenu du modal */}
          <div className="content">
            {Content} {/* Affichage du contenu passé en props */}
            {/* Bouton pour fermer le modal */}
            <button
              type="button"
              data-testid="close-modal" // Attribut pour les tests
              onClick={() => setIsOpened(false)} // Gestionnaire d'événement pour fermer le modal
            >
              <Icon name="close" /> {/* Icône de fermeture */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Valeurs par défaut pour les props
Modal.defaultProps = {
  opened: false, // Modal fermé par défaut
};

// Validation des types des props avec PropTypes
Modal.propTypes = {
  opened: PropTypes.bool, // Prop pour l'état initial du modal
  Content: PropTypes.node.isRequired, // Prop pour le contenu du modal
  children: PropTypes.func.isRequired, // Prop pour les éléments enfants
};

export default Modal;
