
document.querySelector("#printButton").addEventListener('click',()=>{
    // print()
    window.print()
})

// function print(event){
//     // event.preventDefault()
// var element = document.getElementById('printContent');
// var opt = {
//   margin:       .2,
//   filename:     'myfile.pdf',
//   image:        { type: 'jpeg', quality: 0.98 },
//   html2canvas:  { scale: 1 },
//   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
// };

// // New Promise-based usage:
// html2pdf().set(opt).from(element).save();

// // Old monolithic-style usage:
// html2pdf(element, opt);

// }