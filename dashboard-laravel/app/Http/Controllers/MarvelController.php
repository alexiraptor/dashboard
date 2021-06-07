<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MarvelController extends Controller
{
    public function getNext()
    {
        $request = Http::get('https://www.whenisthenextmcufilm.com/api');
        return $request->json();
    }
}
