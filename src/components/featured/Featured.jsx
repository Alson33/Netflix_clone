import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = ({ type }) => {
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === 'movie' ? "Movie" : "Series" }</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                        </select>
                    </div>
                )
            }
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="info">
                <img src="" alt="" />
                <span className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eligendi quia consequuntur ipsum vel ratione deserunt obcaecati, vitae, maxime fugit praesentium harum laborum nobis magnam in ducimus dolor ab nemo.
                    Inventore sed ut blanditiis? Possimus vitae officia laudantium repellat nihil reiciendis tempore illo. Sequi nobis in dicta voluptatibus iure a reprehenderit, praesentium architecto quia dolorum cum sapie
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
