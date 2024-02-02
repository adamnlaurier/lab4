import Person from '../Person.js'

describe("Person", function() {
    it("says name", function() {
      let oRich = new Person({name:"Rich"});
      expect(oRich.speak()).toBe("my name is Rich");
    });
  });


  