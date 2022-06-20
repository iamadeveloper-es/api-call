import api from '../api/handleCall.js';

export default class Todo{
    static getTodos(path, filters = {}){
        const queryParams = {}
        if(Object.keys(filters)){
            for(let key in filters){
                console.log(key)
                Object.assign(queryParams, {[key]: filters[key]})
            }
        }
        return  api.get(path, queryParams)
        .then(response => response.data)
    }
}