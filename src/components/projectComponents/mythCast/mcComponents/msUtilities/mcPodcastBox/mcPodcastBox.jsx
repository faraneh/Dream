import React, { useState, useRef, useEffect } from 'react';
import './mcPodcastBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCalendarAlt, faForward, faListUl, faPause, faPlay, faRecordVinyl, faStopwatch } from '@fortawesome/free-solid-svg-icons';

const McPodcastBox = (props) => {
    //state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0)

    //Refs
    const mcAudioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    //use effects
    useEffect(() => {
        const mcSeconds = Math.floor(mcAudioPlayer.current.duration)
        setDuration(mcSeconds);
        progressBar.current.max = mcSeconds;
    }, [mcAudioPlayer?.current?.loadedmetadata, mcAudioPlayer?.current?.readyState]);


    const mcCalculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }


    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if(!prevValue) { 
            mcAudioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            mcAudioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = mcAudioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }
    
    const changeRange = () => {
        mcAudioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 30);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 30);
        changeRange();
    }

    const backgroundImage = props.image;


    return ( 
    <div className="mcPodcastBox">
        <div className="mcEpisodeBox" style={{display: 'flex', flexDirection: 'row'}}>
            <div className="mcEpisodeBoxLeft" style={{backgroundImage:backgroundImage}} />
            <div className="mcEpisodeBoxRight">
                <div className="mcEpisodeBoxRightTopDetail" style={{ flexDirection: 'row', width: '95%', height: '1.1rem', marginTop: 10}}>
                    <div className="mcEpisodeBoxRightTopDetailOne" style={{display: 'flex', flexDirection: 'row', height: '1.1rem', marginRight: 20, marginTop: 5, color: 'gray'}} ><FontAwesomeIcon icon={faCalendarAlt} /><p style={{margin: '0 5px', fontSize: '0.8rem', lineHeight: '1.2rem'}}>{props.date}</p></div>
                    <div className="mcEpisodeBoxRightTopDetailTwo" style={{display: 'flex', flexDirection: 'row', height: '1.1rem', marginRight: 20, marginTop: 5, color: 'gray'}} ><FontAwesomeIcon icon={faListUl} /><p style={{margin: '0 5px', fontSize: '0.8rem', lineHeight: '1.2rem'}}>{props.list}</p></div>
                    <div className="mcEpisodeBoxRightTopDetailThree" style={{display: 'flex', flexDirection: 'row', height: '1.1rem', marginRight: 20, marginTop: 5, color: 'gray'}} ><FontAwesomeIcon icon={faStopwatch} /><p style={{margin: '0 5px', fontSize: '0.8rem', lineHeight: '1.2rem'}}>{mcCalculateTime(duration)}</p></div>
                    <div className="mcEpisodeBoxRightTopDetailFour" style={{display: 'flex', flexDirection: 'row', height: '1.1rem', marginRight: 20, marginTop: 5, color: 'gray'}} ><FontAwesomeIcon icon={faRecordVinyl} /><p style={{margin: '0 5px', fontSize: '0.8rem', lineHeight: '1.2rem'}}>{props.size}</p></div>
                </div>
                <h2 className="mcEpisodeBoxRightTitle">{props.title}</h2>
                <p className={'mcEpisodeBoxRightDesc'}>{props.desc}</p>
                <div className="mcPlayer" style={{margin: '15px 0', height: '2rem', width: '95%'}}>

                    <div className="mcPlayingBox">

                        <div className="mcPlayingControls">
                            <audio ref={mcAudioPlayer} src={props.url} preload="metadata"></audio>
                            <button className={'mcForwardBackward'} onClick={backThirty} ><FontAwesomeIcon icon={faBackward} /></button>
                            <button className={'mcPlayPause'} onClick={togglePlayPause}> { isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} /> } </button>
                            <button className={'mcForwardBackward'} onClick={forwardThirty} ><FontAwesomeIcon icon={faForward} /></button>
                        </div>

                        <div className="mcPlayingBar">
                        {/* current time */}
                        <div className={'mcCurrentTime'}><p>{mcCalculateTime(currentTime)}</p></div>
                        {/* progress bar */}
                        <div>
                            <input className={'progressBar'} type="range" defaultValue="0" ref={progressBar} onChange={changeRange} ></input>
                        </div>
                        {/* duration */}
                        <div className={'mcDuration'}><p>{(duration && !isNaN(duration)) ? mcCalculateTime(duration) : "0:00"}</p></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
     );
}
 
export default McPodcastBox;