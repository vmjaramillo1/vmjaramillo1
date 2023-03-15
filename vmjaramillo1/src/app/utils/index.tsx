import configuration from "app/data/configuration/configuration.json";

/**
 * array ordering by custom attribute
 * @param array Array to order
 * @param filter attribute used to order
 * @returns
 */
export const sortArrayBy = (array, filter) => {
  const itemList = array;
  itemList.sort((a, b) => (a[filter] > b[filter] ? 1 : -1));
  return itemList;
};

/**
 * check if a variable has data
 * @param data Data to validate
 * @returns true/false
 */
export const hasData = (data, checkLenght = false) => {
  if (checkLenght) {
    return (
      data !== undefined &&
      data !== "" &&
      data !== null &&
      data !== "" &&
      data.length > 0
    );
  }
  return data !== undefined && data !== "" && data !== null && data !== "";
};


export const getValuesByKeyStartWith = (startWith, object) => {
  const keys = Object.keys(object);
  const keyName = keys.filter((key) => key.startsWith(startWith));
  return object[keyName[0]];
};

export const capitalizeWord = (word) => {
  if (hasData(word)) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return "";
};

export const capitalizeSentence = (sentence) => {
  return sentence
    .split(" ")
    .trim()
    .map((word) => capitalizeWord(word))
    .join(" ");
};

export function currentDateMinusAge(age) {
  const currentDate = new Date();
  currentDate.setFullYear(currentDate.getFullYear() - age);
  return new Date(currentDate);
}

export function transactionTypeText(transactionType, isLowerCase?) {
  let text = transactionType === "P" ? "Pago" : "Suscripción";
  if (isLowerCase) {
    text = text.toLowerCase();
  }
  return text;
}

export function checkStringBoolValue(valueToCheck, positiveString) {
  return typeof valueToCheck === "boolean"
    ? valueToCheck
    : valueToCheck === positiveString;
}

export const formatterCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const getFromEnvFile = (key: string): string => {
  key = `${configuration.security.reactPrefixKey}${key}`;
  const value = process.env[key];
  return value || "";
};

export const moneyFormat = (
  value: number,
  maxDecimals: number = 2,
  minDecimals: number = 0
) => {
  const options = {
    maximumFractionDigits: maxDecimals,
    minimumFractionDigits: minDecimals,
    style: "currency",
    currency: "USD",
  };
  return value.toLocaleString("en-US", options);
};
