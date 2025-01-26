import { ipcRenderer } from 'electron';

export function OpacityControl() {
    const handleOpacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const opacity = parseFloat(e.target.value);
        ipcRenderer.send('change-background-opacity', opacity);
    };

    return (
        <div className="opacity-control">
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue="1"
                onChange={handleOpacityChange}
            />
        </div>
    );
}
