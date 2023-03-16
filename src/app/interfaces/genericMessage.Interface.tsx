import React from "react";

export interface HealthGenericMessageProps {
  image?: string;
  imageAlt?: string;
  title?: string | React.ReactElement;
  text?: string | React.ReactElement;
  action?: string | React.ReactElement;
  heightWith?: string;
  className?: Partial<ClassNameProps>;
}

interface ClassNameProps {
  root: string;
  imageSection: string;
  titleSection: string;
  textSection: string;
  actionSection: string;
}
