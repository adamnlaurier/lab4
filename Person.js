export default class {
    constructor(init){
        if(typeof(init) != "undefined"){
            Object.assign(this, init)
        }
    }
    speak(){
        return(`my name is ${this.name}`);
    }
}