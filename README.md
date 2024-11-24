# plu-ts-bench

in this repository you find some simple benchmarks to evaluate some optimizations made on the plu-ts compiler.

## run on your own

the first time you run everything you will need to run 
```bash
npm i # or npm install
```

after that you can run
```bash
npm run start
```

to run the benchmarks and automatically serve locally the frontend.

if instead you are only interested in the raw `data` you can run only
```bash
npm run build
```

## repo structure

you should see a repo like this

```
.
├── data
│   ├── 0.7
│   ├── 0.8
│   └── 0.9
├── interface
│   ├── amountOf.js
│   ├── factorial.js
│   ├── fibonacci.js
│   ├── index.html
│   ├── indexList.js
│   ├── matchMaybeJust.js
│   └── matchMaybeNothing.js
├── package.json
├── package-lock.json
├── README.md
├── scripts
│   └── bench-all.ts
└── versions
    ├── common.ts
    ├── v7
    ├── v8
    └── v9
```

### versions
the [`versions` directory](./versions/) is where the benchmarks sources are, separated by verision.

running `npm run start` in the desired version will generate new entries in the `data` directory, corresponding to the version

### scripts

the [`scripts` directory](./scripts/) only contains `bench-all.ts`

[`scripts/bench-all.ts`](./scripts/bench-all.ts) generates both the `data` directory AND the 

### data
the [`data` directory](./data/) is generated entirely by running `scripts/bench-all.ts`.

### interface

the [`interface` directory](./interface/) is mostly generated, and is the frontend that shows the `data`.

the only non-generated file is `index.html`; but we recomand not to modify it,
since the generated files expect to find some predetermined elements.