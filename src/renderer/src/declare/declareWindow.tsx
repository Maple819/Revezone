/* eslint-disable prettier/prettier */
// ... existing code ...
export { }; // 将文件标记为模块

declare global {
    interface Window {
        electron: {
            process: {
                env: {
                    DEEP_LINKING_URL?: string;
                    OPEN_FILE_PATH?: string;
                    OPEN_FILE_DATA?: string;
                };
            };
        };
    }
}

// ... existing code ...
