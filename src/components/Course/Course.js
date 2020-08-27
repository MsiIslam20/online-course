import React, { useState } from 'react';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeCourseData from '../../fakeCourseData'
import './Course.css';
import SingleCourse from '../SingleCourse/SingleCourse';

const Course = () => {

    const showData = fakeCourseData.slice(0,13)
    const [course, setCourse] = useState(showData)

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-11 mx-auto title">
                    <h1 className="text-center mb-5">Explore Our Best Courses</h1>
                    <p>We found 42 courses available for you</p>
                </div>
                <div className="col-md-9 px-5">
                    <ul>
                        {
                            course.map((course) => <SingleCourse course={course}></SingleCourse>)
                        }
                    </ul>
                </div>
                <div className="col-md-3">
                    <h1>Enroll Area</h1>
                </div>
            </div>
        </div>
    );
};

export default Course;