<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TekkenController extends Controller
{
    public function getFrames(Request $request)
    {
        $query = $request->input("charname");
        $request = Http::get('http://tkn-api.herokuapp.com/character/' . $query);
        return $request->json();
    }
}
