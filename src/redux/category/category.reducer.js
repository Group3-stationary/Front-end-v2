import CategoriesActionTypes from "./category.type";

/*
    Reducer bao gồm: 
      - Một state cụ thể nào đó cần lưu trong store (một state chung được combine từ nhiều state của nhiều reducer).
      - Nhận action: dựa vào action type, và data nhận vào từ action để thay đổi state cụ thể này.
*/
const INITIALS_STATE = {
  categories: []
};

const INITIAL_STATE = {
  category: []
};

export const CategoriesReducer = (state = INITIALS_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.GET_CATEGORIES_ALL:
      return {
        ...state,
        categories: [...action.payload],
      };
    default:
      return state ;
  }
};

export const CategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoriesActionTypes.GET_CATEGORIES_ALL:
      return {
        ...state,
        categories: [action.payload],
      };
    default:
      return state ;
  }
};
