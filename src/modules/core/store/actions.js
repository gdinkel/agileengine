import Axios from "axios";

const setToken = async ({ commit }, payload) => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
    commit('SET_TOKEN', payload);
};

export default {
    setToken
};
