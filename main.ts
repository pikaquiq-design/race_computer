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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile72`, function (sprite, location) {
    sprites.destroy(sprite)
    rank = winOrder.length + 1
    winOrder.push(sprite.image)
    if (winOrder.length == 4) {
        raceEnd()
    }
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
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile2`)) {
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
            game.showLongText("When the race starts, press the A button as much as possible to go faster. The bar on the side shows how fast you are going.", DialogLayout.Bottom)
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
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile79`)) {
            map = 2
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
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile80`)) {
            map = 3
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
        if (tiles.tileAtLocationEquals(playerCursor.tilemapLocation(), assets.tile`myTile82`)) {
            map = 4
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
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile70`, function (sprite, location) {
    sprites.destroy(sprite)
    winOrder.push(sprite.image)
    if (winOrder.length == 4) {
        raceEnd()
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile65`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile56`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(-100, -90)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile73`, function (sprite, location) {
    sprites.destroy(sprite)
    winOrder.push(sprite.image)
    if (winOrder.length == 4) {
        raceEnd()
    }
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
    music.stopAllSounds()
    direction = 1
    menu = 0
    sprites.destroy(playerCursor)
    sprites.destroy(text)
    if (map == 1) {
        tiles.setCurrentTilemap(tilemap`level12`)
    }
    if (map == 2) {
        tiles.setCurrentTilemap(tilemap`level8`)
    }
    if (map == 3) {
        tiles.setCurrentTilemap(tilemap`level10`)
    }
    if (map == 4) {
        tiles.setCurrentTilemap(tilemap`level11`)
    }
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
    music.play(music.createSong(hex`0078000408060300001c00010a006400f401640000040000000000000000000000000005000004250000000400010f08000c00010c18001c00020c0f28002c00010a30003400010f38003c00010607001c00020a006400f4016400000400000000000000000000000000000000034a0000000800011208001000010f18002000020f1228003000010d30003800011238004000010a40004800010f48005000010c58006000020c0f60006800011268007000010c70007800010f09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80068010000010001050400050001070800090001050a000b0001050c000d0001071000110001051400150001071800190001051a001b0001051c001d0001072000210001052400250001072800290001052a002b0001052c002d0001073000310001053400350001073800390001053a003b0001053c003d0001074000410001054400450001074800490001054a004b0001054c004d0001075000510001055400550001075800590001055a005b0001055c005d0001076000610001056400650001076800690001056a006b0001056c006d0001077000710001057400750001077800790001057a007b0001057c007d0001078000810001058400850001078800890001058a008b0001058c008d0001079000910001059400950001079800990001059a009b0001059c009d000107a000a1000105a400a5000107a800a9000105aa00ab000105ac00ad000107b000b1000105b400b5000107b800b9000105ba00bb000105bc00bd000107`), music.PlaybackMode.LoopingInBackground)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        for (let index = 0; index < randint(85, 150); index++) {
            value.vx += 1
        }
    }
    canMove = 1
    speed = 50
    speedBar = statusbars.create(4, 50, StatusBarKind.Energy)
    speedBar.positionDirection(CollisionDirection.Right)
    speedBar.max = 100
    speedBar.setColor(7, 2)
    speedBar.setBarBorder(1, 15)
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile45`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile57`)
    tiles.placeOnTile(sprite, location)
    sprite.setVelocity(0, 0)
    sprite.vx = randint(-100, -90)
})
function raceEnd () {
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    scene.centerCameraAt(0, 0)
    tiles.setCurrentTilemap(tilemap`level9`)
    timer.after(500, function () {
        tiles.setCurrentTilemap(tilemap`level7`)
        winSprite = sprites.create(winOrder.shift(), SpriteKind.Food)
        tiles.placeOnRandomTile(winSprite, assets.tile`myTile74`)
        winSprite.y += -16
        _2Sprite = sprites.create(winOrder.shift(), SpriteKind.Food)
        tiles.placeOnRandomTile(_2Sprite, assets.tile`myTile76`)
        _2Sprite.y += -16
        _3Sprite = sprites.create(winOrder.shift(), SpriteKind.Food)
        tiles.placeOnRandomTile(_3Sprite, assets.tile`myTile77`)
        _3Sprite.y += -8
        LoseSprite = sprites.create(winOrder.shift(), SpriteKind.Food)
        tiles.placeOnRandomTile(LoseSprite, assets.tile`myTile81`)
        timer.after(500, function () {
            if (rank == 4) {
                music.play(music.createSong(hex`0078000408020306001c00010a006400f4016400000400000000000000000000000000000000022e000000040002202204000800011b08000c0001190c001000011b14001800011d2000240003191d2028002c0002181908001c000e050046006603320000040a002d0000006400140001320002010002150000000400010f20002400030c0f1228002c00020a0c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000600300031000104`), music.PlaybackMode.UntilDone)
                game.gameOver(false)
            } else if (rank == 3) {
                music.play(music.createSong(hex`0078000408020502001c000c960064006d019001000478002c010000640032000000000a060005180008001000012a10001800012918002000012a20002800012904001c00100500640000041e000004000000000000000000000000000a0400040c0000000800012708000c00012005001c000f0a006400f4010a0000040000000000000000000000000000000002060000000400011e08001c000e050046006603320000040a002d0000006400140001320002010002120010001400012414001800012018001c00012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80018002000210001072400250001072800290001072c002d000107`), music.PlaybackMode.UntilDone)
                game.gameOver(false)
            } else if (rank == 2) {
                music.play(music.createSong(hex`0078000408020205001c000f0a006400f4010a00000400000000000000000000000000000000022a000000040002202408000c00021d201000140002242718001c000220242400280002272a2c00300002272a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800240008000900010810001100010218001900010a2400250001022800290001042c002d000103`), music.PlaybackMode.UntilDone)
                game.gameOver(true)
            } else if (rank == 1) {
                music.play(music.createSong(hex`0078000408020300001c00010a006400f4016400000400000000000000000000000000050000041e0000000400011d08000c00012010001400011b16001800012018001c00012501001c000f05001202c102c20100040500280000006400280003140006020004250000000400012008000c00012410001400011e16001800012418001c0001292000280002202409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8002a0000000100010a08000900010810001100010a18001900010820002100010a280029000108300031000108`), music.PlaybackMode.UntilDone)
                game.gameOver(true)
            }
        })
    })
}
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
let LoseSprite: Sprite = null
let _3Sprite: Sprite = null
let _2Sprite: Sprite = null
let winSprite: Sprite = null
let speedBar: StatusBarSprite = null
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
let rank = 0
let playerCursor: Sprite = null
let menu = 0
let canMove = 0
let winOrder: Image[] = []
winOrder = []
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
music.play(music.createSong(hex`0078000408040206001c00010a006400f401640000040000000000000000000000000000000002740000000400020d2208000c0002122710001400020a1e140018000211251c002000040c0f202428002c00020d2230003400020c2038003c0002122740004400020d2248004c0002122750005400020a1e540058000211255c006000040c0f202468006c00020d2270007400020c2078007c0002081e09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003c000000010001120800090001141000110001121400150001121c001d0001144000410001124800490001135000510001125400550001125c005d000113`), music.PlaybackMode.LoopingInBackground)
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
    speed += -2
    if (speed < 0) {
        speed = 0
    }
})
game.onUpdateInterval(100, function () {
    if (canMove == 1) {
        speedBar.value = speed
    }
})
