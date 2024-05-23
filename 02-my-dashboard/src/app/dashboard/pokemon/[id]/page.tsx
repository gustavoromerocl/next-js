import { Pokemon } from "@/pokemons";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<any> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache' //TODO: cambiar esto posteriormente
  }).then(resp => resp.json())
  console.log("POKEMON LOG", pokemon);
  return pokemon;
}

export default async function pokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id)
  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  );
}
