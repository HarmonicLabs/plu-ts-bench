import { int, lam, pfn, pif, precursive } from "@harmoniclabs/plu-ts";

export const pfactorial = precursive(
    pfn([
        lam( int, int ), // self
        int
    ], int)
    (( self, n ) => 
        pif( int )
        .$( n.ltEq( 1 ) )
        .then( 1 )
        .else(
            n.mult( self.$( n.sub( 1 ) ) )
        )
    )
)