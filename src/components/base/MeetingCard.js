import React, {Component} from "react";
import PropTypes from "prop-types";
import {deleteMeeting, getMeetings} from "../../actions/meetingActions";
import {connect} from "react-redux";
import {mapStateToProps} from "./Layout";

class MeetingCard extends Component {

    deleteCard() {
        this.props.deleteMeeting(this.props.index);
    }

    render() {
        const {props: { meeting }} = this;
        return (
            <div className="MeetingCard">
                <div className="MeetingCard__delete" onClick={() => this.deleteCard()}>Delete</div>
                <div className="MeetingCard__value">Date: {new Date(meeting.date).toDateString()}</div>
                <div className="MeetingCard__value">Department: {meeting.department}</div>
                <div className="MeetingCard__value">Meeting room: {meeting.meetingRoom}</div>
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        deleteMeeting: (index) => {
            dispatch(deleteMeeting(index));
        },
    };
};

MeetingCard.propTypes = {
    deleteMeeting: PropTypes.func,
    meeting: PropTypes.object,
    key: PropTypes.number,
    index: PropTypes.number,
};

export default connect(null, mapDispatchToProps)(MeetingCard);
