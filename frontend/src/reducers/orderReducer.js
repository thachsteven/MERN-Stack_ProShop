import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
} from '../constants/orderConstants';

const initialState = {
  orderItems: [],
  shippingAddress: {},
  loading: true,
  order: [],
};

//Create order
export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//Get order by id

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };

    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//Order paid
export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

//List my orders
export const orderListMyReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//List orders
export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };
    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
