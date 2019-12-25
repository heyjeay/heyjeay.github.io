function getOrdinalNum(n: any) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

var today = new Date();
var time = today.getHours()  //time HH:MM
var date = getOrdinalNum(today.getDate()) //date x + ordinal number (th)

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector('#date').innerHTML = monthNames[today.getMonth()] + ' ' + date

var hour = today.getHours()
if (hour >= 08 && hour <= 11) {
    document.querySelector('#greeting').innerHTML = 'Good Morning.'
} else if (hour >= 12 && hour <= 17){
    document.querySelector('#greeting').innerHTML = 'Good Afternoon.'
} else {
    document.querySelector('#greeting').innerHTML = 'Good Evening.'
}
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
