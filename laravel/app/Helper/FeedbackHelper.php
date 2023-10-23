<?php

namespace App\Helper;

use App\Models\Feedback;
use Illuminate\Support\Carbon;

class FeedbackHelper
{
    public function isAvailable($userId)
    {
        return Feedback::with('')->where('user_id', $userId)
            ->where('created_at', '>',
                Carbon::now()->subHours(24)->toDateTimeString()
            )->exists();
    }
}
