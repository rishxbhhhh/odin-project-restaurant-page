function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
  
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: +91 123456789";
  
    const address = document.createElement("p");
    address.textContent = "Addres: 7, Race Course Road, New Delhi, India";
  
    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = "images/restaurant-location.jpg";
    restaurantLocation.alt = "Image of The Coffee Shack restaurant's location";
  
    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);
  
    return contact;
  }
  
  function loadContact() {
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createContact());
  }
  
  export default loadContact;