type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

const a: TreeNode = { value: "a" };
const b: LeafNode = { value: "b", isLeaf: true };
const c: InnerNode = { value: "c", children: [b] };

type MapNode = <T extends TreeNode>(node: T, f: (value: string) => string) => T


const mapNode: MapNode = (node, f) => {
    return {
        ...node,
        value: f(node.value)
    };
}

const al = mapNode(a, _ => _.toUpperCase());
const bl = mapNode(b, _ => _.toUpperCase());
const cl = mapNode(c, _ => _.toUpperCase());