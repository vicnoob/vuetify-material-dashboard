import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    landList: [
      {
        id: 1,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.5 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        area: '100 m2',
        purpose: 'residential',
        complianceStatus: 'Tốt',
        ownerName: 'Nguyen Thi A',
        ownerID: '001012',
        ownerDOB: '1997-12-09',
        ownerPhone: 123123123,
        description: 'Test Description'
      },
      {
        id: 2,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.7 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        area: '100 m2',
        complianceStatus: 'Tốt',
        purpose: 'public service',
      },
      {
        id: 3,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.9 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        complianceStatus: 'Đang tranh chấp',
        area: '70 m2',
        purpose: 'residential',
      },
      {
        id: 4,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.2 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        complianceStatus: 'Trong quy hoạch',
        area: '70 m2',
        purpose: 'commercial',
      },
      {
        id: 5,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.4 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        complianceStatus: 'Thế chấp',
        area: '70 m2',
        purpose: 'residential',
      },
    ],
    isAuthenticated: false,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    ADD_NEW_LAND (state, payload) {
      state.landList = [
        ...state.landList,
        payload
      ]
    },
    EDIT_LAND_INFO (state, payload) {
      const index = state.landList.findIndex(land => land.id === payload.id);
      if (index !== -1) {
        // Replace the land item at that index with the updated data
        state.landList.splice(index, 1, payload);
      }
    },
    DELETE_LAND (state, payload) {
      state.landList = state.landList.filter(
        i => i.id !== payload.id
      )
    },
    LOGIN(state) {
      state.isAuthenticated = true;  // Set authenticated to true
    },
    LOGOUT(state) {
      state.isAuthenticated = false;  // Set authenticated to false
    },
  },
  actions: {
    login({ commit }) {
      commit('LOGIN');  // Call mutation to change auth status
    },
    logout({ commit }) {
      commit('LOGOUT');  // Call mutation to change auth status
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,  // Getter to check if the user is authenticated
  },
})
