import { memo, useEffect } from "react"
import { getGames } from "../services";


const CardComponent = () => {
  const callService = async () => {
    console.log(await getGames());
  }

  useEffect( () => {
    callService()

  })
  console.log();

  return 'Componente renderizado';
}

export const Card = memo(CardComponent);