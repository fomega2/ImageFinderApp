import axios from 'axios';

const getImagesResult = async (query, page) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`,{
        headers:{
            "Authorization": "Client-ID qaF8jI6_LURrVCQMyS_2AduAaJ7JEqRtNOP8QqUpxxo" 
        },
        params : {
            "query": query,
            "page": page,
        }
    })    
    return response.data.results;
}

export {getImagesResult};