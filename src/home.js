function loadHome(){
    const main = document.querySelector(".main");
    main.textContent= "";

    // creating elements of home page
    const rest_image = document.createElement("img");
    rest_image.src="images/restaurant-image.jpg";
    rest_image.alt="Restaurant Image";
    rest_image.className = "restaurant__image";
    const p1 = document.createElement("p");
    p1.className = "restaurant__about";
    p1.textContent = "World's Best Coffee and Now our Little Secret...";
    const p2 = document.createElement("p");
    p2.className = "restaurant__about";
    p2.textContent = "Since 1967";
    
    // loading elements of home
    main.appendChild(rest_image);
    main.appendChild(p1);
    main.appendChild(p2);
}

export default loadHome;