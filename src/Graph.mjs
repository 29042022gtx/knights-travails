class Graph {
  #list;
  constructor(arr) {
    arr.forEach(() => {
      this.#list.push([]);
    });
  }

  getList() {
    return this.#list;
  }
}

export default Graph;
