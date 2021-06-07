<?php

use App\Http\Controllers\TekkenController;
use App\Http\Controllers\MarvelController;
use App\Http\Controllers\ChuckNorrisController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PokemonController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\WeatherController;
use App\Http\Controllers\TmdbController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:api');


Route::get('/cnquotes', [ChuckNorrisController::class, 'getChuckMind']);

Route::get('/pokemonlist', [PokemonController::class, 'getallPoke'])->name('poke:getAll');
Route::get('/pokemoncard', [PokemonController::class, 'getPokeCard'])->name('poke:getCard');


Route::get('/weather', [WeatherController::class, 'getAllWeather']);

Route::get('/tekken', [TekkenController::class, 'getFrames']);
Route::get('/MCU', [MarvelController::class, 'getNext']);
Route::get('/tmdb', [TmdbController::class, 'getPopularMovies']);
