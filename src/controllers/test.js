const showhelloworld = (req, res) => {
  console.log("hello World");
  res.send("Hello World");
};

module.exports = showhelloworld;
