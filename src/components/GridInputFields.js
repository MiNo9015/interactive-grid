import React from "react";
import "../styles/components/GridInputFields.css";

function GridInputFields({ rows, columns, setRows, setColumns }) {

  //verhindert negative Werte und setzt die Zeilenanzahl auf 1
  const handleRowChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1; // Verhindert negative Werte
    }
    setRows(value);
  };
  //verhindert negative Werte und setzt die Spaltenanzahl auf 1
  const handleColumnChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1;
    }
    setColumns(value);
  };

  return (
    /* Steuerungselemente */
    <div className="controls">
    <label>
      Zeilen:
      <input
        type="number"
        value={rows} // Binde an Zeilen
        onChange={handleRowChange} // Aktualisiere die Zeilenanzahl
        min="1"
      />
    </label>
    <label>
      Spalten:
      <input
        type="number"
        value={columns} // Binde an den Spalten
        onChange={handleColumnChange} // Aktualisiere die Spaltenanzahl
        min="1"
      />
    </label>
    </div>
  );    
}

export default GridInputFields;