function Main () {
    return(
        <div className="main">
            <div className="info-container">
                <h3 className="info-title"> Timburr (Pokemon)</h3>
                <p className="description">Timburr (Japanese: ドッコラー Dokkorer) is a Fighting-type Pokémon introduced in Generation V. It evolves into Gurdurr starting at level 25, which evolves into Conkeldurr when traded.</p>
                <h5>Biology</h5>
                <p>Timburr is a gray bipedal Pokémon with a dark purple nose and dark-gray oval-shaped eyes. Pink, vein-like bulges are present on the back of its head. Similar pink bands adorn its shoulders and thighs.</p>
                <p>It has bulbous protrusions extending from the front and lower parts of its head. It always carries squared logs and uses them to fight with. When it can easily lift a block of timber nearly three times its own weight, it is close to evolving.</p>
                <p>Timburr is usually found near construction sites, helping construction workers. It loves helping in construction so much that if rain causes work to cease, it will throw a tantrum while swinging its log. </p>
                <h5>Evolution</h5>
                <p>Timburr evolves into Gurdurr, which evolves into Conkeldurr.</p>
                <p>(For specifics on this Pokémon's Evolution in the games, refer to Game data → Evolution data.)</p>
                <div className="evolution-container">
                    <div className="evolution">
                        <div className="evolution-image">
                            <img className="logo" src="./public/0532timburr.png" alt="Timburr"/>
                        </div>
                        <p className="center">Unevolved</p>
                        <div className="evolution-name">
                            <h4 className="center">Timburr</h4>
                        </div>
                        <div className="type">
                            <p className="center tag">Fighting</p>
                        </div>
                    </div>
                    <div className="evolution">
                        <div className="evolution-image">
                            <img className="logo" src="./public/0533gurdurr.png" alt="Gurdurr"/>
                        </div>
                        <p className="center">First Evolution</p>
                        <div className="evolution-name">
                            <h4 className="center">Gurdurr</h4>
                        </div>
                        <div className="type">
                            <p className="center tag">Fighting</p>
                        </div>
                    </div>
                    <div className="evolution">
                        <div className="evolution-image">
                            <img className="logo" src="./public/0534conkeldurr.png" alt="Conkeldurr"/>
                        </div>
                        <p className="center">Second Evolution</p>
                        <div className="evolution-name">
                            <h4 className="center">Conkeldurr</h4>
                        </div>
                        <div className="type">
                            <p className="center tag">Fighting</p>
                        </div>
                    </div>
                </div>
                <h5>NPC appearances</h5>
                <p>Pokémon Mystery Dungeon: Gates to Infinity: The Timburr Brothers are major characters in the game. Working for Gurdurr, they help to convince him to return being a carpenter and build a house for the player. They can also help the player and partner in developing Pokémon Paradise.</p>
            </div>
        </div>
    )
}

export default Main;