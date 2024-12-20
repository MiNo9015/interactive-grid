# **Interaktives Grid**

Ein **React-basiertes interaktives Grid**, das es ermöglicht, Zellen zu aktivieren/deaktivieren, die Koordinaten der Zellen anzuzeigen und die Zellenliste nach Zeilen gruppiert darzustellen.

---

## **Inhalt**
1. [Funktionen](#funktionen)
2. [Technologien](#technologien)
3. [Installation](#installation)
4. [Verwendung](#verwendung)
5. [Komponenten](#komponenten)
6. [Dateistruktur](#dateistruktur)
7. [Stile](#stile)
8. [Autor](#autor)
---

## **Funktionen**
- Dynamische Anpassung der Grid-Größe (Zeilen und Spalten).
- Aktivierung/Deaktivierung von Zellen per Klick.
- Anzeige der aktiven Zellen als Liste, sortiert und gruppiert nach Zeilen.
- Reset-Buttons zum Leeren der aktiven Zellen oder Zurücksetzen auf ein Standard-Grid (5x5).

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

5. Öffne die Anwendung im Browser unter: [http://localshost:3000](http://localhost:3000).
 
---

## **Verwendung**
1. **Grid-Größe anpassen:**
   - Eingabe der gewünschten Anzahl an Zeilen und Spalten.
   - Grid passt sich automatisch an.
2. **Zellen aktivieren/deaktivieren:**
   - Klicke auf eine Zelle, um sie zu aktivieren(grün)/deaktivieren(grau).
3. **Aktive Zellen anzeigen:**
   - Aktive Zellen werden in der Liste unterhalb des Grids angezeigt.
4. **Reset-Buttons:**
   - "Reset Aktive Zellen": Leert die Liste der aktiven Zellen.
   - "Reset Grid (5x5)": Setzt die Grid-Größe auf 5x5 zurück und leert die aktiven Zellen.

---

## **Komponenten**
### **App.js**
- Hauptkomponente, die alle anderen Komponenten zusammenführt.
- Zuständig für die Verwaltung des globalen Zustands.

### **Grid.js**
- Stellt das Grid dar.
- Ermöglicht die Aktivierung/Deaktivierung von Zellen.
- Stellt kleinen Label (rechts vom Cursor) mit Koordianaten der Zelle über die man aktuell hovered dar.

### **ActiveCellsList.js**
- Zeigt die Liste der aktiven Zellen an.
- Sortiert und gruppiert die Zellen nach Zeilen.

### **GridInputFields.js**
- Ermöglicht die Eingabe der Anzahl von Zeilen und Spalten.

### **ResetButtons.js**
- Buttons zum Zurücksetzen des Grids und|oder der aktiven Zellen.

---

## **Dateistruktur**
```plaintext
interactive-grid
├── public
|   ├── index.html
├── src
│   ├── components
│   │   ├── ActiveCellsList.js
│   │   ├── Grid.js
│   │   ├── GridInputFields.js
│   │   ├── ResetButtons.js
│   ├── styles
│   │   ├── App.css
│   │   ├── ActiveCellsList.css
│   │   ├── Grid.css
│   │   ├── GridInputFields.css
│   │   ├── ResetButtons.css
│   ├── App.js
│   ├── index.js
│   
```

---

## **Stile**
Die Anwendung verwendet CSS-Dateien für jede Komponente, um den Code sauber und modular zu halten. Die wichtigsten Anpassungen umfassen:

- **App.css:** Zentrierung und globale Layout-Stile.
- **Grid.css:** Darstellung des Grids und der Zellen.
- **ActiveCellsList.css:** Darstellung der Liste der aktiven Zellen.
- **GridInputFields.css:** Styling der Eingabefelder für Zeilen und Spalten.
- **ResetButtons.css:** Styling der Buttons.

---

## **Autor**
Erstellt von **[Michael]**.