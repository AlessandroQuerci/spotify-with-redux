import { PLAY_SONG } from "../actions";

const initialState = {
  song: {
    title: "",
    artist: "",
    cover: "",
  },
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        song: {
          ...state.song,
          title: action.titlePayload,
          artist: action.artistPayload,
          cover: action.urlPayload,
        },
      };
    default:
      return state;
  }
};

export default playerReducer;
