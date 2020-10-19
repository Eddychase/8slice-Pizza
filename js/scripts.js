function getSizeCost() {
    var selectSize = document.getElementById("size").value;
    return parseInt(selectSize);
}
function getCrustCost() {
var selectCrust = document.getElementById("crust").value;
return parseInt(selectCrust);
}
function getNumber() {
var selectNumber = document.getElementById("number").value;
return parseInt(selectNumber);
}
function getToppings() {
var selectToppings = document.getElementById("toppings").value;
return parseInt(selectToppings);


}
function totalPrice(e) {
event.preventDefault();
var totalPrice = (getSizeCost() + getCrustCost() + getToppings()) * (getNumber());

    console.log(totalPrice);
alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}
$(document).ready(function () {
$("#delivery").submit(function () {

    var name = $("input#name").val();
    var number = $("input#number").val();
    var location = $("input#location").val();

    alert("Good News " + name + "! Your order has been successfuly dispatched and will be delivered to " +  location + " within one hour.Thank you for chosing the 8slice Pizza.");

});

});
