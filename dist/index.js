"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let user = "bob";
let is_verified = false;
let currentAge = 20;
let occupation = 2;
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Meduim"] = 1] = "Meduim";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Large;
console.log(mySize);
let employee = {
    id: 1,
    name: "churchill",
    retire: (date) => {
        console.log(date);
    },
};
function calculateTax(income, taxYear, age) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2021);
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map