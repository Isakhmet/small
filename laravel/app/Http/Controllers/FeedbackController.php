<?php

namespace App\Http\Controllers;

use App\Helper\FeedbackHelper;
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
        $user = Auth::user();
        $file = $request->file('file');
        $data = $request->except(['_url', 'file']);
        $data['user_id'] = $user->id;

        if ($file) {
            $file->move(storage_path('app/public'), $file->getClientOriginalName());
            $data['path'] = $file->getClientOriginalName();
        }

        if ((new FeedbackHelper())->isAvailable($user->id)) {
            return response()->json(['success' => false, 'message' => 'You can send a request only once a day']);
        }

        Feedback::create($data);

        return response()->noContent(Response::HTTP_CREATED);
    }

    public function updateFeedback(FeedbackRequest $request)
    {
        Feedback::where('id', $request->get('id'))
            ->update(['answer' => $request->get('answer')]);

        return response()->noContent(Response::HTTP_NO_CONTENT);
    }
}
