<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\Activity;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return Task::all();
    }

    public function store(Request $request)
    {
        $task = Task::create($request->all());

        Activity::create([
            'message' => 'New task created: ' . $task->title
        ]);

        return $task;
    }

    public function show(Task $task)
    {
        return $task;
    }

    public function update(Request $request, Task $task)
    {
        $task->update($request->all());

        Activity::create([
            'message' => 'Task updated: ' . $task->title
        ]);

        return $task;
    }

    public function destroy(Task $task)
    {
        $task->delete();

        Activity::create([
            'message' => 'Task deleted'
        ]);

        return response()->json([
            'message' => 'Deleted'
        ]);
    }
}