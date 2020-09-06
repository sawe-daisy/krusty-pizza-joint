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
  pizza.prototype.getCrustPrice = function () {
    if (this.crust === "crispy") {
      if (this.size === "large") {
        return 300;
      } else if (this.size === "medium") {
        return 200;
      } else {
        return 100;
      }
    } else if (this.crust === "stuffed") {
      if (this.size === "large") {
        return 300;
      } else if (this.size === "medium") {
        return 250;
      } else {
        return 150;
      }
    } else {
      if (this.size === "large") {
        return 350;
      } else if (this.size === "medium") {
        return 250;
      } else {
        return 200;
      }
    }
  };
  var clientName = "";
  var totalCost = 0;
  var pizzasOrdered = [];
  var street = "";
  var houseNumber = "";

  $("#krusty-form").submit(function (event) {
    event.preventDefault();
    var typeSel = $("#type").val("");
    var sizeSel = $("#size").val("");
    var crustSel = $("#crust").val("");
    var topSel = $("#topping").val("");

    var newPizza = new pizza(typeSel, sizeSel, topSel, crustSel);

    pizzasOrdered.push(newPizza);
    $("#type").val("");
    $("#size").val("");
    $("#topping").val("");
    $("#crust").val("");

    totalCost = 0;

    for (let i = 0; i < pizzasOrdered.length; i++) {
      totalCost += pizzasOrdered[i].getPizzaPrice();
    }

    $("#summary").append(
      "<tr>" +
        '<th scope="row">' +
        newPizza.type +
        " (" +
        newPizza.size +
        ") - " +
        newPizza.getTypePrice() +
        "</th>" +
        "<td>" +
        newPizza.crust +
        " - " +
        newPizza.getCrustPrice() +
        "</td>" +
        "<td>" +
        newPizza.topping +
        " - " +
        newPizza.getToppingPrice() +
        "</td>" +
        "<td>" +
        newPizza.getPizzaPrice() +
        "</td>" +
        "</tr>"
    );

    if (pizzasOrdered.length > 0) {
      $("#krusty-title").empty();
      $("#krusty-title").append("Add Another Order");
    }

    $("#total-amount").fadeIn();
    $("#checkout").fadeIn();
    $("#orders-info").fadeIn();

    $("#total-amount").empty();
    $("#total-amount").append(totalCost);
    $(".total-amount").show();
  });

  $("#checkout").click(function () {
    $(".checkout").show();
  });

  $("#checkout-form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val("");
    var devOption = $("#delivery-option").val("");
    var clientName = name;
    $("#name").val("");
    $("#delivery-option").val("");
    $(".checkout").hide();
    if (devOption === "deliver") {
      $(".location").show();
      $(".dev-cost").show();
      $("#dev-amount").append(200);
      totalCost += 200;
      $("#total-amount").empty();
      $("#total-amount").append(totalCost);
    } else {
      alert(
        clientName +
          ": Order amount to Ksh. " +
          totalCost +
          ". kindly pick your order after 30 minutes. Thank you for choosing Krusty-pizza-joint."
      );
    }
  });
  $("#location-form").submit(function (event) {
    event.preventDefault();
    var estateEntered = $("#street").val();
    var houseNumberEntered = $("#house-number").val();
    street = estateEntered;
    houseNumber = houseNumberEntered;
    $(".location").hide();
    alert(
      clientName +
        ": Order amount to Ksh. " +
        totalCost +
        ". Your order will be delivered to " +
        street +
        ", " +
        houseNumber +
        " after 90 minutes.Kindly wait as your meal is being prepared.Thank you for choosing Krusty-pizza-joint."
    );
  });
});
