import { config } from "../config";
import { Employee } from "../models/Employee";

const employeesUrl = config.baseApiUrl + "employee/";

export const createEmployee = (newEmployee: Omit<Employee, 'id'>) => {
    const apiUrl = employeesUrl;

    return fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newEmployee)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Cannot add new employee');
        }
    })
}

export const editEmployee = (employee: Employee) => {
    const apiUrl = employeesUrl + employee.id;

    return fetch(apiUrl, {
        method: "PUT",
        body: JSON.stringify(employee)
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Cannot edit employee');
        }
    })
}

export const deleteEmployee = (id: string): Promise<boolean> => {
    const apiUrl = employeesUrl + id;

    return fetch(apiUrl, { method: "DELETE" }).then(response => {
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    })
}

export const getEmployee = (id: string): Promise<Employee> => {
    const apiUrl = employeesUrl + id;

    return fetch(apiUrl, { method: "GET"}).then(response => {
        if (response.ok) {
            return response.json().then(
                (data) => {
                    return { ...data, birthdate: new Date(data.birthdate)}
                }
            );
        } else {
            throw new Error('Cannot find employee with id ' + id);
        }
    })
}

export const getAllEmployees = (): Promise<Employee[]> => {
    const apiUrl = employeesUrl;

    return fetch(apiUrl, { method: "GET" }).then(response => {
        if (response.ok) {
            return response.json().then(data => {
                const employees = data as Employee[];
                return employees.map(employee => {
                    employee.birthdate = employee.birthdate ? new Date(employee.birthdate) : null;
                    return employee;
                })
            })
            
        } else {
            throw new Error('Cannot fetch list of employees!');
        }
    })
} 