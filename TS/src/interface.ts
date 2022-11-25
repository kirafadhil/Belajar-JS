interface Laptop {
    name: string;
    on():void;
    off():void;
}

class Acer implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming:boolean){
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log('nyala');
    }
    off(): void {
        console.log('mati');
    }
}

class MacBook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name: string, keyboardLight:boolean){
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log('nyala');
    }
    off(): void {
        console.log('mati');
    }
}

let acer = new Acer('nitro', true);
acer.on();

let macbook = new MacBook('pro', true);
macbook.off();


