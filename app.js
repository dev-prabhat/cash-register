var billAmount = document.querySelector("#bill-amount")
var cashGiven = document.querySelector("#cash-given")
// var valid = document.querySelector("#valid")
var changeGiven = document.querySelector("#change-given")
var message = document.querySelector("#error-message")
var noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

// valid.addEventListener("click", function checkForValidation() {
//     message.style.display = "none"
//     afterValidation.innerHTML
//     if (billAmount.value > 0) {

//     } else {
//         displayMessage("Invalid Amount")
//     }
// })

changeGiven.addEventListener("click", function validateBillAndCashAmount() {
    message.style.display = "none"
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            var amonutToBeReturned = cashGiven.value - billAmount.value
            calculateAmount(amonutToBeReturned)
        } else {
            displayMessage("Cash Amount is less than Bill Amount")
        }
    } else {
        displayMessage("Invalid Amount")
    }
})

function calculateAmount(amonutToBeReturned) {
    message.style.display = "none"
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amonutToBeReturned / availableNotes[i]
        )
        amonutToBeReturned = amonutToBeReturned % availableNotes[i]
        noOfNotes[i].innerText = numberOfNotes
    }
}

function displayMessage(msg) {
    message.style.display = "block"
    message.innerText = msg
}
