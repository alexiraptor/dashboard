<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
    public function getallPoke(Request $request) 
    {
        $request->validate([
            'pokemon' => ['required']
        ]);
    
        $response = Http::get('https://pokeapi.co/api/v2/pokemon/'.$request->pokemon);
        return $response->json();
    }
    public function getPokeCard(Request $request) 
    {
        $request->validate([
            'pokemon' => ['required']
        ]);
    
        $response = Http::get('https://api.pokemontcg.io/v2/cards/?q=!name:'.$request->pokemon);
        return $response->json();
    }
}
