//? Interfaces
//Order Interface
interface order {
  dayName: string;
  type: string;
  price: number;
}

// Account Interface
interface account {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  orders: order[];
}

// Plate Interface
interface plate {
  Name: string;
  Day: string;
  Type: string;
  Price: number;
  img: string;
}

let plates: plate[] = [
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

//? Elements
// Containers

// Login and Register Buttons
const btnOpenLogin = document.querySelector(
  ".btn--show-modal--login"
)! as HTMLAnchorElement;
const btnOpenRegister = document.querySelector(
  ".btn--show-modal--register"
)! as HTMLAnchorElement;

// Modals
const modalLogin = document.querySelector(".modal--login")!;
const modalRegister = document.querySelector(".modal--register")!;

const btnCloseModal = document.querySelectorAll(".btn--close-modal")!;

const btnRegister = document.querySelector(".btn--register")!;
const btnLogin = document.querySelector(".btn--login")!;
const btnLogout = document.querySelector(".btn--logout");

// General Elements
const overlay = document.querySelector(".overlay")!;

///////////////////////////////
///////////////////////////////
//? Functions

//? Modal function
const resetModal = () => {
  overlay.classList.add("hidden");
  const inputs = document.querySelectorAll(
    ".input"
  )! as NodeListOf<HTMLInputElement>;
  inputs.forEach((input) => (input.value = ""));
};

//? Register/Login Account
// Register Function
const registerAccount = () => {
  const email = document.querySelector(".register__email")! as HTMLInputElement;

  const firstName = document.querySelector(
    ".register__firstName"
  )! as HTMLInputElement;
  const lastName = document.querySelector(
    ".register__lastName"
  )! as HTMLInputElement;
  const password = document.querySelector(
    ".register__password"
  )! as HTMLInputElement;

  const addAccount: account = {
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
    email: email.value,
    orders: [],
  };

  const allAccounts: account[] = getLocalAccounts();

  if (allAccounts.find((acc) => acc.email === addAccount.email)) {
    alert("This account already exists");
  } else {
    allAccounts.push(addAccount);
    localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
  }

  modalRegister.classList.add("hidden");
  resetModal();
};
// Login Function
const loginAccount = () => {
  const email = document.querySelector(".login__email")! as HTMLInputElement;
  const password = document.querySelector(
    ".login__password"
  )! as HTMLInputElement;

  const allAccounts: account[] = getLocalAccounts();
  let accountLogin = allAccounts.find((acc) => acc.email === email.value);

  if (accountLogin && accountLogin.password === password.value) {
    localStorage.setItem("accountLogged", JSON.stringify(accountLogin));

    displayLoggedInfo(accountLogin);
  } else {
    alert("This account doesn't exist");
  }

  modalLogin.classList.add("hidden");
  resetModal();
};
// Logout Function
const logoutAccount = () => {
  toogleHidden(true);
  localStorage.setItem("accountLogged", "");
};

//? Display Functions
// Display the menu
const displayPlates = () => {
  const containerPlates = document.querySelector(".plates")! as HTMLDivElement;

  for (const plate of plates) {
    const insertHTML = `<div class="plates__row">
                        <img class="img" src="${plate.img}">
                    
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
// Display logged info
const displayLoggedInfo = (accountLogged: account) => {
  displaySchedule();
  toogleHidden(false, accountLogged);

  accountLogged.orders.forEach((order: order) => {
    const checkBox = document.querySelector(
      `.${order.dayName}`
    )! as HTMLInputElement;

    const radioBox = document.getElementById(
      `radio-${order.type}-${order.dayName}`
    )! as HTMLInputElement;

    radioBox.checked = true;
    checkBox.checked = true;
  });

  updatePrice(accountLogged);
};

// Display Schedule
const displaySchedule = () => {
  const openDays = [...new Set(plates.map((plate) => plate.Day))];

  const containerSchedule = document.querySelector(
    ".schedule"
  )! as HTMLDivElement;

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
  } else {
    const allCheckbox = document.querySelectorAll(
      'input[type="checkBox"]'
    )! as NodeListOf<HTMLInputElement>;

    const allRadio = document.querySelectorAll(
      'input[type="radio"]'
    )! as NodeListOf<HTMLInputElement>;

    allCheckbox.forEach((checkBox) => (checkBox.checked = false));
    allRadio.forEach((radio) => {
      console.log(radio.value);

      if (radio.value !== "meat") radio.checked = false;
      else radio.checked = true;

      console.log(radio.checked);
    });
  }
};
// Display/Updates the orders
const updateOrder = (orderDay: string) => {
  const checkBox = document.querySelector(`.${orderDay}`)! as HTMLInputElement;
  let accountLogged = JSON.parse(localStorage.getItem("accountLogged")!);

  const radioMeat = document.getElementById(
    `radio-Meat-${orderDay}`
  )! as HTMLInputElement;
  const type = radioMeat.checked ? "Meat" : "Fish";

  let orderPrice = plates.find(
    (plate) => plate.Day === orderDay && plate.Type === type
  )?.Price;

  if (checkBox.checked) {
    //? if it's checked, see if there is already an order in that day
    const orderToUpdate = accountLogged.orders.find(
      (order: order) => order.dayName === orderDay
    );

    //? if there is, change the type
    //? if there isn't an order in that day, push a new order

    if (!orderToUpdate) {
      accountLogged.orders.push({
        dayName: orderDay,
        type: type,
        price: orderPrice,
      });
    } else {
      orderToUpdate.type = type;
      orderToUpdate.price = orderPrice;
    }
  } else {
    //? if checkbox is not checked, then remove that order
    accountLogged.orders = accountLogged.orders.filter(
      (order: order) => order.dayName !== orderDay
    );
  }

  const allAccounts = getLocalAccounts();

  allAccounts.find(
    (account: account) => account.email === accountLogged.email
  ).orders = accountLogged.orders;

  updatePrice(accountLogged);

  localStorage.setItem("accountLogged", JSON.stringify(accountLogged));
  localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
};

// Display/Updates the price
const updatePrice = (accountLogged: account) => {
  const priceEl = document.querySelector(
    ".price__value"
  )! as HTMLParagraphElement;

  priceEl.textContent = accountLogged.orders
    .reduce((acc: number, cur: order) => (acc += cur.price), 0)
    .toString();
};

//? General Functions
// Get all Accounts stored localy
const getLocalAccounts = () => {
  if (localStorage.getItem("allAccounts"))
    return JSON.parse(localStorage.getItem("allAccounts")!);

  return [];
};

// Toogle hidden
const toogleHidden = (toogle: boolean, accountLogged?: account) => {
  const welcomeMessage = document.querySelector(".nav__welcome")!;
  const section3 = document.getElementById("section--3")!;
  const navSection3 = document.getElementById("nav--section3")!;

  console.log(document.body);

  if (toogle) {
    welcomeMessage.textContent = `Welcome to our restaurant     |`;

    section3.classList.add("hidden");
    navSection3.classList.add("hidden");

    btnOpenLogin.classList.remove("hidden");
    btnLogout?.classList.add("hidden");
  } else {
    welcomeMessage.textContent = `Welcome to our restaurant ${
      accountLogged!.firstName
    }    |`;

    section3.classList.remove("hidden");
    navSection3.classList.remove("hidden");

    btnOpenLogin.classList.add("hidden");
    btnLogout?.classList.remove("hidden");
  }
};

//? Event Calls
btnCloseModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.parentElement?.classList.add("hidden");

    resetModal();
  });
});

btnOpenRegister.addEventListener("click", () => {
  modalRegister.classList.remove("hidden");

  overlay?.classList.remove("hidden");
});

btnOpenLogin.addEventListener("click", () => {
  modalLogin.classList.remove("hidden");
  overlay?.classList.remove("hidden");
});

btnRegister.addEventListener("click", registerAccount);
btnLogin.addEventListener("click", loginAccount);
btnLogout?.addEventListener("click", logoutAccount);

//? Function calls
displayPlates();

if (localStorage.getItem("accountLogged"))
  displayLoggedInfo(JSON.parse(localStorage.getItem("accountLogged")!));
