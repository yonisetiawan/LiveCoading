var array_masalah = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

function spriral(input) {
    var hasil = []
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

    for (var i = 0; i < input[0].length; i++) {
        for (var j = 1; j < input[0].length-1; j++) {
            if (i == 1) {
                hasil.push(input[i][j])
            }
        }
    }

    for (var i = input[0].length - 1; i >= 0; i--) {
        for (var j = input[0].length - 2; j > 0; j--) {
            if (i == input[0].length - 2) {
                hasil.push(input[i][j])
            }
        }
    }


    console.log(hasil);


}
spriral(array_masalah)
