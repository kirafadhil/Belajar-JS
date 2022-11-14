var noAngkot = 1;
var angkotOperation = 6;
var jmlAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotOperation && noAngkot!==5) {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " tidak sedang beroperasi");
  }
}
