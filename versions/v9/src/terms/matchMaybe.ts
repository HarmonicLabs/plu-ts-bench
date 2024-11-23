import { data, DataI, pData, perror, pmakeUnit, pmatch, PMaybe, unit } from "@harmoniclabs/plu-ts";


export const matchMaybeJust = (
    pmatch( PMaybe( data ).Just({ val: pData( new DataI( 0 ) ) }) )
    .onJust( () => pmakeUnit() )
    .onNothing( () => perror( unit ) )
);

export const matchMaybeNothing = (
    pmatch( PMaybe( data ).Nothing({}) )
    .onNothing( () => pmakeUnit() )
    .onJust( () => perror( unit ) )
);