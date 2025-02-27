import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import ActiveCellsList from "./components/ActiveCellsList";
import "./styles/App.css"; 
import GridInputFields from "./components/GridInputFields";
import ResetButtons from "./components/ResetButtons";

function App() {
  
  // Anzahl der Zeilen und Spalten beibehalten der gesetzten Werte
  const [rows, setRows] = useState(() => {
    return Number(localStorage.getItem("rows")) || 5;
  }); // Standard: 5 Zeilen

  const [columns, setColumns] = useState(() => {
    return Number(localStorage.getItem("columns")) || 5;
  }); // Standard: 5 Spalten

  // Zustand für aktiven Zellen
  const [activeCells, setActiveCells] = useState(() => {
    return JSON.parse(localStorage.getItem("activeCells")) || [];
  });
  
  // Speichere Änderungen Zeilen, Spalten
  useEffect(() => {
    localStorage.setItem("rows", rows);
    localStorage.setItem("columns", columns);
    localStorage.setItem("activeCells", JSON.stringify(activeCells));
  }, [rows, columns, activeCells]);

  // Behalte nur existierende aktive Zellen
  useEffect(() => {
    setActiveCells((prevActiveCells) =>
      prevActiveCells.filter((cell) => {
        const [row, col] = cell.split(",").map(Number);
        return row <= rows && col <= columns;
      })
    );
  }, [rows, columns]);

  return (
    <div className="App">
      <h1 className="title">Interaktives Grid</h1>
        
        {/* GridInputFields-Komponente */}
        <GridInputFields
          rows={rows}
          columns={columns}
          setRows={setRows}
          setColumns={setColumns}
        />
     
        <ResetButtons
          setActiveCells={setActiveCells}
          setRows={setRows}
          setColumns={setColumns}
        />

        {/* Grid-Komponente: rendern des Grit und Hover-Label für Koordinaten Anzeige */}
        <Grid
          rows={rows}
          columns={columns}
          activeCells={activeCells}
          setActiveCells={setActiveCells}
        />
      
        {/* ActiveCellsList-Komponente: Liste der aktiven Zellen */}
        <ActiveCellsList activeCells={activeCells} />
    </div>
  );
}

export default App;