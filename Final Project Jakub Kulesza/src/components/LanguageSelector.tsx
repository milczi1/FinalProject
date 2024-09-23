import React from "react";
import i18n from "../i18n"

export function LanguageSelector() {
    const languages = [
        { code: 'pl', label: 'Polski' },
        { code: 'en', label: 'English' }
    ]
    const initLanguage = i18n.language;

    const onLanguageChange = (event: React.ChangeEvent): void => {
        const select = event.target as HTMLSelectElement;
        i18n.changeLanguage(select.value);
    }

    return (<>
        <select onChange={onLanguageChange} className="form-control" style={{width: '150px'}} defaultValue={initLanguage}>
            { languages.map((language) => <option key={language.code} value={language.code}>{language.label}</option> )}
        </select>
    </>)
}