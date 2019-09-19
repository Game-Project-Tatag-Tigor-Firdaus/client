import Vue from 'vue';
import Vuex from 'vuex';
import db from '../apis/firabase';
import * as firebase from 'firebase/app';
import Swal from 'sweetalert2';
import 'firebase/firestore';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
  },
  mutations: {
    pushRoom(state, payload) {
      state.rooms = payload;
      console.log(state.rooms);
    },
    emptyRoom(state) {
      state.rooms = [];
    },
  },
  actions: {
    createRoom(context, payload) {
      Swal.fire({
        title: "Creating room on process"
      });
      Swal.showLoading();
      let playerName = localStorage.getItem('username');
      db.collection('roomCollection')
        .add({
          name: payload,
          roomOwner: playerName,
          status: false,
          players: []
        })
        .then(ref => {
          Swal.close();
          Swal.fire('Success', `Create room success`, `success`);
          console.log(ref.id);
          console.log(ref);
        })
        .catch(console.log);
    },
    joinRoom(context, id) {
      Swal.fire({
        title: "Join room..."
      });
      Swal.showLoading();
      let playerName = localStorage.getItem('username')
      db.collection('roomCollection')
        .doc(id)
        .update({
          "players": firebase.firestore.FieldValue.arrayUnion({ name: playerName, score: 0 })
        })
        .then(() => {
          Swal.close();
          Swal.fire(
            `Success`,
            `Join room success`,
            "success"
          );
        })
        .catch(console.log)
    },

    startGame(context, id) {
      Swal.fire({
        title: "Initiatin game..."
      });
      Swal.showLoading();
      db.collection('roomCollection')
        .doc(id)
        .update({
          "status": true
        })
        .then(() => {
          Swal.close();
        })
        .catch(console.log)
    },

    getRooms(context) {
      db.collection('roomCollection')
        .where('status', '==', false)
        .onSnapshot((querySnapshot) => {
          let rooms = [];
          querySnapshot.forEach((doc) => {
            let room = {
              id: doc.id,
              ...doc.data()
            };
            // console.log(room);
            rooms.push(room);
          });
          context.commit('pushRoom', rooms);
        });
    },
  },
})
