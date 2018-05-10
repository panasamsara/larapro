@extends('layouts.app')

@section('content')
<form action="/upload" method="POST" enctype="multipart/form-data">
    @csrf


    <input type="file"  name="picture"  id="picture" />


    <input type="submit" value="提交修改">
</form>
@endsection

