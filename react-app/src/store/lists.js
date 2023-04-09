//todo update name, add task to list, create list, delete list

const SETALLLISTS = 'lists/ALL';
const SETSINGLELIST = 'lists/SINGLE';

const getAllLists = (arr) => {
  return {
    type: SETALLLISTS,
    arr
  };
};

const getSingleList = (obj) => {
  return {
    type: SETSINGLELIST,
    obj
  };
};

 export const allLists = () => async (dispatch) => {
  const response = await csrfFetch(`/api/lists/all`)
  if (response.ok) {
    const data = await response.json();
    dispatch(getAllLists(data));
  };
  return response
};

 export const singleList = (listId) => async (dispatch) => {
  const response = await csrfFetch(`/api/lists/${listId}`)
  if (response.ok) {
    const data = await response.json();
    dispatch(getSingleList(data));
  };
  return response
};

const initialState = {
  allLists: {},
  singleList: {}
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETALLLISTS:
      let newState1 = {singleList: {...state.singleList}, allLists: {}};
      action.arr.forEach(s => newState1.allLists[s.id] = s);
      return newState1;
    case SETSINGLELIST:
      // we do not know if list.tasks will copy or not... if problems arise we can adjust
      let newState2 = {allLists: {...state.allLists}, singleList: {}};
      newState2.singleList = {...action.obj};
      return newState2;
    default:
      return state;
  }
};

export default listReducer;
