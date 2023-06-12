import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, styled } from "@mui/material"


const LoadingCircular = styled(CircularProgress)`
    color: #D1D7DB;
`

const ProgressBar = () => {
    return <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)', width: 264, height: 264 }}><LoadingCircular size={65} /></Box >
};

const ImageWithProgressBar = ({ src }) => {
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(src);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(true);
            setImageUrl(`${src}?t=${Date.now()}`);
        }, 5000); // Intervalo de actualización en milisegundos (en este caso, cada 5 segundos)

        return () => {
            clearInterval(interval);
        };
    }, [src]);

    const handleImageLoaded = () => {
        setLoading(false);
    };

    const handleImageError = () => {
        setLoading(false);
    };

    return (
        <>
            {loading && <ProgressBar />}
            <img
                src={imageUrl}
                onLoad={handleImageLoaded}
                onError={handleImageError}
                style={{ display: loading ? 'none' : 'block', width: 300, height: 300, padding: "16px" }}
            />
        </>
    );
};

export default ImageWithProgressBar