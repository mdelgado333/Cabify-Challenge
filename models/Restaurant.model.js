const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  { 
    name: {
      type: String
    },
    address: {
      type: String
    },
    cuisine: {
      type: String,
      enum: ['FRENCH', 'CHINESE', ' JAPANESE', 'INDIAN', 'ITALIAN', 'GREEK', 'SPANISH', 'MEDITERRANEAN', 'AMERICAN', 'MEXICAN']
    },
    //there is always a common problem when eating in groups, 
    //that problem is those who are vegan and/or celiac and
    //sometimes have to be left out of the plan due to that restaurant
    //not having celiac/vegan options
    isCeliacFriendly: {
      type: Boolean,
      default: true
    },
    isVeganFriendly: {
      type: Boolean,
      default: true
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;