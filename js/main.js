new Vue({
  el: '#app',
  data: {
    bpi: null
  },
  mounted: function() {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response) {
      this.bpi = response.data.bpi
    }.bind(this))
  }
})
