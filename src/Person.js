import React from 'react';

const Person = (props) => {
    return (<div>
                <p>I am {props.name} and I am {props.age} years old.</p>
                <p>My hobbies are: {props.children}.</p>
            </div>
    )
}

export default Person;