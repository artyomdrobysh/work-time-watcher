import activeApiConfig from '../../../../../services/api/api-config';

export async function getAllEmployees() {
    try {
        const response = await fetch(`${activeApiConfig.timeLogServiceApi}/employee`);
        if (response.ok) {
            return await response.json();
        } else {
            return {
                error: `error during calling API ${activeApiConfig.timeLogServiceApi}/employee`,
            }
        }
    } catch (err) {
        return {
            error: err,
        };
    }
}
