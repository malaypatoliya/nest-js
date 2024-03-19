import 'dotenv/config';

export const getEnvironmentData = (envVarName: string): string => {
    const value = process.env[envVarName];

    if (value === undefined || value === null) {
        throw new Error(`environment variable ${envVarName} is not set`);
    }

    return value;
};