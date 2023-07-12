<?php

namespace Database\Factories;

use App\Models\Bookable;
use Illuminate\Database\Eloquent\Factories\Factory;

class bookableFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

    protected $model = Bookable::class;
    public function definition()
    {
        return [
            // 'title' => $this->faker-
        ];
    }
}
