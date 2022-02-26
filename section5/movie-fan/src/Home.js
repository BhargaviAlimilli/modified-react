import React from 'react'
import axios from 'axios'
import config from './config'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            movieList: []
        }
    }

    componentDidMount(){
        console.log(config.apiKey)
        const nowPlayingUrl=`https://api.themoviedb.org/3/movie/now_playing?api_key=${config.apiKey}`

        axios.get(nowPlayingUrl).then((resp)=>{
            console.log(resp.data.results)
            this.setState({
                movieList: resp.data.results
            })
    
        })
    }

    render(){
        console.log(this.state.movieList)
        const imageUrl = "http://image.tmdb.org/t/p/w300";
        const movieGrid = this.state.movieList.map((movie,index)=>{
            return (
                <div className="col s3" key={index}>
                    
                    <img src={`${imageUrl}${movie.poster_path}`} />
                    
                </div>
            )
        })

        return(
            <div className="row">
                {movieGrid}
            </div>
        )
    }
}

export default Home



