export type variantCoverageCardType = "accepted" | "rejected";

export interface HealthCoverageCardProps {
  variant?: variantCoverageCardType;
  coverageList?: any;
  title?: string;
  notification?: Partial<notificationProps>;
  variantStyle?: Partial<VariantStyleProps>;
  containerStyle?: string;
}

export interface notificationProps {
  showNotification: boolean;
  info: string;
  body: string;
}

export interface VariantStyleProps {
  titleTipography: string;
  titleContainerClass: string;
  itemsTipography: string;
  containerClass: string;
  avatarContainerClass: string;
  avatarClass: string;
  listItemClass: string;
  imgClass: string;
}
