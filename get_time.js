
window.onload = function() {
    document.getElementById("first_date").textContent = getDateWithOffset(0);
    document.getElementById("second_date").textContent = getDateWithOffset(3);
}
function getDateWithOffset(offset = 0) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const today = new Date();
    today.setDate(today.getDate() - offset);
    
    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    console.log(day, date, month, year);
    return `${date} ${month} ${year}, ${day}`;
  }
