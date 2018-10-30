import { useEffect, useState } from 'react';

function useFetch(url, defaultData) {
    const [ data, setData ] = useState(defaultData);
    useEffect(async () => {
        if (!url) {
            setData(defaultData);
            return
        }
        let response = await fetch(url)
        let json = await response.json()
        setData(json);
    }, [url])

    return data;
}

export { useFetch };