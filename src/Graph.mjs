class Graph {
  #lists = [];
  constructor(arr) {
    arr.forEach(() => {
      this.#lists.push([]);
    });
  }

  getLists() {
    return this.#lists;
  }

  addEdges(node, ...list) {
    this.#lists[node].push(...list);
  }
  
}

export default Graph;
