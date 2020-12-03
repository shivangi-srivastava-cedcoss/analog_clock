setInterval(changeSeconds, 1000);
function changeSeconds()
{
    var date=new Date();
    var seconds=(date.getSeconds()*6);
    var minutes=date.getMinutes()*6;
    var hour=((date.getHours()%12)*30)+(0.1*minutes);
    document.querySelector(".sechand").style.transform="rotate("+seconds+"deg)";
    document.querySelector(".hourhand").style.transform="rotate("+hour+"deg)";
    document.querySelector(".minhand").style.transform="rotate("+minutes+"deg)";
    document.getElementById('hours').innerHTML=(date.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('minutes').innerHTML=(date.getMinutes()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    document.getElementById('seconds').innerHTML=(date.getSeconds()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}


