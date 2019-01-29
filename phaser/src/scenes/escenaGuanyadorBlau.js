class escenaGuanyadorBlau extends Phaser.Scene{
    constructor (){
        super({key:'escenaGuanyadorBlau'});
        self.gameover = null;
        self.menu = null;
    }

    preload(){
        this.load.image('menu', 'assets/button_tornar-al-menu.png')
    }

    create(){
    self.gameover = this.add.text(400,300,'Jugador Blau és el guanyador',{fill:'#0000ff'})
    self.menu = this.add.image(30, 570, 'menu')
    gameover.setScale(2);
    gameover.setOrigin(0.5);
    self.menu.setScale(.2);
    self.menu.setOrigin(0.5);
    self.menu.setInteractive();
    menu.on('pointerdown', function (event) {
        var escenaDarrera = new escenaMenu();
        this.scene.add('escenaMenu',escenaDarrera,true)
        this.scene.remove('escenaGuanyadorBlau')
    }, this)
    }
}


