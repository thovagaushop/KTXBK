import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    token: '',
    isAuthenticated: false,
    curentUser: {},
    rooms: [],
    bookingRoom: {},
    roomates: []
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
    setCurrentUser(state, user) {
      state.curentUser = user
    }, 
    removeCurrentUser(state) {
      state.curentUser = {}
    },
    setRooms(state, rooms) {
      state.rooms = rooms
    },
    removeRooms(state) {
      state.rooms = []
    },
    setBookingRoom(state, bookingRoom) {
      state.bookingRoom = bookingRoom
    },
    setRoomate(state, roomates){
      state.roomates = roomates
    },
    removeRoomate(state) {
      state.roomates = []
    }
  },
  actions: {
  },
  modules: {
  }
})
