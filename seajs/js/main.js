define(function (require, exports, module) {
  require('jquery')
  var $ = window.$
  console.log('loaded jquery')
  var math = require('./math')
  console.log('loaded math')

  $(function () {
    var result = math.add(4, 5)
    console.log(result)
    console.log(math.random(1, 40))
    console.log(math.max([12, 43, 5, 8, 55, 90]))

    $('#app').html('has loaded!')
  })

  module.exports = 'main-module'
})
