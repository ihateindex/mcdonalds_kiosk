import '../styles/Main.css';

function Main(props) {
    console.log(props);
    return (
        <div className="Main">
            <div className="inner">
                <div className="menu">
                    <div className="title-block">
                        <img className="logo" src="/assets/mcdonalds_logo.svg" alt="" />
                        <h2 className="title">
                            <b>Hey,</b>
                            <br />
                            what's up?
                        </h2>
                    </div>
                    <ul className="menu-list">
                        <li className="is-accent">
                            <img src="/assets/combo_meal.png" alt="" />
                            <p>Combo Meal</p>
                        </li>
                        <li>
                            <img src="/assets/burgers_sandwiches.png" alt="" />
                            <p>
                                Burgers &<br /> Sandwiches
                            </p>
                        </li>
                        <li>
                            <img src="/assets/happy_meal.png" alt="" />
                            <p>Happy Meal</p>
                        </li>
                        <li>
                            <img src="/assets/beverages.png" alt="" />
                            <p>Beverages</p>
                        </li>
                        <li>
                            <img src="/assets/chiken.png" alt="" />
                            <p>Chiken</p>
                        </li>
                        <li>
                            <img src="/assets/snacks_sides.png" alt="" />
                            <p>
                                Snack &<br />
                                Sides
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="product">
                    <div className="title-block">
                        <h2 className="title">
                            <b>Popular</b>
                        </h2>
                    </div>
                    <ul className="product-list">
                        <li>
                            <img src="/assets/big_mac.jpeg" alt="" />
                            <p className="name">Big Mac</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/quarter_pounder_cheese.jpeg" alt="" />
                            <p className="name">Quarter Pounder</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/cheeseburger.jpeg" alt="" />
                            <p className="name">Cheeseburger</p>
                            <p className="price">$ 2.18</p>
                        </li>
                        <li>
                            <img src="/assets/deluxe_crispy_chicken_sandwich.jpeg" alt="" />
                            <p className="name">
                                crispy chicken
                                <br />
                                deluxe
                            </p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/crispy_caesar_chicken_mcwrap.jpeg" alt="" />
                            <p className="name">Crispy Chicke Wrap</p>
                            <p className="price">$ 1.49</p>
                        </li>
                        <li>
                            <img src="/assets/filet_o_fish.jpeg" alt="" />
                            <p className="name">Filet-O-Fish</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/filet_o_fish.jpeg" alt="" />
                            <p className="name">Filet-O-Fish</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/filet_o_fish.jpeg" alt="" />
                            <p className="name">Filet-O-Fish</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/filet_o_fish.jpeg" alt="" />
                            <p className="name">Filet-O-Fish</p>
                            <p className="price">$ 3.79</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="side-bar">
                <div className="nav-country">
                    <button type="button" className="btn-change-country usa"></button>
                </div>
                <div className="title-block">
                    <h2 className="title">
                        My
                        <br />
                        Order
                    </h2>
                    <p className="desc">{props.location.state.title}</p>
                </div>
                <ul className="cart-list">
                    <li>
                        <div className="pic">
                            <img src="/assets/big_mac.jpeg" alt="" />
                        </div>
                        <p className="name">Big Mac</p>
                        <p className="price">$ 3.79</p>
                        <div className="quantity-block">
                            <button type="button" className="btn-minus">
                                -
                            </button>
                            <div className="quantity">1</div>
                            <button type="button" className="btn-plus">
                                +
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="pic">
                            <img src="/assets/filet_o_fish.jpeg" alt="" />
                        </div>
                        <p className="name">Filet-O-Fish</p>
                        <p className="price">$ 3.79</p>
                        <div className="quantity-block">
                            <button type="button" className="btn-minus">
                                -
                            </button>
                            <div className="quantity">1</div>
                            <button type="button" className="btn-plus">
                                +
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="pic">
                            <img src="/assets/world_famous_fries.jpeg" alt="" />
                        </div>
                        <p className="name">Large Fries</p>
                        <p className="price">$ 2.49</p>
                        <div className="quantity-block">
                            <button type="button" className="btn-minus">
                                -
                            </button>
                            <div className="quantity">1</div>
                            <button type="button" className="btn-plus">
                                +
                            </button>
                        </div>
                    </li>
                </ul>
                <div className="total-price-block">
                    <h5 className="title">Total</h5>
                    <h2 className="total-price">$13.86</h2>
                    <button type="button" className="btn-submit">Done</button>
                </div>
            </div>
        </div>
    );
}

export default Main;
