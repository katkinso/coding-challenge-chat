
//export an object with a function called init which 
//loads the defined routes and defines them on the Express app object
module.exports = {
    init(app){
      const staticRoutes = require("../routes/static");
      app.use(staticRoutes);
    }
  }