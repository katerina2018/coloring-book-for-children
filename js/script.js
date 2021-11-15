import namesSprite from "./namesSprite.js";

const continerSvgEL = document.querySelector(".continer-svg");

continerSvgEL.insertAdjacentHTML("afterbegin", createElSvg(namesSprite));

function createElSvg(namesSprite) {
    return namesSprite
        .map((value) => {
            return `<svg>
      <use
        href="./img/symbol-defs.svg#${value}"
      ></use>
    </svg>`;
        })
        .join("");
}

const colors = [
    "#ec9ad2",
    "#d00606",
    "#f1720e",
    "#fafa28",
    "#4bb843",
    "#46caf8",
    "#342ee5",
    "#b824e3",
    "#050507",
    "#ffffff",
];

const continerColorsEL = document.querySelector(".palette");
continerColorsEL.insertAdjacentHTML("afterbegin", createElColor(colors));

function createElColor(colors) {
    return colors
        .map((value) => {
            return ` <div class="color" data-color="${value}" style="background-color:${value}"></div>`;
        })
        .join("");
}

const allSvgEL = document.querySelectorAll(".continer-svg svg");

let colorCurrent = "#fff";
continerSvgEL.addEventListener("click", findSvgEl);
continerColorsEL.addEventListener("click", findColorEl);

function findSvgEl(e) {
    let imgCurrent = e.target;

    if (e.target.tagName === "use") {
        imgCurrent = e.target.closest("svg");
    }
    colorCurrent = "#fff";
    for (const element of allSvgEL) {
        if (!element.classList.contains("imgCurrent") && element === imgCurrent) {
            element.classList.add("imgCurrent");
            e.target.addEventListener("click", partSvgEL);
        } else if (element === imgCurrent) {
            element.classList.add("imgCurrent");
        } else element.classList.remove("imgCurrent");
    }
}

function partSvgEL(e) {
    let imgCurrent = e.target;
    if (e.target.tagName === "use") {
        imgCurrent = e.target.closest("svg");
    }
    imgCurrent.style.fill = colorCurrent;

    console.log(imgCurrent);
}

function findColorEl(e) {
    colorCurrent = e.target.getAttribute("data-color");
    console.log(colorCurrent);
}