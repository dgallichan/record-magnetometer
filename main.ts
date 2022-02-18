datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    datalogger.deleteLog(datalogger.DeleteType.Fast)
})
let logging = false
datalogger.mirrorToSerial(false)
logging = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
datalogger.setColumns([
"mx",
"my",
"mz",
"ax",
"ay",
"az"
])
basic.showLeds(`
    # # # # #
    # # # # .
    # # # . .
    # # . # .
    # . . . #
    `)
loops.everyInterval(20, function () {
    if (logging) {
        datalogger.logData([
        datalogger.createCV("mx", input.magneticForce(Dimension.X)),
        datalogger.createCV("my", input.magneticForce(Dimension.Y)),
        datalogger.createCV("mz", input.magneticForce(Dimension.Z)),
        datalogger.createCV("ax", input.acceleration(Dimension.X)),
        datalogger.createCV("ay", input.acceleration(Dimension.Y)),
        datalogger.createCV("az", input.acceleration(Dimension.Z))
        ])
    }
})
