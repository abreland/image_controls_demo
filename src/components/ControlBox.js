import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import "../css/cesiumreact.css"

export const ControlBox = ({handleBrightness, handleContrast, handleHue, handleSaturation, handleGamma}) => {

    return (
         <div style={{zIndex:1, width:'300px', position:'absolute', padding:'32px'}}>
            <Typography id="brightness-slider" gutterBottom style={{color: 'white'}}>
                Brightness
            </Typography>
            <Slider
                size="small"
                defaultValue={100}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={handleBrightness}
                aria-labelledby="brightness-slider"
            />
            <Typography id="contrast-slider" gutterBottom style={{color: 'white'}}>
                Contrast
            </Typography>
            <Slider
                size="small"
                defaultValue={100}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={handleContrast}
                aria-labelledby="contrast-slider"
            />
            <Typography id="hue-slider" gutterBottom style={{color: 'white'}}>
                Hue
            </Typography>
            <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={handleHue}
                aria-labelledby="hue-slider"
            />
            <Typography id="saturation-slider" gutterBottom style={{color: 'white'}}>
                Saturation
            </Typography>
            <Slider
                size="small"
                defaultValue={100}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={handleSaturation}
                aria-labelledby="saturation-slider"
            />
            <Typography id="gamma-slider" gutterBottom style={{color: 'white'}}>
                Gamma
            </Typography>
            <Slider
                size="small"
                defaultValue={100}
                aria-label="Small"
                valueLabelDisplay="auto"
                onChange={handleGamma}
                aria-labelledby="gamma-slider"
            />
        </div>
    )
};

