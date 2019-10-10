// QUESTION 2


let cat = {
    genus: "Felis",
    species: "Catus",
}
console.log(cat["species"]);

cat["Color"] = "Black"
console.log(cat);

if(cat["texture"]){
    console.log("It does exist")
} else {
    console.log("It does not exist");
}


// QUESTION 2

// let p1 = {
//     name: 'Joe'
//   }
  
//   let p2 = {
//     name: 'Joe'
//   }
  
//   console.log(p1 === p2)

// It will console log false, because it has 2 different Id's