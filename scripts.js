// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  data.foreach(movie => {
      //log each movies title
      console.log(movie.title)
  })
  }
}

// Send request
request.send()
