fetch('https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=467917115c2fb1ab165e7743f138efd0')
.then(function(response) {
    return response.json();
})
.then(function(jsObject) {
    console.log(jsObject);

    let tempforecast = [];
    let day = 1;
    jsObject.list.forEach(x => {
        if (x.dt_txt.includes('15:00:00')) {
            tempforecast[day] = x.main.temp;
            day++;
        }
    });

    for (var i = 1; i <= 5; i++) {
        document.getElementById('forecastday' + i)
        .innerHTML = tempforecast[i];
    }
});