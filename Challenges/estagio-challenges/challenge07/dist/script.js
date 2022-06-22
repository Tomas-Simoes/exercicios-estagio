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
let accountLogin;
const containerPlates = document.querySelector(".plates");
const btnOpenLogin = document.querySelector(".btn--show-modal--login");
const btnOpenRegister = document.querySelector(".btn--show-modal--register");
const modalLogin = document.querySelector(".modal--login");
const modalRegister = document.querySelector(".modal--register");
const btnCloseModal = document.querySelectorAll(".btn--close-modal");
const btnRegister = document.querySelector(".btn--register");
const btnLogin = document.querySelector(".btn--login");
const btnLogout = document.querySelector(".btn--logout");
const section3 = document.getElementById("section--3");
const welcomeMessage = document.querySelector(".nav__welcome");
const resetModal = () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
};
const getLocalAccounts = () => {
    if (localStorage.getItem("allAccounts"))
        return JSON.parse(localStorage.getItem("allAccounts"));
    else
        return [];
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
    accountLogin = allAccounts.find((acc) => acc.email === email.value);
    console.log(accountLogin);
    console.log(password.value);
    if (accountLogin && accountLogin.password === password.value) {
        localStorage.setItem("accountLogged", JSON.stringify(accountLogin));
        displayLogedInfo();
    }
    else {
        alert("This account doesn't exist");
    }
    modalLogin.classList.add("hidden");
    resetModal();
};
const logoutAccount = () => { };
const displayPlates = () => {
    for (const plate of plates) {
        const insertHTML = `<div class="plates__row">
                        <div class="plates__name">${plate.Name}</div>
                        <div class="plates__info">
                          This plate is a ${plate.Type} plate and it's served on ${plate.Day}
                        </div>
                        <div class="plates__value">${plate.Price}€</div>
                      </div>`;
        containerPlates.insertAdjacentHTML("beforeend", insertHTML);
    }
};
const displayLogedInfo = () => {
    welcomeMessage.textContent = `Welcome to our restaurant ${accountLogin.firstName}    |`;
    section3.classList.remove("hidden");
    btnOpenLogin.classList.add("hidden");
    btnLogout === null || btnLogout === void 0 ? void 0 : btnLogout.classList.remove("hidden");
};
btnCloseModal.forEach((btn) => btn.addEventListener("click", function () {
    var _a;
    (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
    resetModal();
}));
btnOpenRegister.addEventListener("click", () => modalRegister.classList.remove("hidden"));
btnOpenLogin.addEventListener("click", () => modalLogin.classList.remove("hidden"));
btnRegister.addEventListener("click", registerAccount);
btnLogin.addEventListener("click", loginAccount);
btnLogout === null || btnLogout === void 0 ? void 0 : btnLogout.addEventListener("click", logoutAccount);
displayPlates();
//# sourceMappingURL=script.js.map