import {useEffect, useRef, useState} from "react";
import {Viewer} from "resium";
import {ControlBox} from "./ControlBox";


export const ViewerComponent = () => {
    const ref = useRef(null);
    const [brightness, setBrightness] = useState(1.0)
    const [contrast, setContrast] = useState(1.0)
    const [hue, setHue] = useState(0.1)
    const [saturation, setSaturation] = useState(1.0)
    const [gamma, setGamma] = useState(1.0)

    useEffect(() => {
        if (ref.current && ref.current.cesiumElement) {
            const imageLayer = ref.current.cesiumElement.imageryLayers.get(0)
            imageLayer.brightness = brightness
            imageLayer.contrast = contrast
            imageLayer.hue = hue
            imageLayer.saturation = saturation
            imageLayer.gamma = gamma
        }
    }, [brightness, contrast, hue, saturation, gamma]);

    const handleBrightness = (event) => {
        const brightnessVal = event.target.value / 100.0
        setBrightness(brightnessVal)
    }
    const handleContrast = (event) => {
        const contrastVal = event.target.value / 100.0
        setContrast(contrastVal)
    }
    const handleHue = (event) => {
        const hueVal = event.target.value / 100.0
        setHue(hueVal)
    }
    const handleSaturation = (event) => {
        const saturationVal = event.target.value / 100.0
        setSaturation(saturationVal)
    }
    const handleGamma = (event) => {
        const gammaVal = event.target.value / 100.0
        setGamma(gammaVal)
    }

    return (
        <div>
            <ControlBox
                handleBrightness={handleBrightness}
                handleContrast={handleContrast}
                handleHue={handleHue}
                handleSaturation={handleSaturation}
                handleGamma={handleGamma}
            ></ControlBox>
            <Viewer ref={ref}/>
        </div>
    )
};

