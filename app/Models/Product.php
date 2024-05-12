<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use HasFactory;
    use Searchable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
        // 'category_id',
        // 'manufacturer_id',
        'expiration_date',
        'production_date',
        'image_url',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'expiration_date' => 'date',
        'production_date' => 'date',
    ];

    /**
     * Get the category associated with the product.
     */
    // public function category()
    // {
    //     return $this->belongsTo(Category::class);
    // }

    /**
     * Get the manufacturer associated with the product.
     */
    // public function manufacturer()
    // {
    //     return $this->belongsTo(Manufacturer::class);
    // }
}
