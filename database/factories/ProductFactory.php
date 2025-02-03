<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'price' => fake()->randomFloat(2, 20, 500),
            'stock' => fake()->numberBetween(1, 100),
            'image' => 'https://picsum.photos/200?random=' . $this->faker->unique()->numberBetween(1, 1000),
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
