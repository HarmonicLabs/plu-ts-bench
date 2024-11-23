
import Chart from 'chart.js/auto'

(function() {
  const data = {"v7":{"size":448,"cpu":1454652,"mem":4398},"v8":{"size":448,"cpu":1108957,"mem":4398}};

  const keys = Object.keys(data);

  new Chart(
    document.getElementById('match-maybe-just-cpu'),
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
    document.getElementById('match-maybe-just-mem'),
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
    document.getElementById('match-maybe-just-size'),
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
