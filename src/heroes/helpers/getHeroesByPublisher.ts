import { heroes } from "../data/heroes";

type ValidPublisher = 'DC Comics' | 'Marvel Comics';

export const getHeroesByPublisher = ( publisher: string ) => {

  const validPublishers: ValidPublisher[] = ['DC Comics', 'Marvel Comics'];
  if ( !validPublishers.includes( publisher as ValidPublisher ) ) {
    throw new Error(`${ publisher } is not a valid publisher`);
  }

  return heroes.filter( heroe => heroe.publisher === publisher );
}