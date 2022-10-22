document.getElementById('dropdown1').addEventListener('click',group);

function group(){
    document.getElementById('dp1').classList.toggle('dpb');
}
document.getElementById('dropdown2').addEventListener('click',events);

function events(){
    document.getElementById('dp2').classList.toggle('dpb');
}
document.getElementById('dropdown3').addEventListener('click',photos);

function photos(){
    document.getElementById('gallery').classList.toggle('dpb1');
} 

document.getElementById("toggleicon").addEventListener("click",function(){
    document.getElementById('sidebarMenu').classList.toggle('sidebar');
});