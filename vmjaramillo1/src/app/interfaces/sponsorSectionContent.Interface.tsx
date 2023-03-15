export type TitlePositionType = "left" | "center" | "right" | "none";

export interface HealthSponsorSectionContentProps {
  sponsorInfo: any;
  hideCarousel?: boolean;
  hideDescription?: boolean;
  titlePosition?: TitlePositionType;
  className?: Partial<ClassNameProps>;
}

export interface ClassNameProps {
  root: string;
  sectionTitle: string;
  title: string;
  description: string;
}
