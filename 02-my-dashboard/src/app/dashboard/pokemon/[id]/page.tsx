import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { id, name} = await getPokemon(params.id)
  return {
    title: `#${id} - ${name}`,
    description: `Página del pokemon ${name}`
  }
}

const getPokemon = async (id: string): Promise<any> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache' //TODO: cambiar esto posteriormente
    // next: {
    //   revalidate: 60 * 60* 30 * 6 //revalidar cada 6 meses
    // }
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
