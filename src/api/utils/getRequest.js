export const getRequest = async (url, params, success) => {
    
    url += new URLSearchParams(params).toString();

    await fetch(url, {
        method: "GET",
        headers: {
            'Accept': 'json'
        },
        mode: 'cors',
        cache: 'default',

    })
    .then(res => res.json())
    .then(data => success(data))
}
