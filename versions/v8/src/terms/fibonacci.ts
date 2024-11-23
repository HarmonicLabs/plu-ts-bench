import { int, lam, pfn, pif, precursive } from "@harmoniclabs/plu-ts";

export const pfibonacci = precursive(
    pfn([
        lam( int, int ), // self
        int
    ], int)
    (( self, n ) => 
        pif( int )
        .$( n.ltEq( 1 ) )
        .then( 1 )
        .else(
            self.$( n.sub( 1 ) )
            .add(
                self.$( n.sub( 2 ) )
            )
        )
    )
)