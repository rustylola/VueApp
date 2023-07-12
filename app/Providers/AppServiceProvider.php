<?php

namespace App\Providers;

# Import Schema
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        # Set Database string length with 191 characters as default
        # Fields that are string cannot be longer than 191 characters.
        Schema::defaultStringLength(191);
    }
}
