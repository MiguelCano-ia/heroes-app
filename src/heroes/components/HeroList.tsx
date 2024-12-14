import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard";

interface HeroListProps {
  publisher: string,
}

export const HeroList = ({ publisher }: HeroListProps) => {

  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher]);

  return (
    <>
      <div className="row rows-col-1 row-cols-md-3 g-3">
        {
          heroes.map( heroe => (
            <HeroCard
              key={ heroe.id }
              {...heroe}
            />
          ))
        }
      </div>
    </>
  )
}
