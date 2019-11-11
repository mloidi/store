const products = [
  {
    _id: '5c1cafd865b1774c61b93b3d',
    additiveList: [
      'Cane Sugar',
      'Cane Syrup',
      'Barley Malt Extract',
      'Sea Salt',
      'Mixed Tocopherols',
      'Vitamin E'
    ],
    allergenList: ['Wheat (Organic Whole Wheat, With Added Wheat Bran)'],
    brand: {
      _id: '56d8994e6107411100f9a72c',
      logo: {
        _id: '57460e137b447c4f2919c80c',
        source:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo_thumbnail.jpg'
      },
      name: '365 Everyday Value®',
      slug: '365-everyday-value'
    },
    categories: ['365', 'breakfast', 'breakfast.cereal'],
    certificationList: [
      {
        certifierList: ['Orthodox Union (OU)'],
        computed: true,
        isClaim: false,
        name: 'Certified Kosher',
        slug: 'certified-kosher',
        types: []
      },
      {
        certifierList: [
          'Quality Assurance International (QAI)',
          'USDA Organic'
        ],
        computed: true,
        isClaim: false,
        name: 'Certified Organic',
        slug: 'certified-organic',
        types: []
      }
    ],
    diets: [
      { name: 'Dairy Free', slug: 'dairy-free' },
      {
        disclosures: ['Certified Kosher by Orthodox Union (OU)'],
        name: 'Kosher',
        slug: 'kosher'
      },
      { disclosures: [], name: 'Low Fat', slug: 'low-fat' },
      { disclosures: [], name: 'Low Sodium', slug: 'low-sodium' },
      { name: 'Vegan', slug: 'vegan' },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Organic', slug: 'organic' }
    ],
    facilityAllergenList: ['Peanuts', 'Tree Nuts'],
    image: {
      _id: '5c12f3ff3d4daf04b26553d9',
      source:
        'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553d9_productdataa00099482439033-c1n1.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553d9_productdataa00099482439033-c1n1_thumbnail.jpg'
    },
    ingredientList: [
      'Organic Whole Wheat (With Added Wheat Bran)',
      'Organic Raisins (Organic Raisins, Organic Expeller Pressed Canola Oil)',
      'Organic Cane Sugar',
      'Organic Cane Syrup',
      'Organic Barley Malt Extract',
      'Sea Salt',
      'Mixed Tocopherols (Vitamin E) Added To Maintain Freshness'
    ],
    mediaList: [
      {
        _id: '5c12f3ff3d4daf04b26553d9',
        source:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553d9_productdataa00099482439033-c1n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553d9_productdataa00099482439033-c1n1_thumbnail.jpg'
      },
      {
        _id: '5c12f3ff3d4daf04b26553da',
        source:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553da_productdataa00099482439033-c7n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553da_productdataa00099482439033-c7n1_thumbnail.jpg'
      },
      {
        _id: '5c12f3ff3d4daf04b26553db',
        source:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553db_productdataa00099482439033-cin1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553db_productdataa00099482439033-cin1_thumbnail.jpg'
      },
      {
        _id: '5c12f3ff3d4daf04b26553dc',
        source:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553dc_productdatab0009948243903300099482439033-cnn1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f3ff3d4daf04b26553dc_productdatab0009948243903300099482439033-cnn1_thumbnail.jpg'
      }
    ],
    meta: {
      brand: '365 Everyday Value®',
      nameIsIngredient: false,
      oneIngredient: false
    },
    name: 'Cereal, Raisin Bran, 15 oz',
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'current',
    nutritionMap: {
      calcium: {
        defaultDvp: 2,
        defaultDvpDisplay: '2',
        fullDvp: 1000,
        isDense: false,
        key: 'calcium',
        name: 'Calcium',
        perServing: 20,
        perServingDisplay: '20',
        uom: 'mg'
      },
      calories: {
        defaultDvp: 9,
        defaultDvpDisplay: '9',
        fullDvp: 2000,
        key: 'calories',
        name: 'Calories',
        perServing: 180,
        perServingDisplay: '180',
        uom: 'calories'
      },
      carbohydrates: {
        defaultDvp: 14.67,
        defaultDvpDisplay: '14.67',
        fullDvp: 300,
        key: 'carbohydrates',
        name: 'Carbohydrates',
        perServing: 44,
        perServingDisplay: '44',
        uom: 'g'
      },
      cholesterol: {
        defaultDvp: 0,
        defaultDvpDisplay: '0',
        fullDvp: 300,
        key: 'cholesterol',
        name: 'Cholesterol',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'mg'
      },
      fatCalories: {
        key: 'fatCalories',
        name: 'Fat Calories',
        perServing: 10,
        perServingDisplay: '10',
        uom: 'calories'
      },
      fiber: {
        defaultDvp: 24,
        defaultDvpDisplay: '24',
        fullDvp: 25,
        isDense: true,
        key: 'fiber',
        name: 'Fiber',
        perServing: 6,
        perServingDisplay: '6',
        uom: 'g'
      },
      insolubleFiber: {
        key: 'insolubleFiber',
        name: 'Insoluble Fiber',
        perServing: 6,
        perServingDisplay: '6',
        uom: 'g'
      },
      iron: {
        defaultDvp: 8,
        defaultDvpDisplay: '8',
        fullDvp: 18,
        isDense: false,
        key: 'iron',
        name: 'Iron',
        perServing: 1.44,
        perServingDisplay: '1.44',
        uom: 'mg'
      },
      monounsaturatedFat: {
        key: 'monounsaturatedFat',
        name: 'Monounsaturated Fat',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'g'
      },
      polyunsaturatedFat: {
        key: 'polyunsaturatedFat',
        name: 'Polyunsaturated Fat',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'g'
      },
      potassium: {
        defaultDvp: 6.86,
        defaultDvpDisplay: '6.86',
        fullDvp: 3500,
        isDense: false,
        key: 'potassium',
        name: 'Potassium',
        perServing: 240,
        perServingDisplay: '240',
        uom: 'mg'
      },
      protein: {
        fullDvp: 50,
        isDense: false,
        key: 'protein',
        name: 'Protein',
        perServing: 4,
        perServingDisplay: '4',
        uom: 'g'
      },
      saturatedFat: {
        defaultDvp: 0,
        defaultDvpDisplay: '0',
        fullDvp: 20,
        key: 'saturatedFat',
        name: 'Sat Fat',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'g'
      },
      sodium: {
        defaultDvp: 5,
        defaultDvpDisplay: '5',
        fullDvp: 2400,
        key: 'sodium',
        name: 'Sodium',
        perServing: 120,
        perServingDisplay: '120',
        uom: 'mg'
      },
      solubleFiber: {
        key: 'solubleFiber',
        name: 'Soluble Fiber',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'g'
      },
      sugar: {
        key: 'sugar',
        name: 'Sugars',
        perServing: 15,
        perServingDisplay: '15',
        uom: 'g'
      },
      totalFat: {
        defaultDvp: 1.54,
        defaultDvpDisplay: '1.54',
        fullDvp: 65,
        key: 'totalFat',
        name: 'Total Fat',
        perServing: 1,
        perServingDisplay: '1',
        uom: 'g'
      },
      transFat: {
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'g'
      },
      vitaminA: {
        defaultDvp: 0,
        defaultDvpDisplay: '0',
        fullDvp: 5000,
        isDense: false,
        key: 'vitaminA',
        name: 'Vitamin A',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'IU'
      },
      vitaminC: {
        defaultDvp: 0,
        defaultDvpDisplay: '0',
        fullDvp: 60,
        isDense: false,
        key: 'vitaminC',
        name: 'Vitamin C',
        perServing: 0,
        perServingDisplay: '0',
        uom: 'mg'
      }
    },
    servingInfo: {
      secondaryServingSize: 55,
      secondaryServingSizeDisplay: '55',
      secondaryServingSizeUom: 'G',
      secondaryTotalSize: 425,
      secondaryTotalSizeUom: 'GRAM',
      servingSize: 1,
      servingSizeDisplay: '1',
      servingSizeUom: 'CUP',
      servingsPerContainer: 8,
      servingsPerContainerDisplay: 'about 8',
      totalSize: 15,
      totalSizeUom: 'OUNCE'
    },
    slug: '365-everyday-value-cereal-raisin-bran-15-oz',
    store: {
      available: true,
      basePrice: 3.99,
      local: false,
      onSale: null,
      price: 3.99,
      priceDisplay: '$3.99',
      retail_size: '15',
      retail_unit: 'EACH',
      sign_caption: 'Organic Raisin Bran Cereal',
      unit: null,
      uom_name: 'EACH'
    }
  },
  {
    _id: '5c1cafb665b1774c61b84b0a',
    name: 'Almondmilk, Unsweetened, 64 fl. oz.',
    slug: '365-everyday-value-almondmilk-unsweetened-64-fl-oz',
    brand: {
      _id: '56d8994e6107411100f9a72c',
      name: '365 Everyday Value®',
      slug: '365-everyday-value',
      logo: {
        _id: '57460e137b447c4f2919c80c',
        source:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo_thumbnail.jpg'
      }
    },
    allergenList: ['Tree Nuts'],
    additiveList: [
      'Sea Salt',
      'Tricalcium Phosphate',
      'Gellan Gum',
      'Locust Bean Gum',
      'Vitamin A Palmitate',
      'Ergocalciferol',
      'Dl-alpha-tocopherol Acetate',
      'Vitamin E',
      'Cyanocobalamin'
    ],
    certificationList: [
      {
        name: 'Certified Kosher',
        slug: 'certified-kosher',
        types: [],
        certifierList: ['Orthodox Union (OU)'],
        isClaim: false,
        computed: true
      },
      {
        name: 'Certified Organic',
        slug: 'certified-organic',
        types: [],
        certifierList: [
          'Quality Assurance International (QAI)',
          'USDA Organic'
        ],
        isClaim: false,
        computed: true
      }
    ],
    diets: [
      { name: 'Dairy Free', slug: 'dairy-free' },
      { name: 'Engine 2', slug: 'engine-2' },
      {
        name: 'Kosher',
        slug: 'kosher',
        disclosures: ['Certified Kosher by Orthodox Union (OU)']
      },
      { name: 'Low Fat', slug: 'low-fat', disclosures: [] },
      { name: 'Paleo Friendly', slug: 'paleo-friendly' },
      { name: 'Sugar Conscious', slug: 'sugar-conscious' },
      { name: 'Vegan', slug: 'vegan' },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Whole Foods Diet', slug: 'whole-foods-diet' },
      { name: 'Keto Friendly', slug: 'keto-friendly' },
      { name: 'Organic', slug: 'organic' }
    ],
    facilityAllergenList: ['Milk and Dairy', 'Soy', 'Tree Nuts'],
    image: {
      _id: '5c12f36f3d4daf04b26552e6',
      source:
        'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e6_productdataa00099482436285-c1n1.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e6_productdataa00099482436285-c1n1_thumbnail.jpg'
    },
    ingredientList: [
      'Organic Almondmilk (Filtered Water, Organic Almonds)',
      'Sea Salt',
      'Tricalcium Phosphate',
      'Gellan Gum',
      'Organic Locust Bean Gum',
      'Vitamin A Palmitate',
      'Ergocalciferol (Vitamin D2)',
      'Dl-alpha-tocopherol Acetate (Vitamin E)',
      'Cyanocobalamin (Vitamin B12).'
    ],
    mediaList: [
      {
        _id: '5c12f36f3d4daf04b26552e6',
        source:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e6_productdataa00099482436285-c1n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e6_productdataa00099482436285-c1n1_thumbnail.jpg'
      },
      {
        _id: '5c12f36f3d4daf04b26552e7',
        source:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e7_productdataa00099482436285-c7n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e7_productdataa00099482436285-c7n1_thumbnail.jpg'
      },
      {
        _id: '5c12f36f3d4daf04b26552e8',
        source:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e8_productdataa00099482436285-cin1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e8_productdataa00099482436285-cin1_thumbnail.jpg'
      },
      {
        _id: '5c12f36f3d4daf04b26552e9',
        source:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e9_productdatab0009948243628500099482436285-cnn1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f36f3d4daf04b26552e9_productdatab0009948243628500099482436285-cnn1_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'future',
    nutritionMap: {
      vitaminE: {
        isDense: true,
        uom: 'mg',
        key: 'vitaminE',
        name: 'Vitamin E',
        defaultDvp: 45,
        perServing: 7,
        fullDvp: 15,
        defaultDvpDisplay: '45',
        perServingDisplay: '7'
      },
      vitaminD: {
        isDense: true,
        uom: 'mcg',
        key: 'vitaminD',
        name: 'Vitamin D',
        defaultDvp: 25,
        perServing: 5,
        fullDvp: 20,
        defaultDvpDisplay: '25',
        perServingDisplay: '5'
      },
      vitaminB12: {
        isDense: false,
        uom: 'mcg',
        key: 'vitaminB12',
        name: 'Vitamin B12',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 2.4,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      vitaminA: {
        isDense: true,
        uom: 'mcg',
        key: 'vitaminA',
        name: 'Vitamin A',
        defaultDvp: 10,
        perServing: 90,
        fullDvp: 900,
        defaultDvpDisplay: '10',
        perServingDisplay: '90'
      },
      transFat: {
        uom: 'g',
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        perServingDisplay: '0'
      },
      totalFat: {
        uom: 'g',
        key: 'totalFat',
        name: 'Total Fat',
        defaultDvp: 3.85,
        perServing: 3,
        fullDvp: 78,
        defaultDvpDisplay: '3.85',
        perServingDisplay: '3'
      },
      sugar: {
        uom: 'g',
        key: 'sugar',
        name: 'Sugars',
        perServing: 1,
        perServingDisplay: '1'
      },
      sodium: {
        uom: 'mg',
        key: 'sodium',
        name: 'Sodium',
        defaultDvp: 6.52,
        perServing: 150,
        fullDvp: 2300,
        defaultDvpDisplay: '6.52',
        perServingDisplay: '150'
      },
      saturatedFat: {
        uom: 'g',
        key: 'saturatedFat',
        name: 'Sat Fat',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 20,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      protein: {
        isDense: false,
        uom: 'g',
        key: 'protein',
        name: 'Protein',
        perServing: 1,
        fullDvp: 50,
        perServingDisplay: '1'
      },
      potassium: {
        isDense: false,
        uom: 'mg',
        key: 'potassium',
        name: 'Potassium',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 4700,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      iron: {
        isDense: false,
        uom: 'mg',
        key: 'iron',
        name: 'Iron',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 18,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      fiber: {
        isDense: false,
        uom: 'g',
        key: 'fiber',
        name: 'Fiber',
        defaultDvp: 3.57,
        perServing: 1,
        fullDvp: 28,
        defaultDvpDisplay: '3.57',
        perServingDisplay: '1'
      },
      cholesterol: {
        uom: 'mg',
        key: 'cholesterol',
        name: 'Cholesterol',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 300,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      carbohydrates: {
        uom: 'g',
        key: 'carbohydrates',
        name: 'Carbohydrates',
        defaultDvp: 0.73,
        perServing: 2,
        fullDvp: 275,
        defaultDvpDisplay: '0.73',
        perServingDisplay: '2'
      },
      calories: {
        uom: 'calories',
        key: 'calories',
        name: 'Calories',
        defaultDvpDisplay: '2',
        defaultDvp: 2,
        perServing: 40,
        fullDvp: 2000,
        perServingDisplay: '40'
      },
      calcium: {
        isDense: false,
        uom: 'mg',
        key: 'calcium',
        name: 'Calcium',
        defaultDvp: 4,
        perServing: 50,
        fullDvp: 1300,
        defaultDvpDisplay: '4',
        perServingDisplay: '50'
      },
      addedSugar: {
        uom: 'g',
        key: 'addedSugar',
        name: 'Added Sugar',
        defaultDvpDisplay: '0',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 50,
        perServingDisplay: '0'
      }
    },
    servingInfo: {
      servingSize: 1,
      servingSizeUom: 'CUP',
      secondaryServingSize: 240,
      secondaryServingSizeUom: 'ML',
      servingsPerContainerDisplay: '8',
      totalSize: 64,
      totalSizeUom: 'FLUID OUNCE',
      secondaryTotalSize: 0.5,
      secondaryTotalSizeUom: 'GALLON',
      servingsPerContainer: 8
    },
    categories: ['365', 'dairy-eggs', 'dairy-eggs.dairy-alternatives'],
    meta: {
      brand: '365 Everyday Value®',
      nameIsIngredient: false,
      oneIngredient: false
    },
    store: {
      available: true,
      price: 2.99,
      basePrice: 2.99,
      priceDisplay: '$2.99',
      sign_caption: 'Organic Unsweetened Almond Milk',
      retail_size: '64',
      retail_unit: 'EACH',
      uom_name: 'EACH',
      onSale: null,
      unit: null,
      local: false
    }
  },
  {
    _id: '5c1cb01c65b1774c61bb6521',
    name: 'Milk, Whole Vitamin D, 1 gal',
    slug: '365-everyday-value-milk-whole-vitamin-d-1-gallon',
    brand: {
      _id: '56d8994e6107411100f9a72c',
      name: '365 Everyday Value®',
      slug: '365-everyday-value',
      logo: {
        _id: '57460e137b447c4f2919c80c',
        source:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo_thumbnail.jpg'
      }
    },
    allergenList: ['Milk and Dairy (Organic Milk)'],
    additiveList: ['Vitamin D3'],
    certificationList: [
      {
        name: 'Certified Kosher',
        slug: 'certified-kosher',
        types: [],
        certifierList: ['Orthodox Union (OU)'],
        isClaim: false,
        computed: true
      },
      {
        name: 'Certified Organic',
        slug: 'certified-organic',
        types: [],
        certifierList: [
          'Quality Assurance International (QAI)',
          'USDA Organic'
        ],
        isClaim: false,
        computed: true
      }
    ],
    diets: [
      {
        name: 'Kosher',
        slug: 'kosher',
        disclosures: ['Certified Kosher by Orthodox Union (OU)']
      },
      {
        name: 'Low Sodium',
        slug: 'low-sodium',
        disclosures: ['See nutrition information for  content']
      },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Whole Foods Diet', slug: 'whole-foods-diet' },
      { name: 'Keto Friendly', slug: 'keto-friendly' },
      { name: 'Organic', slug: 'organic' }
    ],
    facilityAllergenList: ['Eggs'],
    image: {
      _id: '5c12f7ce3d4daf04b26559d6',
      source:
        'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d6_productdataa00099482415518-c1n1.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d6_productdataa00099482415518-c1n1_thumbnail.jpg'
    },
    ingredientList: ['Organic Milk', 'Vitamin D3.'],
    mediaList: [
      {
        _id: '5c12f7ce3d4daf04b26559d6',
        source:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d6_productdataa00099482415518-c1n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d6_productdataa00099482415518-c1n1_thumbnail.jpg'
      },
      {
        _id: '5c12f7ce3d4daf04b26559d7',
        source:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d7_productdataa00099482415518-c7n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d7_productdataa00099482415518-c7n1_thumbnail.jpg'
      },
      {
        _id: '5c12f7ce3d4daf04b26559d8',
        source:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d8_productdataa00099482415518-cin1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d8_productdataa00099482415518-cin1_thumbnail.jpg'
      },
      {
        _id: '5c12f7ce3d4daf04b26559d9',
        source:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d9_productdatab0009948241551800099482415518-cnn1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12f7ce3d4daf04b26559d9_productdatab0009948241551800099482415518-cnn1_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'future',
    nutritionMap: {
      vitaminD: {
        isDense: true,
        uom: 'mcg',
        key: 'vitaminD',
        name: 'Vitamin D',
        defaultDvp: 15,
        perServingDisplay: '3',
        perServing: 3,
        fullDvp: 20,
        defaultDvpDisplay: '15'
      },
      vitaminA: {
        isDense: false,
        uom: 'mcg',
        key: 'vitaminA',
        name: 'Vitamin A',
        defaultDvp: 8,
        perServingDisplay: '72',
        perServing: 72,
        fullDvp: 900,
        defaultDvpDisplay: '8'
      },
      transFat: {
        uom: 'g',
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        perServingDisplay: '0'
      },
      totalFat: {
        uom: 'g',
        key: 'totalFat',
        name: 'Total Fat',
        defaultDvp: 10.26,
        perServing: 8,
        fullDvp: 78,
        defaultDvpDisplay: '10.26',
        perServingDisplay: '8'
      },
      sugar: {
        uom: 'g',
        key: 'sugar',
        name: 'Sugars',
        perServing: 11,
        perServingDisplay: '11'
      },
      sodium: {
        uom: 'mg',
        key: 'sodium',
        name: 'Sodium',
        defaultDvp: 5.22,
        perServing: 120,
        fullDvp: 2300,
        defaultDvpDisplay: '5.22',
        perServingDisplay: '120'
      },
      saturatedFat: {
        uom: 'g',
        key: 'saturatedFat',
        name: 'Sat Fat',
        defaultDvp: 25,
        perServing: 5,
        fullDvp: 20,
        defaultDvpDisplay: '25',
        perServingDisplay: '5'
      },
      protein: {
        isDense: false,
        uom: 'g',
        key: 'protein',
        name: 'Protein',
        perServing: 8,
        fullDvp: 50,
        perServingDisplay: '8'
      },
      potassium: {
        isDense: false,
        uom: 'mg',
        key: 'potassium',
        name: 'Potassium',
        defaultDvp: 8,
        perServingDisplay: '376',
        perServing: 376,
        fullDvp: 4700,
        defaultDvpDisplay: '8'
      },
      iron: {
        isDense: false,
        uom: 'mg',
        key: 'iron',
        name: 'Iron',
        defaultDvp: 0,
        perServingDisplay: '0',
        perServing: 0,
        fullDvp: 18,
        defaultDvpDisplay: '0'
      },
      fiber: {
        isDense: false,
        uom: 'g',
        key: 'fiber',
        name: 'Fiber',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 28,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      cholesterol: {
        uom: 'mg',
        key: 'cholesterol',
        name: 'Cholesterol',
        defaultDvp: 10,
        perServing: 30,
        fullDvp: 300,
        defaultDvpDisplay: '10',
        perServingDisplay: '30'
      },
      carbohydrates: {
        uom: 'g',
        key: 'carbohydrates',
        name: 'Carbohydrates',
        defaultDvp: 4.36,
        perServing: 12,
        fullDvp: 275,
        defaultDvpDisplay: '4.36',
        perServingDisplay: '12'
      },
      calories: {
        uom: 'calories',
        key: 'calories',
        name: 'Calories',
        defaultDvpDisplay: '7.5',
        defaultDvp: 7.5,
        perServing: 150,
        fullDvp: 2000,
        perServingDisplay: '150'
      },
      calcium: {
        isDense: true,
        uom: 'mg',
        key: 'calcium',
        name: 'Calcium',
        defaultDvp: 20,
        perServingDisplay: '260',
        perServing: 260,
        fullDvp: 1300,
        defaultDvpDisplay: '20'
      },
      addedSugar: {
        uom: 'g',
        key: 'addedSugar',
        name: 'Added Sugar',
        defaultDvpDisplay: '0',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 50,
        perServingDisplay: '0'
      }
    },
    servingInfo: {
      servingsPerContainerDisplay: '16',
      servingSize: 1,
      servingSizeUom: 'CUP',
      secondaryServingSize: 240,
      secondaryServingSizeUom: 'ML',
      totalSize: 1,
      totalSizeUom: 'GALLON',
      secondaryTotalSize: 3.78,
      secondaryTotalSizeUom: 'LITER',
      servingsPerContainer: 16
    },
    categories: ['365', 'dairy-eggs', 'dairy-eggs.milk-cream'],
    meta: {
      brand: '365 Everyday Value®',
      nameIsIngredient: false,
      oneIngredient: false
    },
    store: {
      available: true,
      price: 5.99,
      basePrice: 5.99,
      priceDisplay: '$5.99',
      sign_caption: 'Organic Whole Milk',
      retail_size: '128',
      retail_unit: 'EACH',
      uom_name: 'EACH',
      onSale: null,
      unit: null,
      local: false
    }
  },
  {
    _id: '5c1cafae65b1774c61b81017',
    name: '24 Month Parmigiano Reggiano',
    slug: 'mitica-24-month-parmigiano-reggiano',
    brand: {
      _id: '5757153d414a39b474f87853',
      slug: 'mitica',
      name: 'Mitica',
      logo: {
        _id: '57695a108d35c25f0dfc9739',
        source:
          'https://sage.blob.core.windows.net/media/57695a108d35c25f0dfc9739_miticalogo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/57695a108d35c25f0dfc9739_miticalogo_thumbnail.jpg'
      }
    },
    allergenList: ["Milk and Dairy (Cow's Milk)"],
    additiveList: ['Rennet', 'Salt', 'Enzymes'],
    certificationList: [],
    diets: [
      { name: 'Sugar Conscious', slug: 'sugar-conscious' },
      { name: 'Whole Foods Diet', slug: 'whole-foods-diet' },
      { name: 'Keto Friendly', slug: 'keto-friendly' }
    ],
    facilityAllergenList: [],
    image: {
      _id: '582e28762e6360923ce99f5a',
      source:
        'https://sage.blob.core.windows.net/media/582e28762e6360923ce99f5a_0296332008405-wfm-1.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/582e28762e6360923ce99f5a_0296332008405-wfm-1_thumbnail.jpg'
    },
    ingredientList: ["Raw Cow's Milk", 'Rennet', 'Salt', 'Enzymes'],
    mediaList: [
      {
        _id: '582e28762e6360923ce99f5a',
        source:
          'https://sage.blob.core.windows.net/media/582e28762e6360923ce99f5a_0296332008405-wfm-1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/582e28762e6360923ce99f5a_0296332008405-wfm-1_thumbnail.jpg'
      },
      {
        _id: '5c8169feb113484c013cdaab',
        source:
          'https://sage.blob.core.windows.net/media/5c8169feb113484c013cdaab_deli-preparedfoods-cheeses-wfm-0528.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c8169feb113484c013cdaab_deli-preparedfoods-cheeses-wfm-0528_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'current',
    nutritionMap: {
      vitaminC: {
        defaultDvpDisplay: '0',
        fullDvp: 60,
        perServingDisplay: '0',
        uom: 'mg',
        perServing: 0,
        defaultDvp: 0,
        name: 'Vitamin C',
        key: 'vitaminC',
        isDense: false
      },
      vitaminA: {
        defaultDvpDisplay: '4',
        fullDvp: 5000,
        perServingDisplay: '200',
        uom: 'IU',
        perServing: 200,
        defaultDvp: 4,
        name: 'Vitamin A',
        key: 'vitaminA',
        isDense: false
      },
      transFat: {
        perServingDisplay: '0',
        uom: 'g',
        perServing: 0,
        name: 'Trans Fat',
        key: 'transFat'
      },
      totalFat: {
        perServingDisplay: '8',
        defaultDvpDisplay: '12.31',
        fullDvp: 65,
        uom: 'g',
        perServing: 8,
        defaultDvp: 12.31,
        name: 'Total Fat',
        key: 'totalFat'
      },
      sugar: {
        perServingDisplay: '0',
        uom: 'g',
        perServing: 0,
        name: 'Sugars',
        key: 'sugar'
      },
      sodium: {
        perServingDisplay: '180',
        defaultDvpDisplay: '7.5',
        fullDvp: 2400,
        uom: 'mg',
        perServing: 180,
        defaultDvp: 7.5,
        name: 'Sodium',
        key: 'sodium'
      },
      saturatedFat: {
        perServingDisplay: '6',
        defaultDvpDisplay: '30',
        fullDvp: 20,
        uom: 'g',
        perServing: 6,
        defaultDvp: 30,
        name: 'Sat Fat',
        key: 'saturatedFat'
      },
      protein: {
        perServingDisplay: '9',
        fullDvp: 50,
        uom: 'g',
        perServing: 9,
        name: 'Protein',
        key: 'protein',
        isDense: false
      },
      iron: {
        defaultDvpDisplay: '0',
        fullDvp: 18,
        perServingDisplay: '0',
        uom: 'mg',
        perServing: 0,
        defaultDvp: 0,
        name: 'Iron',
        key: 'iron',
        isDense: false
      },
      fiber: {
        perServingDisplay: '0',
        defaultDvpDisplay: '0',
        fullDvp: 25,
        uom: 'g',
        perServing: 0,
        defaultDvp: 0,
        name: 'Fiber',
        key: 'fiber',
        isDense: false
      },
      fatCalories: {
        perServingDisplay: '70',
        uom: 'calories',
        perServing: 70,
        name: 'Fat Calories',
        key: 'fatCalories'
      },
      cholesterol: {
        perServingDisplay: '25',
        defaultDvpDisplay: '8.33',
        fullDvp: 300,
        uom: 'mg',
        perServing: 25,
        defaultDvp: 8.33,
        name: 'Cholesterol',
        key: 'cholesterol'
      },
      carbohydrates: {
        perServingDisplay: '0',
        defaultDvpDisplay: '0',
        fullDvp: 300,
        uom: 'g',
        perServing: 0,
        defaultDvp: 0,
        name: 'Carbohydrates',
        key: 'carbohydrates'
      },
      calories: {
        perServingDisplay: '110',
        defaultDvpDisplay: '5.5',
        fullDvp: 2000,
        uom: 'calories',
        perServing: 110,
        defaultDvp: 5.5,
        name: 'Calories',
        key: 'calories'
      },
      calcium: {
        defaultDvpDisplay: '30',
        fullDvp: 1000,
        perServingDisplay: '300',
        uom: 'mg',
        perServing: 300,
        defaultDvp: 30,
        name: 'Calcium',
        key: 'calcium',
        isDense: true
      }
    },
    servingInfo: {
      totalSizeUom: 'pound',
      totalSize: 1,
      secondaryServingSizeUom: 'g',
      secondaryServingSize: 28,
      servingsPerContainerDisplay: 'Varies',
      servingsPerContainer: null,
      servingSizeUom: 'oz',
      servingSize: 1
    },
    categories: ['cheese'],
    meta: { brand: 'Mitica', nameIsIngredient: false, oneIngredient: false },
    store: {
      available: true,
      price: 19.99,
      basePrice: 19.99,
      priceDisplay: '$19.99',
      sign_caption: 'Parmigiano Reggiano 24 Month Raw',
      retail_size: '1',
      retail_unit: 'POUND',
      uom_name: 'POUND',
      onSale: null,
      unit: 'lb',
      local: false
    }
  },
  {
    _id: '5c1cb00a65b1774c61badcc5',
    name: 'Granola, Oat & Honey, 17 oz',
    slug: '365-everyday-value-granola-oat-honey-17-oz',
    brand: {
      _id: '56d8994e6107411100f9a72c',
      name: '365 Everyday Value®',
      slug: '365-everyday-value',
      logo: {
        _id: '57460e137b447c4f2919c80c',
        source:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo_thumbnail.jpg'
      }
    },
    allergenList: ['Soy', 'Tree Nuts', 'Wheat'],
    additiveList: [
      'Cane Sugar',
      'Brown Rice Syrup',
      'Salt',
      'Honey',
      'Organic Molasses',
      'Mixed Tocopherols',
      'Vitamin E'
    ],
    certificationList: [
      {
        name: 'Certified Kosher',
        slug: 'certified-kosher',
        types: [],
        certifierList: ['Orthodox Union (OU)'],
        isClaim: false,
        computed: true
      },
      {
        name: 'Certified Organic',
        slug: 'certified-organic',
        types: [],
        certifierList: [
          'Quality Assurance International (QAI)',
          'USDA Organic'
        ],
        isClaim: false,
        computed: true
      }
    ],
    diets: [
      { name: 'Dairy Free', slug: 'dairy-free' },
      {
        name: 'Kosher',
        slug: 'kosher',
        disclosures: ['Certified Kosher by Orthodox Union (OU)']
      },
      { name: 'Low Sodium', slug: 'low-sodium', disclosures: [] },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Organic', slug: 'organic' }
    ],
    facilityAllergenList: [],
    image: {
      _id: '5c12fb6a3d4daf04b2655f76',
      source:
        'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f76_productdataa00099482448721-c1n1.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f76_productdataa00099482448721-c1n1_thumbnail.jpg'
    },
    ingredientList: [
      'Organic Whole Grain Rolled Oats',
      'Organic Cane Sugar',
      'Organic Crisp Brown Rice (Organic Brown Rice, Organic Brown Rice Syrup Salt)',
      'Organic Vegetable Oil (Expeller Pressed Canola and/or Safflower Seed and/or Sunflower Seed Oil)',
      'Organic Whole Oat Flour',
      'Organic Brown Rice Syrup',
      'Organic Almonds',
      'Organic Honey',
      'Organic Molasses',
      'Salt',
      'Mixed Tocopherols (Vitamin E) Added To Maintain Freshness.'
    ],
    mediaList: [
      {
        _id: '5c12fb6a3d4daf04b2655f76',
        source:
          'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f76_productdataa00099482448721-c1n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f76_productdataa00099482448721-c1n1_thumbnail.jpg'
      },
      {
        _id: '5c12fb6a3d4daf04b2655f77',
        source:
          'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f77_productdataa00099482448721-c7n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f77_productdataa00099482448721-c7n1_thumbnail.jpg'
      },
      {
        _id: '5c12fb6a3d4daf04b2655f78',
        source:
          'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f78_productdatab0009948244872100099482448721-cnn1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c12fb6a3d4daf04b2655f78_productdatab0009948244872100099482448721-cnn1_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'current',
    nutritionMap: {
      vitaminC: {
        isDense: false,
        uom: 'mg',
        key: 'vitaminC',
        name: 'Vitamin C',
        defaultDvp: 0,
        perServingDisplay: '0',
        perServing: 0,
        fullDvp: 60,
        defaultDvpDisplay: '0'
      },
      vitaminA: {
        isDense: false,
        uom: 'IU',
        key: 'vitaminA',
        name: 'Vitamin A',
        defaultDvp: 0,
        perServingDisplay: '0',
        perServing: 0,
        fullDvp: 5000,
        defaultDvpDisplay: '0'
      },
      transFat: {
        uom: 'g',
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        perServingDisplay: '0'
      },
      totalFat: {
        uom: 'g',
        key: 'totalFat',
        name: 'Total Fat',
        defaultDvp: 10.77,
        perServing: 7,
        fullDvp: 65,
        defaultDvpDisplay: '10.77',
        perServingDisplay: '7'
      },
      sugar: {
        uom: 'g',
        key: 'sugar',
        name: 'Sugars',
        perServing: 14,
        perServingDisplay: '14'
      },
      sodium: {
        uom: 'mg',
        key: 'sodium',
        name: 'Sodium',
        defaultDvp: 2.08,
        perServing: 50,
        fullDvp: 2400,
        defaultDvpDisplay: '2.08',
        perServingDisplay: '50'
      },
      saturatedFat: {
        uom: 'g',
        key: 'saturatedFat',
        name: 'Sat Fat',
        defaultDvp: 5,
        perServing: 1,
        fullDvp: 20,
        defaultDvpDisplay: '5',
        perServingDisplay: '1'
      },
      protein: {
        isDense: false,
        uom: 'g',
        key: 'protein',
        name: 'Protein',
        perServing: 5,
        fullDvp: 50,
        perServingDisplay: '5'
      },
      potassium: {
        isDense: false,
        uom: 'mg',
        key: 'potassium',
        name: 'Potassium',
        defaultDvp: 3.86,
        perServing: 135,
        fullDvp: 3500,
        defaultDvpDisplay: '3.86',
        perServingDisplay: '135'
      },
      polyunsaturatedFat: {
        uom: 'g',
        key: 'polyunsaturatedFat',
        name: 'Polyunsaturated Fat',
        perServing: 2,
        perServingDisplay: '2'
      },
      monounsaturatedFat: {
        uom: 'g',
        key: 'monounsaturatedFat',
        name: 'Monounsaturated Fat',
        perServing: 3,
        perServingDisplay: '3'
      },
      iron: {
        isDense: false,
        uom: 'mg',
        key: 'iron',
        name: 'Iron',
        defaultDvp: 8,
        perServingDisplay: '1.44',
        perServing: 1.44,
        fullDvp: 18,
        defaultDvpDisplay: '8'
      },
      insolubleFiber: {
        uom: 'g',
        key: 'insolubleFiber',
        name: 'Insoluble Fiber',
        perServing: 1,
        perServingDisplay: '1'
      },
      fiber: {
        isDense: true,
        uom: 'g',
        key: 'fiber',
        name: 'Fiber',
        defaultDvp: 16,
        perServing: 4,
        fullDvp: 25,
        defaultDvpDisplay: '16',
        perServingDisplay: '4'
      },
      fatCalories: {
        uom: 'calories',
        key: 'fatCalories',
        name: 'Fat Calories',
        perServing: 60,
        perServingDisplay: '60'
      },
      cholesterol: {
        uom: 'mg',
        key: 'cholesterol',
        name: 'Cholesterol',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 300,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      carbohydrates: {
        uom: 'g',
        key: 'carbohydrates',
        name: 'Carbohydrates',
        defaultDvp: 13.33,
        perServing: 40,
        fullDvp: 300,
        defaultDvpDisplay: '13.33',
        perServingDisplay: '40'
      },
      calories: {
        uom: 'calories',
        key: 'calories',
        name: 'Calories',
        defaultDvpDisplay: '12',
        defaultDvp: 12,
        perServing: 240,
        fullDvp: 2000,
        perServingDisplay: '240'
      },
      calcium: {
        isDense: false,
        uom: 'mg',
        key: 'calcium',
        name: 'Calcium',
        defaultDvp: 2,
        perServingDisplay: '20',
        perServing: 20,
        fullDvp: 1000,
        defaultDvpDisplay: '2'
      }
    },
    servingInfo: {
      servingsPerContainerDisplay: '9',
      servingSize: 0.5,
      servingSizeUom: 'CUP',
      secondaryServingSize: 55,
      secondaryServingSizeUom: 'G',
      servingSizeDisplay: '1/2',
      totalSize: 17,
      totalSizeUom: 'OUNCE',
      secondaryTotalSize: 482,
      secondaryTotalSizeUom: 'GRAM',
      servingsPerContainer: 9
    },
    categories: ['365', 'breakfast', 'breakfast.cereal'],
    meta: {
      brand: '365 Everyday Value®',
      nameIsIngredient: false,
      oneIngredient: false
    },
    store: {
      available: true,
      price: 4.39,
      basePrice: 4.39,
      priceDisplay: '$4.39',
      sign_caption: 'Organic Granola Oat And Honey',
      retail_size: '17',
      retail_unit: 'EACH',
      uom_name: 'EACH',
      onSale: null,
      unit: null,
      local: false
    }
  },
  {
    _id: '5c1cb33065b1774c61ce426e',
    name: 'Crumbled Feta Cheese, 6 oz',
    slug: '365-everyday-value-crumbled-feta-cheese-6-oz',
    brand: {
      _id: '56d8994e6107411100f9a72c',
      name: '365 Everyday Value®',
      slug: '365-everyday-value',
      logo: {
        _id: '57460e137b447c4f2919c80c',
        source:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/57460e137b447c4f2919c80c_365logo_thumbnail.jpg'
      }
    },
    allergenList: ['Milk and Dairy (Cultured Pasteurized Milk)'],
    additiveList: ['Salt', 'Enzyme', 'Potato Starch'],
    certificationList: [],
    diets: [
      { name: 'Sugar Conscious', slug: 'sugar-conscious' },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Whole Foods Diet', slug: 'whole-foods-diet' }
    ],
    facilityAllergenList: [],
    image: {
      _id: '5c1304983d4daf04b2656e58',
      source:
        'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e58_productdataa00099482412326-c1n1.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e58_productdataa00099482412326-c1n1_thumbnail.jpg'
    },
    ingredientList: [
      'Cultured Pasteurized Milk',
      'Salt',
      'Microbial Enzyme',
      'Potato Starch (Added To Prevent Caking).'
    ],
    mediaList: [
      {
        _id: '5c1304983d4daf04b2656e58',
        source:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e58_productdataa00099482412326-c1n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e58_productdataa00099482412326-c1n1_thumbnail.jpg'
      },
      {
        _id: '5c1304983d4daf04b2656e59',
        source:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e59_productdataa00099482412326-c7n1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e59_productdataa00099482412326-c7n1_thumbnail.jpg'
      },
      {
        _id: '5c1304983d4daf04b2656e5a',
        source:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e5a_productdataa00099482412326-cin1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e5a_productdataa00099482412326-cin1_thumbnail.jpg'
      },
      {
        _id: '5c1304983d4daf04b2656e5b',
        source:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e5b_productdatab0009948241232600099482412326-cnn1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5c1304983d4daf04b2656e5b_productdatab0009948241232600099482412326-cnn1_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'current',
    nutritionMap: {
      vitaminC: {
        isDense: false,
        uom: 'mg',
        key: 'vitaminC',
        name: 'Vitamin C',
        defaultDvp: 0,
        perServingDisplay: '0',
        perServing: 0,
        fullDvp: 60,
        defaultDvpDisplay: '0'
      },
      vitaminA: {
        isDense: false,
        uom: 'IU',
        key: 'vitaminA',
        name: 'Vitamin A',
        defaultDvp: 4,
        perServingDisplay: '200',
        perServing: 200,
        fullDvp: 5000,
        defaultDvpDisplay: '4'
      },
      transFat: {
        uom: 'g',
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        perServingDisplay: '0'
      },
      totalFat: {
        uom: 'g',
        key: 'totalFat',
        name: 'Total Fat',
        defaultDvp: 6.15,
        perServing: 4,
        fullDvp: 65,
        defaultDvpDisplay: '6.15',
        perServingDisplay: '4'
      },
      sugar: {
        uom: 'g',
        key: 'sugar',
        name: 'Sugars',
        perServing: 1,
        perServingDisplay: '1'
      },
      sodium: {
        uom: 'mg',
        key: 'sodium',
        name: 'Sodium',
        defaultDvp: 14.17,
        perServing: 340,
        fullDvp: 2400,
        defaultDvpDisplay: '14.17',
        perServingDisplay: '340'
      },
      saturatedFat: {
        uom: 'g',
        key: 'saturatedFat',
        name: 'Sat Fat',
        defaultDvp: 15,
        perServing: 3,
        fullDvp: 20,
        defaultDvpDisplay: '15',
        perServingDisplay: '3'
      },
      protein: {
        isDense: false,
        uom: 'g',
        key: 'protein',
        name: 'Protein',
        perServing: 6,
        fullDvp: 50,
        perServingDisplay: '6'
      },
      iron: {
        isDense: false,
        uom: 'mg',
        key: 'iron',
        name: 'Iron',
        defaultDvp: 0,
        perServingDisplay: '0',
        perServing: 0,
        fullDvp: 18,
        defaultDvpDisplay: '0'
      },
      fiber: {
        isDense: false,
        uom: 'g',
        key: 'fiber',
        name: 'Fiber',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 25,
        defaultDvpDisplay: '0',
        perServingDisplay: '0'
      },
      fatCalories: {
        uom: 'calories',
        key: 'fatCalories',
        name: 'Fat Calories',
        perServing: 35,
        perServingDisplay: '35'
      },
      cholesterol: {
        uom: 'mg',
        key: 'cholesterol',
        name: 'Cholesterol',
        defaultDvp: 5,
        perServing: 15,
        fullDvp: 300,
        defaultDvpDisplay: '5',
        perServingDisplay: '15'
      },
      carbohydrates: {
        uom: 'g',
        key: 'carbohydrates',
        name: 'Carbohydrates',
        defaultDvp: 0.67,
        perServing: 2,
        fullDvp: 300,
        defaultDvpDisplay: '0.67',
        perServingDisplay: '2'
      },
      calories: {
        uom: 'calories',
        key: 'calories',
        name: 'Calories',
        defaultDvpDisplay: '3.5',
        defaultDvp: 3.5,
        perServing: 70,
        fullDvp: 2000,
        perServingDisplay: '70'
      },
      calcium: {
        isDense: true,
        uom: 'mg',
        key: 'calcium',
        name: 'Calcium',
        defaultDvp: 10,
        perServingDisplay: '100',
        perServing: 100,
        fullDvp: 1000,
        defaultDvpDisplay: '10'
      }
    },
    servingInfo: {
      servingsPerContainerDisplay: '6',
      servingSize: 1,
      servingSizeUom: 'oz',
      secondaryServingSize: 28,
      secondaryServingSizeUom: 'G',
      totalSize: 6,
      totalSizeUom: 'OUNCE',
      secondaryTotalSize: 170,
      secondaryTotalSizeUom: 'GRAM',
      servingsPerContainer: 6
    },
    categories: ['365', 'cheese'],
    meta: {
      brand: '365 Everyday Value®',
      nameIsIngredient: false,
      oneIngredient: false
    },
    store: {
      available: true,
      price: 2.99,
      basePrice: 2.99,
      priceDisplay: '$2.99',
      sign_caption: 'Feta Crumbles',
      retail_size: '6',
      retail_unit: 'EACH',
      uom_name: 'EACH',
      onSale: null,
      unit: null,
      local: false
    }
  },
  {
    _id: '5c1cb88c65b1774c61ea2850',
    name: 'Organic Fair Trade Strawberries',
    slug: 'driscolls-organic-fair-trade-strawberries',
    brand: {
      _id: '56d743b25f2263110008183f',
      name: "Driscoll's",
      slug: 'driscolls',
      logo: {
        _id: '571e80f1eb727d1100414aa9',
        source:
          'https://sage.blob.core.windows.net/media/571e80f1eb727d1100414aa9_driscolls.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/571e80f1eb727d1100414aa9_driscolls_thumbnail.jpg'
      }
    },
    allergenList: [],
    additiveList: [],
    certificationList: [
      {
        name: 'Certified Organic',
        description:
          'Products that have been certified organic by the USDA National Organic Program or a USDA-accredited 3rd Party certifier.',
        internalDescription:
          'Products that have been certified organic by the USDA National Organic Program (NOP) or a USDA-accredited 3rd Party certifier.',
        slug: 'certified-organic',
        types: [],
        certifierList: ['USDA Organic'],
        isClaim: true,
        computed: false
      },
      {
        name: 'Fair Trade Certified',
        description:
          'Products certified Fair Trade by Fair Trade USA, Fairtrade International, or Fair For Life, indicating that the brand meets certain environmental, labor, and developmental standards.',
        internalDescription:
          'Products certified Fair Trade by Fair Trade USA, Fairtrade International, or Fair For Life, indicating that the brand meets certain environmental, labor, and developmental standards.',
        slug: 'fair-trade-certified',
        types: [],
        certifierList: ['Fair Trade USA'],
        isClaim: true,
        computed: false
      }
    ],
    diets: [
      { name: 'Dairy Free', slug: 'dairy-free' },
      { name: 'Engine 2', slug: 'engine-2' },
      {
        name: 'Low Fat',
        slug: 'low-fat',
        disclosures: ['Organic Strawberries, a fat-free food']
      },
      {
        name: 'Low Sodium',
        slug: 'low-sodium',
        disclosures: ['Organic Strawberries, a sodium free food']
      },
      { name: 'Paleo Friendly', slug: 'paleo-friendly' },
      { name: 'Sugar Conscious', slug: 'sugar-conscious' },
      { name: 'Vegan', slug: 'vegan' },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Whole Foods Diet', slug: 'whole-foods-diet' },
      { name: 'Organic', slug: 'organic' }
    ],
    facilityAllergenList: [],
    image: {
      _id: '5b2be408788678d7f0e26adb',
      source:
        'https://sage.blob.core.windows.net/media/5b2be408788678d7f0e26adb_straw-clam-16oz-og.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/5b2be408788678d7f0e26adb_straw-clam-16oz-og_thumbnail.jpg'
    },
    ingredientList: ['Organic Strawberries'],
    mediaList: [
      {
        _id: '5b2be408788678d7f0e26adb',
        source:
          'https://sage.blob.core.windows.net/media/5b2be408788678d7f0e26adb_straw-clam-16oz-og.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/5b2be408788678d7f0e26adb_straw-clam-16oz-og_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'current',
    nutritionMap: {
      zinc: {
        isDense: false,
        key: 'zinc',
        name: 'Zinc',
        defaultDvp: 0.67,
        perServing: 0.101,
        fullDvp: 15,
        defaultDvpDisplay: '0.67',
        uom: 'mg',
        perServingDisplay: '0.101'
      },
      vitaminK: {
        isDense: true,
        key: 'vitaminK',
        name: 'Vitamin K',
        defaultDvp: 1.98,
        perServing: 1.584,
        fullDvp: 80,
        defaultDvpDisplay: '1.98',
        uom: 'µg',
        perServingDisplay: '1.584'
      },
      vitaminE: {
        isDense: false,
        key: 'vitaminE',
        name: 'Vitamin E',
        defaultDvp: 1.04,
        perServing: 0.311,
        fullDvp: 30,
        defaultDvpDisplay: '1.04',
        uom: 'IU',
        perServingDisplay: '0.311'
      },
      vitaminD: {
        isDense: false,
        key: 'vitaminD',
        name: 'Vitamin D',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 400,
        defaultDvpDisplay: '0',
        uom: 'IU',
        perServingDisplay: '0'
      },
      vitaminC: {
        isDense: true,
        key: 'vitaminC',
        name: 'Vitamin C',
        defaultDvp: 70.56,
        perServing: 42.336,
        fullDvp: 60,
        defaultDvpDisplay: '70.56',
        uom: 'mg',
        perServingDisplay: '42.336'
      },
      vitaminB6: {
        isDense: false,
        key: 'vitaminB6',
        name: 'Vitamin B6',
        defaultDvp: 1.7,
        perServing: 0.034,
        fullDvp: 2,
        defaultDvpDisplay: '1.7',
        uom: 'mg',
        perServingDisplay: '0.034'
      },
      vitaminB12: {
        isDense: false,
        key: 'vitaminB12',
        name: 'Vitamin B12',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 6,
        defaultDvpDisplay: '0',
        uom: 'µg',
        perServingDisplay: '0'
      },
      vitaminA: {
        isDense: false,
        key: 'vitaminA',
        name: 'Vitamin A',
        defaultDvp: 0.17,
        perServing: 8.64,
        fullDvp: 5000,
        defaultDvpDisplay: '0.17',
        uom: 'IU',
        perServingDisplay: '8.64'
      },
      transFat: {
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        uom: 'g',
        perServingDisplay: '0'
      },
      totalFat: {
        key: 'totalFat',
        name: 'Total Fat',
        defaultDvp: 0.33,
        perServing: 0.216,
        fullDvp: 65,
        defaultDvpDisplay: '0.33',
        uom: 'g',
        perServingDisplay: '0.216'
      },
      thiamin: {
        isDense: false,
        key: 'thiamin',
        name: 'Thiamin',
        defaultDvp: 1.13,
        perServing: 0.017,
        fullDvp: 1.5,
        defaultDvpDisplay: '1.13',
        uom: 'mg',
        perServingDisplay: '0.017'
      },
      sugar: {
        key: 'sugar',
        name: 'Sugars',
        perServing: 3.521,
        uom: 'g',
        perServingDisplay: '3.521'
      },
      sodium: {
        key: 'sodium',
        name: 'Sodium',
        defaultDvp: 0.03,
        perServing: 0.72,
        fullDvp: 2400,
        defaultDvpDisplay: '0.03',
        uom: 'mg',
        perServingDisplay: '0.72'
      },
      selenium: {
        isDense: false,
        key: 'selenium',
        name: 'Selenium',
        defaultDvp: 0.41,
        perServing: 0.288,
        fullDvp: 70,
        defaultDvpDisplay: '0.41',
        uom: 'µg',
        perServingDisplay: '0.288'
      },
      saturatedFat: {
        key: 'saturatedFat',
        name: 'Sat Fat',
        defaultDvp: 0.05,
        perServing: 0.011,
        fullDvp: 20,
        defaultDvpDisplay: '0.05',
        uom: 'g',
        perServingDisplay: '0.011'
      },
      riboflavin: {
        isDense: false,
        key: 'riboflavin',
        name: 'Riboflavin',
        defaultDvp: 0.94,
        perServing: 0.016,
        fullDvp: 1.7,
        defaultDvpDisplay: '0.94',
        uom: 'mg',
        perServingDisplay: '0.016'
      },
      protein: {
        perServing: 0.482,
        perServingDisplay: '0.482',
        fullDvp: 50,
        defaultDvpDisplay: '0.96',
        defaultDvp: 0.96,
        name: 'Protein',
        key: 'protein',
        uom: 'g',
        isDense: false
      },
      potassium: {
        isDense: true,
        key: 'potassium',
        name: 'Potassium',
        defaultDvp: 3.15,
        perServing: 110.16,
        fullDvp: 3500,
        defaultDvpDisplay: '3.15',
        uom: 'mg',
        perServingDisplay: '110.16'
      },
      polyunsaturatedFat: {
        key: 'polyunsaturatedFat',
        name: 'Polyunsaturated Fat',
        perServing: 0.112,
        uom: 'g',
        perServingDisplay: '0.112'
      },
      phosphorus: {
        isDense: true,
        key: 'phosphorus',
        name: 'Phosphorus',
        defaultDvp: 1.73,
        perServing: 17.28,
        fullDvp: 1000,
        defaultDvpDisplay: '1.73',
        uom: 'mg',
        perServingDisplay: '17.28'
      },
      pantothenicAcid: {
        isDense: false,
        key: 'pantothenicAcid',
        name: 'Pantothenic Acid',
        defaultDvp: 0.9,
        perServing: 0.09,
        fullDvp: 10,
        perServingDisplay: '0.09',
        defaultDvpDisplay: '0.9',
        uom: 'mg'
      },
      niacin: {
        isDense: false,
        key: 'niacin',
        name: 'Niacin',
        defaultDvp: 1.39,
        perServing: 0.278,
        fullDvp: 20,
        defaultDvpDisplay: '1.39',
        uom: 'mg',
        perServingDisplay: '0.278'
      },
      monounsaturatedFat: {
        key: 'monounsaturatedFat',
        name: 'Monounsaturated Fat',
        perServing: 0.031,
        uom: 'g',
        perServingDisplay: '0.031'
      },
      manganese: {
        isDense: true,
        key: 'manganese',
        name: 'Manganese',
        defaultDvp: 13.9,
        perServing: 0.278,
        fullDvp: 2,
        defaultDvpDisplay: '13.9',
        uom: 'mg',
        perServingDisplay: '0.278'
      },
      magnesium: {
        isDense: true,
        key: 'magnesium',
        name: 'Magnesium',
        defaultDvp: 2.34,
        perServing: 9.36,
        fullDvp: 400,
        defaultDvpDisplay: '2.34',
        uom: 'mg',
        perServingDisplay: '9.36'
      },
      iron: {
        isDense: false,
        key: 'iron',
        name: 'Iron',
        defaultDvp: 1.64,
        perServing: 0.295,
        fullDvp: 18,
        defaultDvpDisplay: '1.64',
        uom: 'mg',
        perServingDisplay: '0.295'
      },
      folicAcid: {
        isDense: false,
        key: 'folicAcid',
        name: 'Folic Acid',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 400,
        perServingDisplay: '0',
        defaultDvpDisplay: '0',
        uom: 'µg'
      },
      folate: {
        isDense: true,
        key: 'folate',
        name: 'Folate',
        defaultDvp: 4.32,
        perServing: 17.28,
        fullDvp: 400,
        defaultDvpDisplay: '4.32',
        uom: 'µg',
        perServingDisplay: '17.28'
      },
      fiber: {
        isDense: true,
        key: 'fiber',
        name: 'Fiber',
        defaultDvp: 5.76,
        perServing: 1.44,
        fullDvp: 25,
        defaultDvpDisplay: '5.76',
        uom: 'g',
        perServingDisplay: '1.44'
      },
      fatCalories: {
        key: 'fatCalories',
        name: 'Fat Calories',
        perServing: 3.96,
        uom: 'calories',
        perServingDisplay: '3.96'
      },
      copper: {
        isDense: true,
        key: 'copper',
        name: 'Copper',
        defaultDvp: 1.75,
        perServing: 0.035,
        fullDvp: 2,
        defaultDvpDisplay: '1.75',
        uom: 'mg',
        perServingDisplay: '0.035'
      },
      cholesterol: {
        key: 'cholesterol',
        name: 'Cholesterol',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 300,
        defaultDvpDisplay: '0',
        uom: 'mg',
        perServingDisplay: '0'
      },
      carbohydrates: {
        key: 'carbohydrates',
        name: 'Carbohydrates',
        defaultDvp: 1.84,
        perServing: 5.53,
        fullDvp: 300,
        defaultDvpDisplay: '1.84',
        uom: 'g',
        perServingDisplay: '5.53'
      },
      calories: {
        key: 'calories',
        name: 'Calories',
        defaultDvp: 1.15,
        perServing: 23.04,
        fullDvp: 2000,
        defaultDvpDisplay: '1.15',
        uom: 'calories',
        perServingDisplay: '23.04'
      },
      calcium: {
        isDense: false,
        key: 'calcium',
        name: 'Calcium',
        defaultDvp: 1.15,
        perServing: 11.52,
        fullDvp: 1000,
        defaultDvpDisplay: '1.15',
        uom: 'mg',
        perServingDisplay: '11.52'
      }
    },
    servingInfo: {
      secondaryTotalSizeUom: '',
      totalSizeUom: 'pound',
      totalSize: 1,
      secondaryServingSizeUom: 'g',
      secondaryServingSize: 72,
      servingsPerContainerDisplay: 'Varies',
      servingsPerContainer: null,
      servingSizeUom: 'cup',
      servingSize: 0.5
    },
    categories: ['produce', 'produce.fresh-fruit'],
    meta: {
      brand: "Driscoll's",
      oneIngredient: true,
      nameIsIngredient: false
    },
    store: {
      available: true,
      price: 3.99,
      basePrice: 3.99,
      priceDisplay: '$3.99',
      sign_caption: 'Organic Strawberries',
      retail_size: '16',
      retail_unit: 'EACH',
      uom_name: 'EACH',
      onSale: null,
      unit: null,
      local: false
    }
  },
  {
    _id: '5c1cbfa365b1774c610f5309',
    name: 'Whole Trade® Organic Bananas',
    slug: 'whole-foods-market-whole-trade-organic-bananas',
    brand: {
      _id: '56d891d96107411100f9a6fd',
      name: 'Whole Foods Market™',
      slug: 'whole-foods-market',
      logo: {
        _id: '56fdc02296a27a11001ea4fc',
        source:
          'https://sage.blob.core.windows.net/media/56fdc02296a27a11001ea4fc_whole-foods-logo.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/56fdc02296a27a11001ea4fc_whole-foods-logo_thumbnail.jpg'
      }
    },
    allergenList: [],
    additiveList: [],
    certificationList: [
      {
        name: 'Certified Organic',
        slug: 'certified-organic',
        description:
          'Products that have been certified organic by the USDA National Organic Program or a USDA-accredited 3rd Party certifier.',
        internalDescription:
          'Products that have been certified organic by the USDA National Organic Program (NOP) or a USDA-accredited 3rd Party certifier.',
        types: [],
        certifierList: ['USDA Organic'],
        isClaim: false,
        computed: true
      },
      {
        internalDescription:
          'Products certified Fair Trade by Fair Trade USA, Fairtrade International, or Fair For Life, indicating that the brand meets certain environmental, labor, and developmental standards.',
        description:
          'Products certified Fair Trade by Fair Trade USA, Fairtrade International, or Fair For Life, indicating that the brand meets certain environmental, labor, and developmental standards.',
        slug: 'fair-trade-certified',
        name: 'Fair Trade Certified',
        types: [],
        certifierList: ['Whole Trade® (Whole Foods)'],
        isClaim: false,
        computed: true
      }
    ],
    diets: [
      { name: 'Dairy Free', slug: 'dairy-free' },
      { name: 'Engine 2', slug: 'engine-2' },
      { name: 'Gluten Free', slug: 'gluten-free' },
      {
        name: 'Low Fat',
        slug: 'low-fat',
        disclosures: ['Organic Banana, a fat-free food']
      },
      {
        name: 'Low Sodium',
        slug: 'low-sodium',
        disclosures: ['Organic Banana, a sodium free food']
      },
      { name: 'Paleo Friendly', slug: 'paleo-friendly' },
      { name: 'Vegan', slug: 'vegan' },
      { name: 'Vegetarian', slug: 'vegetarian' },
      { name: 'Whole Foods Diet', slug: 'whole-foods-diet' },
      { name: 'Organic', slug: 'organic' }
    ],
    facilityAllergenList: [],
    image: {
      _id: '56e9b4ec9af70611009da950',
      source:
        'https://sage.blob.core.windows.net/media/56e9b4ec9af70611009da950_365_-bananas.3.jpg',
      thumbnail:
        'https://sage.blob.core.windows.net/media/56e9b4ec9af70611009da950_365_-bananas.3_thumbnail.jpg'
    },
    ingredientList: ['Organic Banana'],
    mediaList: [
      {
        _id: '56e9b4fb9af70611009da951',
        source:
          'https://sage.blob.core.windows.net/media/56e9b4fb9af70611009da951_365_-bananas.4.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/56e9b4fb9af70611009da951_365_-bananas.4_thumbnail.jpg'
      },
      {
        _id: '56e9b4ec9af70611009da950',
        source:
          'https://sage.blob.core.windows.net/media/56e9b4ec9af70611009da950_365_-bananas.3.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/56e9b4ec9af70611009da950_365_-bananas.3_thumbnail.jpg'
      },
      {
        _id: '56e9b4c79af70611009da94f',
        source:
          'https://sage.blob.core.windows.net/media/56e9b4c79af70611009da94f_365_-bananas.1.jpg',
        thumbnail:
          'https://sage.blob.core.windows.net/media/56e9b4c79af70611009da94f_365_-bananas.1_thumbnail.jpg'
      }
    ],
    nutritionGroup: 'adult',
    nutritionLabelFormat: 'current',
    nutritionMap: {
      zinc: {
        isDense: false,
        key: 'zinc',
        name: 'Zinc',
        defaultDvp: 1.2,
        perServing: 0.18,
        fullDvp: 15,
        defaultDvpDisplay: '1.2',
        uom: 'mg',
        perServingDisplay: '0.18'
      },
      vitaminK: {
        isDense: false,
        key: 'vitaminK',
        name: 'Vitamin K',
        defaultDvp: 0.75,
        perServing: 0.6,
        fullDvp: 80,
        defaultDvpDisplay: '0.75',
        uom: 'µg',
        perServingDisplay: '0.6'
      },
      vitaminE: {
        isDense: false,
        key: 'vitaminE',
        name: 'Vitamin E',
        defaultDvp: 0.4,
        perServing: 0.12,
        fullDvp: 30,
        defaultDvpDisplay: '0.4',
        uom: 'IU',
        perServingDisplay: '0.12'
      },
      vitaminD: {
        isDense: false,
        key: 'vitaminD',
        name: 'Vitamin D',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 400,
        defaultDvpDisplay: '0',
        uom: 'IU',
        perServingDisplay: '0'
      },
      vitaminC: {
        isDense: true,
        key: 'vitaminC',
        name: 'Vitamin C',
        defaultDvp: 17.17,
        perServing: 10.3,
        fullDvp: 60,
        defaultDvpDisplay: '17.17',
        uom: 'mg',
        perServingDisplay: '10.3'
      },
      vitaminB6: {
        isDense: true,
        key: 'vitaminB6',
        name: 'Vitamin B6',
        defaultDvp: 21.65,
        perServing: 0.433,
        fullDvp: 2,
        defaultDvpDisplay: '21.65',
        uom: 'mg',
        perServingDisplay: '0.433'
      },
      vitaminB12: {
        isDense: false,
        key: 'vitaminB12',
        name: 'Vitamin B12',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 6,
        defaultDvpDisplay: '0',
        uom: 'µg',
        perServingDisplay: '0'
      },
      vitaminA: {
        isDense: false,
        key: 'vitaminA',
        name: 'Vitamin A',
        defaultDvp: 1.52,
        perServing: 76,
        fullDvp: 5000,
        defaultDvpDisplay: '1.52',
        uom: 'IU',
        perServingDisplay: '76'
      },
      transFat: {
        key: 'transFat',
        name: 'Trans Fat',
        perServing: 0,
        uom: 'g',
        perServingDisplay: '0'
      },
      totalFat: {
        key: 'totalFat',
        name: 'Total Fat',
        defaultDvp: 0.6,
        perServing: 0.39,
        fullDvp: 65,
        defaultDvpDisplay: '0.6',
        uom: 'g',
        perServingDisplay: '0.39'
      },
      thiamin: {
        isDense: false,
        key: 'thiamin',
        name: 'Thiamin',
        defaultDvp: 2.47,
        perServing: 0.037,
        fullDvp: 1.5,
        defaultDvpDisplay: '2.47',
        uom: 'mg',
        perServingDisplay: '0.037'
      },
      sugar: {
        key: 'sugar',
        name: 'Sugars',
        perServing: 14.43,
        uom: 'g',
        perServingDisplay: '14.43'
      },
      sodium: {
        key: 'sodium',
        name: 'Sodium',
        defaultDvp: 0.04,
        perServing: 1,
        fullDvp: 2400,
        defaultDvpDisplay: '0.04',
        uom: 'mg',
        perServingDisplay: '1'
      },
      saturatedFat: {
        key: 'saturatedFat',
        name: 'Sat Fat',
        defaultDvp: 0.66,
        perServing: 0.132,
        fullDvp: 20,
        defaultDvpDisplay: '0.66',
        uom: 'g',
        perServingDisplay: '0.132'
      },
      riboflavin: {
        isDense: false,
        key: 'riboflavin',
        name: 'Riboflavin',
        defaultDvp: 5.06,
        perServing: 0.086,
        fullDvp: 1.7,
        defaultDvpDisplay: '5.06',
        uom: 'mg',
        perServingDisplay: '0.086'
      },
      protein: {
        isDense: false,
        key: 'protein',
        name: 'Protein',
        perServing: 1.29,
        fullDvp: 50,
        uom: 'g',
        perServingDisplay: '1.29'
      },
      potassium: {
        isDense: true,
        key: 'potassium',
        name: 'Potassium',
        defaultDvp: 12.06,
        perServing: 422,
        fullDvp: 3500,
        defaultDvpDisplay: '12.06',
        uom: 'mg',
        perServingDisplay: '422'
      },
      polyunsaturatedFat: {
        key: 'polyunsaturatedFat',
        name: 'Polyunsaturated Fat',
        perServing: 0.086,
        uom: 'g',
        perServingDisplay: '0.086'
      },
      phosphorus: {
        isDense: false,
        key: 'phosphorus',
        name: 'Phosphorus',
        defaultDvp: 2.6,
        perServing: 26,
        fullDvp: 1000,
        defaultDvpDisplay: '2.6',
        uom: 'mg',
        perServingDisplay: '26'
      },
      niacin: {
        isDense: false,
        key: 'niacin',
        name: 'Niacin',
        defaultDvp: 3.93,
        perServing: 0.785,
        fullDvp: 20,
        defaultDvpDisplay: '3.93',
        uom: 'mg',
        perServingDisplay: '0.785'
      },
      monounsaturatedFat: {
        key: 'monounsaturatedFat',
        name: 'Monounsaturated Fat',
        perServing: 0.038,
        uom: 'g',
        perServingDisplay: '0.038'
      },
      magnesium: {
        isDense: true,
        key: 'magnesium',
        name: 'Magnesium',
        defaultDvp: 8,
        perServing: 32,
        fullDvp: 400,
        defaultDvpDisplay: '8',
        uom: 'mg',
        perServingDisplay: '32'
      },
      iron: {
        isDense: false,
        key: 'iron',
        name: 'Iron',
        defaultDvp: 1.72,
        perServing: 0.31,
        fullDvp: 18,
        defaultDvpDisplay: '1.72',
        uom: 'mg',
        perServingDisplay: '0.31'
      },
      folate: {
        isDense: false,
        key: 'folate',
        name: 'Folate',
        defaultDvp: 6,
        perServing: 24,
        fullDvp: 400,
        defaultDvpDisplay: '6',
        uom: 'µg',
        perServingDisplay: '24'
      },
      fiber: {
        isDense: true,
        key: 'fiber',
        name: 'Fiber',
        defaultDvp: 12.4,
        perServing: 3.1,
        fullDvp: 25,
        defaultDvpDisplay: '12.4',
        uom: 'g',
        perServingDisplay: '3.1'
      },
      cholesterol: {
        key: 'cholesterol',
        name: 'Cholesterol',
        defaultDvp: 0,
        perServing: 0,
        fullDvp: 300,
        defaultDvpDisplay: '0',
        uom: 'mg',
        perServingDisplay: '0'
      },
      carbohydrates: {
        key: 'carbohydrates',
        name: 'Carbohydrates',
        defaultDvp: 8.98,
        perServing: 26.95,
        fullDvp: 300,
        defaultDvpDisplay: '8.98',
        uom: 'g',
        perServingDisplay: '26.95'
      },
      calories: {
        key: 'calories',
        name: 'Calories',
        defaultDvp: 5.25,
        perServing: 105,
        fullDvp: 2000,
        defaultDvpDisplay: '5.25',
        uom: 'calories',
        perServingDisplay: '105'
      },
      calcium: {
        isDense: false,
        key: 'calcium',
        name: 'Calcium',
        defaultDvp: 0.6,
        perServing: 6,
        fullDvp: 1000,
        defaultDvpDisplay: '0.6',
        uom: 'mg',
        perServingDisplay: '6'
      }
    },
    servingInfo: {
      secondaryTotalSizeUom: 'g',
      secondaryTotalSize: 118,
      totalSizeUom: 'banana',
      totalSize: 1,
      servingsPerContainerDisplay: '1',
      servingsPerContainer: 1,
      servingSizeUom: 'banana ',
      servingSize: 1
    },
    categories: ['produce', 'produce.fresh-fruit'],
    meta: {
      brand: 'Whole Foods Market™',
      oneIngredient: true,
      nameIsIngredient: false
    },
    store: {
      available: true,
      price: 0.69,
      basePrice: 0.69,
      priceDisplay: '69¢',
      sign_caption: 'Organic WTG Banana',
      retail_size: '1',
      retail_unit: 'POUND',
      uom_name: 'POUND',
      onSale: null,
      unit: 'lb',
      local: false
    }
  }
];

module.exports = productID => {
  if (productID) {
    return products.find(product => {
      return product.slug === productID;
    });
  } else {
    return products;
  }
};
