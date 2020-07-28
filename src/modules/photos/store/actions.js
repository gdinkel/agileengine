import Axios from "axios";

const getPhotos = async ({ commit }, payload) => {
    const response = await Axios.get(process.env.VUE_APP_API_BASE_URL+'/images?page='+payload);
    commit('SET_PHOTOS', response.data.pictures);
    commit('SET_PAGE_COUNT', response.data.pageCount);
};

const getPhoto = async ({ commit }, payload) => {
    const response = await Axios.get(process.env.VUE_APP_API_BASE_URL+'/images/'+payload);
    commit('SET_PHOTO', response.data);
};

export default {
    getPhotos,
    getPhoto
};