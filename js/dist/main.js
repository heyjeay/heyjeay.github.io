function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}
var today = new Date();
var time = today.getHours(); //time HH:MM
var date = getOrdinalNum(today.getDate()); //date x + ordinal number (th)
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "it's December"];
document.querySelector('#date').innerHTML = monthNames[today.getMonth()] + ' ' + date;
var hour = today.getHours();
if (hour >= 08 && hour <= 11) {
    document.querySelector('#greeting').innerHTML = 'Good Morning Jeay! Have you had a coffee yet?';
}
else if (hour >= 12 && hour <= 17) {
    document.querySelector('#greeting').innerHTML = 'Good Afternoon Jeay!';
}
else {
    document.querySelector('#greeting').innerHTML = 'Good Evening Jeay!';
}
