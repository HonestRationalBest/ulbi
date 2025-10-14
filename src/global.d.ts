declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare const __IS__DEV: boolean;
