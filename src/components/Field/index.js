// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";
// Importation du fichier de style Sass
import "./style.scss";

// Types de champs pour le composant Field
export const FIELD_TYPES = {
  INPUT_TEXT: "text", // Champ de texte standard
  TEXTAREA: "text-area", // Zone de texte pour les entrées multilignes
  InputEmail: "email", // Champ pour les adresses e-mail
};

/**
 * Field - Composant pour afficher différents types de champs de formulaire.
 *
 * @param {string} type - Type de champ (text, textarea, email).
 * @param {string} label - Étiquette du champ.
 * @param {string} name - Nom du champ, utilisé pour la référence du formulaire.
 * @param {string} placeholder - Texte indicatif dans le champ.
 */
const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder }) => {
  let component;
  
  // Sélection du type de composant en fonction du type de champ
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      // Création d'un champ de texte
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid" // Attribut pour les tests
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      // Création d'une zone de texte (textarea)
      component = <textarea name={name} data-testid="field-testid" />;
      break;
    case FIELD_TYPES.InputEmail:
      // Création d'un champ pour les adresses e-mail
      component = (
        <input
          type="email"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
      break;
    default:
      // Retour par défaut à un champ de texte si le type n'est pas reconnu
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
  }

  return (
    <div className="inputField">
      {/* Affichage de l'étiquette du champ */}
      <span>{label}</span>
      {/* Affichage du composant de champ */}
      {component}
    </div>
  );
};

// Définition des types pour les props
Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "field-name",
};

export default Field;
