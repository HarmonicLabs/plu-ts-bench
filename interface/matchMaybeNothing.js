
import Chart from 'chart.js/auto'

(function() {
  const data = {"v7":{"size":432,"cpu":1997141,"mem":5500},"v8":{"size":464,"cpu":1413339,"mem":5500},"v9":{"size":472,"cpu":1413339,"mem":5500}};

  const keys = Object.keys(data);

  new Chart(
    document.getElementById('match-maybe-nothing-cpu'),
    {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [
          {
            label: 'cpu',
            data: keys.map(version => data[version].cpu),
            options: {
              maintainAspectRatio: false
            }
          }
        ]
      }
    }
  );
  new Chart(
    document.getElementById('match-maybe-nothing-mem'),
    {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [
          {
            label: 'mem',
            data: keys.map(version => data[version].mem),
            options: {
              maintainAspectRatio: false
            }
          }
        ]
      }
    }
  );
  new Chart(
    document.getElementById('match-maybe-nothing-size'),
    {
      type: 'bar',
      data: {
        labels: keys,
        datasets: [
          {
            label: 'size',
            data: keys.map(version => data[version].size),
            options: {
              maintainAspectRatio: false
            }
          },
        ]
      }
    }
  );
})();
