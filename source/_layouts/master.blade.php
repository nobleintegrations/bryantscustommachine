<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
        @if ($page->production == 'true')
            @include('_partials.google_analytics')
        @endif
        @include('_partials.seo')
    </head>
    <body class="bg-grey-light antialiased">
        <div id="app">
            @yield('body')
        </div>
        <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
    </body>
</html>
