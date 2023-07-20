import Pizza from "./Pizza";
import pizzaData from '../data';

const Menu = () => {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

    return (
    <main className="menu">
        <h2>Our menu</h2>


        {numPizzas > 0 ? (
            <>
                <p>
                    Authentic Italian cuisine. Six creative dishes to choose from. All from our stone oven. All organic. All delicious.
                </p>

                <ul className="pizzas">
                {pizzas.map(pizza => (
                <Pizza 
                    pizzaObj={pizza}
                    key={pizza.name}
                />))}
                </ul>
            </>
            
        ) : (
            <p>We're still working on our menu. Please come back later.</p>
        )}

        {/* <Pizza 
            name='Pizza Spinaci' 
            ingredients='Tomato, mozarella, spinach, and ricotta cheese'
            photoName='./pizzas/spinaci.jpg'
            price={10}
        />
        <Pizza 
            name='Pizza Funghi'
            ingredients='Mushrooms, mozarella'
            photoName='./pizzas/funghi.jpg'
            price={12}
        /> */}
    </main>
    )
}

export default Menu;