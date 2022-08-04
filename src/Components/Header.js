import companyLogo from '../media/Carey_Coat_of_Arms.png';



function Header(props) {
    return (
    <header>

    <a href="">
        <img src={companyLogo} className=""/>
    </a>

    <div className="top_border_orienta">
        <div className="red"></div>
        <div className="white"></div>
        <div className="blue"></div>
    </div>

    <nav className="navigation0">

        <div className="navigation_disp">

            <div className="navigation1st">
                <a href="">HOME</a>
                <a href="">Shop</a>
                <a href="">Contact</a>
                <a href="">Store Policies</a>
            </div>

            <div className="button_border">

                <button className="dropbtn" onclick="dropDown()"></button>

                <div className="dropdown-content" id="myDropdown">
                    <a href="" class="">My Orders</a>
                    <a href="" class="">My Addresses</a>
                    <a href="" class="">My Wallet</a>
                    <a href="" class="">My Subscriptions</a>
                    <a href="" class="">My Account</a>
                    <a href="" class="">Log Out</a>
                </div>

            </div>

            <button className="material-symbols-outlined" style="">
                <span className="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
            </button>

        </div>
    </nav>
</header>
);

}

export default Header;