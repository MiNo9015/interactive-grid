import React, { useState } from "react";
import "./App.css"; // CSS-Datei für das Styling

function App() {
  // Zustand für die Anzahl der Zeilen und Spalten
  const [rows, setRows] = useState(5); // Standardmäßig 5 Zeilen
  const [columns, setColumns] = useState(5); // Standardmäßig 5 Spalten

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

  // Funktion, um das Grid zu reseten
  const resetGrid = () => {
    setActiveCells([]); // Alle aktiven Zellen leeren
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

  return (
    <div className="App">
      <h1>Interaktives Grid</h1>

      {/* Steuerungselemente */}
      <div className="controls">
        <label>
          Zeilen:
          <input
            type="number"
            value={rows} // Binde an den Zustand
            min="1"
            onChange={(e) => setRows(Number(e.target.value))} // Aktualisiere die Zeilenanzahl
          />
        </label>
        <label>
          Spalten:
          <input
            type="number"
            value={columns} // Binde an den Zustand
            min="1"
            onChange={(e) => setColumns(Number(e.target.value))} // Aktualisiere die Spaltenanzahl
          />
        </label>
        <button onClick={resetGrid}>Reset</button> {/* Button für Reset */}
      </div>

      {/* Grid anzeigen */}
      <div className="grid-container">{renderGrid()}</div>

      {/* Liste der aktiven Zellen */}
      <div className="active-cells">
        <h3>Aktive Zellen:</h3>
        <ul>
          {activeCells.map((cellId) => {
            const [row, col] = cellId.split("-"); // ID in Zeile und Spalte aufteilen
            return (
              <li key={cellId}>
                Zelle ({row}, {col})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
