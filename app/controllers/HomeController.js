var homeController = {
  index: function(req, res) {
    res.render('home/index', {
      title: 'Home',
      message: 'Home',
      active: {
        home: true
      }
    })
  }
}
module.exports = homeController;
