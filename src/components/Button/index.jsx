//React
import React from 'react';

//Libs
import { Button } from '@mui/material';

export default function ButtonComponent({
    width, height, fontSize, variant, title, disabled = false, color, size, startIcon, endIcon, fullWidth, onClick, backgroundColor
}) {


    return (
        <Button
            variant={variant}
            disabled={disabled}
            color={color}
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}
            fullWidth={fullWidth}
            onClick={onClick}
            style={{
                width,
                fontSize,
                height,
                backgroundColor,
            }}
        >
            {title}
        </Button>
    );
}
