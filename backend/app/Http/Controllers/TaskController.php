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

    // Hermes Agent Logic
    $assignedAgent = "OpenClaw";

    if (str_contains(strtolower($task->title), 'react')) {
        $assignedAgent = "Frontend Agent";
    }
    elseif (str_contains(strtolower($task->title), 'api')) {
        $assignedAgent = "Backend Agent";
    }
    elseif (str_contains(strtolower($task->title), 'test')) {
        $assignedAgent = "QA Agent";
    }

    Activity::create([
        'message' => "Hermes assigned '{$task->title}' to {$assignedAgent}"
    ]);

    return response()->json([
        'task' => $task,
        'assigned_agent' => $assignedAgent,
        'supervisor' => 'Hermes'
    ]);
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