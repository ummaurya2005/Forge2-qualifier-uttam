<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    public function index()
    {
        return Board::all();
    }

    public function store(Request $request)
    {
        return Board::create($request->all());
    }

    public function show(Board $board)
    {
        return $board;
    }

    public function update(Request $request, Board $board)
    {
        $board->update($request->all());
        return $board;
    }

    public function destroy(Board $board)
    {
        $board->delete();
        return response()->json(['message' => 'Deleted']);
    }
}