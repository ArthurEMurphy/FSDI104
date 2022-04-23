// display the pets in list items
function displayPet(){
    // creating the text
    let petsDiv = document.getElementById("pets");  // this is a div on register.html
    let tmp=""; // clear the field  
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]; // get each pet
        let li = document.createElement("li"); // creating the li tag
        let text = document.createTextNode(pet.name);
        li.appendChild(text);
        petsDiv.appendChild(li);
    }
    document.getElementById("pets").innerHTML=tmp;
}
displayPet()



// // creating the text
//     let petsDiv = document.getElementById("pets");  // this is a div on register.html

// display the pets in cards
function displayCards(){
    let tmp="";   
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div class="pets" id="pets">
            <h4>${pet.name}</h4>;
            <p>${pet.age}</p>;
            <p>${pet.gender}</p>; 
            <p>${pet.breed}</p>;
            <p>${pet.phone}</p>;
        </div> 
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}
displayCards()

// display in table
function displayTable(){
    let tmp="";   
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <table class="petTable" id="petTable">
            <td><h4>${pet.name}</h4></td>;
            <td>${pet.age}</td>;
            <td>${pet.gender}</td>; 
            <td>${pet.breed}</td>;
            <td>${pet.phone}</td>;
        </table> 
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}
displayTable()
