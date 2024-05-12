<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Retrieve all products from the database
        $products = Product::all();
        
        // Return a JSON response with the products
        return response()->json($products);
    }

    /**
     * Store a newly created product in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'image_url' => 'required|image',
            
            // Add more validation rules for additional fields
        ]);

        // Create a new product instance
        $product = new Product();
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->quantity = $request->input('quantity');
        $product->image_url = $request->input('image_url');
       
        // Assign values to additional fields here
        $product->save();

        // Return a JSON response with the newly created product
        return response()->json($product, 201);
    }

    /**
     * Update the specified product in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Find the product by ID
        $product = Product::findOrFail($id);

        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'string',
            'description' => 'string',
            'price' => 'numeric',
            'quantity' => 'integer',
            'image_url' => 'required|image',
            // Add more validation rules for additional fields
        ]);

        // Update the product attributes
        $product->fill($validatedData);
        
        // Save the updated product to the database
        $product->save();

        // Return a JSON response with the updated product
        return response()->json($product);
    }

    /**
     * Remove the specified product from the database.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find the product by ID
        $product = Product::findOrFail($id);

        // Delete the product from the database
        $product->delete();

        // Return a JSON response with a success message
        return response()->json(['message' => 'Product deleted successfully']);
    }

    /**
     * Search for products based on the provided query.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $query = $request->input('query');

        $products = Product::search($query)->get();

        return response()->json([
            'products' => $products,
        ]);
    }
}
