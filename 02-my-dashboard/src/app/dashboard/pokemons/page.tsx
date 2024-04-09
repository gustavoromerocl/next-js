import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  return data.results.map(pokemon => ({ id: pokemon.url.split('/').at(-2) as string, name: pokemon.name }));
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(({id, name}) =>
            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={name}
            />
          )
        }

      </div>
    </div>
  );
}