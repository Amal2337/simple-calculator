function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+
    val;
}
console.log("working")
function cleardisplay(){
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
