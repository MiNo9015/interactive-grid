import React from "react";
import "../styles/components/ActiveCellsList.css";


function ActiveCellsList({activeCells}) {
  // Sortiere die Liste nach Zeilen (row) und Spalten (column)
  const sortedActiveCells = [...activeCells].sort((a, b) => {
    const [rowA, colA] = a.split(",").map(Number);
    const [rowB, colB] = b.split(",").map(Number);
    // Sortieren nach Zeilen, dann Spalten
    return rowA === rowB ? colA - colB : rowA - rowB;
  });
  
  
  // Gruppiere die sortierten Zellen nach Zeilen
  const groupedActiveCells = sortedActiveCells.reduce((acc, cellId) => {
    const [row, col] = cellId.split(",").map(Number);
    if (!acc[row]) acc[row] = [];
    acc[row].push(`(${row},${col})`);
    return acc;
  }, {});


  return(
   /* Liste der aktiven Zellen */
   <div className="active-cells">
   <h3 className="active-cells-header">Aktive Zellen:</h3>
   <ul className="active-cells-list">
     {Object.keys(groupedActiveCells).map((row) => {
       const cells = groupedActiveCells[row];

       return (
         <li key={row}>
           <div className="cell-group">
             <span><strong>{`Zelle `}</strong></span>
             <span>{cells.join(" | ")}</span>
           </div>
         </li>
       );
     })}
   </ul>
 </div>
   );
  }

  export default ActiveCellsList;