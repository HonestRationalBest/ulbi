export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: "development" | "production";
  paths: BuildPaths;
  isDev?: boolean;
}
