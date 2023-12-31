<?php

use App\Http\Controllers\FeedbackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'feedback', 'middleware' => ['auth:sanctum']], function () {
    Route::get('get', [FeedbackController::class, 'getFeedback']);
    Route::post('create', [FeedbackController::class, 'createFeedback']);
    Route::put('update', [FeedbackController::class, 'updateFeedback']);
});
