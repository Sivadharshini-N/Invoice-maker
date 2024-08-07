
function additem() {
    event.preventDefault();
    console.log("Adding new item row");
    var newRow = document.createElement('tr');

    newRow.innerHTML = `<td><textarea name="" id="" placeholder="Enter item " rows="3"></textarea><br><br><input type="text" placeholder="HSN/SAC"></td>
        <td><input type="number" class="qty" value="1" onchange="calculateTotals()"></td>
        <td><input type="number" oninput="calculateTotals()"  value="0.00" class="rate"></td>
        <td><input type="number" class="sgst"  value="0"  oninput="calculateTotals()" ><br><span class="csgst"></span></td>
        <td><input type="number" class="cgst" value="0" oninput="calculateTotals()"><br><p class="ccgst"></p></td>
        <td><input type="number" class="cess" value="0" ><br><p class="ccess"></p></td>
        <td><p class="total"></p></td>`;

    var tableBody = document.getElementById('tablebody');
    tableBody.appendChild(newRow);
       
    
    calculateTotals();
    
}

var Q = document.getElementsByClassName("qty");
var RATE = document.getElementsByClassName("rate");
var SGST = document.getElementsByClassName("sgst");
var CGST = document.getElementsByClassName("cgst");
var CESS = document.getElementsByClassName("cess");
var CSGST = document.getElementsByClassName("csgst");
var CCGST = document.getElementsByClassName("ccgst");
var CCESS = document.getElementsByClassName("ccess");
var TOTAL = document.getElementsByClassName("total");


var wholesub = document.getElementById("wholesub");
var wholesgst = document.getElementById("wholesgst");
var wholecgst = document.getElementById("wholecgst");
var wholetotal = document.getElementById("wholetot");

window.onload = function()
{
    calculateTotals();
}




function calculateTotals() {
    event.preventDefault();



  
    

    for (let i = 0; i < SGST.length; i++) 
    {
        var qty = Q[i].value;
        var rate= RATE[i].value;
        var sgst = SGST[i].value;
        var cgst = CGST[i].value
        var cess = CESS[i].value;


        var sgstvalue = (qty * rate) * (sgst/100);
        CSGST[i].innerHTML=sgstvalue.toFixed(2);


        var cgstvalue = (qty * rate) * (cgst/100);
        CCGST[i].innerHTML = cgstvalue.toFixed(2);


        var cessvalue = (qty * rate) * (cess/100);
        CCESS[i].innerHTML = cessvalue.toFixed(2);

        var totalvalue = qty * rate;
        TOTAL[i].innerHTML = totalvalue;
        
        
        
    }
    wholetot();
      
}


function wholetot()
{
    
    var sum=0;
    var sumsgst= 0;
    var sumcgst = 0;
    var sumtot=0;
    for(let i=0;i<TOTAL.length;i++)
    {
        sum+=parseInt(TOTAL[i].innerHTML);
        sumsgst+=parseInt(CSGST[i].innerHTML);
        sumcgst+=parseInt(CCGST[i].innerHTML);

        
        
        
    }
    sumtot = sum+sumsgst+sumcgst;
    wholesub.innerHTML=sum;
    wholesgst.innerHTML=sumsgst;
    wholecgst.innerHTML=sumcgst;
    wholetotal.innerHTML=sumtot;

}
const uploadedimg = document.getElementById('uploadedimg');
        const inputimg = document.getElementById('inputimg');

        function upload() {
            inputimg.click(); // Trigger file input dialog
        }

        function changeimg(event) {
            const file = event.target.files[0];
           console.log(event);
           console.log("sdlfj");
        }


async function downloadPDF() {
    const { jsPDF } = window.jspdf;

    // Use html2canvas to capture the invoice as an image
    const invoice = document.body;
    const canvas = await html2canvas(invoice);
    const imgData = canvas.toDataURL('image/png');

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add the captured image to the PDF
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save('invoice.pdf');
}
document.getElementById('downloadButton').addEventListener('click', downloadPDF);
