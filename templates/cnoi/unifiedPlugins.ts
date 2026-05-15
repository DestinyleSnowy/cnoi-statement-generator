import type mdast from "mdast";
import type { VFile } from "vfile";

export default [
  () => (tree: mdast.Root, file: VFile) => {
    file.data.typstCodeSoftBreakInterval = 56;
    tree.children.unshift({
      type: "typst",
      children: [{ type: "typstContent", data: `#import "header.typ": *\n\n` }],
    });
  },
];
