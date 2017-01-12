
function solvePola(str) {
 //write your code here
  var tmp = str.split(" ")

 var arr1 = tmp[0].split("")
 var arr2 = Number(str.match(/\d{3} /g)[0].trim())
 var arr3 = tmp[tmp.length-1].split("")

 var hasil = []
 var index = arr1.indexOf("#")
 var index2 = arr3.indexOf("#")
 for (var i = 1; i < 10; i++) {
   arr1[index] = i
   var hsl1 = Number(arr1.join(""))*arr2
   for (var j = 1; j < 10; j++) {
     arr3[index2]=j
     var hsl2 = Number(arr3.join(""))
     if(hsl1 == hsl2){
       hasil.push(i,j)
     }
   }
 }
 console.log(hasil)
}

solvePola("42#3 * 188 = 80#204");
solvePola("8#61 * 895 = 78410#5")
