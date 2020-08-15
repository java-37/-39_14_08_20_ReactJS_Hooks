import React, {useState,useEffect} from 'react';

export default () => {
    const [userInput, setUserInput]  = useState('');
    const [names,setNames] = useState([]);

    useEffect(() => {
        const initNames = localStorage.getItem('NAMES') || '[]';
        setNames(JSON.parse(initNames));
    },[]);

    const clickHandler = () => console.log('click');

    useEffect(() => {
        document.addEventListener('click', clickHandler);
        localStorage.setItem('NAMES',JSON.stringify(names));

        return () => {
            document.removeEventListener('click',clickHandler);
        };
    },[names]);

    return (
        <div>
            <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)}/>
            <button onClick={() => setNames([...names,userInput])}>Add</button>
            <hr/>
            <ul>
                {
                    names.map((n,i) => <li key={i}>{n}</li>)
                }
            </ul>
        </div>
    );
}