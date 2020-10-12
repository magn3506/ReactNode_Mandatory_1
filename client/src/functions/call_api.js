
const callApi = async (url, settings = {}) => {
    const response = await fetch(url, {
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        ...settings
    });

    // HANDLE 400
    if (response.status === 400) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    const data = await response.json();
    return { data, status: response.status };
}

export default callApi;