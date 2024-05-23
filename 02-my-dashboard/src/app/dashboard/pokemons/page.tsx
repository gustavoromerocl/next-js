import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
  // throw new Error('this is an error')
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  return data.results.map(pokemon => ({ id: pokemon.url.split('/').at(-2) as string, name: pokemon.name }));
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokémons <small>estático</small></span>
      <PokemonsGrid pokemons={pokemons}/>
    </div>
  );
}