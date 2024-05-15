let age: number = 20;
if (age < 50) age += 10;
console.log(age);
// 22.57

let user: string = "bob";
let is_verified: boolean = false;
let currentAge: number = 20;

let occupation: any = 2;

//ENUMS
enum Size {
  Small,
  Meduim,
  Large,
}
let mySize: Size = Size.Large;

console.log(mySize);

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

//OBJECT
let employee: Employee = {
  id: 1,
  name: "churchill",
  retire: (date: Date) => {
    console.log(date);
  },
};

//FUNCTIION
function calculateTax(income: number, taxYear: number, age?: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000, 2021);

function kgToLbs(weight: number | string) {
  //NARROWING
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
// 53
