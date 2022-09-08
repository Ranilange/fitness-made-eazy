import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./learn.css"
export default function BasicButtons() {
    return (
        <Stack spacing={2} direction="row">
            <Button className='add-button' style={{ width: 300, height: 70, fontSize: 25 }} variant="contained">ADD TO CART</Button>
        </Stack>
    );
}
