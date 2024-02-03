export default class Animals{
    constructor(init){
        if(typeof(init) != "undefined"){
            Object.assign(this, init)
        }
    }
    speak(){
        return(`${this.name} makes noise.`);
    }
}

export class Bat extends Animals{
    speak(){
        return(`${this.name} goes SQUEE.`);
    }
}

export class Bird extends Animals{
    speak(){
        return(`${this.name} goes CHIRP.`);
    }
}

export class Fish extends Animals{
    speak(){
        return(`${this.name} goes SPLASH.`);
    }
}