import configuration from "app/data/configuration/configuration.json";

/**
 * Indetification validation algorithm
 * @param value Id to validate
 * @returns true/false
 */
export default function validCardId(value) {
  let total = 0;
  if (value === "" || value === null) {
    return true;
  }
  if (value.length !== 10) {
    return false;
  }
  const longcheck = value.length - 1;
  const checkDigit = parseInt(value.charAt(longcheck), 10);
  for (let i = 0; i < longcheck; i += 1) {
    if (i % 2 === 0) {
      let aux = value.charAt(i) * 2;
      if (aux > 9) {
        aux -= 9;
      }
      total += aux;
    } else {
      total += parseInt(value.charAt(i), 10);
    }
  }
  total = total % 10 ? 10 - (total % 10) : 0;

  return checkDigit === total;
}

export const customIdValidation = (idUser) => {
  if (configuration.validateIdentification) {
    return validCardId(idUser);
  }
  return true;
};
