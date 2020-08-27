import React from 'react';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SingleCourse.css'


const SingleCourse = (props) => {
    const {image , title , description , author , rating, students , hours , lecture , level, price} = props.course;
    return (
        <div className="row main-area">
            <div className="col-md-4 pl-0">
                <img className="img-fluid" src={image} alt=""/>
            </div>
            <div className="col-md-8">
                <h5>{title}</h5>
                <p>{description}</p>
                <div className="row">
                    <div className="col-md-8">
                        <h6> <span>by: </span> {author}</h6>
                        <h6> <b>{rating}</b> user rating ({students} students)</h6>
                        <ul>
                            <li>{hours} total hours,</li>
                            <li>{lecture} lectures,</li>
                            <li>{level} levels</li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-right">
                        <h4>${price} </h4>
                        <button className="btn btn-primary">Enroll Now</button>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;