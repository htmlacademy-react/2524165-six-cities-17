import { Link } from 'react-router-dom';
import { Path } from '../../const';
import { City, Offer, Point } from '../../types/offer';
import { useState } from 'react';
import CityCard from '../../components/city-card';
import Map from '../../components/map';

type CitiesListScreenProps = {
  offers: Offer[];
}

function CitiesListScreen ({offers}: CitiesListScreenProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(undefined);
  const city: City = offers[0].city;

  function handleCityCardHover (pointName: string) {
    const currentPoint = offers.find((offer) => offer.location.title === pointName);

    setSelectedPoint(currentPoint?.location);
  }

  let favoritesCount = 0;
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].isFavorite) {
      favoritesCount++;
    }
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={Path.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoritesCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link to={Path.Main} className="locations__item-link tabs__item">
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={Path.Main} className="locations__item-link tabs__item">
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={Path.Main} className="locations__item-link tabs__item">
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={Path.Main} className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={Path.Main} className="locations__item-link tabs__item">
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link to={Path.Main} className="locations__item-link tabs__item">
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">

                {offers.map((offer) => <CityCard offer={offer} onHoverOverCard={handleCityCardHover} isOnMainPage key={offer.id} />)}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} points={offers.map((offer) => offer.location)} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CitiesListScreen;
