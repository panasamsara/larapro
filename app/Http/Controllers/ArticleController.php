<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\Api;

class ArticleController extends Controller
{
    public function index(){
        $articles = Article::all();
        return Api::result($articles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $article = Article::create($request->all());
       if ($article) {
           return Api::result(null, "添加任务保存成功.");
       }
       return Api::result(null, "添加任务保存失败.");
    }


      /**
     * Show the one resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::findOrFail($id);
        return Api::result($article);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data['title'] = $request->title;
        $data['content'] = $request->input('content');
        $res = Article::where('id', $id)->update($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      Article::destroy($id);
      return Api::result(null, '删除任务成功.');
    }

  /*
     阅读量  地点文章一次增加一个阅读量
     @param  number  num  阅读量
  */
   public function addNum(Request $request, $id){

        $this->validate($require, [
                $this->validate($request,[
                        'num' => 'number',
                    ]);
           ]);

         $num = Article::findOrFail($id);
         $num = $num['num'] +1;
         $ar = Article::where('id',$id)->update(['num'=> $num]);
           return Api::result(null, "ok.");
   }




}
