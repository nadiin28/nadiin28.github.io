const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);

    // вручную выкидываем ошибку, чтобы сработал блок кода catch, если что-то пошло не так
    //  cсвойство промиса .ok мы что-то получили и все ок, свойство status, попадаем на статус, который вернул сервер
    if (!res.ok) {
        // объект ошибки (выкидываем новую ошибку)
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

export {
    postData
};
export {
    getResource
};