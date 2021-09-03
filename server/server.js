const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");
require("dotenv").config({ path: "config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

// server static in prod env
if(process.env.NODE_ENV === 'production') {
//   Set static folder
  app.use(express.static('server/build'));

  app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'server', 'build', 'index.html'))
  });
}

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});