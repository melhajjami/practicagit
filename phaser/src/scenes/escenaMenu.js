class escenaMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'escenaMenu' });
        self.play = null;
        self.instruccions = null;
        self.credits = null;
    }

    preload() {
        this.load.image('jugar', 'assets/button_jugar.png')
        this.load.image('instruccions', 'assets/button_instruccions.png')
        this.load.image('credits', 'assets/button_credits.png')
    }

    create() {
        

        self.play = this.add.image(400, 350, 'jugar')
        self.instruccions = this.add.image(400, 400, 'instruccions')   
        self.credits = this.add.image(400, 450, 'credits') 
        self.play.setOrigin(0.5);
        self.play.setInteractive();
        self.instruccions.setInteractive();
        self.instruccions.setOrigin(0.5);
        self.credits.setOrigin(0.5);
        self.credits.setInteractive();
        play.on('pointerdown', function (event) {
            var escena1 = new escenaJoc();
            this.scene.add('escenaJoc',escena1,true)
            this.scene.remove('escenaMenu')

        }, this)
        instruccions.on('pointerdown', function (event) {
            var escena2 = new escenaInstruccions();
            this.scene.add('escenaInstruccions',escena2,true)
            this.scene.remove('escenaMenu')
        }, this)
        credits.on('pointerdown', function (event) {
            var escena3 = new escenaCredits();
            this.scene.add('escenaCredits',escena3,true)
            this.scene.remove('escenaMenu')
        }, this)
    }
    update(time,delta){
        
       
    }
}




