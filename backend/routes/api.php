<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\BoardListController;
use App\Http\Controllers\CardController;

Route::get('/', function () {
    return response()->json([
        'message' => 'Kanban API Working'
    ]);
});

Route::apiResource('boards', BoardController::class);
Route::apiResource('lists', BoardListController::class);
Route::apiResource('cards', CardController::class);
