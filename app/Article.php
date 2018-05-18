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

    //关联标签表
    public function tag(){
        return $this->belongsTo('App/tag');
    }
}
