var defaultBase = 0,
    newBase = 0,
    defaultNumber = 0,
    isGood;
const signs = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

var button = document.getElementById("refresh");

isCorrect = (num, base) => {
    const correctSigns = signs.slice(0, base);
    isGood = true;
    num.split("").forEach((el) => {
        if (!correctSigns.includes(el.toUpperCase())) isGood = false;
    });
    return isGood;
};

function convertFromBaseToBase(str, fromBase, toBase) {
    var num = parseInt(str, fromBase);
    if (!isCorrect(str, fromBase)) {
        document.getElementById("result").textContent =
            "Nie można obliczyc ponieważ podano zły typ danych!";
        return alert("Zły typ danych...");
    }
    document.getElementById("result").textContent =
        "Wynik operacji: " + num.toString(toBase);
}

refreshPage = () => {
    location.reload();
};

do {
    defaultBase = prompt(
        "W jakim systemie liczbowym będzie liczba? (Systemy od 2 do 36)"
    );
} while (isNaN(defaultBase) || defaultBase < 2 || defaultBase > 36);

do {
    newBase = prompt(
        "Na jaki system liczbowy przeliczyć liczbę? (Systemy od 2 do 36)"
    );
} while (isNaN(newBase) || newBase < 2 || newBase > 36);

defaultNumber = prompt("Podaj liczbe: ");
isCorrect(defaultNumber, defaultBase);

document.getElementById("number").innerText =
    "Podana liczba to: " + defaultNumber;
document.getElementById("default").innerText =
    "Liczba jest w systemie: " + defaultBase;
document.getElementById("new").innerText =
    "Liczba zostanie prze konwertowana na system: " + newBase;

convertFromBaseToBase(defaultNumber, defaultBase, newBase);
button.addEventListener("click", refreshPage);
