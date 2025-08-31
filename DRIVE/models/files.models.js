const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  originalname: { 
    type: String, 
    required: [true, "Original name is required"] },

  path: { 
    type: String, 
    required: [true, "Path is required"] },

  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user" ,
    required: [true, "User is required"]
},
});

const file = mongoose.model("File", fileSchema);

module.exports = file;
