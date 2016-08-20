var server = require('diet')

var app = server()
app.listen('http://localhost:8000')

var app2 = server()
app2.listen('http://localhost:9000/')

app2.get('/', function($){ 
    $.end('welcome to my mobile api') 
})

// When http://localhost:8000/ is requested, respond with "Hello World!"

app.get('/', function($){
    $.end('Ahoj svete!')
})

app.get('/request-test', function($){
	console.log($.url)
	console.log($.headers)
	console.log($.body)
})

app.get('/response-test', function($){
	$.header('X-Clacks-Overhead', 'GNU Terry Pratchett')
	$.json({time: 'entropy'})
})

app.get('/middleware-test', task1, task2, task3, finish)

function task1($){
	console.log("Task 1")
	$.data.task1 = "Task 1"
	$.return()
}

function task2($){
	console.log("Task 2")
	$.data.task2 = "Task 2"
	$.return()
}

function task3($){
	console.log("Task 3")
	$.data.task3 = "Task 3"
	$.return()
}

function finish($){
    $.success()
}

