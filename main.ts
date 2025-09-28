sprites.onCreated(SpriteKind.Enemy, function (sprite) {
	
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile53`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile37`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(90, 100)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile40`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile54`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vy = randint(-100, -90)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        playerCursor.y += -16
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile48`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile58`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vy = randint(90, 100)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile63`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile55`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vy = randint(90, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile46`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile55`)
    tiles.placeOnTile(sprite, location)
    direction = 3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile19`)) {
        	
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile1`)) {
            text = sprites.create(img`
                . 9 9 . 9 9 9 . 9 . . . 9 9 9 . . 9 9 . 9 9 9 . . . . 9 . . . . 9 . 9 . . 9 . . 9 9 9 
                9 . . . 9 . . . 9 . . . 9 . . . 9 . . . . 9 . . . . 9 . 9 . . . 9 9 9 . 9 . 9 . 9 . 9 
                . 9 9 . 9 9 . . 9 . . . 9 9 . . 9 . . . . 9 . . . . 9 9 9 . . . 9 9 9 . 9 9 9 . 9 9 9 
                . . 9 . 9 . . . 9 . . . 9 . . . 9 . . . . 9 . . . . 9 . 9 . . . 9 . 9 . 9 . 9 . 9 . . 
                9 9 9 . 9 9 9 . 9 9 9 . 9 9 9 . . 9 9 . . 9 . . . . 9 . 9 . . . 9 . 9 . 9 . 9 . 9 . . 
                `, SpriteKind.Food)
            text.setPosition(80, 12)
            tiles.setCurrentTilemap(tilemap`level5`)
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile0`)) {
            map = 1
            text.setImage(img`
                .99.999.9...999..99.999...9.9..9..9.9.999...999.9....9..9.9.999.999
                9...9...9...9...9....9....9.9.9.9.9.9.9.9...9.9.9...9.9.9.9.9...9.9
                .99.99..9...99..9....9.....9..9.9.9.9.999...999.9...999..9..99..999
                ..9.9...9...9...9....9.....9..9.9.9.9.99....9...9...9.9..9..9...99.
                999.999.999.999..99..9.....9...9...9..9.9...9...999.9.9..9..999.9.9
                `)
            text.setPosition(80, 12)
            tiles.setCurrentTilemap(tilemap`level0`)
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile3`)) {
            racer = 0
            raceSetup()
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile4`)) {
            racer = 1
            raceSetup()
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile5`)) {
            racer = 2
            raceSetup()
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile6`)) {
            racer = 3
            raceSetup()
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile7`)) {
            racer = 4
            raceSetup()
        }
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile8`)) {
            racer = 5
            raceSetup()
        }
    }
    if (menu == 0 && canMove == 1) {
        speed += 5
        if (speed > 100) {
            speed = 100
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        playerCursor.x += -16
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile42`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile56`)
    tiles.placeOnTile(sprite, location)
    direction = 2
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile65`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile56`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(-100, -90)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile50`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile37`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vy = randint(90, 100)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile47`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile37`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(-100, -90)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile59`)
    tiles.placeOnTile(sprite, location)
    direction = 4
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        playerCursor.x += 16
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile58`)
    tiles.placeOnTile(sprite, location)
    direction = 1
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile51`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile61`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(90, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile60`)
    tiles.placeOnTile(sprite, location)
    direction = 1
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile68`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile60`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vy = randint(-100, -90)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (menu == 1) {
        playerCursor.y += 16
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile67`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile59`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(90, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile54`)
    tiles.placeOnTile(sprite, location)
    direction = 3
})
function raceSetup () {
    direction = 1
    menu = 0
    sprites.destroy(playerCursor)
    sprites.destroy(text)
    tiles.setCurrentTilemap(tilemap`level12`)
    characters = [
    img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f 5 5 5 5 5 5 f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 f f f f 5 f f . . 
        . . f 4 4 4 f f b b f 5 5 f . . 
        . . f 4 f f f b b f f f 4 f . . 
        . . f f f 9 f d d f 9 f f f . . 
        . . . f d 1 f d d f 1 d f . . . 
        . . . f d d d d d d d d f . . . 
        . . . f f f d c c d f f f . . . 
        . . f e f 4 4 4 4 4 4 f e f . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,
    img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f f e e e e e e f f . . 
        . f f e e e e e e e e f f . 
        . f e e e e f f e e e e f . 
        . f e e e f 4 4 f e e e f . 
        . f e e f 4 4 4 4 f e e f . 
        . f e f 9 f d d f 9 f e f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f d d d d d d f 4 e . 
        . 4 d f 1 1 1 1 1 1 c d 4 . 
        . 4 4 f 1 1 1 1 1 1 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,
    img`
        . . . . f f f f . . . . 
        . . f f 2 2 2 2 f f . . 
        . f f 2 2 2 2 2 2 f f . 
        f f 2 f f f 2 2 2 2 2 f 
        f 2 f 4 4 4 f 2 2 2 2 f 
        f f f 4 4 4 4 f f f f f 
        f 4 e e e e e e e e 4 f 
        f 4 e f f e e f f e 4 f 
        f 4 e e e e e e e e 4 f 
        . f 4 e e b b e e 4 f . 
        . f f 4 e e e e 4 f f . 
        f f f 7 7 7 7 7 7 f f f 
        4 e f 7 7 7 7 7 7 f e 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,
    img`
        . . . . . f f f f . . . . . 
        . . . f f e e e e f f . . . 
        . . f e e e e e e e e f . . 
        . f e e e e e e e e e e f . 
        . f e e e d b b d e e e f . 
        f e e e b 4 4 4 4 b e e e f 
        f e e c c 4 4 4 4 c c e e f 
        f b b f 3 f 4 4 f 3 f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 7 7 7 7 6 f 4 e . 
        . 4 d c 7 7 7 7 7 7 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . f f f f f f f f . . . 
        . . . . f f . . f f . . . . 
        `,
    img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f f 5 5 5 5 5 5 f f . . 
        . f f 5 5 5 5 5 5 5 5 f f . 
        . f 5 5 5 5 f f 5 5 5 5 f . 
        . f 5 5 5 f 4 4 f 5 5 5 f . 
        . f 5 5 f 4 4 4 4 f 5 5 f . 
        . f 5 f 3 f 4 4 f 3 f 5 f . 
        . f 5 4 1 f d d f 1 4 5 f . 
        . f 5 f d d d d d d f 5 f . 
        . f 5 f e 4 4 4 4 e f 5 f . 
        . e 5 f 9 9 9 9 9 9 f 5 e . 
        . 4 d f 9 9 9 9 9 9 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `,
    img`
        . . . . . f f f f . . . . . 
        . . . f f 9 2 2 2 f f . . . 
        . . f 9 9 9 9 2 2 2 2 f . . 
        . f 9 9 9 9 9 2 2 2 2 2 f . 
        . f 9 9 9 d b b d 2 2 2 f . 
        f 9 9 9 b 4 4 4 4 b 2 2 2 f 
        f 9 9 c c 4 4 4 4 c c 2 2 f 
        f 6 6 f b f 4 4 f b f e e f 
        f 6 6 4 1 f d d f 1 4 e e f 
        . f 6 f d d d d d d f e f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f c a a a a c f 4 e . 
        . 4 d c a a a a a a c d 4 . 
        . 4 f c b c b c b c c f 4 . 
        . . f f b c b c b b f f . . 
        . . . . f f f f f f . . . . 
        `
    ]
    playerRacer = sprites.create(characters.removeAt(racer), SpriteKind.Player)
    scene.cameraFollowSprite(playerRacer)
    tiles.placeOnRandomTile(playerRacer, assets.tile`myTile39`)
    startPosition = playerRacer.tilemapLocation().row
    startPosition += 1
    for (let index = 0; index < 3; index++) {
        enemyRacer = sprites.create(characters.shift(), SpriteKind.Enemy)
        tiles.placeOnRandomTile(enemyRacer, assets.tile`myTile35`)
        tiles.placeOnTile(enemyRacer, tiles.getTileLocation(enemyRacer.tilemapLocation().column, startPosition))
        startPosition += 1
    }
    music.play(music.createSong(hex`0046000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800480004000500030203040c000d000302030414001500030203041c001d00130c0d0e0f101112000102030405060708090a0b24002500030203042c002d00030203043400350003020304`), music.PlaybackMode.LoopingInBackground)
    game.setDialogFrame(img`
        cccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccb888888888888888888888888888888888888888888bcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccb888888888888888888888888888888888888888888bcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
        ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
        cccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Announcer = sprites.create(characters._pickRandom(), SpriteKind.Food)
    tiles.placeOnRandomTile(Announcer, assets.tile`myTile71`)
    game.showLongText("Attention Racers!", DialogLayout.Bottom)
    game.showLongText("The race is about to begin!", DialogLayout.Bottom)
    music.stopAllSounds()
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
    Announcer.sayText("In 3...")
    timer.after(1000, function () {
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        Announcer.sayText("2...")
        timer.after(1000, function () {
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
            Announcer.sayText("1...")
            timer.after(1000, function () {
                music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
                Announcer.sayText("Go!!")
                raceStart()
            })
        })
    })
}
function raceStart () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        for (let index = 0; index < randint(85, 150); index++) {
            value.vx += 1
        }
    }
    canMove = 1
    speed = 50
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile45`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile57`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(-100, -90)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile57`)
    tiles.placeOnTile(sprite, location)
    direction = 4
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile41`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile37`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vy = randint(-100, -90)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile69`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile61`)
    tiles.placeOnTile(sprite, location)
    direction = 2
})
let Announcer: Sprite = null
let enemyRacer: Sprite = null
let startPosition = 0
let playerRacer: Sprite = null
let characters: Image[] = []
let speed = 0
let racer = 0
let map = 0
let text: Sprite = null
let direction = 0
let playerCursor: Sprite = null
let menu = 0
let canMove = 0
canMove = 0
menu = 0
tiles.setCurrentTilemap(tilemap`level6`)
let cutScene = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(cutScene, tiles.getTileLocation(6, 2))
game.setDialogTextColor(1)
game.setDialogFrame(img`
    cccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccb888888888888888888888888888888888888888888bcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccb888888888888888888888888888888888888888888bcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    `)
game.setDialogCursor(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 6 6 6 f f f 5 5 f f f 6 6 6 1 
    1 6 6 f f 5 5 5 5 5 5 f f 6 6 1 
    1 6 f f 5 5 5 5 5 5 5 5 f f 6 1 
    1 6 f 5 5 5 5 f f f f 5 f f 6 1 
    1 6 f 4 4 4 f f b b f 5 5 f 6 1 
    1 6 f 4 f f f b b f f f 4 f 6 1 
    1 6 f f f 9 f d d f 9 f f f 6 1 
    1 6 6 f d 1 f d d f 1 d f 6 6 1 
    1 6 6 f d d d d d d d d f 6 6 1 
    1 6 6 f f f d c c d f f f 6 6 1 
    1 6 f e f 4 4 4 4 4 4 f e f 6 1 
    1 6 e 4 f 2 2 2 2 2 2 f 4 e 6 1 
    1 6 e e f 2 2 2 2 2 2 f e e 6 1 
    1 6 6 6 6 f f f f f f 6 6 6 6 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("Time to play my favourite game!", DialogLayout.Bottom)
game.setDialogCursor(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 6 6 6 f f f 5 5 f f f 6 6 6 1 
    1 6 6 f f 5 5 5 5 5 5 f f 6 6 1 
    1 6 f f 5 5 5 5 5 5 5 5 f f 6 1 
    1 6 f 5 5 5 5 f f f f 5 f f 6 1 
    1 6 f 4 4 4 f f b b f 5 5 f 6 1 
    1 6 f 4 f f f b b f f f 4 f 6 1 
    1 6 f f f 9 9 d d 9 9 f f f 6 1 
    1 6 6 f f 1 1 d d 1 1 f f 6 6 1 
    1 6 6 f d d d d d d d d f 6 6 1 
    1 6 6 f f d d c c d d f f 6 6 1 
    1 6 f e f 4 4 c c 4 4 f e f 6 1 
    1 6 e 4 f 2 2 2 2 2 2 f 4 e 6 1 
    1 6 e e f 2 2 2 2 2 2 f e e 6 1 
    1 6 6 6 6 f f f f f f 6 6 6 6 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("Wait, WHAT?", DialogLayout.Bottom)
cutScene.sayText("AAaah!")
pause(500)
tiles.setCurrentTilemap(tilemap`level9`)
sprites.destroy(cutScene)
pause(1000)
menu = 1
tiles.setCurrentTilemap(tilemap`level1`)
game.setDialogFrame(img`
    cccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccb888888888888888888888888888888888888888888bcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccb888888888888888888888888888888888888888888bcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbffffffff8ffffffffff8fffffffffff8ffffffffffbcc
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccc
    `)
game.setDialogCursor(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 6 6 6 f f f 5 5 f f f 6 6 6 1 
    1 6 6 f f 5 5 5 5 5 5 f f 6 6 1 
    1 6 f f 5 5 5 5 5 5 5 5 f f 6 1 
    1 6 f 5 5 5 5 f f f f 5 f f 6 1 
    1 6 f 4 4 4 f f b b f 5 5 f 6 1 
    1 6 f 4 f f f b b f f f 4 f 6 1 
    1 6 f f f 9 f d d f 9 f f f 6 1 
    1 6 6 f d 1 f d d f 1 d f 6 6 1 
    1 6 6 f d d d d d d d d f 6 6 1 
    1 6 6 f f f d c c d f f f 6 6 1 
    1 6 f e f 4 4 4 4 4 4 f e f 6 1 
    1 6 e 4 f 2 2 2 2 2 2 f 4 e 6 1 
    1 6 e e f 2 2 2 2 2 2 f e e 6 1 
    1 6 6 6 6 f f f f f f 6 6 6 6 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.setDialogTextColor(1)
game.showLongText("Wait...", DialogLayout.Bottom)
game.setDialogCursor(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 6 6 6 f f f 5 5 f f f 6 6 6 1 
    1 6 6 f f 5 5 5 5 5 5 f f 6 6 1 
    1 6 f f 5 5 5 5 5 5 5 5 f f 6 1 
    1 6 f 5 5 5 5 f f f f 5 f f 6 1 
    1 6 f 4 4 4 f f b b f 5 5 f 6 1 
    1 6 f 4 f f f b b f f f 4 f 6 1 
    1 6 f f f e e d d e e f f f 6 1 
    1 6 6 f d 1 f d d f 1 d f 6 6 1 
    1 6 6 f d d d d d d d d f 6 6 1 
    1 6 6 f f f d c c d f f f 6 6 1 
    1 6 f e f 4 4 4 4 4 4 f e f 6 1 
    1 6 e 4 f 2 2 2 2 2 2 f 4 e 6 1 
    1 6 e e f 2 2 2 2 2 2 f e e 6 1 
    1 6 6 6 6 f f f f f f 6 6 6 6 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("Am I IN the game?", DialogLayout.Bottom)
game.setDialogCursor(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 6 6 6 f f f 5 5 f f f 6 6 6 1 
    1 6 6 f f 5 5 5 5 5 5 f f 6 6 1 
    1 6 f f 5 5 5 5 5 5 5 5 f f 6 1 
    1 6 f 5 5 5 5 f f f f 5 f f 6 1 
    1 6 f 4 4 4 f f b b f 5 5 f 6 1 
    1 6 f 4 f f f b b f f f 4 f 6 1 
    1 6 f f f 9 f d d f 9 f f f 6 1 
    1 6 6 f d 1 f d d f 1 d f 6 6 1 
    1 6 6 f d d c d d d d d f 6 6 1 
    1 6 6 f f f d c c d f f f 6 6 1 
    1 6 f e f 4 4 4 4 4 4 f e f 6 1 
    1 6 e 4 f 2 2 2 2 2 2 f 4 e 6 1 
    1 6 e e f 2 2 2 2 2 2 f e e 6 1 
    1 6 6 6 6 f f f f f f 6 6 6 6 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("This is kinda cool!", DialogLayout.Bottom)
game.setDialogCursor(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 6 6 6 f f f 5 5 f f f 6 6 6 1 
    1 6 6 f f 5 5 5 5 5 5 f f 6 6 1 
    1 6 f f 5 5 5 5 5 5 5 5 f f 6 1 
    1 6 f 5 5 5 5 f f f f 5 f f 6 1 
    1 6 f 4 4 4 f f b b f 5 5 f 6 1 
    1 6 f 4 f f f b b f f f 4 f 6 1 
    1 6 f f f 9 f d d f 9 f f f 6 1 
    1 6 6 f d 1 f d d f 1 d f 6 6 1 
    1 6 6 f d d d d d d d d f 6 6 1 
    1 6 6 f f f d c c d f f f 6 6 1 
    1 6 f e f 4 4 4 4 4 4 f e f 6 1 
    1 6 e 4 f 2 2 2 2 2 2 f 4 e 6 1 
    1 6 e e f 2 2 2 2 2 2 f e e 6 1 
    1 6 6 6 6 f f f f f f 6 6 6 6 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `)
game.showLongText("It says: Use the arrow keys or D-pad to move the cursor, press A to select a button, and for instructions on the game, Press the question mark.", DialogLayout.Bottom)
playerCursor = sprites.create(img`
    9 9 9 9 9 . . . . . . 9 9 9 9 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 . . . . . . . . . . . . . . 9 
    9 9 9 9 9 . . . . . . 9 9 9 9 9 
    `, SpriteKind.Food)
tiles.placeOnTile(playerCursor, tiles.getTileLocation(5, 4))
playerCursor.setStayInScreen(true)
forever(function () {
    if (menu == 1) {
        if (playerCursor.y > 104) {
            playerCursor.y = 104
        }
    }
})
forever(function () {
    if (menu == 0) {
        if (direction == 1) {
            playerRacer.setVelocity(0, 0)
            playerRacer.vx = speed
        }
        if (direction == 2) {
            playerRacer.setVelocity(0, 0)
            playerRacer.vy = 0 - speed
        }
        if (direction == 3) {
            playerRacer.setVelocity(0, 0)
            playerRacer.vx = 0 - speed
        }
        if (direction == 4) {
            playerRacer.setVelocity(0, 0)
            playerRacer.vy = speed
        }
    }
})
game.onUpdateInterval(100, function () {
    speed += -1
    if (speed < 0) {
        speed = 0
    }
})
