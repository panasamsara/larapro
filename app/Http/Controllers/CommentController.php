<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;
use App\Api;

class CommentController extends Controller
{
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = Comment::create($request->all());
       if ($comment) {
           return Api::result(null, "添加评论成功.");
       }
       return Api::result(null, "添加评论失败.");
    }

    public function getCommentsByArticleId( $article_id ){
        $comments = Comment::with('user')->where('article_id', $article_id)->get();
        
        return Api::result($comments);
    }


}
