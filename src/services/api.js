import axios from "axios";

const API_KEY = "EfRzRy1zLJ8fhBAdhkwX1z-xmM9Ij80iydVzG0zm98Y";
axios.defaults.baseURL = "https://api.unsplash.com/";

const params = {
    headers: {
        Authorization: `Client-ID ${API_KEY}`,
    }
}

const fetchImg = async (topic, per_page = 10, page = 1) => {
    const response = await axios(`search/photos?page=${page}&per_page=${per_page}&query=${topic}`, params);
    console.log(response.data);
    return response.data;
};

export default fetchImg;