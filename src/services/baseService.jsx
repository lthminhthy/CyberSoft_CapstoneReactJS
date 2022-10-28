import axios  from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN } from "../util/settings/config";



export class baseService{
    put = (url, model) => {
        return axios ({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) ,TokenCyberSoft: TOKEN}

        })
    }
    post = (url, model) => {
        return axios ({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) ,TokenCyberSoft: TOKEN}
        })
    }
    get = (url, model) => {
        return axios ({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            data: model,
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) ,TokenCyberSoft: TOKEN}

        })
    }
    delete = (url, model) => {
        return axios ({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: model,
            headers: {'Authorization' : 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) ,TokenCyberSoft: TOKEN}
        })
    }
    

}