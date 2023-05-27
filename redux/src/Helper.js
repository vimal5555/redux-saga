import Axios from "axios";
// import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
let toastConfigure = { hideProgressBar: true, autoClose: 2000 };

const userKey = "logaccess";

// let key = CryptoJS.enc.Base64.parse("#rGHnfspBtrEnc1DeckEypKtrV#");
// let iv = CryptoJS.enc.Base64.parse("#rGHnfspBtrEnc1DeciVpKtrV#");

const Helper = {
  backendAPI: function () {
    // let url = "https://cherifiback.osiztech.com/";
    // let url = "http://172.16.16.52:2803/";
    let url = "https://jsonplaceholder.typicode.com/";
    return url;
  },

  PostData: async function (url, params) {
    let axiosConfig;

    if (localStorage.getItem(userKey)) {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
          "x-access-token": localStorage.getItem(userKey),
        },
      };
    } else {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
        },
      };
    }

    return await Axios.post(url, params, axiosConfig)
      .then((res) => {
        try {
          if (res.status === 200) {
            let output = res.data;
            if (output.status === 200 || output.status === true) {
              toast.success(output.message);
              return output;
            } else if (output.status === 401) {
              localStorage.removeItem("logaccess");
              localStorage.removeItem("walletconnect");
              window.location.href = "/";
            } else {
              toast.error(output.message);
            }
            return output;
          }
        } catch (e) {
          toast.error("Internal Server Error!");
          localStorage.removeItem("logaccess");
          localStorage.removeItem("walletconnect");
          window.location.href = "/";
        }
      })
      .catch((e) => {
        toast.error("Internal Server Error!");
        localStorage.removeItem("logaccess");
        localStorage.removeItem("walletconnect");
        window.location.href = "/";
      });
  },

  GetData: async function (url, params) {
    let axiosConfig;
    if (localStorage.getItem(userKey)) {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
          "x-access-token": localStorage.getItem(userKey),
        },
      };
    } else {
      axiosConfig = {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "true",
        },
      };
    }

    return Axios.get(url, axiosConfig)
      .then((res) => res.data)
      .catch((e) => {
        if (e.response.status === 401) {
          localStorage.removeItem("logaccess");
          localStorage.removeItem("walletconnect");
          window.location.href = "/";
        } else {
          localStorage.removeItem("logaccess");
          localStorage.removeItem("walletconnect");
          window.location.href = "/";
          return { status: false, message: e };
        }
      });
  },

  formatDated: function (date) {
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var dates = date.getDate();
    var months = date.getMonth() + 1;
    var years = date.getFullYear();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    dates = dates < 10 ? "0" + dates : dates;
    months = months < 10 ? "0" + months : months;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return dates + "/" + months + "/" + years + " " + strTime;
  },
  formatDated1: function (date) {
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var dates = date.getDate();
    var months = date.getMonth() + 1;
    var years = date.getFullYear();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    dates = dates < 10 ? "0" + dates : dates;
    months = months < 10 ? "0" + months : months;
    var strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
    return years + "-" + months + "-" + dates;
  },

  roundValues: function (num, precision) {
    if (typeof num != undefined && typeof num != "undefined") {
      if (num) {
        if (num.toString().indexOf("e") > -1) {
          num = parseFloat(num).toFixed(precision);
        }
        var num1 = num.toString().split(".");
        var num2 = num1[0];
        if (num1.length === 2) {
          num2 = num2 + "." + num1[1].substring(0, precision);
        }
        return parseFloat(num2).toFixed(precision);
      } else {
        return (0).toFixed(precision);
      }
    } else {
      return num;
    }
  },

  //   encryptData: function (value) {
  //     let cipher = CryptoJS.AES.encrypt(value, key, { iv: iv }).toString();
  //     return cipher;
  //   },

  //   decryptData: function (value) {
  //     let decipher = CryptoJS.AES.decrypt(value, key, { iv: iv });
  //     let decrypt_val = decipher.toString(CryptoJS.enc.Utf8);
  //     return decrypt_val;
  //   },
};

export default Helper;
