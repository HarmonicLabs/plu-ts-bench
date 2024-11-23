
import Chart from 'chart.js/auto'

const colors = [
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 206, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(255, 159, 64)"
];

(function () {
  const data = {"v7":[{"size":832,"cpu":2166448,"mem":6269},{"size":832,"cpu":4606206,"mem":12740},{"size":832,"cpu":7045964,"mem":19211},{"size":832,"cpu":9485722,"mem":25682},{"size":832,"cpu":11925480,"mem":32153},{"size":832,"cpu":14365238,"mem":38624},{"size":832,"cpu":16804996,"mem":45095},{"size":832,"cpu":19244754,"mem":51566},{"size":832,"cpu":21684512,"mem":58037},{"size":832,"cpu":24124270,"mem":64508},{"size":832,"cpu":26564028,"mem":70979},{"size":832,"cpu":29003786,"mem":77450},{"size":832,"cpu":31443544,"mem":83921},{"size":832,"cpu":33883302,"mem":90392},{"size":832,"cpu":36323060,"mem":96863},{"size":832,"cpu":38762818,"mem":103334},{"size":832,"cpu":41202576,"mem":109805},{"size":832,"cpu":43642334,"mem":116276},{"size":832,"cpu":46082092,"mem":122747},{"size":832,"cpu":48521850,"mem":129218}],"v8":[{"size":832,"cpu":1459453,"mem":6269},{"size":832,"cpu":3066527,"mem":12740},{"size":832,"cpu":4673601,"mem":19211},{"size":832,"cpu":6280675,"mem":25682},{"size":832,"cpu":7887749,"mem":32153},{"size":832,"cpu":9494823,"mem":38624},{"size":832,"cpu":11101897,"mem":45095},{"size":832,"cpu":12708971,"mem":51566},{"size":832,"cpu":14316045,"mem":58037},{"size":832,"cpu":15923119,"mem":64508},{"size":832,"cpu":17530193,"mem":70979},{"size":832,"cpu":19137267,"mem":77450},{"size":832,"cpu":20744341,"mem":83921},{"size":832,"cpu":22351415,"mem":90392},{"size":832,"cpu":23958489,"mem":96863},{"size":832,"cpu":25565563,"mem":103334},{"size":832,"cpu":27172637,"mem":109805},{"size":832,"cpu":28779711,"mem":116276},{"size":832,"cpu":30386785,"mem":122747},{"size":832,"cpu":31993859,"mem":129218}]};

  new Chart(
    document.getElementById('index-list-size'),
    {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "size",
            data: Object.keys(data)
            .map(version => data[version][0].size),
          }
        ]
      }
    }
  );
  new Chart(
    document.getElementById('index-list-cpu'),
    {
      type: 'line',
      data: {
        labels: new Array(data.v7.length).fill(0).map((_, i) => i),
        datasets: Object.keys(data).map((version, i) => ({
          label: version,
          data: data[version]
          .slice(0, data.v7.length)
          .map(row => row.cpu),
          fill: false,
          borderColor: colors[i]
        }))
      }
    }
  );
  new Chart(
    document.getElementById('index-list-mem'),
    {
      type: 'line',
      data: {
        labels: new Array(data.v7.length).fill(0).map((_, i) => i),
        datasets: Object.keys(data).map((version, i) => ({
          label: version,
          data: data[version]
          .map(row => row.mem),
          fill: false,
          borderColor: colors[i]
        }))
      }
    }
  );
})();