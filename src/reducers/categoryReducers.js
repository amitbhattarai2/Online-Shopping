import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_CREATE_RESET,
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_RESET,
} from '../constants/categoryConstants'

export const categoryListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true, categories: [] }
    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      }
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
