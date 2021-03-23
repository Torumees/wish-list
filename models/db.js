const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taskDB', {
    useNewUrlParser: true,
    useUnifiedTopolgy: true
});

require('./wishes');