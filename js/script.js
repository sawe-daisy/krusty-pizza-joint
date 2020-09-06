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
});
