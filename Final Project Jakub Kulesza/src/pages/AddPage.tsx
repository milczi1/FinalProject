import { useNavigate } from "react-router-dom";
import { createEmployee } from "../services/API";
import { useTranslation } from "react-i18next";
import { StatusSelect } from "../components/StatusSelect";

export function AddPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data: Record<string, string> = {};

        formData.forEach((value, key) => {
            data[key] = value as string;
        })

        // TODO: Try to find better typing method
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createEmployee(data as any).then(() => {
            navigate('/');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="pt-4 pb-4">{t('add_epmloyee_title')}</h1>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="firstname" className="form-label">{t('firstname')}</label>
                    <input className="form-control" type="text" name="firstname" required />
                </div>
                <div className="col">
                    <label htmlFor="lastname" className="form-label">{t('lastname')}</label>
                    <input className="form-control" type="text" name="lastname" required/>
                </div>
                <div className="col">
                    <label htmlFor="birthdate" className="form-label">{t('birthdate')}</label>
                    <input className="form-control" type="date" name="birthdate" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                <label htmlFor="phonenumber" className="form-label">{t('phonenumber')}</label>
                <input className="form-control" type="text" name="phonenumber" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="address" className="form-label">{t('address')}</label>
                    <input type="text" className="form-control" name="address" required />
                </div>
                <div className="col">
                    <label htmlFor="city" className="form-label">{t('city')}</label>
                    <input type="text" className="form-control" name="city" required />
                </div>
                <div className="col">
                    <label htmlFor="postalcode" className="form-label">{t('postalcode')}</label>
                    <input type="text" className="form-control" name="postalcode" required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="status" className="form-label">{t('status')}</label>
                    <StatusSelect name="status"></StatusSelect>
                </div>
                <div className="col">
                    <label htmlFor="salary" className="form-label">{t('salary')}</label>
                    <input type="text" className="form-control" name="salary" required />
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary" type="submit">{t('add')}</button>
            </div>
        </form>
    )
}