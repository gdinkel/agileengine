const SET_PHOTOS = (state, data) => {
    state.photos = data;
};

const SET_PHOTO = (state, data) => {
    state.photo = data;
};

const SET_PAGE_COUNT = (state, data) => {
    state.pageCount = data;
};

export default {
    SET_PHOTOS,
    SET_PHOTO,
    SET_PAGE_COUNT
}