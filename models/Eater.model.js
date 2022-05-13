const { Schema, model } = require("mongoose");

const eaterSchema = new Schema(
  { 
    name: {
      type: String
    },
    email: {
      type: String
    },
    wasLeader: {
      type: Boolean,
      default: false
    },
    lastGroup: [{
      type: String,
      default: ''
    }],
    //in a fast paced world guided by consumerism, 
    //humans' levels of dopamine keep on leveling up higher and higher,
    //leading to us, humans, to be more impacient and less prone towards dedicating our time
    //to simple tasks like choosing a different cuisine from last week
    lastCuisine: {
      type: String,
      default: ''
    },
    //Allergies and intolerances are really common, I've been dealing with that problem my whole life,
    //being severely allergic to peanuts has given me some really bad times due to the fact that 
    //I could actually die
    //Apart from that, as peanuts come from the legume family, there are some legumes that I cannot digest 
    //correctly and as it is not as dangerous as an allergy, sometimes I am not as cautious and
    //that leads to me not actually enjoying the food I am eating
    hasAllergies: {
      type: Boolean,
      default: false
    },
    hasIntolerances: {
      type: Boolean,
      default: false
    },
    //there is always a common problem when eating in groups, 
    //that problem is those who are vegan and/or celiac and
    //sometimes have to be left out of the plan due to that restaurant
    //not having celiac/vegan options
    isCeliac: {
      type: Boolean,
      default: false
    },
    isVegan: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Eater = model("Eater", eaterSchema);

module.exports = Eater;