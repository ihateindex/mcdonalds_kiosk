import '../styles/Main.css';

function Main(props) {
    console.log(props);
    return (
        <div className="Main">
            <div className="nav-country">
                <button type="button" className="btn-change-country usa"></button>
            </div>
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
                            <img src="/assets/big_mac.jpeg" alt="" />
                            <p className="name">Big Mac</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/big_mac.jpeg" alt="" />
                            <p className="name">Big Mac</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/big_mac.jpeg" alt="" />
                            <p className="name">Big Mac</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/big_mac.jpeg" alt="" />
                            <p className="name">Big Mac</p>
                            <p className="price">$ 3.79</p>
                        </li>
                        <li>
                            <img src="/assets/big_mac.jpeg" alt="" />
                            <p className="name">Big Mac</p>
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
            </div>
        </div>
    );
}

export default Main;
