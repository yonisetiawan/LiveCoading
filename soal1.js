function deretBilangan(input) {
    var arr = []
    for (var i = 1; i <= input; i++) {
        arr.push(i * 3)
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0 && arr[i] % 6 == 0) {
            arr[i] = "KASKUS"
        } else if (arr[i] % 5 == 0) {
            arr[i] = "KAS"
        } else if (arr[i] % 6 == 0) {
            arr[i] = "KUS"
        }
    }
    console.log(arr);
}

deretBilangan(10)
