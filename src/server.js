const app = require("./index");
const port = process.env.PORT || 8000;

//Listening to Port
app.listen(port, () => {
  console.log(`Listening to Post ${port}`);
});
