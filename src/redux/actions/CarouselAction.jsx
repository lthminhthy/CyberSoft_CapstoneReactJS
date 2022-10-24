import axios from "axios"
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./types/CarouselType";


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
                method: 'GET',
                headers: {
                    TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
                }
            })

            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } 
         catch (error) {
            console.log('error', error)
        }
    };
}



