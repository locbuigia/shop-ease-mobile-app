interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  isFavorite: boolean;
  isNew?: boolean;
  type: string;
  rating: number;
}

interface AppState {
  app: {
    products: Product[];
    isLoading: boolean;
    selectedProductType: string;
    selectedSortType: number;
    minPriceRange: number;
    maxPriceRange: number;
    currentMinPrice: number;
    currentMaxPrice: number;
  };
}

interface User {
  userName: string;
  userEmail: string;
  userPassword: string;
}

interface UserState {
  user: {
    registeredUsers: User[];
    isLoggedIn: boolean;
    userName: string;
    userEmail: string;
    itemsInUserCart: Product[];
  };
}
