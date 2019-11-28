function pertumbuhanpenduduk(p0,persen,imigran,target){
    var p=p0
    var tahun = 0
    while(p<target){
        p = (p*(1+(persen/100))) + imigran
        p = Math.round(p)
        console.log(p)
        tahun++
    }
    return tahun
}
console.log(pertumbuhanpenduduk(1000,2,50,1200))