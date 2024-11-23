import { addUtilityForType, Hash28, pData, punsafeConvertType, PValue, Value } from "@harmoniclabs/plu-ts";
import { fromHex } from "@harmoniclabs/uint8array-utils";

const value = (
    punsafeConvertType(
        PValue.fromData(
            pData(
                new Value([
                    Value.lovelaceEntry( 1_000_000 ),
                    Value.singleAssetEntry(
                        new Hash28("ff".repeat(28)),
                        fromHex(""),
                        1
                    )
                ]).toData()
            )
        ),
        PValue.type
    )
);

export const plovelace = value.amountOf( "", "" );

export const amountOfSecond = value.amountOf( "ff".repeat(28), "" );

export const amountOfNothing = value.amountOf( "deadbeef", "" );