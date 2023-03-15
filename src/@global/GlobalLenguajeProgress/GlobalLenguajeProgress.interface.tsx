import {
  ClassNameProps as individualSpinerClass,
  GlobalSpinnerProps,
} from "@global/GlobalSpinner";

export interface GlobalLenguajeProgressProps {
  valueList: ValueList[];
  className?: Partial<ClassNameProps>;
  individualSpiner?: GlobalSpinnerProps;
}

interface ValueList {
  value: number;
  text: string;
}

interface ClassNameProps {
  root: string;
  individualSpiner: individualSpinerClass;
}
