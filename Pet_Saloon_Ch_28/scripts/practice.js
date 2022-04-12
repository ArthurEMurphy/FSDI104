//Astrid info
// let studentFirstName="Astrid";
// let studentLastName="Batres-Guerrero";
// let studentAge=25;
// let studentIsActive=true;
//Arrays []

//objects literal {}
// let student1 = {
//     //attributes:value,
//     firstName:"Astrid",
//     LastName:"Batres-Guerrero",
//     age:25,
//     isActive:true,
// }

// let student2 = {
//     firstName:"Anthony",
//     LastName:"Lane",
//     age:22,
//     isActive:true,
// }

// let student3 = {
//     firstName:"Ben",
//     LastName:"Vance",
//     age:25,
//     isActive:false,
//     hobbies:["Listen to Music", "Read", "Play Zelda"],
//     address:{
//         street:"Palm Street",
//         zip:"22769",
//         number:"262-k"
//     }
// }

let students=[
{
    //attributes:value,
    firstName:"Astrid",
    LastName:"Batres-Guerrero",
    age:25,
    isActive:true,
},
{
    firstName:"Anthony",
    LastName:"Lane",
    age:22,
    isActive:true,
},
{
    firstName:"Ben",
    LastName:"Vance",
    age:25,
    isActive:false,
    hobbies:["Listen to Music", "Read", "Play Zelda"],
    address:{
        street:"Palm Street",
        zip:"22769",
        number:"262-k",
    }
}];

console.log(students[0].firstName);

function displayStudent(){
    //travel the array
    let tmp="";
    let div=document.getElementById("students");
    //<-------- length =3 ---->
    for(let i=0;i<students.length;i++){
        
        tmp +=`<li>${students[i].firstName}</li>`;
        console.log(tmp);
        
        // document.getElementById("students").innerHTML+=`<li>${students[i].firstName}</li>`;    (very slow)

    }
    div.innerHTML=tmp;
}

// console.log(`<li>${students[i].firstName}</li>`);
// document.getElementById("students").innerHTML+=`<li>${students[i].firstName}</li>`;

displayStudent();

// document.getElementById("students")

// console.log(student1.firstName);
// console.log(student3.hobbies[1]);
// console.log(student2["age"]);
// console.log(student3.address.zip);
// console.log(student3["address"]["zip"]);


//challenge: create an object for a client with the attributes 
//first name, last name, subscription type, active, credits


// let customer1 = {
//     firstName: "Ron",
//     lastName: "Burgundy",
//     subscriptionType:"online",
//     isActive:true,
//     credits:50,
// }

// let customer2 = {
//     firstName: "Donald",
//     lastName: "Duck",
//     subscriptionType:"print",
//     isActive:false,
//     credits:10,
// }

// let customer3 = {
//     firstName: "Steve",
//     lastName: "Harvey",
//     subscriptionType:"online",
//     isActive:true,
//     credits:250,
// }

// let customer4 = {
//     firstName: "Hugh",
//     lastName: "Hefner",
//     subscriptionType:"paper",
//     isActive:false,
//     credits:0,
// }

// console.log(customer1.lastName);
// console.log(customer2.credits);
// console.log(customer3.firstName);
// console.log(customer4.subscriptionType);
// console.log(customer1.credits);



