import api from "../Api";

export function put(search) {
    let searchHistory = localStorage.getItem('searchHistory');

    let searchHistoryArray = JSON.parse(searchHistory || "[]");

    let searchItem = searchHistoryArray.find(s => s.login === search.login);

    if (!searchItem) {
        api.get(search.avatar_url, {
            responseType: 'arraybuffer'
        })
            .then(function (result) {
                search.avatar_url = _imageEncode(result.data);
                searchHistoryArray.push(search);

                if (searchHistoryArray.length > 3) {
                    searchHistoryArray.splice(0, 1);
                }

                localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));
            });
    }
}

export function get() {
    let searchHistory = localStorage.getItem('searchHistory');

    if (searchHistory) {
        return JSON.parse(searchHistory);
    }
}

function _imageEncode(arrayBuffer) {
    let u8 = new Uint8Array(arrayBuffer)
    let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
    let mimetype = "image/jpeg"
    return "data:" + mimetype + ";base64," + b64encoded
}