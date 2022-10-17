

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(datos){
  const state = {
    totalSlots: 0,
    availableSlots: 0,
    occupiedSlots: 0
}

for (let i = 0; i < datos.length; i++) {
  for (let a = 0; a < datos[i].length; a++){
    if (datos[i][a] === 2) {
      state.availableSlots += 1;
      state.totalSlots +=1;
    }
    else if (datos[i][a] === 1) {
      state.occupiedSlots += 1;
      state.totalSlots += 1;
    }
    }
    }
    return state;
  }



console.log(getParkingLotState(parking_state))