<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChuckNorrisController extends Controller
{
    public function getChuckMind()
    {
        $request = Http::get('https://api.chucknorris.io/jokes/random');
        return $request ->json();
    }
}
