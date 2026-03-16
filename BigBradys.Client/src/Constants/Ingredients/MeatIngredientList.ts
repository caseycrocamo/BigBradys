import Ingredient from "../../Domain/Ingredient";
import {Icons} from "../Icons";

export const MeatIngredientList: Ingredient[] = [
  new Ingredient(1, "Beef", "Along with being an important source of protein and fats, beef supplies high levels of B-complex vitamins, iron, zinc, selenium, phosphorus and all ten essential amino acids (protein building blocks) required by dogs.", Icons.find(i => i.name == "cow")!.path),
  new Ingredient(2, "Beef Organs", "Nutrient dense beef organs are an exceptional source of iron, copper, phosphorus, magnesium and vitamins  A, B1, B2, B6, B12, E, K, and are a naturally occurring source of vitamin D.", Icons.find(i => i.name == "cow")!.path),
  new Ingredient(3, "Chicken", "Chicken is an excellent source of lean protein; B-complex vitamins, especially niacin; phosphorus; selenium; and retinol, beta carotene and lycopene (all essential for healthy eyes).", Icons.find(i => i.name == "chicken")!.path),
  new Ingredient(4, "Chicken Heart", "Chicken hearts are lean protein high in iron, fatty acids, and vitamins A and B.", Icons.find(i => i.name == "chicken")!.path),
  new Ingredient(5, "Chicken Liver", "Provide protein, fatty acids, amino acids, vitamins A and B, copper, iron, niacin, phosphorus and zinc.", Icons.find(i => i.name == "chicken")!.path),
  new Ingredient(6, "Turkey", "Along with important vitamins and minerals, turkey is high in protein and tryptophan, which supports the body's immune system.", Icons.find(i => i.name == "turkey")!.path),
  new Ingredient(7, "Turkey Heart", "Turkey hearts contain high levels of iron, selenium and B vitamins.", Icons.find(i => i.name == "turkey")!.path),
  new Ingredient(8, "Turkey Liver", "Turkey liver are an excellent source of vitamin B-12, vitamin A, copper, folate and riboflavin.", Icons.find(i => i.name == "turkey")!.path),
  new Ingredient(9, "Salmon", "Salmon is an easy to digest protein packed full of essential nutrients such as vitamins A and D, and Omega 3 and Omega 6 fatty acids. Omega fatty acids promote healthy skin and coats and support heart and circulatory health by reducing triglycerides and lowering blood pressure.", Icons.find(i => i.name == "salmon")!.path),
  new Ingredient(10, "Lamb", "Lamb is an excellent source of protein, vitamin B-12, niacin, zinc, selenium, riboflavin and iron.", Icons.find(i => i.name == "lamb")!.path),
  new Ingredient(11, "Lamb Heart", "Lamb heart is a good source of protein, B vitamins, phosphorus, copper, iron and selenium.", Icons.find(i => i.name == "lamb")!.path),
  new Ingredient(12, "Lamb Liver", "Lamb liver is a nutrient-rich protein source that is relatively low in fat. Liver is high in iron, an essential mineral needed to create blood cells and help red blood cells deliver oxygen, is necessary for immune function, and helps the body synthesize proteins.", Icons.find(i => i.name == "lamb")!.path),
  new Ingredient(13, "Buffalo (when available)", "Buffalo is a healthy alternative to other meat sources and an excellent source of protein, vitamins B-6 and B-12, potassium, iron, zinc, copper, selenium, omega-3 and Omega-6 fatty acids. Vitamin B-12 is considered an essential component in folate metabolism and nerve health.", Icons.find(i => i.name == "buffalo")!.path),
  new Ingredient(14, "Venison", "Venison is high in protein and low in unhealthy cholesterol. With the exception of fish, venison is the healthiest meat for your dog's heart. Venison is also very high in B vitamins, phosphorus, selenium, zinc and copper.", Icons.find(i => i.name == "moose")!.path),
  new Ingredient(15, "Elk", "Elk is high in protein and low in fat and offers very high levels of Vitamin B-12, along with riboflavin, niacin, thiamin, B-6, and panthothenic acid.", Icons.find(i => i.name == "moose")!.path),
  new Ingredient(16, "Duck", "Nutritionally similar to chicken, duck provides a refreshing change from ordinary chicken and turkey, and may help dogs suffering from food allergies. Duck provides B vitamins, iron, zinc, potassium and phosphorous.", Icons.find(i => i.name == "duck")!.path),
  new Ingredient(17, "Rabbit", "Rabbit is another alternate lean, high protein meat. Rabbit is high in vitamin B-12 which supports the nervous system and cell growth.", Icons.find(i => i.name == "rabbit")!.path),
];
    