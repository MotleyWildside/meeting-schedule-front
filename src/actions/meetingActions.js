import {CREATE_MEETING, DELETE_MEETING, GET_MEETING, GET_MEETINGS} from "../constants/ActionTypes";
import Controller from "../ApiController/Controller";

export function createMeeting(payload) {

    Controller.post("/create-meeting", payload);

    return {
        type: CREATE_MEETING,
        payload: payload
    };
}

export function getMeetings(payload) {
    return {
        type: GET_MEETINGS,
        payload: payload
    };
}

export function deleteMeeting(payload) {
    Controller.delete("/delete-meeting", payload);

    return {
        type: DELETE_MEETING,
        payload: payload
    };
}
