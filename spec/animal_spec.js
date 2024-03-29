import Bat from '../Bat.js'
import Bird from '../Bird.js'
import Fish from '../Fish.js'

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


  