// Step Two: useFlip

import { useState } from 'react';

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const toggleFlip = () => {
        setIsFacingUp(isUp => !isUp)
    }
    return [isFacingUp, toggleFlip]
}
export default useFlip;

