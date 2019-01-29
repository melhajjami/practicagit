class escenaJoc extends Phaser.Scene {
    constructor() {
        super({
            key: 'escenaJoc',
            active: false,
            physics: {
                default: 'matter',
                matter: {
                    debug: false,
                    gravity: {
                        x: 0,
                        y: 0
                    }
                }
            }
        });
        self.bola = null;
        self.cursor = null;
        self.lletraW = null;
        self.lletraS = null;
        self.plataforma = null;
        self.plataforma2 = null;
        self.menu = null;
    }

    preload() {
        this.load.image('plataforma1', 'assets/hey.png')
        this.load.image('plataforma2', 'assets/hey2.png')
        this.load.image('bola', 'assets/bola.png')
        this.load.image('menu', 'assets/button_tornar-al-menu.png')
    }

    create() {
        
        self.menu = this.add.image(30, 570, 'menu')
        self.menu.setOrigin(0.5)
        self.menu.setInteractive();
        self.menu.setScale(.2);
        menu.on('pointerdown', function (event) {
            var escenaDarrera = new escenaMenu();
            this.scene.add('escenaMenu', escenaDarrera, true)
            this.scene.remove('escenaJoc')
        }, this)

        self.cursor = this.input.keyboard.createCursorKeys();

        //Límits pantalla (parets invisibles)
        this.matter.world.setBounds();

        self.bola = this.matter.add.image(200, 200, 'bola');
        self.bola.setCircle();
        self.bola.setBounce(1);
        self.bola.setFriction(0);    //Friccio amb altres objectes
        self.bola.setFrictionAir(0); //Friccio amb l'aire <>
        self.bola.setVelocityY(20);
        self.bola.setScale(.5);



        var puntuacioText = this.add.text(400, 50, 'Puntuacio', { fill: '#fff' })
        puntuacioText.setOrigin(0.5) //punt de colocació és el centre del text

        var contadorVermell = 0;
        var puntuacioVermell = this.add.text(620, 50, contadorVermell, { fill: '#ff0000' })
        puntuacioVermell.setOrigin(0.5) //punt de colocació és el centre del text

        var contadorBlau = 0;
        var puntuacioBlau = this.add.text(170, 50, contadorBlau, { fill: '#0000ff' })
        puntuacioBlau.setOrigin(0.5) //punt de colocació és el centre del text

        puntuacioText.setScale(4);
        puntuacioBlau.setScale(4);
        puntuacioVermell.setScale(4)

        self.plataforma = this.matter.add.image(20, 470, 'plataforma1')
        self.plataforma.body.isStatic = true;

        self.plataforma2 = this.matter.add.image(780, 130, 'plataforma2')
        self.plataforma2.body.isStatic = true;

        self.lletraW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        self.lletraS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

        self.bola.collideWorldBounds = true;

        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {
            if (bodyA.gameObject === null && bodyB.gameObject.x > 780) {
                contadorBlau++
                puntuacioBlau.setText(contadorBlau)
                if (contadorBlau > 4 && contadorBlau - contadorVermell > 1) {
                    var blau = new escenaGuanyadorBlau();
                    this.scene.add('escenaGuanyadorBlau', blau, true)
                    this.scene.remove('escenaJoc')
                    this.scene.remove('escenaMatchPoint')
                }else if(contadorBlau > 3 && contadorBlau-contadorVermell==0 && typeof matchpoint !== "object"){
                    var matchpoint = new escenaMatchPoint();
                    this.scene.add('escenaMatchPoint', matchpoint, true)
                   
                }
            } else if (bodyA.gameObject === null && bodyB.gameObject.x < 20) {
                contadorVermell++
                puntuacioVermell.setText(contadorVermell)
                if (contadorVermell > 4 && contadorVermell - contadorBlau > 1) {
                    var vermell = new escenaGuanyadorVermell();
                    this.scene.add('escenaGuanyadorVermell', vermell, true)
                    this.scene.remove('escenaJoc')
                    this.scene.remove('escenaMatchPoint')
                } else if(contadorVermell > 3 && contadorVermell-contadorBlau==0 && typeof matchpoint !== "object"){
                    var matchpoint = new escenaMatchPoint();
                    this.scene.add('escenaMatchPoint', matchpoint, true)
                }
            }
        }, this);
    }
    update(time, delta) {
        var velPlataforma = 1000;
        var velbola = 10;


        if (self.cursor.up.isDown) {
            if (self.plataforma2.y > 110) {
                self.plataforma2.y = self.plataforma2.y - velPlataforma * delta / 1000.0
            }
        }
        else if (self.cursor.down.isDown) {
            if (self.plataforma2.y < 494) {
                self.plataforma2.y = self.plataforma2.y + velPlataforma * delta / 1000.0
            }
        }
        if (self.lletraW.isDown) {
            if (self.plataforma.y > 110) {
                self.plataforma.y = self.plataforma.y - velPlataforma * delta / 1000.0
            }
        } else if (self.lletraS.isDown) {
            if (self.plataforma.y < 490) {
                self.plataforma.y = self.plataforma.y + velPlataforma * delta / 1000.0
            }
        }

        var v = new Phaser.Math.Vector2(self.bola.body.velocity);
        if (v.x >= 0 && v.x < 5) {
            v.x = 100;
        } else if (v.x < 0 && v.x > -5) {
            v.x = -100;
        }

        if (v.x === 0 && v.y === 0) {

        }
        else {
            var nova_velocitat = v.normalize();
            nova_velocitat.scale(velbola);
            self.bola.setVelocity(nova_velocitat.x, nova_velocitat.y);
        }
    }
}

