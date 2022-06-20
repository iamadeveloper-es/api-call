export default class callBase{
    static apiCall(method, url, queryParams = {}){

        const urlBase = new URL(url);
        Object.keys(queryParams).forEach(key => urlBase.searchParams.append(key, queryParams[key]));
        const objectRequest = new Request(urlBase)
        return fetch(objectRequest)
        .then(response => response.json())
        .then(data => data)
        .catch((error) => {
            throw error
        })
    }
}