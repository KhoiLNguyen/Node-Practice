// const square = function (x) {
//   return x * x
// }

// const square = x => x * x

// const square = (x) => x * x 

// console.log(square(3))

const event = {
  name: 'Birthday Party',
  guestList: ['Khoi', "Khoa", 'Mit'],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach(function (guest) {
      console.log(guest + " is attending " + this.name)
    })
  }
}

event.printGuestList()