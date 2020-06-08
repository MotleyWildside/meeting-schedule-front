import React, {Component} from "react";
import Form from "./Form";
import MeetingCard from "./MeetingCard";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createMeeting, getMeetings} from "../../actions/meetingActions";
import Controller from "../../ApiController/Controller";

class Layout extends Component {

    componentDidMount() {
        Controller.get("/get-meetings").then((resolve) => {
            this.props.getMeetings(resolve);
        });
    }

    render() {
        return (
            <div className="Layout">
                <Form />
                <div className="Layout__cards">
                    {this.props.meetings.map((item, index) =>
                        <MeetingCard
                            meeting={item}
                            key={index}
                            index={index}
                        />)}
                </div>
            </div>
        );
    }
}

export const mapStateToProps = store => {
    return {
        meetings: store.meetings.meetings
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        getMeetings: (body) => {
            dispatch(getMeetings(body.data));
        },
    };
};

Layout.propTypes = {
    meetings: PropTypes.array,
    getMeetings: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
