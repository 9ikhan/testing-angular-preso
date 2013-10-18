var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testing-angular');

var todoSchema = mongoose.Schema({
    name: String,
    created: Date,
    complete: Boolean
});
var Todo = mongoose.model('Todo', todoSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function (req, res) {
    res.sendfile('view/index.html');
});

app.get('/api/todos', function (req, res) {
    Todo.find(function (err, todos) {
        if (err) { res.send(500, err); }
        res.send(todos);
    });
});

app.get('/api/todos/:_id', function (req, res) {
    Todo.findById(req.param('_id'), function (err, todo) {
        if (err) { res.send(500, err); }
        res.send(todo);
    });
});

app.post('/api/todos', function (req, res) {
    var fields = ['name', 'created', 'complete'],
        model = {};
    for (var i = 0; i < fields.length; i++) {
        if (req.body[fields[i]] !== undefined) {
            model[fields[i]] = req.body[fields[i]];
        }
    }
    model.created = model.created || new Date();
    model.complete = model.complete || false;

    Todo.create(model, function (err, todo) {
        if (err) { res.send(500, err); }
        res.send(todo);
    });
});

app.post('/api/todos/:_id', function (req, res) {
    var fields = ['name', 'created', 'complete'],
        model = {};
    for (var i = 0; i < fields.length; i++) {
        if (typeof req.body[fields[i]] !== 'undefined') {
            model[fields[i]] = req.body[fields[i]];
        }
    }

    console.log(req.body, model);

    Todo.findByIdAndUpdate(req.param('_id'), model, function (err, todo) {
        if (err) { res.send(500, err); }
        res.send(todo);
    });
});

app.del('/api/todos/:_id', function (req, res) {
    Todo.findByIdAndRemove(req.param('_id'), function (err, todo) {
        if (err) { res.send(500, err); }
        res.send(204);
    });
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
