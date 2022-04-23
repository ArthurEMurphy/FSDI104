let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"787",
        zip:"23456",
    },
    hours:{
        open:"9:00 a.m.",
        close:"8:00 p.m.",
    },
    pets:[]
}
//name,age,gender,breed,service,owner name,contact phone
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
// get the info from the inputs and store the information
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge")
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtTel");

function isValid(aPet){
    //return false when the pet is not valid
    // return true if the pet is valid
    let valid=true;
    if(aPet.petName.length==0){
        // if we get here it means that the name is not valid
        valid=false;
        console.error("Invalid name");
    }
    if(aPet.service.length==0){
        valid=false;
        console.error("Invalid service");
    }
    if(aPet.phone.length==0){
            valid=false;
            console.error("Invalid phone");
    }
    return valid; // it could be true or false
}

function register(){
    // create the pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,input.Breed.value,inputService.value,inputOwner.value,inputPhone.value);
    console.log(thePet);
    if(isValid(thePet)){
        // push the pet into the array
        petSalon.pets.push(thePet);
        displayPet();
        // Clear the inputs
        clearInputs();
    }
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
}
// Create pets
let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555");
let scrappy = new Pet("Scrappy",40,"Male","Mixed","Nails cut","Shaggy","555-555-5554");
let cheddar = new Pet("Cheddar",10,"Female","Corgi","Grooming","Short","555-555-5553");
let nacho = new Pet("Nacho",6,"Male","Mixed","Teeth brush","Curly","555-555-5552");
petSalon.pets.push(scooby,scrappy,cheddar,nacho);
displayPet();