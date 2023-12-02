// Importations des hooks et composants nécessaires
import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

// Fonction simulant un appel API pour l'envoi de contact
const mockContactApi = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

/**
 * Form - Un composant pour gérer la soumission d'un formulaire de contact.
 * @param {Function} onSuccess - Callback appelé en cas de succès.
 * @param {Function} onError - Callback appelé en cas d'erreur.
 */
const Form = ({ onSuccess, onError }) => {
  // État pour gérer si le formulaire est en train d'être envoyé
  const [sending, setSending] = useState(false);

  // Gestion de la soumission du formulaire
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault(); // Empêcher le comportement par défaut du formulaire
      const formData = new FormData(evt.target);
      console.log(Object.fromEntries(formData)); // Afficher les données du formulaire dans la console

      setSending(true); // Activer l'état d'envoi

      // Essayer d'envoyer le formulaire via l'API mockée
      try {
        await mockContactApi();
        setSending(false); // Désactiver l'état d'envoi après succès
        onSuccess(); // Appel du callback onSuccess
      } catch (err) {
        setSending(false); // Désactiver l'état d'envoi en cas d'erreur
        onError(err); // Appel du callback onError avec l'erreur
      }
    },
    [onSuccess, onError] // Dépendances du hook useCallback
  );

  // Rendu du composant de formulaire
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          {/* Champs de formulaire pour le nom, prénom, type (personnel/entreprise), email */}
          <Field placeholder="" label="Nom" name="Nom" />
          <Field placeholder="" label="Prénom" name="Prénom" />
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />
          <Field
            placeholder=""
            label="Email"
            name="Email"
            type={FIELD_TYPES.InputEmail}
          />
          {/* Bouton d'envoi du formulaire */}
          <Button
            type={BUTTON_TYPES.SUBMIT}
            disabled={sending} // Désactivation du bouton pendant l'envoi
            onClick={onSuccess}
          >
            {sending ? "En cours" : "Envoyer"} {/* Texte du bouton selon l'état d'envoi */}
          </Button>
        </div>
        <div className="col">
          {/* Champ de formulaire pour le message */}
          <Field
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
            name="msg"
          />
        </div>
      </div>
    </form>
  );
};

// Définition des propTypes pour la validation des types de props
Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

// Définition des defaultProps en cas de non-fourniture des props
Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
};

export default Form;
