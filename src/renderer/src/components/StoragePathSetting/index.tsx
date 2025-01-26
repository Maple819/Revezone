import { Button, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isInRevezoneApp } from '@renderer/utils/navigator';

const DEFAULT_USER_DATA_STORAGE_PATH = window.electron?.process.env['USER_FILES_STORAGE_PATH'];

export default function StoragePathSetting() {
    const [storagePath, setStoragePath] = useState<string | undefined>(
        DEFAULT_USER_DATA_STORAGE_PATH
    );
    const { t } = useTranslation();

    useEffect(() => {
        window.api?.customStoragePathSuccess((event, path: string) => {
            setStoragePath(path);
        });
    }, []);

    if (!isInRevezoneApp) {
        return (
            <div className="text-gray-500 h-36 flex items-center">
                <span className="mr-2">{t('storagePath.storagePathNotice')}</span>
            </div>
        );
    }

    return (
        <div>
            <p className="mb-6">
                <span className="mr-2">{t('operation.storagePath')}:</span>
                <span className="text-slate-500">{storagePath}</span>
            </p>
            <div>
                <Popconfirm
                    placement="bottom"
                    title={t('storagePath.changePath')}
                    description={t('storagePath.changePathConfirm')}
                    onConfirm={() => {
                        window.api?.customStoragePath();
                    }}
                >
                    <Button size="small" className="mr-2">
                        {t('storagePath.changePath')}
                    </Button>
                </Popconfirm>

                <Button
                    size="small"
                    onClick={() => {
                        window.api?.openStoragePath(storagePath);
                    }}
                >
                    {t('storagePath.openPath')}
                </Button>
            </div>
        </div>
    );
}
