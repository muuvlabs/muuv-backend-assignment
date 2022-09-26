const express = require( "express" );
const app     = express();
const port    = process.env.PORT || 3000;

app.get( "/actorsWithMultipleCharacters", ( req, res ) => {
    res.send( "Fill in this code" );
});

if ( process.env.NODE_ENV != "test" ) {
    app.listen( port );
}

module.exports = app;
