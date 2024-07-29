const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.textContent = "Enter number of cells you want for the grid";
document.body.appendChild(btn);

//store input from user to use in the click event to generate a grid of x squares
let gridValue = 0;

function getHumanChoice() {
    userInput = parseInt(prompt("Enter a number between 1 and 100"));
    //run loop until user inputs a valid choice.
    while (userInput < 1 || userInput > 100)
        userInput = parseInt(
            prompt("Please enter a number thats more than 1 and lower than 100")
        );
    gridValue += userInput;
    return userInput;
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//add click event for button to create a grid of divs
//change this button to send a prompt
//make sure it uses the same number of pixels regardless of grid size specified
btn.addEventListener("click", () => {
    const removeChildsContainer = document.querySelector(".container");
    removeAllChildNodes(removeChildsContainer);

    //remember to wipe existing grid when user inputs grid
    container.textContent = "";

    getHumanChoice();

    for (let i = 0; i < gridValue; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridValue; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
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

//try using a foreach and loop over
