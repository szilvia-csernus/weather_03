
export const cityUrl = (location) => {
    
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;

    const API_KEY = 'pk.b3620c8f487cc3c4396e09fafe016095';
    
    const url =
        `https://us1.locationiq.com/v1/reverse.php?key=${process.env.CITY_API_KEY}&lat=` +
        lat + "&lon=" + lng + "&format=json";
    
    return url;
}
