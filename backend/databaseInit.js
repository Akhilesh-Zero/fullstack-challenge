const sequelize = require("./models/database");
const bcrypt = require("bcrypt");
const Contact = require("./models/Contact");
const User = require("./models/User");

async function initDatabase() {
  try {
    await sequelize.sync({ force: true }); // force: true will drop tables if they exist

    const hashedPassword = await bcrypt.hash("IamBatman", 10);

    // Seed user data
    await User.create({
      username: "BruceWayne",
      password: hashedPassword,
      email: "bruce@wayneenterprises.com",
      firstName: "Bruce",
      lastName: "Wayne",
    });

    // Seed contacts data
    const contacts = [
      {
        name: "Clark Kent",
        username: "Superman",
        email: "clark.kent@dailyplanet.com",
        street: "123 Daily Planet St.",
        suite: "Apt 1",
        city: "Metropolis",
        phone: "123-456-7890",
        website: "www.dailyplanet.com",
        company_name: "Daily Planet",
      },
      {
        name: "Diana Prince",
        username: "WonderWoman",
        email: "diana@themyscira.com",
        street: "123 Paradise Island Blvd.",
        suite: "Temple 2",
        city: "Themyscira",
        phone: "123-456-7891",
        website: "www.themyscira.com",
        company_name: "Amazon Warriors",
      },
      {
        name: "Bruce Wayne",
        username: "Batman",
        email: "bruce@wayneenterprises.com",
        street: "1007 Mountain Drive",
        suite: "Batcave",
        city: "Gotham",
        phone: "123-456-7892",
        website: "www.wayneenterprises.com",
        company_name: "Wayne Enterprises",
      },
    ];

    for (let contact of contacts) {
      await Contact.create(contact);
    }

    console.log("Database initialization and seeding completed!");
  } catch (error) {
    console.error("Error initializing and seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

initDatabase();
