const BASE_URL = import.meta.env.BASE_URL || window.BASE_URL || '/';

const getBasePath = (url) => {
  try {
    return new URL(url).pathname.replace(/\/$/, '');
  } catch {
    return '';
  }
};

const SERVER_BASE_URL =
  import.meta.env.VITE_SERVER_BASE_URL ||
  (import.meta.env.PROD ? BASE_URL : 'http://localhost:1337');

export default {
  BASE_PATH: getBasePath(BASE_URL),
  SERVER_BASE_URL,
  SERVER_BASE_PATH: getBasePath(SERVER_BASE_URL),
  SERVER_HOST_NAME: new URL(SERVER_BASE_URL).origin,
  ACCESS_TOKEN_KEY: 'accessToken',
  ACCESS_TOKEN_VERSION_KEY: 'accessTokenVersion',
  ACCESS_TOKEN_VERSION: '1',
  POSITION_GAP: 65535,
  ACTIVITIES_LIMIT: 50,
};
