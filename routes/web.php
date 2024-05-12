<?php
// routes/api.php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;


Route::get('/', function(){
    return view("layouts.app");

});

Route::apiResource('/products', ProductController::class);
Route::get('/products/search', [ProductController::class, 'search'])->name('products.search');

Route::apiResource('users', UserController::class);
Route::apiResource('orders', OrderController::class);

Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
Route::post('/register', [RegisterController::class, 'register'])->name('register');
