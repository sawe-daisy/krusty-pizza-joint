$("document").ready(function () {
  function pizza(type, size, topping, crust) {
    this.type = type;
    this.size = size;
    this.topping = topping;
    this.crust = crust;
  }
  pizza.prototype.getPizzaPrice = function () {
    return this.getCrustPrice() + this.getToppingPrice() + this.getTypePrice();
  };

  pizza.prototype.getToppingPrice = function () {
    if (this.size === "large") {
      if (this.topping === "onions") {
        return 400;
      } else if (this.topping === "mushrooms") {
        return 450;
      } else {
        return 400;
      }
    } else if (this.size === "medium") {
      if (this.topping === "onions") {
        return 300;
      } else if (this.topping === "mushrooms") {
        return 350;
      } else {
        return 300;
      }
    } else {
      if (this.topping === "onions") {
        return 200;
      } else if (this.topping === "mushrooms") {
        return 300;
      } else {
        return 200;
      }
    }
  };
  pizza.prototype.getTypePrice = function () {
    if (this.size === "large") {
      if (this.type === "pepperoni") {
        return 900;
      } else if (this.type === "hawaiian") {
        return 800;
      } else if (this.type === "regina") {
        return 900;
      } else if (this.type === "vegtikka") {
        return 800;
      } else if (this.type === "bbqsteak") {
        return 1000;
      } else {
        return 1000;
      }
    } else if (this.size === "medium") {
      if (this.type === "pepperoni") {
        return 700;
      } else if (this.type === "hawaiian") {
        return 700;
      } else if (this.type === "regina") {
        return 800;
      } else if (this.type === "vegtikka") {
        return 800;
      } else if (this.type === "bbqsteak") {
        return 900;
      } else {
        return 900;
      }
    } else {
      if (this.type === "pepperoni") {
        return 500;
      } else if (this.type === "hawaiian") {
        return 500;
      } else if (this.type === "regina") {
        return 500;
      } else if (this.type === "vegtikka") {
        return 500;
      } else if (this.type === "bbqsteak") {
        return 500;
      } else {
        return 500;
      }
    }
  };
});
