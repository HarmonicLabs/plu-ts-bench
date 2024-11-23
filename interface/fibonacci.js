
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
  const data = {"v7":[{"size":464,"cpu":884053,"mem":2702},{"size":464,"cpu":884053,"mem":2702},{"size":464,"cpu":3501390,"mem":8912},{"size":464,"cpu":6118727,"mem":15122},{"size":464,"cpu":11353401,"mem":27542},{"size":464,"cpu":19205412,"mem":46172},{"size":464,"cpu":32292097,"mem":77222},{"size":464,"cpu":53230793,"mem":126902},{"size":464,"cpu":87256174,"mem":207632},{"size":464,"cpu":142220251,"mem":338042},{"size":464,"cpu":231209709,"mem":549182},{"size":464,"cpu":375163244,"mem":890732},{"size":464,"cpu":608107049,"mem":1443423},{"size":464,"cpu":985004389,"mem":2337664},{"size":464,"cpu":1594845534,"mem":3784596},{"size":464,"cpu":2581584019,"mem":6125769},{"size":464,"cpu":4178163649,"mem":9913874},{"size":464,"cpu":6761481764,"mem":16043152},{"size":464,"cpu":10941379509,"mem":25960535},{"size":464,"cpu":17704595369,"mem":42007196}],"v8":[{"size":464,"cpu":535986,"mem":2702},{"size":464,"cpu":535986,"mem":2702},{"size":464,"cpu":2071382,"mem":8912},{"size":464,"cpu":3606778,"mem":15122},{"size":464,"cpu":6677570,"mem":27542},{"size":464,"cpu":11283758,"mem":46172},{"size":464,"cpu":18960738,"mem":77222},{"size":464,"cpu":31243906,"mem":126902},{"size":464,"cpu":51204054,"mem":207632},{"size":464,"cpu":83447370,"mem":338042},{"size":464,"cpu":135650834,"mem":549182},{"size":464,"cpu":220097614,"mem":890732},{"size":464,"cpu":356748278,"mem":1443423},{"size":464,"cpu":577845722,"mem":2337664},{"size":464,"cpu":935593830,"mem":3784596},{"size":464,"cpu":1514439382,"mem":6125769},{"size":464,"cpu":2451033042,"mem":9913874},{"size":464,"cpu":3966472254,"mem":16043152},{"size":464,"cpu":6418505126,"mem":25960535},{"size":464,"cpu":10385977210,"mem":42007196}]};

  new Chart(
    document.getElementById('fibonacci-size'),
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
    document.getElementById('fibonacci-cpu'),
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
    document.getElementById('fibonacci-mem'),
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