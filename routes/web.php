<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* NOTE ----
 PUTTING ? makes it optional
 DEFINING FALLBACK ROUTE WITH REGEX
 ANYTHING ADDRESS ROUTE WITH (PHP_SERVER)/(any) will redirect to 'welcome' view
 THEN OUR VUE WILL HADLE THE ROUTING AND RENDER THE FRONT END 
 USING 'app.js','routes.js' and 'components' folder
*/
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any','^(?!api\/)[\/\w\.\,-]*');
