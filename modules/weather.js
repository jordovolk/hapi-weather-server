const Axios = require('axios');

const weatherApiKey = '5a59a6eea4a4c121f34ed501781d6ce0';

const weatherApiRoot = 'https://api.openweathermap.org/data/2.5';

async function getCurrentWeather(zip) {
    const method = '/weather'
    const params = `?zip=${zip},us&units=imperial&appid=${weatherApiKey}`;
    
    const url = `${weatherApiRoot}${method}${params}`;
    
    let obj = {};
    try {
        const response = await Axios.get(url);
        obj = response.data;
    } catch (error) {
        obj.error = error;
}
    return obj;
}

module.exports = {
    getCurrent: getCurrentWeather
    
};