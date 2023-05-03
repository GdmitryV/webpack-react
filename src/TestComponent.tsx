import React, {FC} from 'react';
import styles from './TestComponent.module.css';

interface Props {
    text: string
}

const TestComponent:FC<Props> = ({text}) => {
    return (
        <div>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default TestComponent;