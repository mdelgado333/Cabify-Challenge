const { Schema, model } = require("mongoose");

const groupSchema = new Schema(
  { 
    leader: {
      type: Schema.Types.ObjectId,
      ref: 'Eater'
    },
    eaters: [{
      type: Schema.Types.ObjectId,
      ref: 'Eater'
    }],
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant'
    },
    //cc stands for cross contamination, these fields turn true 
    //if one or more eaters of one group has either food intolerances or allergies,
    //therefore, the restaurant is noticed by Cabify when receiving the list of eaters
    //and is able to prepare in advance so that possible allergic reactions can be prevented
    ccAllergyWarning: {
      type: Boolean,
      default: false
    },
    ccIntoleranceWarning: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const Group = model("Group", groupSchema);

module.exports = Group;