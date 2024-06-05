// validation.ts
export function isNameValid(nameInput: string) {
  const regExName = /^[^\d]{3,}$/;
  return regExName.test(String(nameInput).toLowerCase());
}

export function isLastNameValid(lastNameInput: string) {
  const regExName = /^[^\d]{3,}$/;
  return regExName.test(String(lastNameInput).toLowerCase());
}

export function isEmailValid(emailInput: string) {
  const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExEmail.test(String(emailInput).toLowerCase());
}
