import React, { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { Employee } from "../models/Employee";
import { useNavigate } from "react-router-dom";
import { getAllEmployees } from "../services/API";
import { useTranslation } from "react-i18next";

export function EmployeesPage() {
    const navigate = useNavigate();
    const [data, setData] = useState<Employee[]>([]);
    const {t} = useTranslation();

      useEffect(() => {
        getAllEmployees().then(employees => {
            setData(employees);
        });
      }, []);


      const handleAddClick = (event: React.MouseEvent): void => {
        event.preventDefault();
        navigate('/add');
      }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='pt-4 pb-4'>{t('employees')}</h1>
                <button onClick={handleAddClick} className="btn btn-success">{t('add')}</button>
            </div>

            <div className="w-100 text-center">
            { data.length > 0 ? <Table data={data}></Table> : <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span></div>}
            </div>
        </>
    )
}