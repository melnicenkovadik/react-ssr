import React from 'react';
import {Link} from 'react-router-dom';

export default function Page1() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return <div>
        <h1>Page1</h1>
        <br/>
        {count}
        <button onClick={handleClick}>Click me</button>
        <Link to="/page2">Page2</Link>
    </div>;
}
