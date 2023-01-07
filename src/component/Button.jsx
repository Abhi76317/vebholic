import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ label, onClick, color }) => {
    return (
        <Button variant="contained" onClick={onClick} style={{width:'100%', background: color}}>{label}</Button>
    );
}

export default CustomButton;
