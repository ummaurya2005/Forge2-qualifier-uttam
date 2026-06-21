<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\BoardController;
use App\Http\Controllers\BoardListController;
use App\Http\Controllers\CardController;

use App\Http\Controllers\AgentController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ActivityController;

Route::get('/', function () {
    return response()->json([
        'message' => 'TaskForge API Working'
    ]);
});

Route::apiResource('boards', BoardController::class);
Route::apiResource('lists', BoardListController::class);
Route::apiResource('cards', CardController::class);

Route::apiResource('agents', AgentController::class);
Route::apiResource('tasks', TaskController::class);
Route::apiResource('activities', ActivityController::class);
