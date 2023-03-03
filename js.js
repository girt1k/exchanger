const select = document.querySelectorAll(".currency")
const btn = document.getElementById("btn")
const num = document.getElementById("num")
const ans = document.getElementById("ans")

fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</otion>`
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</otion>`
    }
}

btn.addEventListener("click", () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = num.value;
    //    console.log(value)
    if (value == "") {
        alert("Введите значение!");
    } else {
        if (currency1 == currency2) {
            alert("Выберете разные валюты!");
        } else {
            convert(currency1, currency2, value);
        }
    }
});

function convert(currency1, currency2, value){
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?amount=${value}&to=${currency2}`)
        .then((val) => val.json())
        .then((val) => {
            ans.value = Object.values(val.rates)[0];
        });
}
