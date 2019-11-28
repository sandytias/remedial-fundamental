function tiketNonton(arr){
    var a25 = 0, a50 = 0;
    for(var i = 0;i<arr.length;i++){
      if(arr[i] == 25){
        a25 += 1;
      }
      if(arr[i] == 50){
        a25 -= 1; a50 += 1;
      }
      if(arr[i] == 100){
        if(a50 == 0 && a25 >= 3){
          a25 -= 3;
        }else{
          a25 -= 1; a50 -= 1;
        }
      }
      if(a25 < 0 || a50 < 0){
         return 'NO';
      }
    }
    return 'YES';
  }
 console.log(tiketNonton([25,25,50]))
 console.log(tiketNonton([25, 100]))
 console.log(tiketNonton([25,25,50,50,100]))
 

 