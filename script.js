const container = document.querySelector("#container");

const btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.textContent = "16x16 grid";
document.body.appendChild(btn);

//add click event for button to create a grid of divs
btn.addEventListener("click", () => {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
    }
    //use math.floor random to generate random color?
    const cellColor = document.querySelectorAll("div.cell");
    for (const element of cellColor) {
        element.addEventListener("mouseover", (e) => {
            e.target.style.background = "blue";
        });
    }
});
