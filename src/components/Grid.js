import React, { useState } from "react";
import "../styles/components/Grid.css";

function Grid({ rows, columns, activeCells, setActiveCells }) {
    // Speicherung aktuelle Zelle beim Hover
    const [hoveredCell, setHoveredCell] = useState(null); 
    // Hover-Position Cursor, aktuelle Zelle
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 }); 

    // Funktion, um den Status einer Zelle (aktiv/inaktiv) zuschalten
    const toggleCell = (row, col) => {
        const cellId = `${row},${col}`; // ID im Format "row-column", z. B. "1-1, 3-4, 6-19"
        if (activeCells.includes(cellId)) {
            // Wenn die Zelle bereits aktiv ist, deaktiviere sie
            setActiveCells(activeCells.filter((id) => id !== cellId));
        } else {
            // Wenn die Zelle inaktiv ist, aktiviere sie
            setActiveCells([...activeCells, cellId]);
                }
    };


    // Erfassung Mausbewegung und Aktualisierung der Hover-Daten
    const handleMouseMove = (e, cellId) => {
            setHoveredCell(cellId);
            setHoverPosition({ 
                x: e.clientX + window.scrollX,  //Mausposition + Scroll-Offset horizontal
                y: e.clientY + window.scrollY,  //Mausposition + Scroll-Offset vertikal
            }); // Mauskoordinaten setzen
    };


    // Funktion zum Rendern des Grids basierend auf `rows` und `columns`
    const renderGrid = () => {
        const grid = []; // Array für die Zeilen des Grids
        // Schleife für Zeilen
        for (let r = 1; r <= rows; r++) {
            const row = []; // Array für die Spalten einer Zeile
            // Schleife für Spalten
            for (let c = 1; c <= columns; c++) {
                const cellId = `${r},${c}`; // Eindeutige ID der Zelle
                const isActive = activeCells.includes(cellId); // Prüfung Zelle aktiv
                // Zelle erstellen und zum Zeilen-Array hinzufügen
                row.push(
                    <div
                        key={cellId} // React benötigt einen eindeutigen Schlüssel
                        className={`cell ${isActive ? "active" : ""}`} // Aktive Zellen haben eine spezielle Klasse
                        onClick={() => toggleCell(r, c)} // Klick-Event, um die Zelle zu aktivieren/deaktivieren
                        onMouseEnter={(e) => handleMouseMove(e, cellId)} // die Koordinaten bei Hover auf Zelle
                        onMouseMove={(e) => handleMouseMove(e, cellId)}  // Erfassen von Mausbewegung
                        onMouseLeave={() => setHoveredCell(null)} // Ausblenden Koordinaten 

                    />
                );
            }
            // Zeile dem Grid-Array hinzufügen
            grid.push(
                <div key={`row,${r}`} className="grid-row">
                    {row}
                </div>
            );
        }
        return grid; // Das gesamte Grid zurückgeben
    };

    return (
        /* Grid anzeigen */
      <div className="grid-container">{renderGrid()} 
      
       {/*Hover-Koordinaten*/}
      {hoveredCell && (
        <div
          className="hover-label"
          style={{
            top: hoverPosition.y +10, // Leicht unterhalb des Cursors
            left: hoverPosition.x +10, // Leicht rechts des Cursors
          }}
        > {/* Abschluss div-start*/}
          {hoveredCell}
        </div>
      )}
      </div>
    );
}

export default Grid;