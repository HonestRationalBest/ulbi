declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare const __IS__DEV: boolean;
