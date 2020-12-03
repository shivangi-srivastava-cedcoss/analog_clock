setInterval(changeSeconds, 1000);
function changeSeconds()
{
    var date=new Date();
    document.getElementById('hours').innerHTML=date.getHours();
    document.getElementById('minutes').innerHTML=date.getMinutes();
    document.getElementById('seconds').innerHTML=date.getSeconds();
}


