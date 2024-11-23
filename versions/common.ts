import { CborArray, CborObj, CborSimple, CborString, CborUInt } from "@harmoniclabs/cbor";
import { isObject } from "@harmoniclabs/obj-utils";

export interface BenchTermData {
    size: number;
    cpu: number;
    mem: number;
    // isError: boolean;
}

export function benchTermDataFromJson( stuff: any ): BenchTermData
{
    if( !isObject( stuff ) )
    {
        return {
            size: -1,
            cpu: -1,
            mem: -1,
            // isError: true,
        };
    }

    return {
        size: typeof stuff.size === "number" ? stuff.size : -1,
        cpu: typeof stuff.cpu === "number" ? stuff.cpu : -1,
        mem: typeof stuff.mem === "number" ? stuff.mem : -1,
        // isError: typeof stuff.isError === "boolean" ? stuff.isError : true,
    };
}

export function benchTermDataToCbor({
    size,
    cpu,
    mem,
    // isError
}: BenchTermData ): CborObj
{
    return new CborArray([
        new CborUInt( size ),
        new CborUInt( cpu ),
        new CborUInt( mem ),
        // new CborSimple( isError ),
    ]);
}

export interface BenchData {
    matchMaybeJust: BenchTermData;
    matchMaybeNothing: BenchTermData;
    amountOf: BenchTermData[];
    factorial: BenchTermData[];
    fibonacci: BenchTermData[];
    indexList: BenchTermData[];
}