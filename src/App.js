/* istanbul ignore file */
// Directive pour ignorer ce fichier lors de la couverture de code par Istanbul

// Importation du fichier de style global pour l'application
import "./App.scss";
// Importation du composant principal de la page d'accueil
import Page from "./pages/Home";
// Importation du fournisseur de contexte pour les données
import { DataProvider } from "./contexts/DataContext";

/**
 * App - Composant racine de l'application.
 */
function App() {
  return (
    // Utilisation de DataProvider pour englober la page principale
    // Cela permet de fournir un contexte de données à travers toute l'application
    <DataProvider>
      <Page /> {/* Affichage de la page d'accueil */}
    </DataProvider>
  );
}

export default App;
