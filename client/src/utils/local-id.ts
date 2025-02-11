export const createLocalId = () => `local:${Date.now()}`;

export const isLocalId = (id: string) => id.startsWith('local:');
