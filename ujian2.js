function segitigaGanjilTambah (n) {
    var a = n*(n-1) + 1 
    var b = 0
    if (a > 1) {
        for (let i = 0 ; i < n; i++) {
            b += a
            a+=2
        }
        return b
    }
    return a
}

console.log(segitigaGanjilTambah(2))