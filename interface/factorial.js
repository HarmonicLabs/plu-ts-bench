
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
  const data = {"v7":[{"size":408,"cpu":884053,"mem":2702},{"size":408,"cpu":884053,"mem":2702},{"size":408,"cpu":2228379,"mem":6008},{"size":408,"cpu":3572705,"mem":9314},{"size":408,"cpu":4917031,"mem":12620},{"size":408,"cpu":6261357,"mem":15926},{"size":408,"cpu":7605683,"mem":19232},{"size":408,"cpu":8961696,"mem":22539},{"size":408,"cpu":10317709,"mem":25846},{"size":408,"cpu":11685409,"mem":29154},{"size":408,"cpu":13053109,"mem":32462},{"size":408,"cpu":14420809,"mem":35770},{"size":408,"cpu":15800196,"mem":39079},{"size":408,"cpu":17179583,"mem":42388},{"size":408,"cpu":18570657,"mem":45698},{"size":408,"cpu":19961731,"mem":49008},{"size":408,"cpu":21364492,"mem":52319},{"size":408,"cpu":22767253,"mem":55630},{"size":408,"cpu":24181701,"mem":58942},{"size":408,"cpu":25596149,"mem":62254}],"v8":[{"size":416,"cpu":535986,"mem":2702},{"size":416,"cpu":535986,"mem":2702},{"size":416,"cpu":1376552,"mem":6008},{"size":416,"cpu":2217118,"mem":9314},{"size":416,"cpu":3057684,"mem":12620},{"size":416,"cpu":3898250,"mem":15926},{"size":416,"cpu":4738816,"mem":19232},{"size":416,"cpu":5579901,"mem":22539},{"size":416,"cpu":6420986,"mem":25846},{"size":416,"cpu":7262590,"mem":29154},{"size":416,"cpu":8104194,"mem":32462},{"size":416,"cpu":8945798,"mem":35770},{"size":416,"cpu":9787921,"mem":39079},{"size":416,"cpu":10630044,"mem":42388},{"size":416,"cpu":11472686,"mem":45698},{"size":416,"cpu":12315328,"mem":49008},{"size":416,"cpu":13158489,"mem":52319},{"size":416,"cpu":14001650,"mem":55630},{"size":416,"cpu":14845330,"mem":58942},{"size":416,"cpu":15689010,"mem":62254}],"v9":[{"size":320,"cpu":471986,"mem":2302},{"size":320,"cpu":471986,"mem":2302},{"size":320,"cpu":1200552,"mem":4908},{"size":320,"cpu":1929118,"mem":7514},{"size":320,"cpu":2657684,"mem":10120},{"size":320,"cpu":3386250,"mem":12726},{"size":320,"cpu":4114816,"mem":15332},{"size":320,"cpu":4843901,"mem":17939},{"size":320,"cpu":5572986,"mem":20546},{"size":320,"cpu":6302590,"mem":23154},{"size":320,"cpu":7032194,"mem":25762},{"size":320,"cpu":7761798,"mem":28370},{"size":320,"cpu":8491921,"mem":30979},{"size":320,"cpu":9222044,"mem":33588},{"size":320,"cpu":9952686,"mem":36198},{"size":320,"cpu":10683328,"mem":38808},{"size":320,"cpu":11414489,"mem":41419},{"size":320,"cpu":12145650,"mem":44030},{"size":320,"cpu":12877330,"mem":46642},{"size":320,"cpu":13609010,"mem":49254}]};

  new Chart(
    document.getElementById('factorial-size'),
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
    document.getElementById('factorial-cpu'),
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
    document.getElementById('factorial-mem'),
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