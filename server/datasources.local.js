"use strict";
module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  MongoDB: {
    host: "",
    port: 0,
    url: process.env.MONGODB_URI,
    database: "",
    password: "",
    name: "MongoDB",
    user: "",
    connector: "mongodb"
  }
};
