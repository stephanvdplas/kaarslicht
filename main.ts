let getal = 0
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    while (true) {
        getal = randint(0, 10)
        if (getal < 3) {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # .
                . # # # .
                . . # . .
                `)
        } else if (getal < 5) {
            basic.showLeds(`
                . . # . .
                . # # # .
                . # # # #
                . # # # .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # . .
                . # # # .
                . . # . .
                `)
        }
    }
})
basic.forever(function () {
	
})
