import axios from "axios";
import * as API_CONSTANTS from "./index.js";

import { isLoaded, isEmpty } from "react-redux-firebase";
import { getCurrentUserIdToken } from "../services/authentication.js";
import store from "../redux/index.js";

export const getOrders = async (searchBy, value) => {
  //Checks whether data from the redux store has been loaded
  if (isLoaded(store.getState().firebase.auth)) {
    // Checks whether the item loaded is not empty
    if (!isEmpty(store.getState().firebase.auth)) {
      var getTokenResult = await getCurrentUserIdToken();

      // checks whether the current user's token was retrieved successfully
      if (getTokenResult.ok === true) {
        const config = {
          // sets the necessary header information for authentication based on the user's token
          headers: {
            credentialClaims: "administrator",
            Authorization: "Bearer " + getTokenResult.data,
          },
          params: {
            searchBy: searchBy,
            value: value,
          },
        };

        //returns the cart object from the user
        return axios
          .get(API_CONSTANTS.ORDERS_ROUTE, config)
          .then((res) => {
            // Request Successful
            //Handle Different HTTP Status Codes and Responses
            return res.data;
          }) // returns the corresponding data for a signed in user's cart
          .catch((error) => {
            if (error.message === "Network Error") {
              //Checking if the error is of type "Network Error"
              return {
                //Returning a appropriate response if the error is of type network error.
                ok: false,
                message:
                  "Network Error - Please Check your Internet Connection",
              };
            }
            // returns general error when trying to getting cart is unsuccessful
            return { ok: false, message: "Error getting Orders" };
          });
      } else {
        //returns a general error when the system has failed to get the user's token
        return getTokenResult;
      }
    } else {
      //returns a message if the current user is not signed into the platform
      return { ok: false, message: "No User Signed In" };
    }
  } else {
    //returns a message when data has not been loaded from the redux store.
    return { ok: false, message: "Getting Orders Failed - Try again" };
  }
};

export const getOrder = async (orderId) => {
  //Checks whether data from the redux store has been loaded
  if (isLoaded(store.getState().firebase.auth)) {
    // Checks whether the item loaded is not empty
    if (!isEmpty(store.getState().firebase.auth)) {
      var getTokenResult = await getCurrentUserIdToken();

      // checks whether the current user's token was retrieved successfully
      if (getTokenResult.ok === true) {
        const config = {
          // sets the necessary header information for authentication based on the user's token
          headers: {
            credentialClaims: "administrator",
            Authorization: "Bearer " + getTokenResult.data,
          },
          params: {
            orderId: orderId,
          },
        };

        //returns the cart object from the user
        return axios
          .get(API_CONSTANTS.ORDERS_ROUTE + "/order_item", config)
          .then((res) => {
            // Request Successful
            //Handle Different HTTP Status Codes and Responses
            return res.data;
          }) // returns the corresponding data for a signed in user's cart
          .catch((error) => {
            if (error.message === "Network Error") {
              //Checking if the error is of type "Network Error"
              return {
                //Returning a appropriate response if the error is of type network error.
                ok: false,
                message:
                  "Network Error - Please Check your Internet Connection",
              };
            }
            // returns general error when trying to getting cart is unsuccessful
            return { ok: false, message: "Error getting order" };
          });
      } else {
        //returns a general error when the system has failed to get the user's token
        return getTokenResult;
      }
    } else {
      //returns a message if the current user is not signed into the platform
      return { ok: false, message: "No User Signed In" };
    }
  } else {
    //returns a message when data has not been loaded from the redux store.
    return { ok: false, message: "Getting Order Failed - Try again" };
  }
};

export const updateOrder = async (orderId, orderData) => {
  //Checks whether data from the redux store has been loaded
  if (isLoaded(store.getState().firebase.auth)) {
    // Checks whether the item loaded is not empty
    if (!isEmpty(store.getState().firebase.auth)) {
      var getTokenResult = await getCurrentUserIdToken();

      // checks whether the current user's token was retrieved successfully
      if (getTokenResult.ok === true) {
        const config = {
          // sets the necessary header information for authentication based on the user's token
          headers: {
            credentialClaims: "administrator",
            Authorization: "Bearer " + getTokenResult.data,
          },
        };

        //returns the cart object from the user
        return axios
          .put(
            API_CONSTANTS.ORDERS_ROUTE + "/" + orderId,
            { orderData: orderData },
            config
          )
          .then((res) => {
            // Request Successful
            //Handle Different HTTP Status Codes and Responses
            return res.data;
          }) // returns the corresponding data for a signed in user's cart
          .catch((error) => {
            if (error.message === "Network Error") {
              //Checking if the error is of type "Network Error"
              return {
                //Returning a appropriate response if the error is of type network error.
                ok: false,
                message:
                  "Network Error - Please Check your Internet Connection",
              };
            }
            // returns general error when trying to getting cart is unsuccessful
            return { ok: false, message: "Error when updating order" };
          });
      } else {
        //returns a general error when the system has failed to get the user's token
        return getTokenResult;
      }
    } else {
      //returns a message if the current user is not signed into the platform
      return { ok: false, message: "No User Signed In" };
    }
  } else {
    //returns a message when data has not been loaded from the redux store.
    return { ok: false, message: "Getting Order Failed - Try again" };
  }
};

export const cancelOrder = async (orderId, cancelDescription) => {
  //Checks whether data from the redux store has been loaded
  if (isLoaded(store.getState().firebase.auth)) {
    // Checks whether the item loaded is not empty
    if (!isEmpty(store.getState().firebase.auth)) {
      var getTokenResult = await getCurrentUserIdToken();

      // checks whether the current user's token was retrieved successfully
      if (getTokenResult.ok === true) {
        const config = {
          // sets the necessary header information for authentication based on the user's token
          headers: {
            credentialClaims: "administrator",
            Authorization: "Bearer " + getTokenResult.data,
          },
        };

        //returns the cart object from the user
        return axios
          .put(
            API_CONSTANTS.ORDERS_ROUTE + "/order/cancel",
            { orderId: orderId, cancelDescription: cancelDescription },
            config
          )
          .then((res) => {
            // Request Successful
            //Handle Different HTTP Status Codes and Responses
            return res.data;
          }) // returns the corresponding data for a signed in user's cart
          .catch((error) => {
            if (error.message === "Network Error") {
              //Checking if the error is of type "Network Error"
              return {
                //Returning a appropriate response if the error is of type network error.
                ok: false,
                message:
                  "Network Error - Please Check your Internet Connection",
              };
            }
            // returns general error when trying to getting cart is unsuccessful
            return { ok: false, message: "Error canceling order" };
          });
      } else {
        //returns a general error when the system has failed to get the user's token
        return getTokenResult;
      }
    } else {
      //returns a message if the current user is not signed into the platform
      return { ok: false, message: "No User Signed In" };
    }
  } else {
    //returns a message when data has not been loaded from the redux store.
    return { ok: false, message: "Getting Order Failed - Try again" };
  }
};
