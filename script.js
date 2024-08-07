const btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.textContent = "Grid size";
document.body.appendChild(btn);
const container = document.querySelector(".container");

//store input from user to use in the click event to generate a grid of x squares
let gridValue = 0;

function getHumanChoice() {
    userInput = parseInt(prompt("Enter a number between 1 and 100"));
    //run loop until user inputs a valid choice.
    while (userInput < 1 || userInput > 100)
        userInput = parseInt(prompt("Please enter a number thats more than 0 and less than 100"));
    gridValue += userInput;
    return userInput;
}

//add click event for button to create a grid of divs
//change this button to send a prompt
//make sure it uses the same number of pixels regardless of grid size specified
btn.addEventListener("click", () => {
    //reset value of grid
    //remove childnodes from container
    gridValue = 0;
    container.replaceChildren();
    getHumanChoice();

    for (let i = 0; i < gridValue; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridValue; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${500 / gridValue}px`;
            cell.style.height = `${500 / gridValue}px`;
            row.appendChild(cell);
            container.appendChild(row);
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
