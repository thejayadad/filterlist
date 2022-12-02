

function filter(){
let input = document.getElementById("input");
let filter = input.value.toUpperCase();
let ul = document.getElementById("list");
let  li = ul.getElementsByTagName("li");

var a;

for(i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName("a")[0];
    if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
}