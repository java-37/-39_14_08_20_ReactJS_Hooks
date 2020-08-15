import React, {useState} from 'react';

export default () => {
    const [count, setCount] = useState(0);
    const [superCount, setSuperCount] = useState({title:'positive', count:0})

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count - 1)}> - </button>
            <button onClick={() => setCount(count + 1)}> + </button>
            <h3>Super count: {superCount.title}  - {superCount.count}</h3>
            <button onClick={() => setSuperCount({...superCount, title:'negative',count:superCount.count - 1})}> - </button>
            <button onClick={() => setSuperCount({title:'positive', count:superCount.count + 1})}> + </button>
        </div>
    );
}