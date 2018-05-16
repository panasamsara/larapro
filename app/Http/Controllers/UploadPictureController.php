<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Storage;
use App\Http\Requests;
use App\Article;

class UploadPictureController extends Controller
{

    // public function index(){
    //     return view('upload');
    // }
    // 文件上传方法
    public function upload($article_id, Request $request)
    {

        if ($request->hasFile('imageUpload')){

            $files = $request->file('imageUpload');
            $ext = $files -> getClientOriginalExtension();//后缀名
            $file_name = $article_id.'.'.$ext;
            $path = 'storage/uploads';  
            $files->move($path, $file_name );
            
            $article = Article::findOrFail($article_id);
            if( !isset($article ->cover) ){
                $article ->cover = $file_name;
                $article ->update();
            }
        }

    }
}