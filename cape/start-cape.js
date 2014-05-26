var cape = require('cape'); //(backend-cape.js)

var config = {
    couchdb : require('./couchdb'),
    agents: [
    ]
};

cape.start(config);
 
