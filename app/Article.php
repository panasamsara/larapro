<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table = 'articles';
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content', 'user_id','tag','cover'
    ];

    //关联用户，每篇文章有一个 发布人（第二个参数是关联表的键，第三个参数是这个表的键）
    public function user(){
        return $this->hasOne('App\User','id','user_id');
    }

    //关联标签表
    public function tag(){
        return $this->belongsTo('App\tag');
    }
}
