var arrWords = ["JavaScript", "Cascading", "HTML"];
var table = document.getElementById("tblPuzzle");

function buildTable(table) {
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var col = document.createElement("td");
            col.classList.add("empty");
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}

function buildClues(wordIndex, direction, startingRow, startingCol, table) {
    for (var i = 0; i < arrWords[wordIndex].length; i++) {
        var rowIndex = 0;
        var colIndex = 0;

        if (direction == "across") {
            rowIndex = startingRow;
            colIndex = startingCol + i;
        } else if (direction == "down") {
            rowIndex = startingRow + i;
            colIndex = startingCol;
        } else {
            console.log("Invalid direction");
            return;
        }

        var tr = table.rows[rowIndex];
        var td = tr.cells[colIndex];
        td.textContent = arrWords[wordIndex][i];
        td.classList.remove("empty");
        td.classList.add("letter");
    }
}

buildTable(table);
buildClues(0, "across", 1, 0, table);
buildClues(1, "down", 0, 1, table);
buildClues(2, "down", 0, 9, table);
