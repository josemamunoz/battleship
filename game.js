/* Los gameboards son las diferentes combinaciones 
de barcos en el tablero */

let gameBoards = [[
  [0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,1,1,1,1,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,0,0]
],
[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [1,0,0,0,1,0,0,1,1,1],
  [1,0,0,0,1,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,1,1,0,0],
  [1,0,0,0,0,0,0,0,0,0]
]
,
[
  [0,0,1,1,1,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,1,1,0]
],
[
  [1,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [0,0,0,0,1,1,1,1,0,1],
  [0,0,0,0,0,0,0,0,0,1],
  [1,1,0,0,0,0,0,0,0,1]
],
[
  [0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,1,1,1,1],
  [1,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [1,1,1,1,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]];

/* gameboard selecciona uno de los gameboards al azar, y así comienza el juego */

let gameBoard = gameBoards[Math.floor(Math.random() * 5)];

/* gameboardArray es un array vacio para agregar un gameboard a los divs del html */

let gameBoardArray = [];


const collectionCeldas = document.getElementsByClassName("cell");
const nodeCeldas = document.querySelectorAll(".cell");
const oneCell = document.querySelector(".cell");

const cellContainer = document.getElementsByClassName("cell-container-1")


/* con este ciclo for agregamos el array de arrays de gameboard a un array simple gameboardArray
que luego se agrega a cada div */

for(let item in gameBoard){ 
  for(let i in gameBoard[item]){ 
    gameBoardArray.push(gameBoard[item][i]); 
    
  } 
}
/* con este for le agrego los valores establecidos en el gameboard
y el id de 0-99 para cada div*/

for(let j in gameBoardArray){
  collectionCeldas[j].innerHTML = gameBoardArray[j];
  let celdas = collectionCeldas[j];
  celdas.setAttribute("id", j);

}

/* con for le agrego un eventlistner de click a cada celda,
cuando se hace clic en una celca, si su valor es cero, se le suma +3,
si su valor es 1 se suma +1 y si su valor es 2, queda con el mismo valor.
con esto me aseguro de que no existan más valores o que se sume indefinidamente
con cada nuevo click
 */

for(celda in collectionCeldas){

  collectionCeldas[celda].addEventListener("click", e => {

    if(e.target.innerHTML == 0){
      e.target.innerHTML = (parseInt(e.target.innerHTML) +parseInt(3))
    } else if(e.target.innerHTML == 1){
      e.target.innerHTML = (parseInt(e.target.innerHTML) +parseInt(1))
    } else if(e.target.innerHTML >= 2){
      e.target.innerHTML = e.target.innerHTML;
    }

    if(e.target.innerHTML == 0){
      e.target.classList.add("empty")
    }else if(e.target.innerHTML == 1){
      e.target.classList.add("partOfaShip")
    }else if(e.target.innerHTML == 2){
      e.target.classList.add("sunkenPartOfaShip")
    }else if(e.target.innerHTML == 3){
      e.target.classList.add("missedShot")
    }

  });

}

/* función que muestra los barcos en el tablero */

function showShips() {
  for(let j in gameBoardArray){
    if(gameBoardArray[j] == 1){
      collectionCeldas[j].className += " with-ship"
    }
  }
}

function fire() {
  let fire = prompt("Fire positions: (fila, columna)");
  let position = 1;
  if (fire != null) {
    for(let i in fire){
      if (fire[i] != " " & fire[i] != ","){
        position *= parseInt(fire[i]);
        console.log(Number(fire[i]));
      }
      
    }
  }
  console.log(position +1)
}

    
