export default class {
    constructor(init){
        if(typeof(init) != "undefined"){
            Object.assign(this, init)
        }
    }
    speak(){
       return(`The fish goes SPLASH`);
    }
}