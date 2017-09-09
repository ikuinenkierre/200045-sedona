var link = document.querySelector(".open-form-button");

var form = document.querySelector(".hotels-booking-wrapper");
var arrival = document.querySelector("[name=arrival-date]");
var departure = document.querySelector("[name=departure-date]");
var adults = document.querySelector("[name=adults-number]");
var children = document.querySelector("[name=children-number]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("hotels-booking-wrapper-show");

    if (adultsStorage) {
        adults.value = adultsStorage;
        arrival.focus();
    }

    if (childrenStorage) {
        children.value = childrenStorage;
        arrival.focus();
    }

    else {
        arrival.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!arrival.value || !departure.value || !adults.value || !children.value) {
        evt.preventDefault();
        console.log("Нужно ввести логин и пароль");
    }

    if(adults.value) {
        localStorage.setItem("adults", adults.value);

    }

    if(children.value) {
        localStorage.setItem("children", children.value);
    }
});

var adultsStorage = localStorage.getItem("adults");
var childrenStorage = localStorage.getItem("children");
