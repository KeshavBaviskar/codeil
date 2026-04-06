const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assests'));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, (err) => {
   if (err) {
      console.log(`Error in running the server:${err}`);
      return;
   }
   console.log(`server is running on port:${port}`);
})