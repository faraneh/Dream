/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import './asoFirstPageContent.css';
import AsoProductBox from '../asoUtilities/asoProductBox/asoProductBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faHammer, faMobile, faTags, faTruck } from '@fortawesome/free-solid-svg-icons';
import AsoFooter from '../../asoComponents/asoFooter/asoFooter';
import AsoNavbar from '../../asoContainers/asoNavbar/asoNavbar';
// import reactDom from 'react-dom';


class AsoFirstPageContent extends React.Component {

    state = {
        asoCurrentBanner : 0,
      }


    componentDidMount() {
        this.interval = setInterval(() => this.asoChangeCurrentBanner(), 5000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    asoChangeCurrentBanner = () => {
        if (this.state.asoCurrentBanner === 0) { 
            this.setState({ asoCurrentBanner : 1});
        } else if (this.state.asoCurrentBanner === 1) { 
            this.setState({ asoCurrentBanner : 2});
        } else if (this.state.asoCurrentBanner === 2) { 
            this.setState({ asoCurrentBanner : 0});
        } 
    }





    render () {


        const asoProductSample = Object.values(this.props.products);

        const asoFirstRef =  React.createRef();
        const handleScroll = (direction) => { 
            if (direction === 'left') {
                return asoFirstRef ? (asoFirstRef.current.scrollLeft -=400) : null;
            } else {
                return asoFirstRef ? (asoFirstRef.current.scrollLeft +=400) : null;
            }
        }

        const asoFirstRefTwo =  React.createRef();
        const handleScrollTwo = (direction) => { 
            if (direction === 'left') {
                return asoFirstRefTwo ? (asoFirstRefTwo.current.scrollLeft -=400) : null;
            } else {
                return asoFirstRefTwo ? (asoFirstRefTwo.current.scrollLeft +=400) : null;
            }
        }


        // console.log(asoProductSample);
   

    return (
        <React.Fragment>
            <AsoNavbar 
                brands={this.props.brands} 
                rooms={this.props.rooms} 
                asoAdList={this.props.asoAdList}
                asoPageChange={this.props.asoPageChange}
                asoGoToHomePage={this.props.asoGoToHomePage} />
            <div className="asoFirstPageContent">
                <div className="asoMainBanner">
                    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className="asoFirstBannerImage asoBannerImage" style={{display: this.state.asoCurrentBanner === 0 ? 'block' : 'none' ,backgroundImage: "URL('https://images.unsplash.com/photo-1588471980726-8346cb477a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80')"}} >
                        <div className="asoBannerDot asoFirstBannerImgOneOne">
                            <div className="asoBannerProdectBox asoBannerProdectBoxOneOne">
                                <img src ="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0990301_pe819192_s5.jpg?f=xl" alt="productInfo" />
                                <p>CLICK ME</p>
                            </div>
                        </div>
                        <div className="asoBannerDot asoFirstBannerImgOneTwo">
                            <div className="asoBannerProdectBox asoBannerProdectBoxOnetwo">
                                <img src ="https://www.ikea.com/ca/en/images/products/soederhamn-1-seat-section-finnsta-turquoise__0406303_pe583241_s5.jpg?f=xl" alt="productInfo" />
                                <p>CLICK ME</p>
                            </div>
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className="asoSecondBannerImage asoBannerImage" style={{display: this.state.asoCurrentBanner === 1 ? 'block' : 'none' ,backgroundImage: "URL('https://images.unsplash.com/photo-1606654810639-76ed5d12737b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}} >
                        <div className="asoBannerDot asoFirstBannerImgTwoOne">
                            <div className="asoBannerProdectBox asoBannerProdectBoxTwoOne">
                                <img src ="https://www.ikea.com/ca/en/images/products/finnala-sofa-with-chaise-gunnared-medium-gray__0778310_pe758883_s5.jpg?f=xxs" alt="productInfo" />
                                <p>CLICK ME</p>
                            </div>
                        </div>
                        <div className="asoBannerDot asoFirstBannerImgTwoTwo">
                            <div className="asoBannerProdectBox asoBannerProdectBoxTwoTwo">
                                <img src ="https://www.ikea.com/ca/en/images/products/omtaenksam-armchair-gunnared-dark-gray__0634104_pe696303_s5.jpg?f=xl" alt="productInfo" />
                                <p>CLICK ME</p>
                            </div>
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className="asoThirdBannerImage asoBannerImage" style={{display: this.state.asoCurrentBanner === 2 ? 'block' : 'none' ,backgroundImage: "URL('https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80')"}} >
                    <div className="asoBannerDot asoFirstBannerImgThreeOne">
                            <div className="asoBannerProdectBox asoBannerProdectBoxOneOne">
                                <img src ="https://www.ikea.com/ca/en/images/products/besta-wall-mounted-cabinet-combination-walnut-effect-light-gray-lappviken-walnut-effect-light-gray__0719261_pe731965_s5.jpg?f=xl" alt="productInfo" />
                                <p>CLICK ME</p>
                            </div>
                        </div>
                        <div className="asoBannerDot asoFirstBannerImgThreeTwo">
                            <div className="asoBannerProdectBox asoBannerProdectBoxOneOne">
                                <img src ="https://www.ikea.com/ca/en/images/products/fanbyn-chair-gray-indoor-outdoor__0747677_pe744683_s5.jpg?f=xl" alt="productInfo" />
                                <p>CLICK ME</p>
                            </div>
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoSubBannerText">
                    <h2 className={"asoSubBannerText"}>Get inspired by shopping our carefully curated selection of beautiful and <br />intentionally designed pieces that hold their own over time.</h2>
                </div>
                <div className="asoSubBannerThreeBoxes">
                    <div className="asoSubBannerBox asoSubBannerBoxOne" style={{backgroundImage: 'URL("https://images.unsplash.com/photo-1618211535056-e678b388af32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")'}}>
                        <h2>SS-21</h2>
                        <p>Shop All</p>
                    </div>
                    <div className="asoSubBannerBox asoSubBannerBoxTwo" style={{backgroundImage: 'URL("https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")'}}>
                        <h2>FA-21</h2>
                        <p>Shop All</p>
                    </div>
                    <div className="asoSubBannerBox asoSubBannerBoxThree" style={{backgroundImage: 'URL("https://images.unsplash.com/photo-1615529182904-14819c35db37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")'}}>
                        <h2>SS-22</h2>
                        <p>Shop All</p>
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2 className={"asoSubBannerText"} style={{margin:'80px 0px 50px 0px'}}>Brand New Selections</h2>
                <div className="asoMainPageBrandNewSelections">
                    <button className="asoMainPageArrow" onClick={() => handleScroll('left')} ><FontAwesomeIcon icon={faChevronLeft} size="2x" style={{color: 'white', cursor: 'pointer'}} /></button>
                    <div className="asoMainPageBrandNewSelectionsCenter" ref={asoFirstRef}>
                        {asoProductSample.map((el, index) => <AsoProductBox key={index} productIndex={index} imageAdrs={el.mainPic} productName={el.productName} category={el.category} price={el.currentPrice} fullPrice={el.fullPrice} asoGoToProductPage={this.props.asoGoToProductPage} /> )}
                    </div>
                    <button className="asoMainPageArrow" onClick={() => handleScroll('right')} ><FontAwesomeIcon icon={faChevronRight} size="2x" style={{color: 'white', cursor: 'pointer'}} /></button>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoFifthBanner" style={{backgroundImage: 'URL("https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80")'}}>
                    <h2 className="asoFifthBannerTitle">New Collection, All <span style={{color: 'orange', textShadow:'2px 2px 5px grey'}}>Lights</span></h2>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2 className={"asoSubBannerText"} style={{margin:'80px 0px 50px 0px'}}>Top Collections</h2>
                <div className="asoMainPageBrandNewSelections">
                    <button className="asoMainPageArrow" onClick={() => handleScrollTwo('left')} ><FontAwesomeIcon icon={faChevronLeft} size="2x" style={{color: 'white', cursor: 'pointer'}} /></button>
                    <div className="asoMainPageBrandNewSelectionsCenter" ref={asoFirstRefTwo}>
                        {asoProductSample.map((el, index) => <AsoProductBox key={index} productIndex={index} imageAdrs={el.mainPic} productName={el.productName} category={el.category} price={el.currentPrice} fullPrice={el.fullPrice} asoGoToProductPage={this.props.asoGoToProductPage} /> )}
                    </div>
                    <button className="asoMainPageArrow" onClick={() => handleScrollTwo('right')} ><FontAwesomeIcon icon={faChevronRight} size="2x" style={{color: 'white', cursor: 'pointer'}} /></button>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <h2 className={"asoSubBannerText"} style={{margin:'80px 0px 50px 0px'}}>Our Recognized Designers</h2>
                <div className="asoRecognizedDesigners">
                    <div className="asoRecognizedDesignersLeft" style={{textAlign: 'left', backgroundImage: "URL('https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80')"}}>
                        <div className="asoRecognizedDesignersLeftText">
                            <p>Explore the Brand</p>
                            <h3>Ferm Living</h3>
                            <p><u>Shop More</u><FontAwesomeIcon icon={faChevronRight} style={{marginLeft: 5, padding: 3,color: 'white', cursor: 'pointer', transform: 'translateY(3px'}} /></p>
                        </div>
                    </div>
                    <div className="asoRecognizedDesignersRight">
                    <div className="asoMainPageBrandNewSelectionsCenterZ">
                        {asoProductSample.slice(0,9).map((el, index) => <AsoProductBox key={index} productIndex={index} imageAdrs={el.mainPic} productName={el.productName} category={el.category} price={el.currentPrice} fullPrice={el.fullPrice} asoGoToProductPage={this.props.asoGoToProductPage} /> )}
                    </div>
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoMainPageBrands" >
                    <h5>Drivemo</h5>
                    <h5>Kimini</h5>
                    <h5>Ravada</h5>
                    <h5>Zipp</h5>
                    <h5>Notrichi</h5>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoSixthBanners">
                    <div className="asoSixthBannersLeft" style={{backgroundImage: "URL('https://images.unsplash.com/photo-1595514535711-c31bb982d8b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80')"}}>
                        <p style={{fontSize: '2rem', fontWeight: '600', margin: 0}}>RHORNA from Drivemo</p>
                        {/* <p><u>Shop More</u><FontAwesomeIcon icon={faChevronRight} style={{color: 'white', cursor: 'pointer', transform: 'translateY(3px'}} /></p> */}
                        <button className="asoSixthBannersLeftBtn">Shop More</button>
                    </div>
                    <div className="asoasoSixthBannersRight">
                        <div className="asoasoSixthBannersRightOne" style={{backgroundImage: "URL('https://images.unsplash.com/photo-1595514535431-1243b02c3b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80')"}} />
                        <div className="asoasoSixthBannersRightTwo" style={{backgroundImage: "URL('https://images.unsplash.com/photo-1595514535215-8a093483610a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80')"}} />
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoShopBy">
                    <div className="asoShopByCategory">
                        <div className="asoShopByCategoryOne" style={{backgroundImage: 'URL("https://www.ikea.com/ca/en/images/products/koarp-armchair-gunnared-beige-black__0522280_pe643185_s5.jpg?f=xl")'}} />
                        <div className="asoShopByCategoryTwo">
                            <ul>
                                <li>Chairs</li>
                                <li>Tables</li>
                                <li>Sofas</li>
                                <li>Desks</li>
                                <li>Shelvings</li>
                                <p><u>See More</u><FontAwesomeIcon icon={faChevronRight} style={{marginLeft: 5, padding: 3,color: '#ccc', cursor: 'pointer', transform: 'translateY(3px'}} /></p>
                            </ul>
                        </div>
                    </div>
                    <div className="asoShopByBrand">
                        <div className="asoShopByBrandOne" style={{backgroundImage: 'URL("https://www.ikea.com/ca/en/images/products/lommarp-cabinet-dark-blue-green__0739327_pe741692_s5.jpg?f=xl")'}} />
                        <div className="asoShopByBrandTwo">
                            <ul>
                                <li>Menu</li>
                                <li>Muuto</li>
                                <li>Ferm Living</li>
                                <li>By Lessen</li>
                                <li>AMP</li>
                                <p><u>See More</u><FontAwesomeIcon icon={faChevronRight} style={{marginLeft: 5, padding: 3,color: '#ccc', cursor: 'pointer', transform: 'translateY(3px'}} /></p>
                            </ul>
                        </div>
                    </div>
                    <div className="asoShopByCollection">
                        <div className="asoShopByCollectionOne" style={{backgroundImage: 'URL("https://www.ikea.com/ca/en/images/products/invaendig-artificial-terrarium-dome__0817882_pe774208_s5.jpg?f=xl")'}} />
                        <div className="asoShopByCollectionTwo">
                            <ul>
                                <li>Bedroom</li>
                                <li>Living Room</li>
                                <li>Dining Room</li>
                                <li>Office</li>
                                <li>Lighting</li>
                                <p><u>See More</u><FontAwesomeIcon icon={faChevronRight} style={{marginLeft: 5, padding: 3,color: '#ccc', cursor: 'pointer', transform: 'translateY(3px'}} /></p>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoMainPageSubscribe">
                    <h4>Give 20%, Get $20!</h4>
                    <p>Join our newsletter today and receive 20% off for a friend and $20 for yourself!</p>
                    <input type="text" placeholder="Email address" /> <button className="asoSubsBtn">Sign up</button>
                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoMainPageColoredBtm">
                    <ul>
                        <li style={{listStyle: 'none'}}>
                            <FontAwesomeIcon icon={faHammer} size="3x" />
                            <p style={{fontSize: '1.2rem'}}>Made to Order</p>
                            <p style={{fontWeight: 300}}>Learn more about custom orders.</p>
                            <p style={{fontWeight: 500}}><u>Learn More</u></p>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <FontAwesomeIcon icon={faMobile} size="3x" />
                            <p style={{fontSize: '1.2rem'}}>Return Policy</p>
                            <p style={{fontWeight: 300}}>You have 30 days for returns.</p>
                            <p style={{fontWeight: 500}}><u>Learn More</u></p>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <FontAwesomeIcon icon={faTruck} size="3x" />
                            <p style={{fontSize: '1.2rem'}}>Contactless Delivery</p>
                            <p style={{fontWeight: 300}}>Now offering a safer way to shop.</p>
                            <p style={{fontWeight: 500}}><u>Learn More</u></p>
                        </li>
                        <li style={{listStyle: 'none'}}>
                            <FontAwesomeIcon icon={faTags} size="3x" />
                            <p style={{fontSize: '1.2rem'}}>NEW: Price Matching</p>
                            <p style={{fontWeight: 300}}>See something you like eslewhere?</p>
                            <p style={{fontWeight: 500}}><u>Learn More</u></p>
                        </li>
                    </ul>
                </div>
            </div>

            <AsoFooter />
            </React.Fragment>
        );
    }
}
 
export default AsoFirstPageContent;