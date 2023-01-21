const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');



describe("catBreed", () => {
  it('returns a description of a valid type of cat breed', (done) => {
    fetchBreedDescription('sib', (err, desc) => {
      assert.equal(err, null);
        
      
      const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expected, desc.trim());

      done();
    });
  });
  it('returns "No cat exisits" for empty or invald breed', (done) => {
    fetchBreedDescription('abcd', (err, desc) => {
      assert.equal(err, null);
      
      const expected = "No cat exisits";
      assert.equal(expected, desc);
      done();
    });
  });
});

    