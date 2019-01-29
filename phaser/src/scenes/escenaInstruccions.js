class escenaInstruccions extends Phaser.Scene {
    constructor() {
        super({ key: 'escenaInstruccions' });
        self.titol = null;
        self.menu = null;
        self.text = null;
        self.text2 = null;
    }

    preload() {
        this.load.image('menu', 'assets/button_tornar-al-menu.png')
    }

    create() {
        

        self.titol = this.add.text(400, 150, 'INSTRUCCIONS', { fill: '#fff' })
        self.text = this.add.text(400, 300, 'Primer a arribar a 5 punts, a menys que només hi hagi un punt de diferencia', { fill: '#fff' })
        self.text2 = this.add.text(400, 330, 'Jugador Blau es mou amb ↑ i ↓, i el Vermell amb les lletres W i S', { fill: '#fff' })
        self.menu = this.add.image(30, 570, 'menu')
        titol.setScale(2)
        self.text.setOrigin(0.5)
        self.text2.setOrigin(0.5)
        self.titol.setOrigin(0.5);
        self.menu.setOrigin(0.5);
        self.menu.setScale(.2);
        self.menu.setInteractive();
        menu.on('pointerdown', function (event) {
            var escenaDarrera = new escenaMenu();
            this.scene.add('escenaMenu',escenaDarrera,true)
            this.scene.remove('escenaInstruccions')
        }, this)
       
    }
}