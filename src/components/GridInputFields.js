import React from "react";
import "../styles/components/GridInputFields.css";

function GridInputFields({ rows, columns, setRows, setColumns }) {

  return (
    /* Steuerungselemente */
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
    </div>
  );    
}

export default GridInputFields;