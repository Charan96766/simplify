const tickets = [
    ['Paris', 'Skopje'], ['Zurich', 'Amsterdam'], ['Prague', 'Zurich'],
    ['Barcelona', 'Berlin'], ['Kiev', 'Prague'], ['Skopje', 'Paris'],
    ['Amsterdam', 'Barcelona'], ['Berlin', 'Kiev'], ['Berlin', 'Amsterdam']
];

const startCity = 'Kiev';

function findRoute(tickets, startCity) {
    const graph = {};

    
    tickets.forEach(([from, to]) => {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    });

    Object.keys(graph).forEach(city => graph[city].sort()); 

    const result = [];

    function dfs(city) {
        while (graph[city] && graph[city].length > 0) {
            dfs(graph[city].shift()); 
        }
        result.push(city); 
    }

    dfs(startCity);
    return result.reverse(); 
}

console.log(findRoute(tickets, startCity)); 
