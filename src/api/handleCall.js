import callBase from "./callBase.js";

export default class HandleCall extends callBase{
    static get(path, queryParams = {}){
        return HandleCall.apiCall('GET', path, queryParams)
    }
}