import { useTranslation } from "react-i18next"

export function BackButton() {
    const { t } = useTranslation();

    const onBackClick = (event: React.MouseEvent): void => {
        event.preventDefault();

        window.history.back();
    }

    return (<button onClick={onBackClick} className="btn btn-light">{t('back')}</button>)
}