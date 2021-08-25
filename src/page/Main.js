import '../styles/Main.css';

function Main() {
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
                            <img src="/assets/combo_meal.png" alt=""/>
                            <p>Combo Meal</p>
                        </li>
                        <li>
                            <img src="/assets/combo_meal.png" alt=""/>
                            <p>Combo Meal</p>
                        </li>
                        <li>
                            <img src="/assets/combo_meal.png" alt=""/>
                            <p>Combo Meal</p>
                        </li>
                        <li>
                            <img src="/assets/combo_meal.png" alt=""/>
                            <p>Combo Meal</p>
                        </li>
                        <li>
                            <img src="/assets/combo_meal.png" alt=""/>
                            <p>Combo Meal</p>
                        </li>
                        <li>
                            <img src="/assets/combo_meal.png" alt=""/>
                            <p>Combo Meal</p>
                        </li>
                    </ul>
                </div>
                <div className="product">
                    <div className="title-block">
                        <h2 className="title"><b>Popular</b></h2>
                    </div>
                    <ul className="product-list">
                        <li>
                            
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
                    <p className="desc">Take Out</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
