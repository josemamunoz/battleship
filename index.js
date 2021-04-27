/* window.onload = function() {
    let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
    // your code here
    countries.forEach(element => {
       let optionTag = document.createElement("option");
    document.querySelector("#mySelect").appendChild(optionTag);
    optionTag.innerHTML = element;
    });
}; */



    let types = [
        {
          "slot": 1,
          "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
          }
        },
        {
          "slot": 2,
          "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
          }
        }
      ];
    
    
      console.log(types);
      console.log(types[0].type.name)
