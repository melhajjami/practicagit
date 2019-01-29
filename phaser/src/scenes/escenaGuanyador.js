class escenaMenu extends Phaser.Scene{
    constructor (){
        super({key:'escenaMenu'});
        self.play = null;
    }

    preload(){
        
    }

    create(){
    self.play = this.add.text(400,400,'play',{fill:'#fff'})
    play.setOrigin(0.5);
    play.on('pointerdown', function(event) {
        
    }, this)
    }
}


