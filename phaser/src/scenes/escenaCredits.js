class escenaCredits extends Phaser.Scene {
    constructor() {
        super({ key: 'escenaCredits' });
        self.titol = null;
        self.menu = null;
    }

    preload() {
        this.load.image('menu', 'assets/button_tornar-al-menu.png')
    }

    create() {
        

        self.titol = this.add.text(400, 150, 'FET PER MOHAMED EL HAJJAMI', { fill: '#fff' })
        
        self.menu = this.add.image(30, 570, 'menu')
        self.menu.setScale(.2);
        titol.setScale(2)
        self.titol.setOrigin(0.5);
        self.menu.setOrigin(0.5);
        self.menu.setInteractive();
        menu.on('pointerdown', function (event) {
            var escenaDarrera = new escenaMenu();
            this.scene.add('escenaMenu',escenaDarrera,true)
            this.scene.remove('escenaCredits')
        }, this)
       
    }
}