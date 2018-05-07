<?php

use App\Http\Controllers\ArticleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
// Route::get('/index', 'ArticleController@index');

Route::resource('article', 'ArticleController');
Route::get('article/addNum/{id}','ArticleController@addNum');                        //点击增加阅读量
