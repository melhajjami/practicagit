class escenaMatchPoint extends Phaser.Scene {
    constructor() {
        super({ key: 'escenaMatchPoint' });
        self.text = null;
    }

    preload() {
        
    }

    create() {
    
        self.text = this.add.text(400,300,'DESEMPAT!!!!',{ fill: '#fff' })
        self.text.setOrigin(0.5)
        self.text.setScale(2)
       
    }
    update(time,delta){
        this.cameras.main.fade(2000, 255, 0, 0);
    }
}