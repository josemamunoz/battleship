# Battleship

Batleship es un juego donde el participante debe hacer click en una cuadricula de 10x10,
en donde se encuentran  5 naves, cada nave utiliza una cantidad de celdas especificas: 

* 1 de 5 celdas
* 2 de 4 celdas
* 1 de 3 celdas
* 1 de 2 celdas

El tablero de 10x10 comienza con valores de "0" en cada <div> vacio, mientras que las naves
comienzan con un valor de "1":


## Como se juega

* Al hacer click en una celda con valor "0", se suma +3
  El <div> cambiará a color gris
* Al hacer click en una celda con valor "1" se suma +1
  El <div> cambiará a color rojo
* Si el jugador se da por vencido, puede hacer click en el boton "Show ships", 
  para mostrar las naves en un color diferente a los mencionados 
