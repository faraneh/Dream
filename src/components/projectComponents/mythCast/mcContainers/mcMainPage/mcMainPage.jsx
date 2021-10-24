import React, { Component } from 'react';
import './mcMainPage.css';
import McNavbar from '../../mcComponents/mcNavbar/mcNavbar';
import McPodcastBox from '../../mcComponents/msUtilities/mcPodcastBox/mcPodcastBox';
import McFooter from '../../mcComponents/mcFooter/mcFooter';
import Rectangle2 from '../../assets/images/Rectangle2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'


class McMainPage extends Component {
    state = { 
        podcasts : {
            One: { 
                name: "Alexandre the Great's great Victory",
                date: "Oct,30 1975",
                list: 'Greek',
                size: '1.98Mb',
                Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia fugit ducimus odit deserunt quod iusto error facilis tempora iste',
                URL: 'http://free-loops.com/data/mp3/a2/55/47c517c54278eab41d7840573668.mp3',
                image: "URL('https://images.unsplash.com/photo-1575487283542-d1fd6f1b3d6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')",
            },
            Two: { 
                name: "Nefertiti",
                date: "Oct,15 1975",
                list: 'Egypt',
                size: '1.98Mb',
                Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia fugit ducimus odit deserunt quod iusto error , tenetur praesentium odio consequuntur velit numquam.',
                URL: 'http://free-loops.com/data/mp3/a2/55/47c517c54278eab41d7840573668.mp3',
                image: "URL('https://images.unsplash.com/photo-1630255451855-e511fc4c8eac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')",
            },
            Three: { 
                name: "Roman Weapons",
                date: "Oct,15 1975",
                list: 'Roman',
                size: '1.98Mb',
                Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia fugit ducimus odit deserunt quod iusto error facilis tempora iste, tenetur praesentium odio consequuntur velit numquam.',
                URL: 'http://free-loops.com/data/mp3/a2/55/47c517c54278eab41d7840573668.mp3',
                image: "URL('https://images.unsplash.com/photo-1561362503-ce2fe16a2d79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')",
            },
            Four: { 
                name: "Roman Camps in Britain",
                date: "Oct,15 1975",
                list: 'Roman',
                size: '1.98Mb',
                Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia fugit , tenetur praesentium odio consequuntur velit numquam.',
                URL: 'http://free-loops.com/data/mp3/a2/55/47c517c54278eab41d7840573668.mp3',
                image: "URL('https://images.unsplash.com/flagged/photo-1567461319575-c3c7ae744b50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')",
            },
            Five: { 
                name: "Lost Tomb of Cleopatra",
                date: "Oct,15 1975",
                list: 'Egypt',
                size: '1.98Mb',
                Desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia fugit ducimus odit deserunt quod iusto error facilis tempora praesentium odio consequuntur velit numquam.',
                URL: 'http://free-loops.com/data/mp3/a2/55/47c517c54278eab41d7840573668.mp3',
                image: "URL('https://images.unsplash.com/photo-1626622036405-66f0d91bf4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80')",
            }
        }
    }


    render() { 

        const podcasts = Object.entries(this.state.podcasts);
        const podcastList = [];
        podcasts.map(el => podcastList.push(el[1]));

        return (
            <div className={'McMainPage'}>
                <McNavbar />
                <div className="McMainPageTop">
                    <div className="mcChannel">
                        <div className="mcChannelLeft">
                            <div className="mcmcChannelImg"></div>
                        </div>
                        <div className="mcChannelRight">
                            <div className="mcmcChannelName"><h1>MythCast</h1></div>
                            <div className="mcmcChannelDesc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate quia et aspernatur laudantium harum ipsam voluptatem illo doloribus vel!</p></div>
                            <button>Subscribe</button>
                            <div className="mcChannelLinks">
                                <p>Follow us on:</p>
                                <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{marginRight : 15}} />
                                <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={{marginRight : 15}} />
                                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Rectangle2} alt={'bckgrnd'} style={{width: '105%', margin: 0, transform: 'translateY(30px)'}} className="McMainPageBckgrndEffect" />
                <div className="McMainPageBody">
                <h3 className={'mcListenNow'} style={{textAlign: 'left', margin: '5px auto 20px', fontWeight: '200', fontSize: '1.3rem'}}>Listen now:</h3>
                    {podcastList.map((el, index) => <McPodcastBox 
                        title={el.name} 
                        date={el.date}
                        list={el.list}
                        size={el.size}
                        desc={el.Desc}
                        url={el.URL}
                        image={el.image}
                        key={index} />)}
                    <button className={'SeeMore'}>See More</button>
                </div>
                <img src={Rectangle2} alt={'bckgrnd'} style={{width: '105%', margin: 0, transform: 'translateY(-40px) rotate(180deg)'}} className="McMainPageBckgrndEffect" />
                <McFooter />
            </div>
        );
    }
}
 
export default McMainPage;
