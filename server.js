const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/get-json", (req, res) => {
  const jsonFilePath = "./data/podcast-list.json";

  fs.readFile(jsonFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Помилка читання JSON-файлу:", err);
      res.status((500).json({ error: "Помилка сервера" }));
    } else {
      const jsonData = JSON.parse(data);

      res.json(jsonData);
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер працює на порті ${port}`);
});
