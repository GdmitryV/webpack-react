import React, {FC} from 'react';

interface Props {
    text: string
}

const TestComponent:FC<Props> = ({text}) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default TestComponent;