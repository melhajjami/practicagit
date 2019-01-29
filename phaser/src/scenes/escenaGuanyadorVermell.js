class escenaGuanyadorVermell extends Phaser.Scene{
    constructor (){
        super({key:'escenaGuanyadorVermell'});
        self.gameover = null;
        self.menu = null;
    }

    preload(){
        this.load.image('menu', 'assets/button_tornar-al-menu.png')
    }

    create(){
    self.gameover = this.add.text(400,300,'Jugador Vermell és el guanyador',{fill:'#ff0000'})
    self.menu = this.add.image(30, 570, 'menu')
    self.menu.setScale(.2);
    self.menu.setOrigin(0.5);
    self.menu.setInteractive();
    gameover.setScale(2);
    gameover.setOrigin(0.5);
    menu.on('pointerdown', function (event) {
        var escenaDarrera = new escenaMenu();
        this.scene.add('escenaMenu',escenaDarrera,true)
        this.scene.remove('escenaGuanyadorVermell')
    }, this)
    }
}


