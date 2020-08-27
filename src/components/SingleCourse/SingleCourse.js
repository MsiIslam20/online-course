import React from 'react';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SingleCourse.css'


const SingleCourse = (props) => {
    return (
        <div className="row main-area">
            <div className="col-md-4">
                <img className="img-fluid" src={props.course.image} alt=""/>
            </div>
            <div className="col-md-8">
                <h5>{props.course.title}</h5>
            </div>
        </div>
    );
};

export default SingleCourse;