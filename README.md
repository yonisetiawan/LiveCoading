# LiveCoading
Test Live Coading

Soal 1 :
Buat sebuah function yang menerima input sebuah number.
Function tersebut akan mengembalikan sebuah array yang length nya sesuai dengan input di atas, isi dari array tersebut adalah deretan bilangan kelipatan 3, dengan syarat apabila habis dibagi dengan 5 cetak 'KAS' dan apabila habis dibagi dengan 6 cetak 'KUS' dan apabila bisa dibagi oleh angka 5 dan 6 cetak 'KASKUS'. Driver code :

function deretBilangan(n){

 //write your code here

}

deretBilangan(10);

// result: [3, "KUS", 9, "KUS", "KAS", "KUS", 21, "KUS", 27, "KASKUS"]

==========

Soal 2 :
Buat sebuah function yang menerima string. String tersebut merupakan suatu pola perhitungan dari beberapa bilangan namun bilangan nya itu sendiri tidak lengkap, dan tugasmu adalah menebak angka yang seharusnya, sehingga apabila bilangan tersebut telah lengkap, maka akan membentuk suatu pola perhitungan yang benar. Driver code :

function solvePola(str) {

 //write your code here

}

solvePola(“42#3 * 188 = 80#204”);

// result: [8, 5]

==========

Soal ke 3 : Buatlah Sebuah fungsi yang dapat mengembalikan data dengan pola spiral. Anggap kita memiliki array spiral;

var array_masalah = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]


// result : [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]
