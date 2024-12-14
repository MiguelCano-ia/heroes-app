import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {
  
  name = name.toLocaleLowerCase().trim();
  
  if ( name === '' ) return [];

  return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( name ) );
}