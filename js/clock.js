function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

function polandTime() {
    let p = document.querySelector('.timeDiv.your_time .time');
    setInterval(() => {
        let date = new Date();
        let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        p.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000)
}
polandTime();

function newYorkTime() {
    let p = document.querySelector('.timeDiv.new_york .time');
    setInterval(() => {
        let myDate = new Date();
        let date = convertTZ(myDate, 'America/New_York');
        let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();     
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        p.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000)
}
newYorkTime();

function tokyoTime() {
    let p = document.querySelector('.timeDiv.tokyo .time');
    setInterval(() => {
        let myDate = new Date();
        let date = convertTZ(myDate, 'Asia/Tokyo');
        let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();     
        let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        p.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000)
}
tokyoTime();