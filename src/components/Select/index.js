/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Désactivation de certaines règles ESLint spécifiques pour ce fichier

// Importation des hooks et de PropTypes pour la validation des types de props
import { useState } from "react";
import PropTypes from "prop-types";

// Importation du fichier de style Sass
import "./style.scss";

/**
 * Select - Un composant personnalisé pour une sélection déroulante.
 *
 * @param {Array} selection - Tableau des options à afficher.
 * @param {Function} onChange - Fonction appelée lors du changement de sélection.
 * @param {string} name - Nom de l'élément de formulaire.
 * @param {boolean} titleEmpty - Si vrai, n'affiche pas "Toutes" comme option par défaut.
 * @param {string} label - Étiquette affichée au-dessus de la sélection.
 * @param {string} type - Style du composant (par exemple 'normal', 'large').
 */
const Select = ({
  selection,
  onChange,
  name,
  titleEmpty,
  label,
  type = "normal",
}) => {
  // États pour la valeur sélectionnée et pour savoir si le menu est déroulé ou non
  const [value, setValue] = useState();
  const [collapsed, setCollapsed] = useState(true);

  // Fonction pour changer la valeur et fermer le menu déroulant
  const changeValue = (newValue) => {
    setValue(newValue);
    setCollapsed(true);
    onChange(newValue); // Passer newValue à la fonction onChange
  };

  return (
    <div className={`SelectContainer ${type}`} data-testid="select-testid">
      {label && <div className="label">{label}</div>}
      <div className="Select">
        <ul>
          {/* Titre de la sélection actuelle */}
          <li className={collapsed ? "SelectTitle--show" : "SelectTitle--hide"}>
            {value || (!titleEmpty && "Toutes")}
          </li>
          {/* Liste déroulante des options */}
          {!collapsed && (
            <>
              {!titleEmpty && (
                <li onClick={() => changeValue(null)}>{"Toutes"}</li>
              )}
              {selection.map((s) => (
                <li key={s} onClick={() => changeValue(s)}>{s}</li>
              ))}
            </>
          )}
        </ul>
        {/* Champ caché pour stocker la valeur sélectionnée */}
        <input type="hidden" value={value || ""} name={name} />
        {/* Bouton pour dérouler/fermer la liste */}
        <button
          type="button"
          className={collapsed ? "open" : "close"}
          onClick={(e) => {
            e.preventDefault();
            setCollapsed(!collapsed);
          }}
          data-testid="collapse-button-testid" // Ajouter cet attribut ici

        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};

// Composant pour l'icône de la flèche
const Arrow = () => (
  // SVG pour l'icône de la flèche
  <svg>
    {/* Code SVG pour la flèche */}
  </svg>
);

// Définition des propTypes pour le composant Select
Select.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string).isRequired, // Options de sélection, requises
  onChange: PropTypes.func, // Fonction de changement, optionnelle
  name: PropTypes.string, // Nom du composant, optionnel
  titleEmpty: PropTypes.bool, // Si "Toutes" doit être affiché, optionnel
  label: PropTypes.string, // Étiquette, optionnelle
  type: PropTypes.string, // Type de style, optionnel
};

// Valeurs par défaut pour les props
Select.defaultProps = {
  onChange: () => null, // Fonction par défaut si non fournie
  titleEmpty: false, // Affiche "Toutes" par défaut
  label: "", // Pas d'étiquette par défaut
  type: "normal", // Style normal par défaut
  name: "select", // Nom par défaut
};

export default Select;
