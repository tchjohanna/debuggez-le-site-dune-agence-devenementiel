import React from 'react';
import punycode from 'punycode';

function App() {
  const encoded = punycode.encode('localhost');
  const decoded = punycode.decode(encoded);

  return (
    <div>
      <h1>Ponycode</h1>
      <p>
        L'adresse IP <code>localhost</code> est encodée en Punycode en <code>{encoded}</code>.
      </p>
      <p>
        Le nom de domaine <code>{encoded}</code> est décodé en <code>{decoded}</code>.
      </p>
    </div>
  );
}

export default App;
