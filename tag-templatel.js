// Tagged Templates
// const nama = "Muhammad Naufal Fadhil Harvian";
// const umur = 21;

// function tes(strings, ...args) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //     result += `${str}${args[i] || ''}`;
//   // });
//   // return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${args[i] || ""}`,
//     ""
//   );
// }

// const str = tes`Halo, nama saya ${nama}, dan saya berumur ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = "Muhammad Naufal Fadhil Harvian";
const umur = 21;
const email = "fadhil@gmail.com";

function highlight(strings, ...args) {

  return strings.reduce(
    (result, str, i) => `${result}${str}<span class="hl">${args[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, dan saya berumur ${umur} tahun. dan email
saya adalah : ${email}`;
document.body.innerHTML = str;

