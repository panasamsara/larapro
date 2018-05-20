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
Route::get('/index', function () {
    return view('index');
});
Route::get('/clean',function () {
    return view('cleanCache');
});
Route::get('/user', 'ArticleController@getUser');

//文章
// Route::resource('article', 'ArticleController');
Route::middleware(['auth'])->group(function(){
   Route::post('article', 'ArticleController@store');
   Route::put('article/{id}', 'ArticleController@update');
   Route::delete('article{id}', 'ArticleController@delete');
});
  Route::get('article', 'ArticleController@index');
  Route::get('article/{id}', 'ArticleController@show');


  //标签
  Route::resource('tag','TagController');
  //评论
  Route::resource('comment','CommentController');
  Route::get('comments/{article_id}', 'CommentController@getCommentsByArticleId');


// Auth::routes();//简写不用，等同于下面多条路由
// Route::get('/home', 'HomeController@index')->name('home');//首页不用

//此处是 Laravel 的用户认证路由，以下等同于：Auth::routes();
// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::post('upload/{article_id}','UploadPictureController@upload');


