const request = require( "supertest" );
const app = require( "../src/index" );
const dataForQuestions = require( "../dataForQuestions" );

describe( "GET /actorsWithMultipleCharacters", function() {

    it( "should succeed", async function() {
        const resp = await request( app ).get( "/actorsWithMultipleCharacters" );
        expect( resp.statusCode ).toEqual( 200 );
    });

    it( "should return an object", async function() {
        const resp = await request( app ).get( "/actorsWithMultipleCharacters" );
        console.log({ body: resp.body });
        expect( typeof resp.body ).toBe( "object" );
    });

    it( "should contains two actors", async function() {
        const resp = await request( app ).get( "/actorsWithMultipleCharacters" );
        const actorNames = Object.keys( resp.body );
        expect( actorNames ).toHaveLength( 2 );
    });

    it( "should return Chris Evans", async function () {
        const resp = await request( app ).get( "/actorsWithMultipleCharacters" );
        const actorNames = Object.keys( resp.body );
        expect( actorNames.includes( "Chris Evans" ) ).toBe( true );
    });

    it( "should return Michael B. Jordan", async function() {
        const resp = await request( app ).get( "/actorsWithMultipleCharacters" );
        const actorNames = Object.keys( resp.body );
        expect( actorNames.includes( "Michael B. Jordan" ) ).toBe( true );
    });

    describe( "each Actor", function() {
        it( "should have a valid movie name", async function() {
            const resp = await request( app ).get( "/actorsWithMultipleCharacters" );
            expect(
                Object.keys( resp.body ).every( actorName => {
                    return resp.body[actorName].every( movie => {
                        return movie.movieName in dataForQuestions.movies;
                    });
                })
            ).toBe( true );
        });
    });
});
