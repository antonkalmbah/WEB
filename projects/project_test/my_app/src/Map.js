import { useState, useEffect } from "react";


export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const geo = navigator.geolocation;

        const onChange = ({latitude, longitude}) => {
            // Здесь мы могли бы сохранить весь объект position, но для
            // ясности давайте явно перечислим, какие свойства нас интересуют.
            setPosition({latitude, longitude});
          };
        
          const onError = (error) => {
            setError(error.message);
          };
    
        if (!geo) {
          setError('Геолокация не поддерживается браузером');
          return;
        }
    }, []);

    return {...position, error};
} 

