var homeController = {
  index: function(req, res) {
    res.render('index', {
      title: 'Home',
      message: 'Home',
      active: {
        home: true
      }
    })
  }
}
module.exports = homeController;
