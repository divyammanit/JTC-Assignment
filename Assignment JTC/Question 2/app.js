const prompt = require("prompt-sync")();

const priceEspresso = [60, 75, 100];
const priceCappuccino = [80, 90, 125];
const priceLatte = [100, 125, 150];

class Coffee {
  type;
  price;
  addOn;

  constructor(type, addOn, addOnIndex) {
    this.type = type;
    this.addOn = addOn;
    this.price = this.calculatePrice(type, addOnIndex);
  }

  calculatePrice(type, addOnIndex) {
    if (type == "Espresso") {
      return priceEspresso[addOnIndex - 1];
    } else if (type == "Cappuccino") {
      return priceCappuccino[addOnIndex - 1];
    } else {
      return priceLatte[addOnIndex - 1];
    }
  }
}

class CoffeeHouse {
  coffees = ["Espresso", "Cappuccino", "Latte"];
  addOns = ["Milk", "Cream", "Latte"];

  makeCoffe = (indexOfCoffee, indexOfAddOn) => {
    const coffee = new Coffee(
      this.coffees[indexOfCoffee - 1],
      this.addOns[indexOfAddOn - 1],
      indexOfAddOn
    );

    return coffee;
  };
}

class Main {
  main = () => {
    console.log("Welcome to the Coffee Shop!");

    const orders = [];

    while (true) {
      console.log("Available Varities:");
      console.log("1. Espresso \n2. Cappuccino \n3. Latte");
      console.log(
        "Enter the number associated to coffee to select it. Enter 4 to confirm your order. Enter 0 to exit."
      );

      const userInput = prompt("Enter your choice: ");

      if (userInput == 0) {
        break;
      } else if (userInput == 4) {
        if (orders.length == 0) {
          console.log("Please Enter a valid value: ");
          continue;
        } else {
          this.generateBill(orders);
          break;
        }
      } else {
        this.printAddOns();
        const selectedAddOn = prompt("Enter a value: ");

        const coffeeHouse = new CoffeeHouse();
        const coffee = coffeeHouse.makeCoffe(userInput, selectedAddOn);

        orders.push(coffee);
      }
    }
  };

  printAddOns = () => {
    console.log("Choose your preferred add-on: ");
    console.log("1. Milk \n2. Cream \n3. Latte");
  };

  generateBill = (orders) => {
    console.log("\n\n");
    let totalCost = 0;

    orders.map((coffee) => {
      console.log(coffee.type + " " + coffee.addOn + " = " + coffee.price);

      totalCost += coffee.price;
    });

    console.log("Your total amount is : " + "Rs. " + totalCost);
  };
}

const newApp = new Main();
newApp.main();