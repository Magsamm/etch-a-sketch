const container = document.querySelector("#container");

const btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.textContent = "16x16 grid";
document.body.appendChild(btn);

// rowQuery.addEventListener("mouseover", () => {
//     // Change the button's background color
//     rowQuery.style.backgroundColor = "blue";
// });

//add click event for button to create a grid of divs
btn.addEventListener("click", () => {
    //change to 16x16 after testing
    //use nested loop to create rows and columns?
    for (let i = 0; i < 128; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < 128; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    //use math.floor random to generate random color?
    const cell = document.querySelectorAll("div.column");
    for (const element of cell) {
        element.addEventListener("mouseover", (e) => {
            e.target.style.background = "blue";
        });
    }
});
