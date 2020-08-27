import React, { useState } from 'react';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import fakeCourseData from '../../fakeCourseData'
import './Course.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import Purchase from '../Purchase/Purchase';

const Course = () => {

    const showData = fakeCourseData.slice(0,13)
    const [course, setCourse] = useState(showData)

    const [purchaseCourse, setPurchaseCourse] = useState([]);

    const handlePurchase = (purchase) => {
        const newCart = [...purchaseCourse , purchase];
        setPurchaseCourse(newCart);
    }

    return (
        <div className="container-fluid mt-4 hero-inner-sec">
            <div className="row">
                <div className="col-md-12 pl-4 title">
                    <h1 className="text-center mb-5">Explore Our Best Courses</h1>
                    <p>We found 42 courses available for you</p>
                </div>
                <div className="col-md-9 px-2">
                    <ul>
                        {
                            course.map((course) => <SingleCourse key={course.id} course={course} handlePurchase={handlePurchase}></SingleCourse>)
                        }
                    </ul>
                </div>
                <div className="col-md-3">
                    <Purchase purchaseCourse={purchaseCourse}></Purchase>
                </div>
            </div>
        </div>
    );
};

export default Course;