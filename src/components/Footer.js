const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00. Come visit us or order online.
                    </p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>
                    We're closed. We will open again at {openHour}:00."
                </p>
            )}  
        </footer>
    )
}

export default Footer;