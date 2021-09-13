/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import './asoFirstPageContent.css';
import AsoProductBox from '../asoUtilities/asoProductBox/asoProductBox';


const AsoFirstPageContent = (props) => {


    const [asoCurrentBanner, setTimer] = React.useState(2);
        const id = React.useRef(null);

        const clear=()=>{
            window.clearTimeout(id.useRef)
            
        }

        React.useEffect(()=>{
            id.current=window.setTimeout(()=>{
                if(asoCurrentBanner === 0){
                    setTimer((asoCurrentBanner)=>asoCurrentBanner = 1)
                } else if(asoCurrentBanner === 1){
                    setTimer((asoCurrentBanner)=>asoCurrentBanner = 2)
                }else if(asoCurrentBanner === 2) {
                    setTimer((asoCurrentBanner)=>asoCurrentBanner = 0)
                }
            },5000)
            return ()=> clear();
        },[asoCurrentBanner])

        React.useEffect(()=>{
            if(asoCurrentBanner===0){
            clear()
            }
        },[asoCurrentBanner])

        const asoProductSample = props.products[11101];

    return ( 
        <div className="asoFirstPageContent">
            <div className="asoMainBanner">
                {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="asoFirstBannerImage asoBannerImage" style={{display: asoCurrentBanner === 0 ? 'block' : 'none' ,backgroundImage: "URL('https://images.unsplash.com/photo-1588471980726-8346cb477a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80')"}} >
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
                <div className="asoSecondBannerImage asoBannerImage" style={{display: asoCurrentBanner === 1 ? 'block' : 'none' ,backgroundImage: "URL('https://images.unsplash.com/photo-1606654810639-76ed5d12737b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}} >
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
                <div className="asoThirdBannerImage asoBannerImage" style={{display: asoCurrentBanner === 2 ? 'block' : 'none' ,backgroundImage: "URL('https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80')"}} >
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
            <AsoProductBox imageAdrs={asoProductSample.mainPic} productTitle={asoProductSample.ProductName} category={asoProductSample.category} price={asoProductSample.currentPrice} fullPrice={asoProductSample.fullPrice}/>
        </div>
     );
}
 
export default AsoFirstPageContent;