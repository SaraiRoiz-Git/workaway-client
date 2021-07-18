import axios from "axios";
import { URL } from "../constants";

axios.defaults.baseURL = URL;

export const serverCallPost = async (
  url, params, callbackSucss, callbackFailur) => {
  axios.post(url, params, { "Accept": "application/json" })
    .then(response => {
      callbackSucss(response);
    })
    .catch(response => {
      callbackFailur(response);
    });
};

export const serverCallPut = async (
  url, params, token, callbackSucss, callbackFailur) => {
  axios.put(url, params, { headers: { "auth-token": token } })
    .then(response => {
      callbackSucss(response);
    })
    .catch(response => {
      callbackFailur(response);
    });
}