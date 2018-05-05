<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
        <link href="https://cdn.bootcss.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.bootcss.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }
            .content{
              width: 1000px;
              margin: auto;
            }
        </style>
    </head>
    <body>
        <div>
            <div class="content">

                <div id='app'>
                    <app></app>
                </div>

            </div>
        </div>
    </body>
    <script src="/js/app.js"></script>
</html>
