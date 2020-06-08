import {CREATE_MEETING, DELETE_MEETING, GET_MEETINGS} from "../constants/ActionTypes";

const initialState = {
    meetings: []
};

export default function reducer(state = initialState, action) {
    let meetings = [...state.meetings];

    switch (action.type) {
        case CREATE_MEETING:
            meetings.push(action.payload);
            return {...state, meetings};
        case GET_MEETINGS:
            return {...state, meetings: action.payload};
        case DELETE_MEETING:
            meetings.splice(action.payload, 1);
            return {...state, meetings};
    }
    return state;
}
