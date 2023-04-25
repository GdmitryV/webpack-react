import './styles.css';
import GeometryImg from './assets/images/geometry.png';
import TestComponent from "./TestComponent";

export const App = () => {
    return(
        <div>
            <img src={GeometryImg} width={300} alt="image"/>
            <h1>App component!</h1>
            <TestComponent text={'Test text'}/>
        </div>
    );
}