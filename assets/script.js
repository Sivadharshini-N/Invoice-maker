
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
var wholeform = document.getElementById("wholeform");

window.onload = function()
{
    calculateTotals();
    out();
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
const imageDiv = document.getElementById('imageDiv');
const fileInput = document.getElementById('fileInput');
const displayImage = document.getElementById('displayImage');

imageDiv.addEventListener('click', () => {
        fileInput.click();
    });


function changeimg(event)
{
    const file = event.target.files[0];
    console.log(event);
    
        const reader = new FileReader();
        reader.onload = function(e) {
            displayImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    

}














const formsum = document.getElementById("formsub");
formsub.addEventListener('click',out);

function out(event)
{
    event.preventDefault();
    var imgout = document.getElementById("imgout");
    var tax = document.getElementById("tax").value;
    var company = document.getElementById("company").value;
    var name = document.getElementById("name").value;
    var gstin = document.getElementById("gstin").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;


    var billto = document.getElementById("billto").value;
    var clientcmp  = document.getElementById("clientcamp");
    var cgstin = document.getElementById("cgstin").value;
    var caddress = document.getElementById("caddress").value;
    var ccity = document.getElementById("ccity").value;
    var cstate = document.getElementById("cstate").value;
    var ccountry = document.getElementById("ccountry").value;
    var sstate = document.getElementById("sstate").value;
    console.log(sstate);
    

    var taxinvout = document.getElementById("taxinvout");
    var companyout = document.getElementById("companyout");
    document.getElementById("nameout").innerHTML = name;
    document.getElementById("gstinout").innerHTML = gstin;
    document.getElementById("addressout").innerHTML = address;
    document.getElementById("cityout").innerHTML = city;
    document.getElementById("stateout").innerHTML = state;
    document.getElementById("countryout").innerHTML = country;


    document.getElementById("billtoout").innerHTML = billto;
    document.getElementById("clientcmpout").innerHTML = clientcmp;
    document.getElementById("cgstinout").innerHTML = cgstin;
    document.getElementById("caddressout").innerHTML = caddress;
    document.getElementById("ccityout").innerHTML = ccity;
    document.getElementById("cstateout").innerHTML = cstate;
    document.getElementById("ccountryout").innerHTML = ccountry;
   // document.getElementById("stateout").innerHTML = sstate;

    
    
  document.getElementById("sfhsldfj");
  


    console.log(company);

    // const file = event.target.files[0];
    // console.log(event);
    
    //     const reader = new FileReader();
    //     reader.onload = function(e) {
    //         imgout.src = e.target.result;
    //     }
    //     reader.readAsDataURL(file);
   taxinvout.innerHTML = tax;
   companyout.textContent = company;


}

wholeform.addEventListener('change',out);

function State(event)
{
    event.preventDefault();
    var content = event.target.options[event.target.selectedIndex].innerHTML;
    console.log(content);
   document.getElementById("stateout").innerHTML= "Place of Supply: "+content;
  // console.log("place of "+content);

}