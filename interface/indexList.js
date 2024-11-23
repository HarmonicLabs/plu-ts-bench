
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
  const data = {"v7":[{"size":832,"cpu":2166448,"mem":6269},{"size":832,"cpu":4606206,"mem":12740},{"size":832,"cpu":7045964,"mem":19211},{"size":832,"cpu":9485722,"mem":25682},{"size":832,"cpu":11925480,"mem":32153},{"size":832,"cpu":14365238,"mem":38624},{"size":832,"cpu":16804996,"mem":45095},{"size":832,"cpu":19244754,"mem":51566},{"size":832,"cpu":21684512,"mem":58037},{"size":832,"cpu":24124270,"mem":64508},{"size":832,"cpu":26564028,"mem":70979},{"size":832,"cpu":29003786,"mem":77450},{"size":832,"cpu":31443544,"mem":83921},{"size":832,"cpu":33883302,"mem":90392},{"size":832,"cpu":36323060,"mem":96863},{"size":832,"cpu":38762818,"mem":103334},{"size":832,"cpu":41202576,"mem":109805},{"size":832,"cpu":43642334,"mem":116276},{"size":832,"cpu":46082092,"mem":122747},{"size":832,"cpu":48521850,"mem":129218}],"v8":[{"size":872,"cpu":1459453,"mem":6269},{"size":872,"cpu":3066527,"mem":12740},{"size":872,"cpu":4673601,"mem":19211},{"size":872,"cpu":6280675,"mem":25682},{"size":872,"cpu":7887749,"mem":32153},{"size":872,"cpu":9494823,"mem":38624},{"size":872,"cpu":11101897,"mem":45095},{"size":872,"cpu":12708971,"mem":51566},{"size":872,"cpu":14316045,"mem":58037},{"size":872,"cpu":15923119,"mem":64508},{"size":872,"cpu":17530193,"mem":70979},{"size":872,"cpu":19137267,"mem":77450},{"size":872,"cpu":20744341,"mem":83921},{"size":872,"cpu":22351415,"mem":90392},{"size":872,"cpu":23958489,"mem":96863},{"size":872,"cpu":25565563,"mem":103334},{"size":872,"cpu":27172637,"mem":109805},{"size":872,"cpu":28779711,"mem":116276},{"size":872,"cpu":30386785,"mem":122747},{"size":872,"cpu":31993859,"mem":129218}],"v9":[{"size":592,"cpu":755632,"mem":3534},{"size":592,"cpu":1530885,"mem":6470},{"size":592,"cpu":2306138,"mem":9406},{"size":592,"cpu":3081391,"mem":12342},{"size":592,"cpu":3856644,"mem":15278},{"size":592,"cpu":4631897,"mem":18214},{"size":592,"cpu":5407150,"mem":21150},{"size":592,"cpu":6182403,"mem":24086},{"size":592,"cpu":6957656,"mem":27022},{"size":592,"cpu":7732909,"mem":29958},{"size":592,"cpu":8508162,"mem":32894},{"size":592,"cpu":9283415,"mem":35830},{"size":592,"cpu":10058668,"mem":38766},{"size":592,"cpu":10833921,"mem":41702},{"size":592,"cpu":11609174,"mem":44638},{"size":592,"cpu":12384427,"mem":47574},{"size":592,"cpu":13159680,"mem":50510},{"size":592,"cpu":13934933,"mem":53446},{"size":592,"cpu":14710186,"mem":56382},{"size":592,"cpu":15485439,"mem":59318}]};

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