import React,{useState, useContext} from 'react';
import {AppContext} from './App';

export default () => {
    const [inp, setInp] = useState('');
    const context = useContext(AppContext);

    return (
        <div>
            <input  
            value={inp}
            onChange={e => setInp(e.target.value)}
            placeholder="Type model"/>
            <button onClick={() => context.add(inp)}>Add</button>
            <hr/>
            <ul>
            {context.cars.map(c => <li key={c.id}>{c.id} - {c.model}</li>)}
            </ul>
        </div>
    );
}
