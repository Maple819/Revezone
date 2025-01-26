import { langCodeList } from '@renderer/i18n';
import { Select } from 'antd';
import { langCodeAtom } from '@renderer/store/jotai';
import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLangCodeFromLocal, setLangCodeToLocal } from '../../store/localstorage';
import { DEFAULT_LANG_CODE } from '@renderer/utils/constant';

export default function LanguageSwitcher() {
    const [langCode, setLangCode] = useAtom(langCodeAtom);
    const { i18n } = useTranslation();

    useEffect(() => {
        const code = getLangCodeFromLocal() || DEFAULT_LANG_CODE;
        i18n.changeLanguage(code);
        setLangCode(code);
    }, []);

    const onChange = useCallback((code: string) => {
        setLangCode(code);
        i18n.changeLanguage(code);
        setLangCodeToLocal(code);
    }, []);

    return (
        <Select
            size="small"
            value={langCode}
            onClick={(e) => e.stopPropagation()}
            onChange={onChange}
            className="revezone-language-select items-center w-auto whitespace-nowrap text-sm"
            bordered={false}
        >
            {langCodeList.map((item) => {
                return (
                    <Select.Option key={item.key} value={item.key}>
                        <span className="text-sm">{item.label}</span>
                    </Select.Option>
                );
            })}
        </Select>
    );
}
