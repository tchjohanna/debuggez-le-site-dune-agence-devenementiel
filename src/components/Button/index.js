// Importation de PropTypes pour la validation des types de props
import PropTypes from "prop-types";

// Importation du fichier de style Sass
import "./style.scss";

// Constante pour définir les types de boutons
export const BUTTON_TYPES = {
  DEFAULT: 1,
  SUBMIT: 2,
};

/**
 * Button - Un composant personnalisable pour créer des boutons.
 * Peut être de type 'DEFAULT' ou 'SUBMIT'.
 *
 * @param {string} title - Texte affiché en tant qu'info-bulle.
 * @param {function} onClick - Fonction à exécuter lors du clic sur le bouton.
 * @param {number} type - Type du bouton (DEFAULT ou SUBMIT).
 * @param {boolean} disabled - Si true, le bouton est désactivé.
 * @param {node} children - Contenu du bouton.
 */
const Button = ({ title, onClick, type, disabled, children }) => {
  // Switch pour déterminer le type de bouton à afficher
  switch (type) {
    case BUTTON_TYPES.DEFAULT:
      // Bouton standard
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id" // Attribut pour les tests
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      // Bouton de soumission (submit)
      return (
        <input
          disabled={disabled}
          className="Button"
          type="submit"
          data-testid="button-test-id"
          value={children}
          onClick={onClick}
          title={title}
        />
      );
    default:
      // Retour au bouton standard si le type n'est pas reconnu
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
  }
};

// Définition des propTypes pour la validation des types de props
Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

// Définition des valeurs par défaut pour les props
Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: BUTTON_TYPES.DEFAULT,
  title: "",
  children: null
};

export default Button;
