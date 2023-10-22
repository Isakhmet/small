<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackRequest;
use App\Http\Resources\FeedbackResource;
use App\Models\Feedback;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class FeedbackController extends Controller
{
    public function getFeedback()
    {
        $user = Auth::user();
        $feedback = Feedback::with('user');

        if (!$user->isManager()) {
            $feedback = $feedback->where('user_id', $user->id);
        }

        return FeedbackResource::collection($feedback->get())->response()->getData(true);
    }

    public function createFeedback(FeedbackRequest $request)
    {
        $file = $request->file('file');
        $data = $request->except(['_url', 'file']);
        $data['user_id'] = Auth::user()->id;

        if ($file) {
            $file->move(storage_path('app/public'), $file->getClientOriginalName());
            $data['path'] = $file->getClientOriginalName();
        }

        Feedback::create($data);

        return response()->noContent(Response::HTTP_CREATED);
    }
}
