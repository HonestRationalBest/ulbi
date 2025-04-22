declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare const __IS__DEV: boolean;
