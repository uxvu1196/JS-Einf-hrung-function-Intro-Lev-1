
// Deklariere die Funktion intro2() mit dem Parameter (paramName) und einem Funktionskörper {}:
// Deklariere die Variable varName mit dem Wert “SuperCoder”.
// Gebe dazu “Hi, “ + varName + “. Mein Name ist ” + paramName + “ .” in der Konsole aus.
// Denke daran die Geschweifte Klammer zu schließen.
// Rufe die Funktion mit einem Argument auf. Gib als Argument deinen eigenen Namen ein.

// Wichtig! Vergiss nicht, die Hinweise auf der nächsten Folie zu lesen.

// ---------------------------------------------------------------------------

// Parameter = Du willst eine Funktion aufrufen, aber man muss einen Wert erst an diese Funktion übergeben, der Parameter ist der Übergabewert
// Nehmen wir an ich möchte eine Funktion addieren die zweite Werte hat . Der Funktion eine Addition zuschreiben
function addition(a, b){
console.log(a + b);
}
addition(2, 3);
addition(40, 80);
// KLEIN SCHREIBEN camelCase
// addition ist der Funktionsname, damit ich es aufrufen kann und a, b sind meine Parameter (WERT)

// ---------------------------------------------------------------------------------

function intro2(paramName){
    let varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paramName + ".");
}

intro2("Uyen");
intro2("Klaus");
// Aufrufen ist Funktion starten  
// Argument ist der Wert in Klammern 

