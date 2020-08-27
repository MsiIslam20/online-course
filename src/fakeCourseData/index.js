import design from './design';
import others from './others';
import development from './development';

const fakeCourseData = [...design, ...others, ...development];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeCourseData);

export default fakeCourseData;