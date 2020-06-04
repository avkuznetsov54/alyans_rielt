import store from "@/store";
import { getAPI_user_info } from "@/api/user_info/axios-user_info";
// import router from "../../../router";

const mortgagesModule = {
  namespaced: true,
  state: {
    USER_INFO_DATA: {}
  },
  getters: {
    GET_USER_INFO_DATA: state => {
      return state.USER_INFO_DATA;
    }
  },
  mutations: {
    SET_UPDATE_USER_INFO_DATA(state, data) {
      state.USER_INFO_DATA = data;
    },
    destroy_USER_INFO_DATA(state) {
      state.USER_INFO_DATA = null;
    }
  },
  actions: {
    FETCH_USER_INFO(context, data) {
      let formData = new FormData();
      formData.append("refresh_token", data);
      return new Promise((resolve, reject) => {
        getAPI_user_info
          .request({
            url: "/api/v1/user-info/",
            method: "post",
            data: formData,
            headers: {
              Authorization: `Bearer ${store.state.accessToken}`
            } // the new access token is attached to the authorization header
          })
          // proof that your access token is still valid; if not the
          // axios getAPI response interceptor will attempt to get a new  access token from the server. check out ../api/axios-base.js getAPI instance response interceptor
          .then(response => {
            // console.log("GetAPI successfully got the mods");
            // console.log(response);
            data = response.data[0];
            context.commit("SET_UPDATE_USER_INFO_DATA", data); // store the response data in store
            resolve(response);
          })
          .catch(err => {
            // refresh token expired or some other error status
            // eslint-disable-next-line no-unused-vars
            const er = err; // просто чтоб ошибку в консоли не показывало
            // console.log(err);
            // console.log("[user_info] accessToken протух");
            // router.push({ name: "logout" });
            reject(err);
          });
      });
    }
  }
};

export default mortgagesModule;
