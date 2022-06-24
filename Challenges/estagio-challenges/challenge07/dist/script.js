"use strict";
let plates = [
    {
        Name: "Salmon",
        Day: "Monday",
        Type: "Fish",
        Price: 8,
        img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    },
    {
        Name: "Lasagna",
        Day: "Monday",
        Type: "Meat",
        Price: 7,
        img: "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg",
    },
    {
        Name: "Sardines",
        Day: "Tuesday",
        Type: "Fish",
        Price: 6,
        img: "https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg",
    },
    {
        Name: "Chicken",
        Day: "Tuesday",
        Type: "Meat",
        Price: 5,
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
    },
    {
        Name: "Fish And Chips",
        Day: "Wednesday",
        Type: "Fish",
        Price: 5,
        img: "https://cdn.pixabay.com/photo/2019/11/05/00/07/fish-and-chips-4602434_960_720.jpg",
    },
    {
        Name: "Hamburguer",
        Day: "Wednesday",
        Type: "Meat",
        Price: 4,
        img: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg",
    },
    {
        Name: "Sushi",
        Day: "Thursday",
        Type: "Fish",
        Price: 10,
        img: "https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg",
    },
    {
        Name: "Spaghetti bolognese",
        Day: "Thursday",
        Type: "Meat",
        Price: 7,
        img: "https://image.freepik.com/free-photo/plate-basil-cherry-gourmet-menu_1220-1184.jpg",
    },
    {
        Name: "Chicken",
        Day: "Friday",
        Type: "Meat",
        Price: 6,
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
    },
    {
        Name: "Fish Soup",
        Day: "Friday",
        Type: "Fish",
        Price: 7,
        img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg",
    },
];
const containerPlates = document.querySelector(".plates");
const btnOpenLogin = document.querySelector(".btn--show-modal--login");
const btnOpenRegister = document.querySelector(".btn--show-modal--register");
const modalLogin = document.querySelector(".modal--login");
const modalRegister = document.querySelector(".modal--register");
const btnCloseModal = document.querySelectorAll(".btn--close-modal");
const btnRegister = document.querySelector(".btn--register");
const btnLogin = document.querySelector(".btn--login");
const btnLogout = document.querySelector(".btn--logout");
const scheduleDaysOfWeek = document.getElementsByName("checkbox-schedule");
const overlay = document.querySelector(".overlay");
const resetModal = () => {
    overlay.classList.add("hidden");
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => (input.value = ""));
};
const registerAccount = () => {
    const email = document.querySelector(".register__email");
    const firstName = document.querySelector(".register__firstName");
    const lastName = document.querySelector(".register__lastName");
    const password = document.querySelector(".register__password");
    const addAccount = {
        firstName: firstName.value,
        lastName: lastName.value,
        password: password.value,
        email: email.value,
        orders: [],
    };
    const allAccounts = getLocalAccounts();
    if (allAccounts.find((acc) => acc.email === addAccount.email)) {
        alert("This account already exists");
    }
    else {
        allAccounts.push(addAccount);
        localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
    }
    modalRegister.classList.add("hidden");
    resetModal();
};
const loginAccount = () => {
    const email = document.querySelector(".login__email");
    const password = document.querySelector(".login__password");
    const allAccounts = getLocalAccounts();
    let accountLogin = allAccounts.find((acc) => acc.email === email.value);
    if (accountLogin && accountLogin.password === password.value) {
        localStorage.setItem("accountLogged", JSON.stringify(accountLogin));
        displayLoggedInfo(accountLogin);
    }
    else {
        alert("This account doesn't exist");
    }
    modalLogin.classList.add("hidden");
    resetModal();
};
const logoutAccount = () => {
    toogleHidden(true);
    localStorage.setItem("accountLogged", "");
};
const displayPlates = () => {
    for (const plate of plates) {
        const insertHTML = `<div class="plates__row">
                        <div class="plates__name">${plate.Name}</div>
                        <div class="plates__info">
                          This plate is a <strong>${plate.Type}</strong> plate and it's
                          served on <strong>${plate.Day}</strong>
                        </div>
                        <div class="plates__value">${plate.Price}€</div>
                      </div>`;
        containerPlates.insertAdjacentHTML("beforeend", insertHTML);
    }
};
const displayLoggedInfo = (accountLogged) => {
    displaySchedule();
    toogleHidden(false, accountLogged);
    accountLogged.orders.forEach((order) => {
        const checkBox = document.querySelector(`.${order.dayName}`);
        const radioBox = document.getElementById(`radio-${order.type}-${order.dayName}`);
        radioBox.checked = true;
        checkBox.checked = true;
    });
    updatePrice(accountLogged);
};
const displaySchedule = () => {
    const openDays = [...new Set(plates.map((plate) => plate.Day))];
    const containerSchedule = document.querySelector(".schedule");
    if (containerSchedule.textContent === "") {
        for (const day of openDays) {
            const insertHTML = `<div class="plates__row">
                          <div class="plates__name">${day}</div>
                          <div class="plates__info">
                            Meat &emsp; <input type="radio" id='radio-Meat-${day}' name="select-${day}"  value='meat' checked onclick='updateOrder("${day}")'/>
                            <br>
                            Fish &emsp;&ensp;<input type="radio"  id='radio-Fish-${day}' name="select-${day}" value='fish'" onclick='updateOrder("${day}")'/>
                          </div>
                          <div class="plates__value">
                            Check day -
                            <input type="checkbox" name="checkbox-schedule" class='${day}' value='${day}' onclick='updateOrder("${day}")'/>
                          </div>
                        </div>`;
            containerSchedule.insertAdjacentHTML("beforeend", insertHTML);
        }
    }
    else {
        const allCheckbox = document.querySelectorAll('input[type="checkBox"]');
        const allRadio = document.querySelectorAll('input[type="radio"]');
        allCheckbox.forEach((checkBox) => (checkBox.checked = false));
        allRadio.forEach((radio) => {
            console.log(radio.value);
            if (radio.value !== "meat")
                radio.checked = false;
            else
                radio.checked = true;
            console.log(radio.checked);
        });
    }
};
const updateOrder = (orderDay) => {
    var _a;
    const checkBox = document.querySelector(`.${orderDay}`);
    let accountLogged = JSON.parse(localStorage.getItem("accountLogged"));
    const radioMeat = document.getElementById(`radio-Meat-${orderDay}`);
    const type = radioMeat.checked ? "Meat" : "Fish";
    let orderPrice = (_a = plates.find((plate) => plate.Day === orderDay && plate.Type === type)) === null || _a === void 0 ? void 0 : _a.Price;
    if (checkBox.checked) {
        const orderToUpdate = accountLogged.orders.find((order) => order.dayName === orderDay);
        if (!orderToUpdate) {
            accountLogged.orders.push({
                dayName: orderDay,
                type: type,
                price: orderPrice,
            });
        }
        else {
            orderToUpdate.type = type;
            orderToUpdate.price = orderPrice;
        }
    }
    else {
        accountLogged.orders = accountLogged.orders.filter((order) => order.dayName !== orderDay);
    }
    const allAccounts = getLocalAccounts();
    allAccounts.find((account) => account.email === accountLogged.email).orders = accountLogged.orders;
    updatePrice(accountLogged);
    localStorage.setItem("accountLogged", JSON.stringify(accountLogged));
    localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
};
const updatePrice = (accountLogged) => {
    const priceEl = document.querySelector(".price__value");
    priceEl.textContent = accountLogged.orders
        .reduce((acc, cur) => (acc += cur.price), 0)
        .toString();
};
const getLocalAccounts = () => {
    if (localStorage.getItem("allAccounts"))
        return JSON.parse(localStorage.getItem("allAccounts"));
    return [];
};
const toogleHidden = (toogle, accountLogged) => {
    const welcomeMessage = document.querySelector(".nav__welcome");
    const section3 = document.getElementById("section--3");
    const navSection3 = document.getElementById("nav--section3");
    console.log(document.body);
    if (toogle) {
        welcomeMessage.textContent = `Welcome to our restaurant     |`;
        section3.classList.add("hidden");
        navSection3.classList.add("hidden");
        btnOpenLogin.classList.remove("hidden");
        btnLogout === null || btnLogout === void 0 ? void 0 : btnLogout.classList.add("hidden");
    }
    else {
        welcomeMessage.textContent = `Welcome to our restaurant ${accountLogged.firstName}    |`;
        section3.classList.remove("hidden");
        navSection3.classList.remove("hidden");
        btnOpenLogin.classList.add("hidden");
        btnLogout === null || btnLogout === void 0 ? void 0 : btnLogout.classList.remove("hidden");
    }
};
btnCloseModal.forEach((btn) => {
    btn.addEventListener("click", function () {
        var _a;
        (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        resetModal();
    });
});
btnOpenRegister.addEventListener("click", () => {
    modalRegister.classList.remove("hidden");
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove("hidden");
});
btnOpenLogin.addEventListener("click", () => {
    modalLogin.classList.remove("hidden");
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove("hidden");
});
btnRegister.addEventListener("click", registerAccount);
btnLogin.addEventListener("click", loginAccount);
btnLogout === null || btnLogout === void 0 ? void 0 : btnLogout.addEventListener("click", logoutAccount);
displayPlates();
if (localStorage.getItem("accountLogged"))
    displayLoggedInfo(JSON.parse(localStorage.getItem("accountLogged")));
//# sourceMappingURL=script.js.map