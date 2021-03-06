import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  VENDOR_PRODUCT_LIST_REQUEST,
  VENDOR_PRODUCT_LIST_SUCCESS,
  VENDOR_PRODUCT_LIST_FAIL,
  CATEGORY_PRODUCT_LIST_REQUEST,
  CATEGORY_PRODUCT_LIST_SUCCESS,
  CATEGORY_PRODUCT_LIST_FAIL,
  PRODUCT_REPORT_REQUEST,
  PRODUCT_REPORT_SUCCESS,
  PRODUCT_REPORT_FAIL,
  PRODUCT_REPORT_RESET,
} from '../constants/productConstants'

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.content,
        pages: action.payload.totalPages,
        page: action.payload.number,
      }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const categoryProductListReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case CATEGORY_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.content,
        pages: action.payload.totalPages,
        page: action.payload.number,
      }
    case CATEGORY_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const vendorProductListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case VENDOR_PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case VENDOR_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.content,
        pages: action.payload.totalPages,
        page: action.payload.number,
      }
    case VENDOR_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productReportsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REPORT_REQUEST:
      return { ...state, loading: true }
    case PRODUCT_REPORT_SUCCESS:
      return { loading: false, success: true, report: action.payload }
    case PRODUCT_REPORT_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_REPORT_RESET:
      return {}
    default:
      return state
  }
}

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload }
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case PRODUCT_UPDATE_RESET:
      return { product: {} }
    default:
      return state
  }
}
