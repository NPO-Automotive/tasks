import zxcvbn from 'zxcvbn';

const USERNAME_REGEX = /^[a-zA-Z0-9]+((_|\.)?[a-zA-Z0-9])*$/;

export const isPassword = (password: string) => zxcvbn(password).score >= 2; // TODO: move to config

export const isUsername = (name: string) =>
  name.length >= 3 && name.length <= 16 && USERNAME_REGEX.test(name);
