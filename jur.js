var penumpang = ["fadhil",undefined,"rio"];
var tambahPenumpang=function(namaP,penumpang){
    if(penumpang.length==0){
        penumpang.push(namaP);
    } else {
        for (var i=0;i<penumpang.length;i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namaP;
                return penumpang;
            } else if(i==penumpang.length - 1) {
                penumpang.push(namaP);
                return penumpang
            } else if(penumpang[i] == namaP){
                console.log(namaP +" sudah ada di dalam angkot!");
                return penumpang;
            }
        }
    }
    return penumpang;
}

var hapusPenumpang = function(namaP,penumpang){
    if(penumpang.length==0){
    console.log("angkot masih kosong!");
    } else {
        for(var i=0;i<penumpang.length;i++){
            if(penumpang[i] == namaP){
                penumpang[i] = undefined;
                return penumpang;
            } else if(i == penumpang.length - 1){
                console.log(namaP + " tidak ada dialam angkot!");
                return penumpang;
            }
        }
    }
    return penumpang;
}
