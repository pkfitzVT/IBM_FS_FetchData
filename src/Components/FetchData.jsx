// FetchData.jsx
import React from 'react';
import useFetch from './UseFetch';

function FetchData() {
    const [data] = useFetch('https://api.npoint.io/9045c260b1565daa9e15');

    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default FetchData;
