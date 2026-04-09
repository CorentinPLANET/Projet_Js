const opn_sous_list = document.getElementById("opn-sous-list");
const opn_home = document.getElementById("opn-home");
const opn_jeux = document.getElementById("opn-jeux");
const opn_device = document.getElementById("opn-device");
const opn_panier = document.getElementById("opn-panier");
const sous_list = document.getElementById("sous-list");
const bottomNav = document.getElementById("bottomNav");
const home = document.getElementById("home");
const jeux = document.getElementById("jeux");
const device = document.getElementById("device");
const dis_panier = document.getElementById("panier");
const search = document.getElementById("search");
const card_container = document.getElementsByClassName("card-container");
const main = document.getElementsByTagName("main");

const game_products = [
  {
    category: "jeu video",
    productName: "Super_Mario_Galaxy",
    imageUrl: " Assets/img/mario_galaxy_panier.png",
    description:
      "Envolez-vous dans de nouvelles galaxies avec Mario pour délivrer la princesse Peach.",
    price: 46.99,
    quantity: 1,
  },

  {
    category: "jeu video",
    productName: "Mario_Kart_Wii",
    imageUrl: " Assets/img/mario_kart_wii_panier.png",
    description:
      "Mario Kart WII est un jeu vidéo de course développé par Nintendo.",
    price: 35.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Pokemon_Stadium",
    imageUrl: " Assets/img/pokemon_stadium_panier.png",
    description:
      "Pokemon Stadium est un jeu vidéo de la série Pokemon édité par Nintendo.",
    price: 31.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Street_Fighter_II",
    imageUrl: " Assets/img/street_fighter_2_panier.png",
    description: "Street Fighter 2 est un jeu de combat développé par Capcom.",
    price: 29.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Sonic_The_Hedgehog_3&_Knuckles",
    imageUrl: " Assets/img/sonic_et_knuckles_panier.png",
    description:
      "Sonic The Hedgehog 3 & Knuckles, est un jeu vidéo de plateforme de la série Sonic the Hedgehog.",
    price: 40.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Shadow_The_Hedgehog",
    imageUrl: " Assets/img/shadow_the_hedgehog_panier.png",
    description:
      "Shadow the Hedgehog est un jeu de plateforme développé par Sega.",
    price: 36.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Wii_Sports",
    imageUrl: " Assets/img/wii_sports_card.png",
    description:
      "Wii Sports est un jeu vidéo de sport développé et édité par Nintendo comme titre de lancement pour la console de jeux vidéo Wii.",
    price: 27.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Sonic_The_Hedgehog",
    imageUrl: " Assets/img/sonic_the_hedgehog_card.png",
    description:
      "Sonic the Hedgehog ou plus simplement Sonic, est une série de jeux vidéo, développée par la firme japonaise Sega depuis 1991.",
    price: 49.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Animal_Crossing",
    imageUrl: " Assets/img/animal_crossing_card.png",
    description:
      "Animal Crossing: Wild World est un jeu vidéo développé par Nintendo EAD et édité par Nintendo sur Nintendo DS en 2005.",
    price: 24.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Resident_Evil",
    imageUrl: " Assets/img/resident_evil_card.png",
    description:
      "Resident Evil, connue au Japon sous le nom Biohazard est une série de jeux vidéo d'aventure, action et réflexion de type survival horror. La franchise appartient à la société japonaise Capcom.",
    price: 34.99,
    quantity: 0,
  },

  {
    category: "jeu video",
    productName: "Super_Mario_64",
    imageUrl: " Assets/img/mario_64_card.png",
    description:
      "Super Mario 64 est un jeu de plates-formes développé par le studio japonais Nintendo Entertainment Analysis and Development sous la direction de Shigeru Miyamoto et publié par Nintendo pour la Nintendo 64.",
    price: 50.99,
    quantity: 0,
  },
];
const device_products = [
  {
    category: "console",
    productName: "Super_Nintendo",
    imageUrl: "Assets/img/super_nintendo_card.png",
    description:
      "La Super Nintendo — appelée Super Famicom au Japon et Super Nintendo Entertainment System (Super NES ou SNES) en Amérique du Nord — est une console de jeux vidéo du constructeur japonais Nintendo commercialisée à partir de novembre 1990.",
    price: 66.99,
    quantity: 0,
  },

  {
    category: "console",
    productName: "Nintendo_64",
    imageUrl: "Assets/img/nintendo_64_card.png",
    description:
      "La Nintendo 64 également connue sous les noms de code Project Reality et Ultra 64 lors de sa phase de développement, est une console de jeux vidéo de salon, sortie en 1996.",
    price: 54.99,
    quantity: 0,
  },

  {
    category: "console",
    productName: "Mega_Drive",
    imageUrl: "Assets/img/mega_drive_card.png",
    description:
      "La Mega Drive ou Sega Genesis en Amérique du Nord, est une console de jeux vidéo de quatrième génération.",
    price: 49.99,
    quantity: 0,
  },

  {
    category: "console",
    productName: "Nintendo_DSi",
    imageUrl: "Assets/img/nintendo_dsi_card.png",
    description:
      "La Nintendo DSi est une console de jeu Nintendo succédant à la Nintendo DS Lite.",
    price: 29.99,
    quantity: 0,
  },

  {
    category: "console",
    productName: "Nintendo_WII",
    imageUrl: "Assets/img/nintendo_wii_card.png",
    description:
      "La Wii est une console de jeux de salon produite par le fabricant japonais Nintendo. Elle fait partie de la septième génération de consoles",
    price: 56.99,
    quantity: 0,
  },

  {
    category: "console",
    productName: "Nintendo_Gamecube",
    imageUrl: "Assets/img/gamecube_card.png",
    description:
      "La Nintendo GameCube est une console de jeux vidéo de l'entreprise japonaise Nintendo, fabriquée entre 2001 et 2007.",
    price: 62.99,
    quantity: 0,
  },
];
on_enter = () => {
  bottomNav.style.display = "block";
};
opn_sous_list.addEventListener("mouseover", () => {
  on_enter();
  clearTimeout(id);
});
sous_list.addEventListener("mouseover", () => {
  on_enter();
  clearTimeout(id);
});
opn_sous_list.addEventListener("mouseout", () => {
  id = setTimeout(() => {
    bottomNav.style.display = "none";
  }, 750);
});
sous_list.addEventListener("mouseout", () => {
  id = setTimeout(() => {
    bottomNav.style.display = "none";
  }, 750);
});
opn_home.addEventListener("click", () => {
  for (let i = 0; i < main[0].children.length; i++) {
    main[0].children[i].style.display = "none";
  }
  home.style.display = "block";
});
opn_device.addEventListener("click", () => {
  for (let i = 0; i < main[0].children.length; i++) {
    main[0].children[i].style.display = "none";
  }
  create_cards_shop(device_products);
  device.style.display = "flex";
});
opn_jeux.addEventListener("click", () => {
  for (let i = 0; i < main[0].children.length; i++) {
    main[0].children[i].style.display = "none";
  }
  create_cards_shop(game_products);
  jeux.style.display = "flex";
});
opn_panier.addEventListener("click", () => {
  for (let i = 0; i < main[0].children.length; i++) {
    main[0].children[i].style.display = "none";
  }
  create_cards_panier();
  dis_panier.style.display = "flex";
});
create_cards_shop = (products) => {
  if (products[0].category === "console") {
    var cardContainer = document.getElementById("device_cardContainer");
  }
  if (products[0].category === "jeu video") {
    var cardContainer = document.getElementById("game_cardContainer");
  }
  cardContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const card = document.createElement("div");
    card.className = "card-shop";
    cardContainer.appendChild(card);

    const card_img = document.createElement("img");
    card_img.className = "card_img-shop";

    const card_title = document.createElement("h3");
    card_title.className = "card_title-shop";

    const card_text = document.createElement("p");
    card_text.className = "card_text-shop";

    const card_price = document.createElement("span");
    card_price.className = "card_price-shop";

    const card_button = document.createElement("button");
    card_button.className = "card_button-shop";

    card.appendChild(card_img);
    card.appendChild(card_title);
    card.appendChild(card_text);
    card.appendChild(card_price);
    card.appendChild(card_button);

    card_img.src = products[i].imageUrl;
    card_img.setAttribute("alt", "image " + products[i].productName);

    card_title.innerHTML = products[i].productName.replaceAll("_", " ");

    card_text.innerHTML = products[i].description;

    card_price.innerHTML = products[i].price + "€";
    
    card_button.innerText = "Ajouter au panier";
    card_button.addEventListener("click", () => {
      products[i].quantity += 1;
    });
  }
};
create_cards_panier = () => {
  const panier_container = document.getElementById("container-panier");
  panier_container.innerHTML = "";
  const panier = document.createElement("div");
  panier.className = "div-panier";
  const total = document.createElement("div");
  total.className = "div-total";
  panier_container.appendChild(panier);
  panier_container.appendChild(total);
  for (let i = 0; i < game_products.length; i++) {
    if (game_products[i].quantity > 0) {
      const card = document.createElement("div");
      card.className = "card-panier";
      panier.appendChild(card);

      const card_content = document.createElement("div");
      card_content.className = "card_content-panier";

      const card_quantity = document.createElement("div");
      card_quantity.className = "card_quantity-panier";

      card.appendChild(card_content);
      card.appendChild(card_quantity);

      const card_img = document.createElement("img");
      card_img.className = "card_img-panier";

      const card_title = document.createElement("h3");
      card_title.className = "card_title-panier";

      const card_price = document.createElement("span");
      card_price.className = "card_price-panier";

      card_img.src = game_products[i].imageUrl;
      card_title.innerHTML = game_products[i].productName.replaceAll("_", " ");
      card_price.innerHTML = game_products[i].price + "€";
      card_content.appendChild(card_img);
      card_content.appendChild(card_title);
      card_content.appendChild(card_price);

      const quantity = document.createElement("span");
      quantity.className = "product_quantity-panier";

      const minus = document.createElement("span");
      minus.className = "decrease_quantity-panier";

      const plus = document.createElement("span");
      plus.className = "increase_quantity-panier";

      minus.innerText = "-";
      minus.addEventListener("click", () => {
        game_products[i].quantity -= 1;
        create_cards_panier();
      });

      quantity.innerText = game_products[i].quantity;
      plus.innerText = "+";
      plus.addEventListener("click", () => {
        game_products[i].quantity += 1;
        create_cards_panier();
      });
      
      card_quantity.appendChild(minus);
      card_quantity.appendChild(quantity);
      card_quantity.appendChild(plus);
    }
  }
};
// Code Matéo que je ne comprends pas après 1h
/*for (let i = 0; i < game_products.length; i++) {
  let child = document.createElement("div");
  child.setAttribute("id", "card_" + game_products[i].productName);
  document.getElementById("div_panier").appendChild(child);

  child = document.createElement("div");
  child.setAttribute("id", "c_div_" + game_products[i].productName);
  document
    .getElementById("card_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("img");
  child.setAttribute("src", " " + game_products[i].imageUrl);
  child.setAttribute("alt", game_products[i].productName);
  document
    .getElementById("c_div_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("p");
  child.innerText = game_products[i].productName.replaceAll("_", " ");
  document
    .getElementById("c_div_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("div");
  child.setAttribute("id", "price_" + game_products[i].productName);
  document
    .getElementById("c_div_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("p");
  child.innerText = game_products[i].price.toString() + "€";
  document
    .getElementById("price_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("div");
  child.setAttribute("id", "q_div_" + game_products[i].productName);
  document
    .getElementById("card_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("p");
  child.setAttribute("id", "minus_" + game_products[i].productName);
  child.innerText = "-";
  document
    .getElementById("q_div_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("p");
  child.setAttribute("id", "quant_" + game_products[i].productName);
  child.innerText = game_products[i].quantity.toString();
  document
    .getElementById("q_div_" + game_products[i].productName)
    .appendChild(child);

  child = document.createElement("p");
  child.setAttribute("id", "plus_" + game_products[i].productName);
  child.innerText = "+";
  document
    .getElementById("q_div_" + game_products[i].productName)
    .appendChild(child);
}

let child = document.createElement("div");
child.setAttribute("id", "total_panier");
dis_panier.appendChild(child);

let price = 0;
for (product of game_products) {
  price += product.price * 100 * product.quantity;
  child = document.createElement("p");
  child.innerText =
    product.quantity.toString() +
    "x " +
    product.productName.replaceAll("_", " ");
  document.getElementById("total_panier").appendChild(child);
}

child = document.createElement("p");
child.innerText = "Total: " + price / 100 + "€";
document.getElementById("total_panier").appendChild(child);*/
