const problems = [
  {
    id: 1,
    name: "Two Sum",
    rating: 800,
    tags: ["implementation", "math"],
  },
  {
    id: 2,
    name: "Binary Search",
    rating: 1000,
    tags: ["binary search"],
  },
  {
    id: 3,
    name: "Graph Paths",
    rating: 1400,
    tags: ["graphs", "dfs"],
  },
];

function getAllProblems() {
  return problems;
}

function getProblemById(id) {
  return problems.find((problem) => problem.id === Number(id));
}

module.exports = {
  getAllProblems,
  getProblemById,
};
