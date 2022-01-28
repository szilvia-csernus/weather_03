
export const apiCall = (url, success) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
        //ready state of DONE means this is complete
        if (xmlhttp.status === 200 && xmlhttp.readyState === XMLHttpRequest.DONE) {
            const data = JSON.parse(xmlhttp.responseText);
            success(data);
        }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}