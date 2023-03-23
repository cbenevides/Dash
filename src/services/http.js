import axios from "axios";

export const baseURL = `${process.env.REACT_APP_BASE_API}`;

export default class Http {
  static getRequest = async (url) => {
    try {
      let token = window.localStorage.getItem('token');
      const resp = await axios.get(baseURL + url, {
          headers: {
            "Authorization":`Bearer ${token}`,
            "Access-Control-Allow-Origin":"*",
            "Content-Type":"application/json;charset=UTF-8"
          }
        });
      return resp;
    } catch (err) {
      return err;
    }
  };
}
