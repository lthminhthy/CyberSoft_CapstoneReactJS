import axios  from "axios";
import { DOMAIN, TOKEN } from "../util/settings/config";

export class baseService{
    put = (url, model) => {
        return axios ({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers:{TokenCyberSoft: TOKEN}
        })
    }
    post = (url, model) => {
        return axios ({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers:{TokenCyberSoft: TOKEN}
        })
    }
    get = (url, model) => {
        return axios ({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            data: model,
            headers:{TokencyberSoft: TOKEN}
        })
    }
    delete = (url, model) => {
        return axios ({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: model,
            headers:{TokenCyberSoft: TOKEN}
        })
    }
    

}