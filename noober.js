
















// function renderRider(rider) {
//   document.querySelector('.rides').insertAdjacentHTML('beforeend', `
//     <div class="rides">

//     </div>

//       <div class="border h-full p-4 flex flex-col">
//         <h2 class="text-lg font-bold mb-4">${product.name}</h2>
//         <div class="mb-4">
//           <img src="${product.image}">
//         </div>
//         <div class="mb-4 text-gray-900">${product.description}</div>
//         <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
//       </div>

//   `)







async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides
  
  let rides = json
  
  // for (let i = 0; i < products.length; i++) {
  //   let eachProduct = products[i]
  //   renderProduct(eachProduct)
}

window.addEventListener('DOMContentLoaded', pageLoaded)

