import ChuckSays from '../../microservices/ChuckSays'
import PokeApi from '../../microservices/PokeAPI'
import RandomPokeApi from '../../microservices/randomPokeAPI'
import MCU from '../../microservices/MCU'
import Tmdb from '../../microservices/Tmdb'
import Weath from '../../microservices/weather'
import Tekken from '../../microservices/Tekken'
import MyClock from '../../microservices/clock'
import Timer from '../../microservices/Timer'
import RandomChuck from '../../microservices/RandomChuck'
import ReallyRandomPokeApi from '../../microservices/reallyrandomPoke'

function WidgetList() {
    return (
        <div className="widget-box">
            <h1>Widgets List</h1>
            <div className="widgetlist">
                <ChuckSays />
                <RandomChuck/>
                <div className="pokeapi">
                    <RandomPokeApi />
                </div>
                <div className="pokeapi">
                    <ReallyRandomPokeApi/>
                </div>
                <div className="pokeapi">
                    <PokeApi />
                </div>
                <Tekken />
                <MCU />
                <Tmdb />
                <Weath />
                <div className="Timer">
                <MyClock/>
                <Timer/>
                </div>
            </div>
        </div>
    )
}

export default WidgetList