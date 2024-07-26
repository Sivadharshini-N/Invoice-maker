
function additem() {
    event.preventDefault();
    console.log("Adding new item row");
    var newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><textarea name="" id="" placeholder="Enter item " rows="3"></textarea><br><br><input type="text" placeholder="HSN/SAC"></td>
        <td><input type="number" class="qty" value="1" onchange="calculateTotals()"></td>
        <td><input type="number" oninput="calculateTotals()"  value="0.00" step="0.01" class="rate"></td>
        <td><input type="number" class="sgst"  value="0"  oninput="calculateTotals()" ><br><span class="csgst"></span></td>
        <td><input type="number" class="cgst" value="0" oninput="calculateTotals()"><br><p class="ccgst"></p></td>
        <td><input type="number" class="cess" value="0" ><br><p class="ccess"></p></td>
        <td><p class="total"></p></td> 
        
    `;

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
      
}



   