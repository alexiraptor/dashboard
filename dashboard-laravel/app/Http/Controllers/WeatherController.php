<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;


class WeatherController extends Controller
{
    public function getAllWeather(Request $request)

    {
        $query = $request-> input("cityname");
        $request = Http::get("http://api.openweathermap.org/data/2.5/weather?q=" . $query . "&units=metric&appid=" . "5f6353cdb547feabb097453089897bfa");
        
        // dd($request);
        return $request->json();
        //  ->header('Access-Control-Allow-Origin', '*');
        
    }
}
