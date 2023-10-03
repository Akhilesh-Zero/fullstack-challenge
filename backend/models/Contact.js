// Contact.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./database");

class Contact extends Model {}

Contact.init(
  {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    street: DataTypes.STRING,
    suite: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    companyName: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "contact",
  }
);

module.exports = Contact;
