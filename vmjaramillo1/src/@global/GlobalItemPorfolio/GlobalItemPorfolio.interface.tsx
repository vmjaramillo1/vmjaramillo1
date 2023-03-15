export interface GlobalItemPorfolioProps {
  title?: string;
  body?: string;
  img?: ImgProps;
  className?: Partial<ClassNameProps>;
  onClick: () => void;
}

interface ImgProps {
  src: string;
  alt: string;
}

interface ClassNameProps {
  root: string;
  img: string;
  title: string;
  body: string;
}
