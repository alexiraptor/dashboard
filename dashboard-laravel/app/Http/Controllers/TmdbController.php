<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TmdbController extends Controller
{
    public function getPopularMovies(Request $request)
    {
        $query = $request->input("movietitle");
        $popularMovies = Http::withToken(config('services.tmdb.token'))
            ->get('https://api.themoviedb.org/3/search/movie?api_key=d882e53779511b594c685702f653979e&language=en-US&query=' . $query);
        return $popularMovies->json();
    }
}
