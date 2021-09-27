import React, { Component } from 'react';
import './asoNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingBag, faSearch, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import AsoNavbarAdBox from './asoNavbarAdBox/asoNavbarAdBox';
// import { Link } from "react-router-dom";



class asoNavbar extends Component {
    constructor (props) {
        super(props);

        this.wrapperRef = React.createRef();

        this.state = { 
            asoHamburgerActive : false,
            asoHamburgerSideMenuActive : false,
            asoNavbarMainSubMenuActive : false,
            asoNavbarSelectionKey : '',
            asoNavbarSubMenuDisplay : 'none',
            asoSubMenuItemClass : 'asoSubMenuListItems',
            asoSubMenuHoveredItem : '',
         }
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) =>  {
        if ( this.state.asoNavbarSelectionKey !== '' && this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({asoNavbarSubMenuDisplay : 'none'})
        }
    }


     asoHamburgerClassChange = (e) => {
        if(!this.state.asoHamburgerActive) { 
            this.setState({asoHamburgerActive : true, asoHamburgerSideMenuActive : true})
        } else if(this.state.asoHamburgerActive) { 
            this.setState({asoHamburgerActive : false, asoHamburgerSideMenuActive : false})
        }
    }

    asoNavbarMainSubMenuHandler = (e) => {
        if(this.state.asoNavbarSelectionKey === '' && (e === 'Brands' || e === 'asoShopByRoom')) { 
            this.setState({asoNavbarSelectionKey : e,  asoNavbarSubMenuDisplay : 'flex'});
        }else if(this.state.asoNavbarSelectionKey !== '' && (e === 'Brands' || e === 'asoShopByRoom')) {
            this.setState({asoNavbarSelectionKey : e, asoNavbarSubMenuDisplay : 'flex'});
        } else if(this.state.asoNavbarSelectionKey !== '' && (e !== 'Brands' || e !== 'asoShopByRoom')) { 
            this.setState({asoNavbarSelectionKey :"", asoNavbarSubMenuDisplay : 'none'});
        }
    }

    asoSubMenuItemClassActiveHandler = async(index) => {
        await this.setState({asoSubMenuHoveredItem : index});
    }
    asoSubMenuItemClassDeactiveHandler = () => { 
        this.setState({asoSubMenuHoveredItem : '', asoSubMenuItemClass : 'asoSubMenuListItems'})
    }

    

    render() { 

        let asoSubMenuList = [];

        if (this.state.asoNavbarSelectionKey === 'Brands') { 
            for(let i in this.props.brands) { 
                asoSubMenuList.push(this.props.brands[i]);
            }
        } else if (this.state.asoNavbarSelectionKey === 'asoShopByRoom') { 
            for(let i in this.props.rooms) { 
                asoSubMenuList.push(this.props.rooms[i]);
            }
        }

        const asoAdList = this.props.asoAdList;
        const asoAdDisplay = [];
        for(let el in asoAdList) { 
            asoAdDisplay.push(<AsoNavbarAdBox title={asoAdList[el][0]} image={asoAdList[el][1]} link={asoAdList[el][2]} key={el} />)
        }


        return ( 
            <div className="asoNavbar">
                <div className="asoNavbarFirstLine">
                    <button className={this.state.asoHamburgerActive ? 'asoHamburgerMenuActive' : 'asoHamburgerMenu'} onClick={() => this.asoHamburgerClassChange()}>
                        <div className={this.state.asoHamburgerActive ? "asoHamOneActive" : "asoHamOne"}></div>
                        <div className={this.state.asoHamburgerActive ? "asoHamTwoActive" : "asoHamTwo"}></div>
                        <div className={this.state.asoHamburgerActive ? "asoHamThreeActive" : "asoHamThree"}></div>
                    </button>
                    <div className={this.state.asoHamburgerSideMenuActive ? 'asoHamburgerSideMenuActive' : 'asoHamburgerSideMenu'}>
                        <div className="asoHamburgerSideMenuOne">
                            <ul>
                                <li>Shop by Room</li>
                                <li>Brands</li>
                                <li>Journals</li>
                                <li>Our Story</li>
                                <li>Theme Features</li>
                            </ul>
                        </div>
                        <hr style={{width: '80%', border: 'none', borderBottom: '2px solid #ccc'}} />
                        <div className="asoHamburgerSideMenuTwo">
                            <ul>
                                <li>Shippings</li>
                                <li>Returns and Warranty</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <hr style={{width: '80%', border: 'none', borderBottom: '2px solid #ccc'}} />
                        <div className="asoHamburgerSideMenuThree">
                            <ul>
                                <li style={{display: 'flex', flexFlow:'row'}}><FontAwesomeIcon icon={faUserCircle} size="2x" style={{color: 'rgb(182, 182, 182)', cursor: 'pointer'}} /><p>Login</p></li>
                                <li style={{display: 'flex', flexFlow:'row'}}><FontAwesomeIcon icon={faShoppingBag} size="2x" style={{color: 'rgb(182, 182, 182)', cursor: 'pointer'}} /><p>Shopping Card</p></li>
                                <li className={"asoHamburgerMenuSearchIcon"}><FontAwesomeIcon icon={faSearch} size="2x" style={{color: 'rgb(182, 182, 182)', cursor: 'pointer'}} /><p style={{marginLeft: 7}}>Search</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="asoLogo">Art Shop</div>
                    <div className="asoSearchBar">
                        <form style={{width: '100%'}}>
                            <input className={"asoNavbarFormInput"} placeholder="What are you looking for ?"></input>
                            <button className={"asoBtn1"}><FontAwesomeIcon icon={faSearch} size="2x" style={{color: 'white', cursor: 'pointer', fontSize: 20}} /></button>
                        </form>
                    </div>
                    <div className="asoNavbarProfile">
                        <div style={{display: 'flex', flexFlow: 'column', paddingTop: 5, textAlign: 'left', width: 190}}><p style={{fontWeight: 'bold', lineHeight: '0.9rem', fontSize: '0.9rem'}}>Click and Collect</p><p style={{fontWeight: '400', lineHeight: '1.5rem', fontSize: '0.7rem'}}>Pickup your order for free</p></div>
                        <div style={{display: 'flex', flexFlow: 'row', paddingTop: 4}}>
                            <FontAwesomeIcon icon={faUserCircle} size="2x" style={{color: 'rgb(182, 182, 182)', cursor: 'pointer'}} /><p>Login</p>
                            <FontAwesomeIcon icon={faShoppingBag} size="2x" style={{color: 'rgb(182, 182, 182)', cursor: 'pointer', marginLeft: 20, marginTop: -2}} />
                            </div>
                    </div>
                </div>
                <div className="asoNavbarSecondLine">
                    <div className="asoNavbarSecondLineFirstList">
                        <ul>
                            <li><button onClick={() => this.asoNavbarMainSubMenuHandler('asoShopByRoom')} onMouseEnter={() => this.asoNavbarMainSubMenuHandler('asoShopByRoom')}>Shop by Room<FontAwesomeIcon icon={faAngleDown} size="2x" style={{color: 'black', cursor: 'pointer', fontSize: 20, height: '0.9rem', marginLeft: 2}} /></button></li>
                            <li><button onClick={() => this.asoNavbarMainSubMenuHandler('Brands')} onMouseEnter={() => this.asoNavbarMainSubMenuHandler('Brands')}>Brands<FontAwesomeIcon icon={faAngleDown} size="2x" style={{color: 'black', cursor: 'pointer', fontSize: 20, height: '0.9rem', marginLeft: 2}} /></button></li>
                            <li><button onClick={() => this.asoNavbarMainSubMenuHandler('')} onMouseEnter={() => this.asoNavbarMainSubMenuHandler('')}>Journals</button></li>
                            <li><button onClick={() => this.asoNavbarMainSubMenuHandler('')} onMouseEnter={() => this.asoNavbarMainSubMenuHandler('')}>Our Story</button></li>
                            {/* <li><Link to="/art-shop-add-products"><button onClick={() => this.asoNavbarMainSubMenuHandler('')} onMouseEnter={() => this.asoNavbarMainSubMenuHandler('')}>Add Products</button></Link></li> */}
                            <li><button onClick={this.props.asoPageChange}>Add Product !</button></li>
                        </ul>
                    </div>
                    <div className="asoNavbarSecondLineSecondList">
                        <ul>
                            <li>Shippings</li>
                            <li>Returns and Warranty</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="asoNavbarMainSubMenu" style={{display: this.state.asoNavbarSubMenuDisplay}} ref={this.wrapperRef}>
                    <div className="asoNavbarSubMenuFirstDiv">
                            {this.state.asoNavbarSelectionKey === '' ? 
                                null : 
                                asoSubMenuList.splice(0,11).map((el, index) => 
                                <div className={ index === this.state.asoSubMenuHoveredItem ? 'asoSubMenuListItemsActive' : 'asoSubMenuListItems'} 
                                        onMouseEnter={() => this.asoSubMenuItemClassActiveHandler(index)} 
                                        onMouseOut={() => this.asoSubMenuItemClassDeactiveHandler()}
                                        key={`SubMenuAso + ${el}`}>
                                    {el}
                                    <FontAwesomeIcon 
                                        icon={faAngleRight} 
                                        size="2x" 
                                        style={{color: '#ccc', cursor: 'pointer', fontSize: '1rem', height: '3rem', marginLeft: 12, marginTop: -7, display: this.state.asoSubMenuHoveredItem === index ? 'block' : 'none'}}  />
                                </div>)
                                .concat(<div className={'asoSubMenuListItemsMore'} key={'more'}>Click for more:</div>)}
                    </div>
                    <div className="asoNavbarSubMenuSecondDiv">
                        {asoAdDisplay}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default asoNavbar;