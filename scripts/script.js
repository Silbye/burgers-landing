document.getElementById("main-action-button").onclick = function() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({ behavior: "smooth" });
    }
}

let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
    }
}

let burger = document.getElementById("burger");
let username = document.getElementById("name");
let phone = document.getElementById("phone");
let language = document.getElementById("lang");
document.getElementById("order-action").onclick = function() {
    let hasError = false;

    [burger, username, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [burger, username, phone].forEach(item => {
            item.value = "";
        });
        if (language.textContent.includes('RU')) {
            alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
        } else if (language.textContent.includes('EN')) {
            alert("Thank you for your order! We will contact you soon!");
        }
    }
}

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function(e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if (currentCurrency === '$') {
        newCurrency = '₽';
        coefficient = 80;
    } else if (currentCurrency === '₽') {
        newCurrency = 'BYN';
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}