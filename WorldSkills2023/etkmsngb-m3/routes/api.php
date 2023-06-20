<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/airport', function(){
    return response([
        "data" => [
            "items" => [],
        ]
    ], 200);
});

Route::post('/register', function(){
    return response([
        "error" => [
            "code" => 422,
            "message" => "Validator error",
            "errors" => [
                "phone" => "field phone can not be blank",
                "password" => "field phone can not be blank",
            ],
        ]
    ], 422);
});

Route::post('/login', function(){
    return response([
        "error" => [
            "code" => 401,
            "message" => "Unauthorized",
            "errors" => [
                "phone" => "phone or password incorrect",
            ],
        ]
    ], 401);
});

Route::get('/flight', function(){
    return response([
        "error" => [
            "code" => 422,
            "message" => "Validator error",
            "errors" => [
                "flight_to" => "field phone can not be blank",
            ],
        ]
    ], 422);
});
Route::post('/booking', function(){
    return response([
        "error" => [
            "code" => 422,
            "message" => "Validator error",
            "errors" => [
                "phone" => "field phone can not be blank",
                "password" => "field phone can not be blank",
            ],
        ]
    ], 422);
});
