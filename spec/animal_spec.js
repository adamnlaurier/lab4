import Bat from '../Bat.js'
import Bird from '../Bird.js'
import Fish from '../Fish.js'

describe("Bat", function() {
  it("makes noise", function() {
    let oBat = new Bat();
    expect(oBat.speak()).toBe("The bat goes SQUEE");
  });
});

describe("Bird", function() {
  it("makes noise", function() {
    let oBird = new Bird();
    expect(oBird.speak()).toBe("The bird goes CHIRP");
  });
});

describe("Fish", function() {
  it("makes noise", function() {
    let oFish = new Fish();
    expect(oFish.speak()).toBe("The fish goes SPLASH");
  });
});


  