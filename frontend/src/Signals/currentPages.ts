import { signal } from "@preact/signals-react";


export const currentLayout = signal(localStorage.getItem('currentLayout'));

export const updateCurrentLayout = (newValue: string) => {
  localStorage.setItem('currentLayout', newValue);
  currentLayout.value = newValue;
}
