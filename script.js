function addtodisplay(value){
    document.getElementById('display').value += value;
}

function cleardisplay(){
    document.getElementById('display').value = '';
}

function calculate(){
   try{
    document.getElementById('display').value = eval(document.getElementById('display').value);
   }
   catch(error){
     document.getElementById('display').value = 'error';
   }
}

function calculateSin() {
    let value = parseFloat(document.getElementById("display").value);
    let result = Math.sin(value);
    document.getElementById('display').value = result
}
function calculatecos() {
    let value = document.getElementById("display").value;
    let result = Math.cos(parseFloat(value));
    document.getElementById("display").value = result;
}
function calculatetan() {
    let value = document.getElementById("display").value;
    let result = Math.tan(parseFloat(value));
    document.getElementById("display").value = result;
}