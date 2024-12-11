import React, { useState } from "react";
import "./styles/App.css"; 

function App() {
  // Anzahl der Zeilen und Spalten
  const [rows, setRows] = useState(5); // Standard: 5 Zeilen
  const [columns, setColumns] = useState(5); // Standard: 5 Spalten

  // Zustand für aktiven Zellen
  const [activeCells, setActiveCells] = useState([]);

  // Funktion, um den Status einer Zelle (aktiv/inaktiv) zuschalten
  const toggleCell = (row, col) => {
    const cellId = `${row}-${col}`; // ID im Format "row-column", z. B. "2-3"
    if (activeCells.includes(cellId)) {
      // Wenn die Zelle bereits aktiv ist, deaktiviere sie
      setActiveCells(activeCells.filter((id) => id !== cellId));
    } else {
      // Wenn die Zelle inaktiv ist, aktiviere sie
      setActiveCells([...activeCells, cellId]);
    }
  };

  // Funktion zum Rendern des Grids basierend auf `rows` und `columns`
  const renderGrid = () => {
    const grid = []; // Array für die Zeilen des Grids

    // Schleife für Zeilen
    for (let r = 1; r <= rows; r++) {
      const row = []; // Array für die Spalten einer Zeile

      // Schleife für Spalten
      for (let c = 1; c <= columns; c++) {
        const cellId = `${r}-${c}`; // Eindeutige ID der Zelle
        const isActive = activeCells.includes(cellId); // Prüfe, ob die Zelle aktiv ist

        // Zelle erstellen und zum Zeilen-Array hinzufügen
        row.push(
          <div
            key={cellId} // React benötigt einen eindeutigen Schlüssel
            className={`cell ${isActive ? "active" : ""}`} // Aktive Zellen haben eine spezielle Klasse
            onClick={() => toggleCell(r, c)} // Klick-Event, um die Zelle zu toggeln
          />
        );
      }

      // Zeile dem Grid-Array hinzufügen
      grid.push(
        <div key={`row-${r}`} className="grid-row">
          {row}
        </div>
      );
    }
    return grid; // Das gesamte Grid zurückgeben
  };


 // Sortiere die Liste nach Zeilen (row) und Spalten (column)
 const sortedActiveCells = [...activeCells].sort((a, b) => {
  const [rowA, colA] = a.split("-").map(Number);
  const [rowB, colB] = b.split("-").map(Number);

  // Sortieren nach Zeilen, dann Spalten
  return rowA === rowB ? colA - colB : rowA - rowB;
});

// Gruppiere die sortierten Zellen nach Zeilen
const groupedActiveCells = sortedActiveCells.reduce((acc, cellId) => {
  const [row, col] = cellId.split("-").map(Number);
  if (!acc[row]) acc[row] = [];
  acc[row].push(`(${row}, ${col})`);
  return acc;
}, {});

// Funktion leere alle aktiven Zellen
const resetGrid = () => {
  setActiveCells([]); 
};

// Funktion Grid und aktiven Zellen zurückzusetzen
const resetToDefault = () => {
  setRows(5);
  setColumns(5);
  setActiveCells([]);
};

  return (
    <div className="App">
      <h1 className="title">Interaktives Grid</h1>

      {/* Steuerungselemente */}
      <div className="controls">
        <label>
          Zeilen:
          <input
            type="number"
            value={rows} // Binde an Zeilen
            min="1"
            onChange={(e) => setRows(Number(e.target.value))} // Aktualisiere die Zeilenanzahl
          />
        </label>
        <label>
          Spalten:
          <input
            type="number"
            value={columns} // Binde an den Spalten
            min="1"
            onChange={(e) => setColumns(Number(e.target.value))} // Aktualisiere die Spaltenanzahl
          />
        </label>
        <button onClick={resetGrid}>Reset Aktive Zellen</button> {/* Reset-Button für Zellen */}
        <button onClick={resetToDefault}>Reset Grid (5x5)</button>{/* Reset- Button für Grit und Zellen */}
      </div>

      {/* Grid anzeigen */}
      <div className="grid-container">{renderGrid()}</div>

      {/* Liste der aktiven Zellen */}
      <div className="active-cells">
        <h3 className="active-cells-header">Aktive Zellen:</h3>
        <ul className="active-cells-list">
          {Object.keys(groupedActiveCells).map((row) => {
            const cells = groupedActiveCells[row];

            return (
              <li key={row}>
                <div className="cell-group">
                  <span>{`Zelle `}</span>
                  <span>{cells.join(", ")}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


export default App;
