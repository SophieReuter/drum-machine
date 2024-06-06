import React from "react";

const Test = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "red",
        justifyContent: "start",
        alignItems: "center",
        gap: "30px",
        flexDirection: "column",
        height: "300pt",
      }}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  );
};

export default Test;
/*Flexbox:
-Layout-Tool 
-über display: flex erstellt
-mit flexDirection gibt man die primäre Achse an (also ob die Elemente 
als Zeile oder Spalte angeordnet sein sollen)
-justifyContent ist die Anordnung an der primären Achse: Bei row kann
man darüber horizontale Anordnung festlegen, bei column vertikale (dafür muss man
aber Höhe größer als Standard einstellen)
Styling inline über Objekt!! Deshalb Anführungszeichen, Kommata; Wird 
im Hintergrund automatisch in CSS-Code umgewandelt
*/
