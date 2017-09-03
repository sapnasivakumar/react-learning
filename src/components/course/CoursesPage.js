import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class CoursesPage extends React.Component {
     constructor(props, context){
         super(props, context);
         this.state = {
             course: { title: "" }
         };

         this.onTitleChange = this.onTitleChange.bind(this);
         this.onClickSave = this.onClickSave.bind(this);
         this.onClickDelete = this.onClickDelete.bind(this);
     }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});

    }

    onClickSave(){
        this.props.actions.createCourse(this.state.course);
    }

    onClickDelete(index){
        this.props.actions.deleteCourse(index);

    }

    courseRow(course, index){
        return (
            <div key={index}>
                {course.title}
                <button type="button" value={course.title} onClick={() => this.onClickDelete(index)}>Delete</button>
            </div>
        );
    }

    render() {

        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow, this)}
                <h2> Add Course</h2>
                <input
                    type = "text"
                    onChange = {this.onTitleChange}
                    value = {this.state.course.title} />

                <input
                    type = "submit"
                    value = "Save"
                    onClick ={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
 return {
   actions: bindActionCreators(courseActions, dispatch)
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);


