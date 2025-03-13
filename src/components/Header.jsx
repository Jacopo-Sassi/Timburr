function Header () {
    return (
        <header>
            <div className="left-header">
                <img className="logo" src="./public/0532timburr.png" alt="Timburr"/>
                <h1 className="nowrap">Timburr Wiki</h1>
            </div>
            <div className="right-header">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">News</a>
                <a href="#">About</a>
            </div>
        </header>
    )
}

export default Header;