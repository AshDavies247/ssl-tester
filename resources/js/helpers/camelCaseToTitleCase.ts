export const camelCaseToTitleCase = (text: string): string => {
    const splitText = text.replace(/([A-Z])/g, " $1");
    return splitText.charAt(0).toUpperCase() + splitText.slice(1);
};
