import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    background: '#FFF',
                    border: '1px solid #00CC22',
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        marginTop: '-3px',
                        left: '50%',
                        marginLeft: '-3px',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                    },
                },
                '& .MuiSlider-rail': {
                    background: '#8B8B8B;',
                    borderRadius: '10px',
                    height: '5px',
                },
                width: '200px',
            }}
            {...props}
        />
    )
}

export default SuperRange
