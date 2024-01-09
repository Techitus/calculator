function Display(value){
    document.getElementById("txtarea").value += value;
}

function Clear(){
 let txtvalue =   document.getElementById("txtarea").value = " ";
txtvaluevalue.style.fontsize = "15px";
}
function Delete(){
    var x=document.getElementById("txtarea");
   if (x.value.length>0)
{
    x.value=x.value.substring(0,x.value.length-1);
}
}
function Calculate() {
    try {
      document.getElementById('txtarea').value = eval(
        document.getElementById('txtarea').value);
    } 
    catch (error) {
      document.getElementById('txtarea').value = 'Error';
    }
  }
