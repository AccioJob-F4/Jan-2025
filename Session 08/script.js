const grid = document.querySelector(".grid");
const boldBtn = document.querySelector("#bold-btn");
const italicBtn = document.getElementById("italic-btn");
const underlineBtn = document.getElementById("underline-btn");

let activeCell = null;

const ROW_COUNT = 10;
const COL_COUNT = 4;

for (let rowIndex = 1; rowIndex <= ROW_COUNT; rowIndex++) {
  const row = document.createElement("div");
  row.className = "row";

  const rowHeader = document.createElement("div");
  rowHeader.className = "cell header";
  rowHeader.textContent = rowIndex;
  row.appendChild(rowHeader);

  for (let colIndex = 0; colIndex < COL_COUNT; colIndex++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.contentEditable = true;
    cell.style.color = "wheat";
    cell.style.fontSize = "12px";
    cell.dataset.row = rowIndex;
    cell.dataset.col = String.fromCharCode(65 + colIndex);
    row.appendChild(cell);
  }

  grid.appendChild(row);
}

grid.addEventListener("focusin", (event) => {
  if (event.target.classList.contains("cell")) {
    activeCell = event.target;
  }
});

boldBtn.addEventListener("click", () => {
  if (activeCell) {
    const isBold = activeCell.style.fontWeight === "bold";
    activeCell.style.fontWeight = isBold ? "normal" : "bold";
  }
});

italicBtn.addEventListener("click", () => {
  if (activeCell) {
    const isItalic = activeCell.style.fontStyle === "italic";
    activeCell.style.fontStyle = isItalic ? "normal" : "italic";
  }
});

underlineBtn.addEventListener("click", () => {
  if (activeCell) {
    const isUnderline = activeCell.style.textDecoration === " underline";
    activeCell.style.textDecoration = isUnderline ? "normal" : "underline";
  }
});

// A B C D ... Z AB AC AD AF AZ AAA AAB AAC ...
