import axios from "axios";
import { URL } from "../constants";

axios.defaults.baseURL = URL;

export const serverCallPost = async (
  url, params, callbackSucss, callbackFailur) => {
    console.log("post")
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
  console.log("params", params)
  console.log("token", token)
  axios.put(url, params, { "auth-token": token })
    .then(response => {
      callbackSucss(response);
    })
    .catch(response => {
      callbackFailur(response);
    });
};