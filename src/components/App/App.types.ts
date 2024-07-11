export interface Image {
  id: number;
  urls: {
    small: string;
    full: string;
  };
  alt_description: string;
}

export interface ImageForModal {
  alt: Image["alt_description"];
  src: Image["urls"]["full"];
}

export type PropChildren = {
  children: React.ReactNode;
};
