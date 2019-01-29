var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config)

function preload(){
    this.load.image('img','assets/hey.png')
}

function create(){
    var text = this.add.text(100,100, '0', {fill:'#fff'})
    var num = 0
    for(var i = 0; i<32; i++){
        //Creem valors random
        var x = Phaser.Math.Between(0, 800)
        var y = Phaser.Math.Between(0, 600)
        var s = Phaser.Math.FloatBetween(0.5,1.5)
        var r = Phaser.Math.FloatBetween(0, Phaser.Math.PI2)

        //Creem + posicoinem la imatge + rotacio
        var img = this.add.image(x, y, 'img')
        img.setScale(s)
        img.rotation = r
        //Fem la imatge interactiva per events
        img.setInteractive()
    } 

        //Event per eliminar les imatges
        this.input.on('gameobjectdown',function(pointer,gameobject){
            gameobject.destroy()
            num++;
            text.setText(num)
        });
}

function update(){

}