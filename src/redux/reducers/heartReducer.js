import { PLAY_SONG } from "../actions";

const initialState = {
  main: {
    selected: false,
  },
};

const heartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        main: {
          ...state.main,
          selected: true,
        },
      };
    default:
      return state;
  }
};

export default heartReducer;
