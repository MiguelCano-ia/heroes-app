import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";

interface SearchPageProps {
  searchText: string;
}

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroesByName( q as string );

  const showSearch = (q?.length === 0);
  const showError = ((q as string).length > 0 && heroes.length === 0);

  const { formState, onInputChange } = useForm<SearchPageProps>({
    searchText: q as string,
  });

  const { searchText } = formState;

  const onSearchSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } >
            <input type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />
          </form>

          <button className="btn mt-1 btn-outline-primary mb-5 mt-2">
            Search
          </button>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            ( q === '' ) && 
            <div className="alert alert-info">
              Search a hero
            </div>
          }

          {
            ( q !== '' && heroes.length === 0 ) && 
            <div className="alert alert-danger">
              There is no a hero with { q }
            </div>
          } */}

          <div
            className="alert alert-info animate__animated animate__fadeIn"
            style={{ display: showSearch  ? '' : 'none' }}
          >
            Search a hero
          </div>

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}
          >
            There is no a hero with <b>{ q }</b>
          </div>
        </div>

        {
          heroes.map( hero => (
            <HeroCard 
              key={ hero.id }
              { ...hero }
            />
          ))
        }

        {/* <HeroCard /> */}
      </div>  
    </>
  )
}
