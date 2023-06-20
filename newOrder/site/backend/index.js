const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const sqlite3 = require('sqlite3')
const { open } = require('sqlite')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


open({
  filename: "./db/database.db",
  driver: sqlite3.Database
}).then((db) => {
  app.get('/forms', async (req, res) => {
    const application = await db.all("SELECT * FROM application")
    res.json(application)
  })

  app.get('/contact', async (req, res) => {
    const application = await db.all("SELECT * FROM ContactUs")
    res.json(application)
  })

  //.......AddDataInBase......................
  app.post('/forms', (req, res) => {
    const { object, square, type, style, budget, date, people } = req.body
    db.run(`INSERT INTO application (object_id, area_id, typeObject_id, style_id, cost_id, BeginningOfWork_id, People_id) VALUES ("${object}","${square}","${type}","${style}","${budget}","${date}","${people}")`, (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).send('Error saving data to database');
      } else {
        res.send('Data saved to database');
      }
    });
  });

  app.post('/contact', async (req, res) => {
    const { name, email, number, message } = req.body
    const userAdd = async (res) => {
      await db.run(`INSERT INTO ContactUs  (name, email, number,message) VALUES ("${name}", "${email}","${number}","${message}")`, (err) => {
        if (err) {
          return res.status(500).json({ message: 'Ошибка при добавлении пользователя в базу данных' });
        }
        res.json({
          data: "responce"
        });
      }

      )
    }
    userAdd(res)

    return res.json({ name, email, number, message });
  });







});
//.................................








app.listen(3000, () => {
  console.log("rabotaet" + 3000)
})
