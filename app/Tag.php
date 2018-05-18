<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table='tags';

    protected $visible = ['name','type'];

    // protected $guarded = [];


    public function article(){
         return $this->hasMay('Article','tag');  
    }

}
