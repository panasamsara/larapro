<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index(){
        $data = App/Tag::all();
        return Api::result($data); 
    }



}
