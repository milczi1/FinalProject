import { useTranslation } from "react-i18next";
import { EmployeeStatus } from "./Employee";

export interface StatusOption { 
    label: string, 
    value: EmployeeStatus 
}

export const STATUS_OPTIONS: EmployeeStatus[] = [
    "FIRED", "HIRED", "ON_LEAVE"
]

export const useTranslateStatus = (): {
    translateStatus: (s: string) => string
} => {
    const { t } = useTranslation();

    const translateStatus = (s: string) => t('status_' + s);

    return { translateStatus };
}