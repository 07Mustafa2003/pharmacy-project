<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Assuming User model is used for profile

class ProfileController extends Controller
{
    // Method to display user's profile
    public function show(Request $request)
    {
        // Retrieve authenticated user's profile
        $user = $request->user();
        
        // Return user profile data
        return response()->json(['user' => $user]);
    }

    // Method to update user's profile
    public function update(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            // Add other fields as needed
        ]);

        // Retrieve authenticated user
        $user = $request->user();

        // Update user profile with new data
        $user->name = $request->input('name');
        // Update other fields as needed
        $user->save();

        // Return success response
        return response()->json(['message' => 'Profile updated successfully']);
    }
}
