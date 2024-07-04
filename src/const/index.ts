const isLocal = import.meta.env.MODE === 'development'
const baseUrlDev = 'http://localhost:4321'
export const URL_API_ENDPOINT = isLocal ? `${baseUrlDev}` : `${import.meta.env.SITE}`
