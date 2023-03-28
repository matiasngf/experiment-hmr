export const createNode = (type, {...props} = {}) => {
  const node = document.createElement(type);
  Object.keys(props).forEach(key => node[key] = props[key]);

  node.appendTo = (parent) => {
    parent.appendChild(node)
    return node
  }

  return node
}