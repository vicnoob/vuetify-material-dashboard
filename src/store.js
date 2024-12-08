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
      },
      {
        id: 2,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.7 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        area: '100 m2',
        purpose: 'public service',
      },
      {
        id: 3,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.9 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        area: '70 m2',
        purpose: 'residential',
      },
      {
        id: 4,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.2 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        area: '70 m2',
        purpose: 'commercial',
      },
      {
        id: 5,
        img: 'https://i.ibb.co/ncjkmc3/bird-thumbnail.jpg',
        address: 'No.4 Ngoc Hoi street, Tu Hiep ward, Thanh Tri district, Ha Noi',
        area: '70 m2',
        purpose: 'residential',
      },
    ]
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
    DELETE_LAND (state, payload) {
      state.landList = state.landList.filter(
        i => i.id !== payload.id
      )
    }
  },
  actions: {

  },
})
