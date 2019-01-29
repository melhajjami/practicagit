var config = {
    type: Phaser.AUTO,  //Canvas, WebGL o Automatic
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var img;
var fletxes;
var vel = 200;
var lletraB;
var textBoto;
var botoEscalarGran;
var botoEscalarPetit;
var contenidor;

function preload () {

    console.log('preload')

    flextes = this.input.keyboard.createCursorKeys()

    this.load.image('img', 'assets/hey.png')
}

function create () {

    img = this.add.image(200,200, 'img')

    //Tintar
    //var color = Phaser.Display.Color.GetColor(255, 0, 0)
    //img.setTint(color)

    lletraB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B)

    this.input.keyboard.on("keydown_V", function(event) {
        console.log("V");
        this.input.keyboard.stopListeners()
    }, this);

    //Crearem el boto
    botoEscalarGran = this.add.text(250,300,'Fer Gran',{fill:'#fff'})
    botoEscalarPetit = this.add.text(350,300,'Fer Petit',{fill:'#fff'})
    botoRotar = this.add.text(450,300,'Rotar',{fill:'#fff'})

    //Li diem que emeti senyals
    botoEscalarGran.setInteractive()
    botoEscalarPetit.setInteractive()
    botoRotar.setInteractive()
    img.setInteractive()

    //Event passar per sobre el ratoli
    // textBoto.on('pointerover', function(event) {
    //   console.log("Mouse per sobre")
    //}) 

    //Event onclick
    botoEscalarGran.on('pointerdown', function(event) {
        img.setScale(2)
    }, this)

    botoEscalarPetit.on('pointerdown', function(event) {
        img.setScale(.5)
    }, this)

    //Event on click rotate
    botoRotar.on('pointerdown', function(event){
        img.rotation = img.rotation + 3.1416 //90 graus en radiants
    }, this)


    //Onclick al Isaac
    //img.on('pointerdown', function(event){
    //    this.add.text(600, 600, 'Rotació', {fill:'#fff'})
    //    img.rotation = 3.1416
    //}, this)

    //Container
    //contenidor = this.add.container(300,0)
    //var img1 = this.add.image(100, 100, 'img')
    //var img2 = this.add.image(200, 200, 'img')
    //var img3 = this.add.image(300, 300, 'img')
    //contenidor.add([img1, img2, img3])

    //Event: Mouse posicio
    //contenidor = this.add.container(0, 0)
    //this.input.on('pointerdown', function(pointer) {
    //    var img = this.add.image(pointer.x, pointer.y, 'img')
    //    contenidor.add(img)
    //}, this)
    
}

function update (time, delta) {

    if (flextes.left.isDown) {
        contenidor.x = contenidor.x - vel * delta / 1000.0 //per pasar-lo a segons
    }
    if (flextes.right.isDown) {
        contenidor.x = contenidor.x + vel * delta / 1000.0
    }
    if (flextes.up.isDown) {
        contenidor.y = contenidor.y - vel * delta / 1000.0
    }
    if (flextes.down.isDown) {
        contenidor.y = contenidor.y + vel * delta / 1000.0
    }
    
    if(lletraB.isDown) {
        console.log("B")
    }
}