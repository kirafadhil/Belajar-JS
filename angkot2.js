var noAngkot=1;
var angkotOperation=6;
var jmlAngkot=10;

while(noAngkot<=angkotOperation){
    console.log("Angkot No. "+noAngkot+ " sedang beroperasi");
    noAngkot++;
}
for(noAngkot=angkotOperation+1;noAngkot<=jmlAngkot;noAngkot++){
    console.log("Angko No. "+noAngkot+ " tidak sedang beroperasi");
}