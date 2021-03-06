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
    // 图片上传方法
    public function upload($article_id, Request $request)
    {

        if ($request->hasFile('imageUpload')){

            $files = $request->file('imageUpload');
            $ext = $files -> getClientOriginalExtension();//后缀名
            $file_name = $article_id.'.'.$ext;
            $path = 'storage/uploads';  
            $files->move($path, $file_name );
            
            $article = Article::findOrFail($article_id);
            
                $article ->cover = $file_name;
                $article ->update();
            
        }

    }

    public function uploadCrop($article_id, Request $request){
        $file = $request->file('img');  
        $ext = $file -> getClientOriginalExtension(); 
        $file_name = $article_id.'.'.$ext;
        $path = 'storage/uploads';  
        $file->move($path, $file_name );

        $article = Article::findOrFail($article_id);
            
        $article ->cover = $file_name;
        $article ->update();

        return response()->json(['success'=>'done']);
    }
}