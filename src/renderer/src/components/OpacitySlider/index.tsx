import { useState } from 'react';

const OpacitySliderComponent = () => {
    const [opacity, setOpacity] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setOpacity(value);

        window.api?.changeWindowOpacity(value);
        // 设置网页透明度
        document.body.style.opacity = value.toString();
        document.body.style.backgroundColor = 'transparent';
        document.documentElement.style.backgroundColor = 'transparent';
    };

    return (
        <div className="opacity-control">
            <label>窗口透明度:</label>
            <input
                type="range"
                min="0.2"
                max="1"
                step="0.1"
                value={opacity}
                onChange={handleChange}
            />
            <span>{Math.round(opacity * 100)}%</span>
        </div>
    );
};

export default OpacitySliderComponent;
