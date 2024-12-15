# **Interaktives Grid**

Ein **React-basiertes interaktives Grid**, das es ermöglicht, Zellen zu aktivieren/deaktivieren, die Koordinaten der Zellen anzuzeigen und die Zellenliste nach Zeilen gruppiert darzustellen.

---

## **Inhalt**
1. [Funktionen](#funktionen)
2. [Technologien](#technologien)
3. [Installation](#installation)
4. [Nutzung](#nutzung)
5. [Screenshots](#screenshots)
6. [Anpassungen](#anpassungen)
7. [Lizenz](#lizenz)

---

## **Funktionen**
- **Grid-Steuerung**: Benutzer kann die Anzahl der Zeilen und Spalten dynamisch anpassen.
- **Zellenaktivierung**: Durch Klicken werden Zellen aktiviert oder deaktiviert.
- **Koordinatenanzeige**: Beim Überfahren (Hover) einer Zelle werden deren Koordinaten angezeigt.
- **Gruppierte Anzeige aktiver Zellen**: Aktivierte Zellen werden nach Zeilen gruppiert und übersichtlich dargestellt.
- **Reset-Optionen**: 
   - Zurücksetzen der aktiven Zellen.
   - Zurücksetzen des Grids auf den Standardzustand (5x5).

---

## **Technologien**
- **Frontend**: React.js
- **CSS**: Styling für das Grid und die Benutzeroberfläche.

---

## **Installation**

1. **Voraussetzungen**:  
   Stelle sicher, dass **Node.js** und **npm** installiert sind.

2. **Repository klonen**:
   ```bash
   git clone <https://github.com/MiNo9015/interactive-grid.git>
   cd interaktives-grid
   ```

3. **Abhängigkeiten installieren**:
   ```bash
   npm install
   ```

4. **Projekt starten**:
   ```bash
   npm start
   ```

5. Öffne die Anwendung unter:  
   ```
   http://localhost:3000
   ```

---

## **Nutzung**

### **Steuerungselemente**
- **Zeilen/Spalten**: Gib die gewünschte Anzahl an Zeilen und Spalten ein.
- **Klicken auf eine Zelle**: Aktiviert oder deaktiviert die jeweilige Zelle.
- **Hover**: Zeigt die Koordinaten der Zelle an.
- **Reset-Buttons**:
   - *Reset Aktive Zellen*: Deaktiviert alle Zellen.
   - *Reset Grid*: Setzt das Grid auf 5x5 zurück.

### **Anzeige der aktiven Zellen**
Aktive Zellen werden in einer Liste gruppiert nach Zeilen angezeigt, z. B.:  
`Zelle (1,2), (1,4)`.

---


## **Anpassungen**

### **Zellengröße ändern**
Die Zellengröße kann in der `App.css` angepasst werden:
```css
.cell {
  width: 40px; /* Breite */
  height: 40px; /* Höhe */
}
```

### **Standardgröße des Grids**
Passe die Standardwerte in `App.js` an:
```javascript
const [rows, setRows] = useState(5); // Standardzeilen
const [columns, setColumns] = useState(5); // Standardspalten
```

---

## **Lizenz**
Dieses Projekt steht unter der **MIT-Lizenz**.  
Weitere Informationen findest du in der [LICENSE](LICENSE)-Datei.

---

## **Autor**
Erstellt von **[Michael]**.  