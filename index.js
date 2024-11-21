////// ATM Machine ////

var firstPage = document.getElementById("page1");
var secondPage = document.getElementById("page2");
var secondPageCon = document.getElementsById("container");

function submitPin() {
    var userInput = document.getElementById("pin-input").value;

    if (userInput === "") {
        alert("Please Enter your Pin Code!")
    } else {
        firstPage.style.display = "none"
        secondPage.innerHtml = "block"
        document.getElementById("withdrawal-input").style.display = "none"
    }
}
function backBtn() {
    firstPage.style.display = "block"
    secondPageCon.style.display = "none"
}

function userBalance() {
    document.getElementById("atm-machine").style.display = "none"
    document.getElementById("page2-heading").innerHTML = "Your Current Balance : 50000"
    document.getElementById("balance").style.display = "none"
    document.getElementById("withdrawl").style.display = "none"
    document.getElementById("deposit").style.display = "none"

}

function userWithDrawl() {
    document.getElementById("atm-machine").style.display = "none"
    document.getElementById("page2-heading").innerHTML = "Please enter an amount to withdrawal"
    document.getElementById("balance").style.display = "none"
    document.getElementById("withdrawl").style.display = "none"
    document.getElementById("withdrawal-input").style.display = "block"
    var inputField = document.createElement("input");
    inputField.setAttribute("id", "withdrawalInput")
    inputField.type = "number";
    document.getElementById("withdrawal-input").appendChild(inputField);
    var withdrawalBtn = document.getElementById("deposit");
    withdrawalBtn.innerText = "Submit";
    withdrawalBtn.setAttribute("onclick", "drawal()");
}

function drawal() {
    var userInput = document.getElementById("withdrawalInput").value;
    if (userInput === "") {
        alert("Please enter the amount!");
    } else {
        var currentBalance = 50000;
        var remainingBalance = currentBalance - parseFloat(userInput);

        if (remainingBalance < 0) {
            alert("Insufficient balance!");
        } else {
            // Update the balance
            document.getElementById("page2-heading").innerHTML = ["Withdrawal successfully! Your Remaining balance: " + remainingBalance];
            document.getElementById("withdrawalInput").style.display = "none"
            document.getElementById("deposit").style.display = "none"
        }
    }
}

function userDeposit() {
    document.getElementById("atm-machine").style.display = "none"
    document.getElementById("page2-heading").innerHTML = "Please enter an amount to Deposit"
    document.getElementById("balance").style.display = "none"
    document.getElementById("withdrawl").style.display = "none"
    document.getElementById("withdrawal-input").style.display = "block"
    var inputField = document.createElement("input");
    inputField.setAttribute("id", "depositInput")
    inputField.type = "number";
    document.getElementById("withdrawal-input").appendChild(inputField);
    var withdrawalBtn = document.getElementById("deposit");
    withdrawalBtn.innerText = "Submit";
    withdrawalBtn.setAttribute("onclick", "deposit()");
}
function deposit() {
    var userInput = document.getElementById("depositInput").value;
    if (userInput === "") {
        alert("Please enter the amount!");
    } else {
        var currentBalance = 50000;
        var depositBalance = currentBalance + parseFloat(userInput);

        if (depositBalance < 0) {
            alert("Insufficient balance!");
        } else {
            // Update the balance
            document.getElementById("page2-heading").innerHTML = ["Deposit successfully! Your.. Current balance: " + depositBalance];
            document.getElementById("depositInput").style.display = "none";
            document.getElementById("deposit").style.display = "none"
        }
    }
}
