var masalah2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]


var hasil = []
var status = true

function spriral(input) {
    if (status) {
        for (var i = 0; i < input[0].length; i++) {
            for (var j = 0; j < input[0].length; j++) {
                if (i == 0) {
                    hasil.push(input[i][j])
                } else if (i < input[0].length - 1 && j == input[0].length - 1) {
                    hasil.push(input[i][j])
                }
            }
        }

        for (var i = input[0].length - 1; i >= 0; i--) {
            for (var j = input[0].length - 1; j >= 0; j--) {
                if (i == input[0].length - 1) {
                    hasil.push(input[i][j])
                } else if (i > 0 && j == 0) {
                    hasil.push(input[i][j])
                }
            }
        }

        var tmp = []
        for (var i = 1; i < input[0].length - 1; i++) {
            var tampung = []
            for (var j = 1; j < input[0].length - 1; j++) {
                tampung.push(input[i][j])
            }
            tmp.push(tampung)
        }

        if (tmp[0].length == 1) {
            hasil.push(tmp[0][0])
            return hasil
        } else {
            return spriral(input = tmp)
        }
    }
}
    console.log(spriral(masalah2))
