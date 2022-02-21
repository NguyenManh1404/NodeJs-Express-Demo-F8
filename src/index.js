const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');//Quản lý thư mục, source
const path =require('path');//Thư viện sẵn có của node, lấy đường dẫn của index.js trong máy
const route = require('./routes')//Import router từ file router/index.js



app.engine('hbs', engine(
  {extname:'.hbs'}// sửa lại đuôi của file cho ngắn
  ));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources\\views'));

app.use(morgan('combined'));//render ra giao thức HTTP

app.use(express.static(path.join(__dirname,'public')));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});