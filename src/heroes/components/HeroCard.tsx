import { Link } from "react-router-dom"

interface HeroCardProps {
  id: string,
  superhero: string,
  publisher: string,
  alter_ego: string,
  first_appearance: string,
  characters: string,
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: HeroCardProps ) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;

  const charactersByHero = (<p>{ characters }</p>);

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img src={ heroImageUrl } alt={ superhero } className="card-img" />
          </div>

          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title">{ superhero }</h5>
              <p className="card-text">{ alter_ego }</p>

              {
                ( alter_ego !== characters ) && charactersByHero
              }

              <p className="card-text">
                <small className="text-muted">{ first_appearance }</small>
              </p>
              <p className="card-text">{ publisher }</p>

              <Link to={`/hero/${ id }`}>
                Mas...
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
