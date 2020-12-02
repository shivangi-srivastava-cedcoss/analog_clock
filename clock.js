setInterval(changeSeconds, 1000);
function changeSeconds()
{
    var date=new Date();
    var minutes=date.getMinutes()*6;
    var hour=((date.getHours()%12)*30)+(0.1*minutes);
    var seconds=(date.getSeconds()*6);
    document.querySelector(".sechand").style.transform="rotate("+seconds+"deg)";
    document.querySelector(".hourhand").style.transform="rotate("+hour+"deg)";
    document.querySelector(".minhand").style.transform="rotate("+minutes+"deg)";
    document.getElementById('hours').innerHTML=date.getHours();
    document.getElementById('minutes').innerHTML=date.getMinutes();
    document.getElementById('seconds').innerHTML=date.getSeconds();
}


