
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

</style>

@extends('layouts.app')

@section('content')
  <div id="container">
      <div ></div>
      <div class="content" >

          <div id='app'>
              <app></app>
          </div>

      </div>
  </div>
@endsection

    <!-- <script src="/js/app.js"></script> -->
