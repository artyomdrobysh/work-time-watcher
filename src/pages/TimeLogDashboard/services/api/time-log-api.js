import activeApiConfig from '../../../../services/api/api-config';

export async function uploadXml(file) {
    const formData = new FormData();
    formData.append('file', file);
    try {
        const response = await fetch(`${activeApiConfig.timeLogServiceApi}/time-log/upload`, {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            console.log('ok');
        } else {
            console.error(response.status);
        }
    } catch (err) {
        console.error(err);
    }
}

export async function getTimeLogsByEmployee(employeeId) {
    try {
        const response = await fetch(`${activeApiConfig.timeLogServiceApi}/time-log/${employeeId}`);
        if (response.ok) {
            return await response.json();
        } else {
            return {
                error: `error during calling API ${activeApiConfig.timeLogServiceApi}/time-log/${employeeId}`,  
            };
        }
    } catch (err) {
        return {
            error: err,
        };
    }
}
