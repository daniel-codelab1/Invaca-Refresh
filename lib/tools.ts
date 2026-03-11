export const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL || 'http://localhost:1337';

export async function getStrapiMedia(url: string) {
    try {
        const response = await fetch(`${STRAPI_BASE_URL}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}