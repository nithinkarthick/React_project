import FirstComponent from './FirstComponent';
import { FifthComponent } from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import ForthComponent from './ForthComponent';
import LearningJavaScript from './LearningJavaScript';



export default function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <ForthComponent></ForthComponent>
            <FifthComponent></FifthComponent>
            <LearningJavaScript></LearningJavaScript>
        </div>
    );
}
