import React, {Component} from "react";
import {createMeeting} from "../../actions/meetingActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {mapStateToProps} from "./Layout";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: "",
            department: "",
            meetingRoom: "",
        };
    }

    isDisable() {
        const {state: {date, department, meetingRoom}} = this;
        return !date || !department || !meetingRoom;
    }

    handleInput(e) {
        const { name, value } = e.target;
        console.log(name + ": " + value);

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        const {state: {date, department, meetingRoom}} = this;
        this.props.createMeeting({
            date, department, meetingRoom
        });

        this.setState({
            date: "", department: "", meetingRoom: "",
        });
    }

    render() {
        const {state: {date, department, meetingRoom}} = this;

        return (
            <div className="Form">
                <div className="Form__inputs">
                    <input value={date} name="date" type="date" onInput={(e) => this.handleInput(e)} />
                    <input value={department} name="department" onInput={(e) => this.handleInput(e)} />
                    <input value={meetingRoom} name="meetingRoom" type="number" min="0" onInput={(e) => this.handleInput(e)} />
                </div>
                <button disabled={this.isDisable()} onClick={() => this.handleSubmit()}>Создать митинг</button>
            </div>
        );
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        createMeeting: (body) => {
            dispatch(createMeeting(body));
        },
    };
};

Form.propTypes = {
    createMeeting: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Form);
