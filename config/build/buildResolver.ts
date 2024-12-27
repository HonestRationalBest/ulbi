import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".ts", ".js", ".tsx", ".scss"],
    alias: {
      "@": options.paths.src,
    },
  };
}
