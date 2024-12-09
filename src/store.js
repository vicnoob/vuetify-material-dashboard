import Vue from 'vue'
import Vuex from 'vuex'
import { sampleImage } from '@/constant'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    landList: [
      {
        id: 1,
        img: sampleImage,
        address: 'Số 2 Ngọc Hồi, xã Tứ Hiệp, huyện Thanh Trì, Hà Nội',
        area: '100',
        purpose: 'Đất ở',
        complianceStatus: 'Có giấy chứng nhận',
        ownerName: 'Nguyễn Thị A',
        ownerID: '0123456789',
        ownerDOB: '1997-12-09',
        ownerPhone: '0912345689',
        description: 'Test Description'
      },
      {
        id: 2,
        img: sampleImage,
        address: 'Số 3 Trần Thủ Độ, xã Tứ Hiệp, huyện Thanh Trì, Hà Nội',
        area: '100',
        complianceStatus: 'Quy hoạch',
        purpose: 'Đất công cộng',
      },
      {
        id: 3,
        img: sampleImage,
        address: 'Thôn Cổ Điển, xã Tứ Hiệp, huyện Thanh Trì, Hà Nội',
        area: '70',
        purpose: 'Nông nghiệp',
        complianceStatus: 'Chưa có giấy chứng nhận',
        ownerName: 'Nguyễn Văn P',
        ownerID: '01122334455',
        ownerDOB: '1999-01-09',
        ownerPhone: '0981234456',
        description: 'Test Description'
      },
      {
        id: 4,
        img: sampleImage,
        address: 'Số 10 Phan Trọng Tuệ, xã Tứ Hiệp, huyện Thanh Trì, Hà Nội',
        area: '90',
        complianceStatus: 'Quy hoạch',
        purpose: 'Thương mại',
        ownerName: 'Nguyễn Trung H',
        ownerID: '0112233788',
        ownerDOB: '1979-11-07',
        ownerPhone: '0981234456',
        description: 'Test Description'
      },
      {
        id: 5,
        img: sampleImage,
        address: 'Thôn Cổ Điển, xã Tứ Hiệp, huyện Thanh Trì, Hà Nội',
        area: '70',
        complianceStatus: 'Thế chấp',
        purpose: 'Nông nghiệp',
        ownerName: 'Nguyễn Thu Hà',
        ownerID: '0112211688',
        ownerDOB: '1988-07-07',
        ownerPhone: '0981889477',
        description: 'Test Description'
      },
    ],
    isAuthenticated: true,
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
