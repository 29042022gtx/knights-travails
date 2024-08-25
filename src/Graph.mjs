class Graph {
  #lists = [[]];
  constructor(arr) {
    this.#lists = [];
    arr.forEach(() => {
      this.#lists.push([]);
    });
  }

  path(start, end) {
    let node = {
      path: [],
      values: [start],
    };
    const passedNodes = [];
    const queue = [node];
    while (!exists(end, node.values)) {
      node = queue.shift();
      node.values.forEach((val) => {
        if (exists(val, passedNodes)) {
          return
        }
        passedNodes.push(val);
        queue.push({
          path: node.path.concat(val),
          values: this.#lists[val]
        })
      })
    }
    return node.path.concat(end);
  }

  at(idx) {
    return this.#lists[idx];
  }

  getLists() {
    return this.#lists;
  }

  addEdges(node, ...list) {
    this.#lists[node].push(...list);
  }
}

function exists(value, arr) {
  return arr.some((val) => {
    return val == value;
  });
}

export default Graph;
