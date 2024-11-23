import { Application, encodeUPLC, ErrorUPLC, Machine, ToUPLC, UPLCConst, UPLCProgram, UPLCTerm } from "@harmoniclabs/plu-ts";
import { BenchData, BenchTermData } from "../../common";
import { existsSync, writeFileSync } from "fs";
import { matchMaybeJust, matchMaybeNothing } from "./terms/matchMaybe";
import { amountOfNothing, amountOfSecond, plovelace } from "./terms/value";
import { mkdir } from "fs/promises";
import { pfactorial } from "./terms/factorial";
import { pfibonacci } from "./terms/fibonacci";
import { indexList } from "./terms/indexList";

const version = "0.8";
const versionDir = "../../" + "data/" + version + "/";
const dataPath = versionDir + "bench-data.json";

void async function main() {
    console.log("Benching version " + version);

    if( !existsSync( versionDir ) )
    {
        await mkdir( versionDir, { recursive: true } );
    }
    writeFileSync(
        dataPath,
        JSON.stringify({
            matchMaybeJust: benchTerm( matchMaybeJust.toUPLC() ),
            matchMaybeNothing: benchTerm( matchMaybeNothing.toUPLC() ),
            amountOf: [
                benchTerm( plovelace.toUPLC() ),
                benchTerm( amountOfNothing.toUPLC() ),
                benchTerm( amountOfSecond.toUPLC() ),
            ],
            factorial: benchNumList( pfactorial.toUPLC() ),
            fibonacci: benchNumList( pfibonacci.toUPLC() ),
            indexList: benchNumList( indexList.toUPLC() )
        } as BenchData)
    );
    
}();

function benchTerm( uplcTerm: UPLCTerm ): BenchTermData
{
    const { budgetSpent, result } = Machine.eval( uplcTerm );
    return { 
        size: encodeUPLC( new UPLCProgram([1,1,0], uplcTerm ) ).length,
        cpu: Number( budgetSpent.cpu ),
        mem: Number( budgetSpent.mem ),
        // isError: result instanceof ErrorUPLC
    };
}


const defaultListLen = 20;
const defaultNumListStart = 0;

function benchNumList(
    uplcTerm: UPLCTerm,
    start: number = 0,
    len: number = 20
): BenchTermData[]
{
    if( typeof len !== "number" || len < 1 ) len = defaultListLen;
    if( !Number.isSafeInteger( start ) ) start = defaultNumListStart;

    const nums = new Array( len ).fill(0).map( (_, i) => i );

    return nums.map( n =>
        benchTerm(
            new Application(
                uplcTerm,
                UPLCConst.int( n )
            )
        )
    );
}