import { exec } from 'node:child_process';
import { write, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { BenchData } from '../versions/common';
import { resolve } from 'node:path';

function getDataPath( version: string )
{
    return `./data/${version}/bench-data.json`;
}

void async function main() {

    await Promise.all([
        exec("cd versions/v7 && npm run start"),
        exec("cd versions/v8 && npm run start"),
        exec("cd versions/v9 && npm run start"),
    ]);
    
    const [
        v7,
        v8,
        v9
    ]: BenchData[] = await Promise.all([
        readFile( resolve( process.cwd(), getDataPath("0.7") ), "utf-8" ),
        readFile( resolve( process.cwd(), getDataPath("0.8") ), "utf-8" ),
        readFile( resolve( process.cwd(), getDataPath("0.9") ), "utf-8" ),
    ])
    .then( srcs =>
        srcs.map( src => JSON.parse( src ) )
    );

    await Promise.all([
        writeSingleCallChart(
            "./interface/matchMaybeJust.js",
            JSON.stringify({
                v7: v7.matchMaybeJust,
                v8: v8.matchMaybeJust,
                v9: v9.matchMaybeJust,
            }),
            "match-maybe-just"
        ),
        writeSingleCallChart(
            "./interface/matchMaybeNothing.js",
            JSON.stringify({
                v7: v7.matchMaybeNothing,
                v8: v8.matchMaybeNothing,
                v9: v9.matchMaybeNothing,
            }),
            "match-maybe-nothing"
        ),
        writeMultiCallChart(
            "./interface/amountOf.js",
            JSON.stringify({
                v7: v7.amountOf,
                v8: v8.amountOf,
                v9: v9.amountOf,
            }),
            "amount-of"
        ),
        writeMultiCallChart(
            "./interface/factorial.js",
            JSON.stringify({
                v7: v7.factorial,
                v8: v8.factorial,
                v9: v9.factorial,
            }),
            "factorial"
        ),
        writeMultiCallChart(
            "./interface/fibonacci.js",
            JSON.stringify({
                v7: v7.fibonacci,
                v8: v8.fibonacci,
                v9: v9.fibonacci,
            }),
            "fibonacci"
        ),
        writeMultiCallChart(
            "./interface/indexList.js",
            JSON.stringify({
                v7: v7.indexList,
                v8: v8.indexList,
                v9: v9.indexList,
            }),
            "index-list"
        )
    ]);

}();

async function writeMultiCallChart(
    path: string,
    data: string,
    chartName: string
)
{
    const str = `
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
  const data = ${data};

  new Chart(
    document.getElementById('${chartName}-size'),
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
    document.getElementById('${chartName}-cpu'),
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
    document.getElementById('${chartName}-mem'),
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
})();`;

    writeFileSync( path, str );
}

async function writeSingleCallChart(
    path: string,
    data: string,
    chartName: string
)
{
    const str = `
import Chart from 'chart.js/auto'

(function() {
  const data = ${data};

  const keys = Object.keys(data);

  new Chart(
    document.getElementById('${chartName}-cpu'),
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
    document.getElementById('${chartName}-mem'),
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
    document.getElementById('${chartName}-size'),
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
`;

    writeFileSync( path, str );
}