
const fetchPost = (url, method, payload) => {



    fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });

}

export default fetchPost
