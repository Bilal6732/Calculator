function getnumber(num){

    var result=document.getElementById("result")
    result.value +=num

}

function Clearresult(){
var result=document.getElementById("result")
result.value="0"}

function getresult(){
    var result=document.getElementById("result")
    result.value=eval(result.value)
}