
<style>
    #container{
        position: relative;
        background-color: #dedede;
    }

    .content{
      width: 1140px;
      height: 100%;
      margin: auto;
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -570px;
    }
    #beforeReady{
        width: 400px;
        height: 300px;
        position: relative;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        background: url('../../images/loading.gif');
        text-align: center;
    }

</style>

@extends('layouts.app')

@section('content')
  <div id="container">
      <div ></div>
      <div class="content" >
            <div id='beforeReady'>
                loading……
            </div>
            <div id='app'>
                <app></app>
            </div>

      </div>
  </div>
@endsection

    <!-- <script src="/js/app.js"></script> -->
