import {connect} from 'react-redux';

const UserComponent = (props) => {
    return (
        <div>{`Welcome user ${props.currentUser}`}</div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, null)(UserComponent);