import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GameID } from '../Interface/Interface';




export default function Details() {
    const [idNum, setid] = useState<string | null>('')
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState<GameID>();


    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id: sessionStorage.getItem("gameID") },
        headers: {
            'X-RapidAPI-Key': 'c1ae94f907mshf8257a1156eddc4p1bf39bjsnb29975388a0f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useEffect(() => {

        console.log('det   set' + idNum);

        getApiData(options)
        setLoading(true)
    }, [])



    async function getApiData(options: any) {
        const { data } = await axios.request(options);
        setLoading(true);
        const gamedResponse = data;
        setGames(gamedResponse);
        setLoading(false)

    }


    return (<> {loading ? <div className='d-flex justify-content-center align-items-center vh-100 '><div className="lds-ripple"><div></div><div></div></div></div> :
        <div className="row py-4">
            <div className="col-md-4 details">
                <div>
                    <img src={games?.thumbnail} alt="" className='w-100 ' />
                </div>
                <div>
                <a href={games?.game_url } target="_blank" >    <button className=' btn bg-info m-2 '> free</button> </a>
                    <a href={games?.game_url } target="_blank" >  <button className=' btn m-2 w-75' > Play Now <i className="fa-solid fa-arrow-right-from-bracket"></i> </button> </a> 

                </div>
            </div>
            <div className="col-md-8">
                <h3 className='fw-bold py-1 fw-bold'>{games?.title}</h3>
                <h5 className='px-2 fw-bold py-1  '> About {games?.title}</h5>
                <p className='px-4'> {games?.description}</p>
                <h5 className='px-2 fw-bold'> Minimum System Requirements</h5>

                {games?.minimum_system_requirements ? <ul className='list-unstyled px-4'>
                    <li> graphics : {games?.minimum_system_requirements.graphics}</li>
                    <li> memory  : {games?.minimum_system_requirements.memory}</li>
                    <li> processor  : {games?.minimum_system_requirements.processor}</li>
                    <li> os  : {games?.minimum_system_requirements.os}</li>
                    <li> storage   : {games?.minimum_system_requirements.storage}</li>




                </ul> : ''}
                {games?.screenshots.length == 0 ? '' : <div>
                    <h5 className='px-2 fw-bold' >A.V.A Global Screenshots</h5>
                    <div className='position-relative py-2 px-4 '>
                        <div className='slider w-100 m-3'>
                            <div className="wrapper">
                                { games?.screenshots.map( (el ,index )=><img src= { el.image }alt="" className='w-100' key={index}/> )}
                               
                            </div>
                        </div>
                    </div>
                </div>}


                <h5 className='fw-bold'>
                    <div className="row g-3">
                        <div className="col-md-4 info px-3 ">
                            <samp className='d-flex fw-bolder text-light py-2'>title</samp>
                            <small className=''>{games?.title}</small>

                        </div>
                        <div className="col-md-4 info px-3 ">
                            <samp className='d-flex fw-bolder text-light py-2'>Developer</samp>
                            <small className=''>{games?.developer}</small>

                        </div>
                        <div className="col-md-4 info px-3">
                            <samp className='d-flex fw-bolder text-light py-2'>Publisher</samp>
                            <small className=''>{games?.publisher}</small>

                        </div>
                        <div className="col-md-4 info px-3">
                            <samp className='d-flex fw-bolder text-light py-2'>Release Date</samp>
                            <>{games?.release_date}</>



                        </div>
                        <div className="col-md-4 info px-3">
                            <samp className='d-flex fw-bolder text-light py-2'>Genre</samp>
                            <small className=''>{games?.genre}</small>

                        </div>
                        <div className="col-md-4 info px-3">
                            <samp className='d-flex fw-bolder text-light py-2'>Platform</samp>
                            <small className=''>{games?.platform}</small>

                        </div>
                    </div>
                </h5>
            </div>

        </div>}

    </>
    )
}
