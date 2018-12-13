//variables
const amount_input = document.getElementById('amount')

const percent_input = document.getElementById('percent')

const calculate_button = document.getElementById('calculate')

const tip_display = document.getElementById('tip')

const total_display = document.getElementById('total')

//click button listener
calculate_button.addEventListener('click', click_calculate)

//event handler for click button
function click_calculate(e) {
  //variables for inputs
  const percent = Number(percent_input.value)
  const amount = Number(amount_input.value)

  const tip = amount * percent / 100
  const total = amount + tip
  tip_display.innerHTML = tip.toFixed(2)
  total_display.innerHTML = total.toFixed(2)
}

//click tip button listener
// calculate_button.addEventListener('click', click_tip)

// function click_tip(f) {
//   //variables for inputs
//   const percent = Number(percent_input.value)


// }
