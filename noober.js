













function renderRider(levelOfService, eachRide) {

  // console.log(levelOfService)

  numberOfPickups = eachRide.length

  document.querySelector('.rides').insertAdjacentHTML('beforeend', `

  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>${levelOfService}</span>
  </h1>
 
  `)


//  if(levelOfService = 'Noober Pool'){

    for (let i = 0; i < numberOfPickups; i++) {
      // console.log(eachRide[i])


      document.querySelector('.rides').insertAdjacentHTML('beforeend', `

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${eachRide[i].passengerDetails.first} ${eachRide[i].passengerDetails.last} </h2>
          <p class="font-bold text-gray-600">${eachRide[i].passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${eachRide[i].numberOfPassengers}          
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${eachRide[i].pickupLocation.address}</p>
          <p>${eachRide[i].pickupLocation.city}, ${eachRide[i].pickupLocation.state} ${eachRide[i].pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${eachRide[i].dropoffLocation.address}</p>
          <p>${eachRide[i].dropoffLocation.city}, ${eachRide[i].dropoffLocation.state} ${eachRide[i].dropoffLocation.zip}</p>
        </div>
      </div>

    </div>
  
    `)


    }

  //} 
  //else{
  //   document.querySelector('.rides').insertAdjacentHTML('beforeend', `

    
  // `)
  // }

}







async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
 // console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let rides = json
  console.dir(rides)
  


  for (let i = 0; i < rides.length; i++) {

//    let eachRide = rides[i]

    if (rides[i].length > 1) {
      levelOfService = 'Noober Pool'
    } else if (rides[i].purpleRequested) {
      levelOfService = 'Noober Purple'
    } else if (rides[i].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }

    renderRider(levelOfService, rides[i])

  }

    // passenger1Name = `${eachRide[0].passengerDetails.first} ${eachRide[0].passengerDetails.last}`
    // passenger1Phone = eachRide[0].passengerDetails.phoneNumber
    // passenger1NumberOfPassengers = eachRide[0].numberOfPassengers
    // passenger1PickupAddressLine1 = eachRide[0].pickupLocation.address
    // passenger1PickupAddressLine2 = `${eachRide[0].pickupLocation.city}, ${eachRide[0].pickupLocation.state} ${eachRide[0].pickupLocation.zip}`
    // passenger1DropoffAddressLine1 = eachRide[0].dropoffLocation.address
    // passenger1DropoffAddressLine2 = `${eachRide[0].dropoffLocation.city}, ${eachRide[0].dropoffLocation.state} ${eachRide[0].dropoffLocation.zip}`
  
    // if (eachRide.length > 1) {
    //   passenger2Name = `${eachRide[1].passengerDetails.first} ${eachRide[1].passengerDetails.last}`
    //   passenger2Phone = eachRide[1].passengerDetails.phoneNumber
    //   passenger2NumberOfPassengers = eachRide[1].numberOfPassengers
    //   passenger2PickupAddressLine1 = eachRide[1].pickupLocation.address
    //   passenger2PickupAddressLine2 = `${eachRide[1].pickupLocation.city}, ${eachRide[1].pickupLocation.state} ${eachRide[1].pickupLocation.zip}`
    //   passenger2DropoffAddressLine1 = eachRide[1].dropoffLocation.address
    //   passenger2DropoffAddressLine2 = `${eachRide[1].dropoffLocation.city}, ${eachRide[1].dropoffLocation.state} ${eachRide[1].dropoffLocation.zip}`
  
    // }
    // if (eachRide.length > 2) {
    //   passenger3Name = `${eachRide[2].passengerDetails.first} ${eachRide[2].passengerDetails.last}`
    //   passenger3Phone = eachRide[2].passengerDetails.phoneNumber
    //   passenger3NumberOfPassengers = eachRide[2].numberOfPassengers
    //   passenger3PickupAddressLine1 = eachRide[2].pickupLocation.address
    //   passenger3PickupAddressLine2 = `${eachRide[2].pickupLocation.city}, ${eachRide[2].pickupLocation.state} ${eachRide[2].pickupLocation.zip}`
    //   passenger3DropoffAddressLine1 = eachRide[2].dropoffLocation.address
    //   passenger3DropoffAddressLine2 = `${eachRide[2].dropoffLocation.city}, ${eachRide[2].dropoffLocation.state} ${eachRide[2].dropoffLocation.zip}`
    // }





  
}


window.addEventListener('DOMContentLoaded', pageLoaded)