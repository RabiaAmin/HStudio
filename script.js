
function updateStatus(){
    const now = new Date();
    const currentHour = now.getHours();

    const statusText = document.getElementById('status-text');
    const contentTime = document.getElementById('current-time');
    
    contentTime.textContent = now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});

    statusText.textContent = currentHour >= 9 && currentHour <18 ? 'open':'closed'; 

    
}

setInterval(updateStatus,1000);
updateStatus();

let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");

main.addEventListener("mousemove",function(dets){
   cursor.style.left = dets.x+"px";
   cursor.style.top = dets.y+"px";
   

});