export interface SitPlanCardProps {
  contentInfo: any;
  coverages: any;
  itemInfo: any;
  onSelectedPlanClick?: Function;
  className?: Partial<ClassNameProps>;
  isRecommended?: boolean;
}

export interface ClassNameProps {
  root: string;
}
