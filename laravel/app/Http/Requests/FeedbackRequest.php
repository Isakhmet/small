<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class FeedbackRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * @return string[]
     */
    public function rules(): array
    {
        return match ($this->method()) {
            'POST' => [
                'title' => 'required|string',
                'message' => 'required|string',
                'category' => 'required|string',
            ],
            'PUT' => [
                'id' => 'required|exists:feedback,id',
                'answer' => 'required|string'
            ]
        };
    }
}
