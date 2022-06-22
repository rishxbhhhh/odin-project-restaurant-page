function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Cappuccino","Price: $83")
  );
  menu.appendChild(
    createMenuItem(
      "Americano","Price: $64")
  );
  menu.appendChild(
    createMenuItem(
      "Espresso","Price: $75")
  );
  menu.appendChild(
    createMenuItem(
      "Macchiato","Price: $72")
  );

  menu.appendChild(
    createMenuItem(
      "Mocha","Price: $85")
  );

  menu.appendChild(
    createMenuItem(
      "Latte","Price: $80")
  );
  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const line = document.createElement("hr");
  line.className="menu__item__separation";

  const foodImage = document.createElement("img");
  foodImage.src = `images/${name.toLowerCase()}.jpg`;
  foodImage.alt = `An image of ${name} coffee`;

  menuItem.appendChild(line);
  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.querySelector(".main");
  main.textContent = "";
  const ingredients = document.createElement("img");
  ingredients.src = "images/ingredients.jpg";
  ingredients.alt = "Graphical Representation of Ingredients.";
  ingredients.className = "ingredients";
  main.appendChild(ingredients);
  main.appendChild(createMenu());
}

export default loadMenu;
