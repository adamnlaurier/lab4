import Bat from '../Animals.js'
import Bird from '../Animals.js'
import Fish from '../Animals.js'

describe("Bat", function() {
  it("makes noise", function() {
    let oBat = new Bat({name:"Bill"});
    expect(oBat.speak()).toBe("Bill goes SQUEE.");
  });
});

describe("Bird", function() {
  it("makes noise", function() {
    let oBird = new Bird({name:"Bob"});
    expect(oBird.speak()).toBe("Bob goes CHIRP.");
  });
});

describe("Fish", function() {
  it("makes noise", function() {
    let oFish = new Fish({name:"Felix"});
    expect(oFish.speak()).toBe("Felix goes SPLASH.");
  });
});


  