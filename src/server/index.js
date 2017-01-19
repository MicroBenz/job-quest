require('./api');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve(__dirname , '../../dist')));
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(3000, function() { 
    console.log('[Frontend] listening to port ' + 3000);
});
