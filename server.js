const exp = require('express');
const session = require('express-session');
const path = require('path');


const app = exp();
app.use(session({
  name: 'bookstore',
  saveUninitialized: false,
  resave: true,
  secret: 'webapp',
  cookie: {
    maxAge: 1000 * 60 * 60,
  },
}));
app.use('/', require('./routes/booksapi'));
app.use('/', require('./routes/authorsapi'));


app.listen(8000, (err) => {
  if (err) { throw err; } else { console.log('listening on port'); }
});
