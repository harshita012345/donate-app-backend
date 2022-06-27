const mongoose = require( 'mongoose');

const volunteerSchema = new mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
  }
);
const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer;