const Path = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

const UrlMarker = {
  Default: 'img/pin.svg',
  Selected: 'img/pin-active.svg'
} as const;

const SortTypeName = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
};

const ApiRoute = {
  Offers: '/offers',
  Favorite: '/favorite',
  Login: '/login'
};

const RATING_TO_BAR_WIDTH_RATIO = 20;

export { Path, UrlMarker, RATING_TO_BAR_WIDTH_RATIO, SortTypeName, ApiRoute };

