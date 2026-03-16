import Ingredient from "../Domain/Ingredient";
import React, { useState } from 'react';

export default function IngredientList(props:any) {
    const [ingredients, setIngredients] = useState(props.ingredients)
    return (
        <ul className="divide-y divide-gray-200">
            {ingredients.map((ingredient:Ingredient) => (
                <li
                    key={ingredient.id}
                    className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 cursor-pointer"
                    onClick={() => toggleClamp(ingredient.id)}
                >
                    <div className="flex align-center">
                        <img src={ingredient.iconPath} alt={ingredient.name} className="w-16 h-16 mr-8"/> 
                        <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{ingredient.name}</p>
                            <div className="mt-1">
                                <p className={`${ingredient.clamped?'line-clamp-2 max-h-12':'max-h-full'} text-sm text-gray-600 transition-height duration-1000`}>{ingredient.description}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
    function toggleClamp(ingredientId:number){
        const newIngredientList = ingredients.map((ingredient:Ingredient) => {
            if(ingredient.id === ingredientId){
                return {
                    ...ingredient,
                    clamped: !ingredient.clamped
                };
            }
            else{
                return ingredient;
            }
        })
        setIngredients(newIngredientList);
    }
}