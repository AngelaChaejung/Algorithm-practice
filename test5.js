function minimumTreePath(n, edges, visitNodes) {
  const graph = new Map();
  for (let i = 1; i <= n; i++) {
    graph.set(i, []);
  }

  for (const [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  const visited = new Set();
  const queue = [[1, 0, 0]]; // [노드 번호, 거리, 방문한 visitNodes 노드의 개수]
  visited.add(1);

  while (queue.length > 0) {
    const [cur, dist, cnt] = queue.shift();

    // visitNodes 노드를 방문한 경우
    if (visitNodes.includes(cur)) {
      const idx = visitNodes.indexOf(cur);
      visitNodes.splice(idx, 1);
    }

    // visitNodes 노드를 모두 방문한 경우
    if (visitNodes.length === 0 && cur === n) {
      return dist;
    }

    for (const neighbor of graph.get(cur)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        // visitNodes 배열에 포함된 노드만 queue에 추가
        if (visitNodes.includes(neighbor)) {
          queue.push([neighbor, dist + 1, cnt + 1]);
        } else {
          queue.push([neighbor, dist + 1, cnt]);
        }
      } else if (neighbor === 1 && cur === n && cnt === visitNodes.length) {
        // visitNodes 노드를 모두 방문하고, 다시 1번 노드로 돌아온 경우
        return dist + 1;
      }
    }
  }

  // visitNodes 배열에 포함된 노드를 방문할 수 없는 경우
  return Infinity;
}

// n에서 끝나야함
// 1에서 시작
// visitNodes는꼭ㄱ방문해야함
