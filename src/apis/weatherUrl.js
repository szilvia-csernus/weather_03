
export const weatherUrl = (location) => {

    const toQueryString = (obj) => {
        const parts = [];
        for (let i in obj) {
            parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`);
        }
        return parts.join('&');
    }

    let url = 'http://api.openweathermap.org/data/2.5/onecall?'
    let params = {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
    };

    url += toQueryString(params);
    url += '&units=metric&exclude=minutely,alerts';
    const apiKey = '27a5bef1f3907b34a236c9a8161181df';
    url += `&APPID=${apiKey}&lang=en`;


    return url;
}