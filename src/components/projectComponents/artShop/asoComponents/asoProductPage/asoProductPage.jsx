import React from 'react';
import './asoProductPage.css';
import AsoNavbar from '../../asoContainers/asoNavbar/asoNavbar';
import AsoFooter from '../asoFooter/asoFooter';
import AsoProductBox from '../asoUtilities/asoProductBox/asoProductBox';


const asoProductPage = (props) => {

    let asoImageFrame = props.asoImageFrame;
    const asoProductSample = Object.values(props.products);

    return ( 
        <div className="asoProductPage">
            <AsoNavbar 
                brands={props.brands} 
                rooms={props.rooms} 
                asoAdList={props.asoAdList}
                asoPageChange={props.asoPageChange}
                asoGoToHomePage={props.asoGoToHomePage} />
            <div className="asoProductPageBody">
                <div className="asoProductPageBodyTop">
                    <div className="asoProductPageBodyImages">
                        <img src={asoImageFrame} className={'asoMainProductImageFrame'} alt={'mainImage'} />
                        <div className="asoSideProductImages">
                            <img className={'asoProductSideImageSmall'} src={props.product[1].mainPic} style={{display: props.product[1].mainPic ? 'flex' : 'none'}} alt={'product'} onClick={() => props.asoChangeProductMainPic('mainPic')} />
                            <img className={'asoProductSideImageSmall'} src={props.product[1].imageTwo} style={{display: props.product[1].imageTwo ? 'flex' : 'none'}} alt={'product'} onClick={() => props.asoChangeProductMainPic('imageTwo')} />
                            <img className={'asoProductSideImageSmall'} src={props.product[1].imageThree} style={{display: props.product[1].imageThree ? 'flex' : 'none'}} alt={'product'} onClick={() => props.asoChangeProductMainPic('imageThree')} />
                            <img className={'asoProductSideImageSmall'} src={props.product[1].imageFour} style={{display: props.product[1].imageFour ? 'flex' : 'none'}} alt={'product'} onClick={() => props.asoChangeProductMainPic('imageFour')} />
                        </div>
                    </div>
                    <div className="asoProductPageBodyMainDesc">
                        <h1 className={'asoProductPageBodyMainDescH1'}>{props.product[1].productName}</h1>
                        <p className={'asoProductPageBodyMainDescP'}>Category : {props.product[1].category}</p>
                        <p className={'asoProductPageBodyMainDescP'} style={{marginTop: '1rem'}}>Color : {props.product[1].colorCode}</p>
                        <h4 className={'asoProductPageBodyMainDescH4'}><span style={{fontWeight: '400', color: 'grey'}}>Price :</span> {props.product[1].fullPrice !== '0' ? <span style={{color: 'grey', marginRight: 10, fontWeight: '400'}}><strike>${props.product[1].fullPrice}</strike></span>  : '' }  <span style={{fontSize: '1.2rem'}}>${props.product[1].currentPrice}</span></h4>
                        <form>
                            <button className={'asoDecProduct'} onClick={props.asoCountChange} value={'-'}>-</button>
                            <input className={'asoProductCount'} value={props.asoProductCount} readOnly></input>
                            <button className={'asoAddProduct'} onClick={props.asoCountChange} value={'+'}>+</button><br />
                            <button tyle="submit" className={'asoBuyNow'}>Add to Card</button>
                        </form>
                    </div>
                </div>
                <div className="asoProductPageMiddle">
                    <h2 className={"asoSubBannerText"} style={{margin:'20px 0px 50px 0px'}}>Description</h2>
                    <p style={{width: '85%', margin: 'auto', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>{props.product[1].desc}</p>

                    <h2 className={"asoSubBannerText"} style={{margin:'100px 0px 30px 0px'}}>Similar Items</h2>
                    <div className="asoMainPageBrandNewSelectionsCenterZ" style={{maxWidth: '90%', width: '90%',height: 400,margin: 'auto', overflow: 'scroll'}}>
                        {asoProductSample.map((el, index) => <AsoProductBox key={index} productIndex={index} imageAdrs={el.mainPic} productName={el.productName} category={el.category} price={el.currentPrice} fullPrice={el.fullPrice} asoGoToProductPage={props.asoGoToProductPage} /> )}
                    </div>

                    <div className="asoMiddlePartPolicy">
                        <h2 className={"asoSubBannerText"} style={{margin:'80px 0px 50px 0px'}}>Extra Information</h2>
                        <ul style={{textAlign: 'center', maxWidth: '80%', margin: 'auto'}}>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aut, molestias eligendi, ratione ipsa sint exercitationem cumque minus totam voluptatum doloribus iure nostrum aliquid vitae soluta earum doloremque amet nesciunt officia sit quidem, praesentium laudantium blanditiis atque! Voluptatibus beatae illo saepe quo amet praesentium recusandae unde, suscipit, eius laudantium obcaecati?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nisi neque ipsam, explicabo ex minus eveniet quae animi architecto quibusdam vero consectetur repellat nam necessitatibus accusantium aliquid, veritatis deleniti omnis.</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor asperiores sit culpa dolore iusto harum ducimus voluptate. Reiciendis rem voluptas vitae doloribus consequatur possimus pariatur accusamus provident quam animi, hic ipsa dicta quidem at commodi voluptates est impedit explicabo recusandae aperiam! Natus ea eos velit necessitatibus inventore corrupti perferendis facilis ratione, nostrum, error soluta magnam doloribus quidem amet commodi. Assumenda in neque a, beatae blanditiis laboriosam maiores voluptates, harum alias aspernatur expedita ea ipsa odio earum odit sint temporibus?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perspiciatis?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nisi neque ipsam, explicabo ex minus eveniet quae animi architecto quibusdam vero consectetur repellat nam necessitatibus accusantium aliquid, veritatis deleniti omnis.</li>
                        </ul>
                    </div>

                    <h2 className={"asoSubBannerText"} style={{margin:'100px 0px 30px 0px'}}>Recomended Items</h2>
                    <div className="asoMainPageBrandNewSelectionsCenterZ" style={{maxWidth: '90%', width: '90%',height: 400,margin: 'auto', overflow: 'scroll'}}>
                        {asoProductSample.map((el, index) => <AsoProductBox key={index} productIndex={index} imageAdrs={el.mainPic} productName={el.productName} category={el.category} price={el.currentPrice} fullPrice={el.fullPrice} asoGoToProductPage={props.asoGoToProductPage} /> )}
                    </div>

                    <h2 className={"asoSubBannerText"} style={{margin:'100px 0px 30px 0px'}}>What to buy with</h2>
                    <div className="asoMainPageBrandNewSelectionsCenterZ" style={{maxWidth: '90%', width: '90%',height: 400,margin: 'auto', overflow: 'scroll'}}>
                        {asoProductSample.map((el, index) => <AsoProductBox key={index} productIndex={index} imageAdrs={el.mainPic} productName={el.productName} category={el.category} price={el.currentPrice} fullPrice={el.fullPrice} asoGoToProductPage={props.asoGoToProductPage} /> )}
                    </div>

                    <div className="asoMiddlePartPolicy">
                        <h2 className={"asoSubBannerText"} style={{margin:'80px 0px 50px 0px'}}>Shipping and Return</h2>
                        <ul style={{textAlign: 'center', maxWidth: '80%', margin: 'auto'}}>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aut, molestias eligendi, ratione ipsa sint exercitationem cumque minus totam voluptatum doloribus iure nostrum aliquid vitae soluta earum doloremque amet nesciunt officia sit quidem, praesentium laudantium blanditiis atque! Voluptatibus beatae illo saepe quo amet praesentium recusandae unde, suscipit, eius laudantium obcaecati?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nisi neque ipsam, explicabo ex minus eveniet quae animi architecto quibusdam vero consectetur repellat nam necessitatibus accusantium aliquid, veritatis deleniti omnis.</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor asperiores sit culpa dolore iusto harum ducimus voluptate. Reiciendis rem voluptas vitae doloribus consequatur possimus pariatur accusamus provident quam animi, hic ipsa dicta quidem at commodi voluptates est impedit explicabo recusandae aperiam! Natus ea eos velit necessitatibus inventore corrupti perferendis facilis ratione, nostrum, error soluta magnam doloribus quidem amet commodi. Assumenda in neque a, beatae blanditiis laboriosam maiores voluptates, harum alias aspernatur expedita ea ipsa odio earum odit sint temporibus?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, perspiciatis?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nisi neque ipsam, explicabo ex minus eveniet quae animi architecto quibusdam vero consectetur repellat nam necessitatibus accusantium aliquid, veritatis deleniti omnis.</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor asperiores sit culpa dolore iusto harum ducimus voluptate. Reiciendis rem voluptas vitae doloribus consequatur possimus pariatur accusamus provident quam animi, hic ipsa dicta quidem at commodi voluptates est impedit explicabo recusandae aperiam! Natus ea eos velit necessitatibus inventore corrupti perferendis facilis ratione, nostrum, error soluta magnam doloribus quidem amet commodi. Assumenda in neque a, beatae blanditiis laboriosam maiores voluptates, harum alias aspernatur expedita ea ipsa odio earum odit sint temporibus?</li>
                            <li className={'asoProductPageBodyMainDescP'} style={{width: '95%', fontSize: '1.2rem', fontWeight: '200', lineHeight: '1.5rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor asperiores sit culpa dolore iusto harum ducimus voluptate. Reiciendis rem voluptas vitae doloribus consequatur possimus pariatur accusamus provident quam animi, hic ipsa dicta quidem at commodi voluptates est impedit explicabo recusandae aperiam! Natus ea eos velit necessitatibus inventore corrupti perferendis facilis ratione, nostrum, error soluta magnam doloribus quidem amet commodi. Assumenda in neque a, beatae blanditiis laboriosam maiores voluptates, harum alias aspernatur expedita ea ipsa odio earum odit sint temporibus?</li>
                        </ul>
                    </div>

                </div>
            </div>

            <AsoFooter />
        </div>
     );
}
 
export default asoProductPage;