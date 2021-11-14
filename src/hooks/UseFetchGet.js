import { useState,useEffect } from "react"

export const UseFetchGet = (url) => {
    
    const [Respuesta, setRespuesta] = useState({data:[],loading:false,error:false});
    useEffect(() => {
        fetch(url, {
            method: 'get'
        }).then(resp=>resp.json())
        .then(({data})=>{
            setRespuesta({
                data:data,
                loading:false,
                error:false
            });
        });
    }, [url]);

    return [Respuesta];
}
