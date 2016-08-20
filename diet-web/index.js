var server = require('diet')

var app = server()
app.listen('http://localhost:8000')
    
// When http://localhost:8000/ is requested, respond with "Hello World!"

app.get('/', function($){
    $.end('Ahoj světe!')
})