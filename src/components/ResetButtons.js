import React from "react";
import "../styles/components/ResetButtons.css";

function ResetButtons({setActiveCells, setRows, setColumns}) {

    //Funktion Leere alle aktiven Zellen
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
        <div className="reset-buttons">
        <button onClick={resetGrid} title="Löschung der aktiven Zellen aus dem Grid">Reset Aktive Zellen</button> {/* Reset-Button für Zellen */}
        <button onClick={resetToDefault} title="Setzt das Grid auf Standardgröße 5x5 zurück und löscht alle aktiven Zellen">Reset Grid (5x5)</button>{/* Reset- Button für Grit und Zellen */}
      </div>
    );
}

export default ResetButtons;