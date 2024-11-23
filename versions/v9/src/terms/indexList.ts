import { int, pInt, pList } from "@harmoniclabs/plu-ts";

const len = 20;
const longList = pList( int )(
    new Array( len ).fill(0).map( (_, i) => pInt( i ) )
)

export const indexList = longList.pat;