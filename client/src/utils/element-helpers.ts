export const focusEnd = (
  element: HTMLInputElement | HTMLTextAreaElement,
): void => {
  element.focus();
  element.setSelectionRange(element.value.length + 1, element.value.length + 1);
};

export const isActiveTextElement = (element: HTMLElement): boolean =>
  ['input', 'textarea'].includes(element.tagName.toLowerCase()) &&
  element === document.activeElement;
