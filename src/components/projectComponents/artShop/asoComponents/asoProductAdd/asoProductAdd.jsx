import React from 'react';
import './asoProductAdd.css';
import AsoFooter from '../../asoComponents/asoFooter/asoFooter';
import AsoNavbar from '../../asoContainers/asoNavbar/asoNavbar';
import AsoProductBoxWide from '../asoUtilities/asoProductBoxWide/asoProductBoxWide';

const asoProductAdd = (props) => {

    return ( 
        <React.Fragment>
            <div className="asoProductAdd">
                <div className="asoProductAddBody">
                    <div className="asoProductAddForm">
                    <form onSubmit={props.AddProductSubmit}>
                        <p style={{fontSize: 30, fontWeight: '700'}}>Add your new product here</p>
                        <label>
                            Category:
                            <input type="text" name="category" onChange={props.asoProductAddValueChanged} value={props.productValue.category} />
                        </label>
                        <label>
                            Product name:
                            <input type="text" name="productName" onChange={props.asoProductAddValueChanged} value={props.productValue.productName} />
                        </label>
                        
                        <label>
                            Product SKU:
                            <input type="text" name="sku" onChange={props.asoProductAddValueChanged} value={props.productValue.sku} />
                        </label>
                        <label>
                            Product color code:
                            <input type="text" name="colorCode" onChange={props.asoProductAddValueChanged} value={props.productValue.colorCode} />
                        </label>
                        <label>
                            Product barcode:
                            <input type="text" name="barcode" onChange={props.asoProductAddValueChanged} value={props.productValue.barcode} />
                        </label>
                        <label>
                            Main Image:
                            <input type="text" name="mainPic" onChange={props.asoProductAddValueChanged} value={props.productValue.mainPic} />
                        </label>
                        <label>
                            Image 2:
                            <input type="text" name="imageTwo" onChange={props.asoProductAddValueChanged} value={props.productValue.imageTwo} />
                        </label>
                        <label>
                            Image 3:
                            <input type="text" name="imageThree" onChange={props.asoProductAddValueChanged} value={props.productValue.imageThree} />
                        </label>
                        <label>
                            Image 4:
                            <input type="text" name="imageFour" onChange={props.asoProductAddValueChanged} value={props.productValue.imageFour} />
                        </label>
                        <label>
                            Description :
                            <input type="textarea" name="desc" onChange={props.asoProductAddValueChanged} value={props.productValue.desc} />
                        </label>
                        <label>
                            Qty :
                            <input type="text" name="qty" onChange={props.asoProductAddValueChanged} value={props.productValue.qty} />
                        </label>
                        <label>
                            Full Price :
                            <input type="text" name="fullPrice" onChange={props.asoProductAddValueChanged} value={props.productValue.fullPrice} />
                        </label>
                        <label>
                            Current Price :
                            <input type="text" name="currentPrice" onChange={props.asoProductAddValueChanged} value={props.productValue.currentPrice} />
                        </label>
                        <div className="asoBtnArrange" style={{display: 'flex', flexFlow: 'row'}}>
                        <button className={'asoBtnSbmt'} type='submit'>SUBMIT</button>
                        <button className={'asoBtnSbmt'} style={{backgroundColor: "#ccc", margin : '30px 10px'}} type='reset'>CLEAR</button>
                        </div>
                    </form>
                    </div>
                    {/* <hr style={{border: 'none', borderTop : '1px solid #ccc', width: '80%'}} /> */}
                </div>
                <hr className={'asoProductPageHr'} style={{border: 'none', borderTop : '1px solid #ccc', width: '80%', display: 'flex'}} />
                <h1 style={{margin: '30px 0'}}>ProductList</h1>
                <div className="asoProductAddProductList">
                    {Object.values(props.products).map((el, index) => <AsoProductBoxWide 
                        key={index} 
                        imageAdrs={el.mainPic} 
                        productTitle={el.ProductName} 
                        category={el.category} 
                        price={el.currentPrice} 
                        fullPrice={el.fullPrice}/>)}
                </div>
            </div>
            
            <AsoNavbar 
                    brands={props.brands} 
                    rooms={props.rooms} 
                    asoAdList={props.asoAdList}
                    asoPageChange={props.asoPageChange} />
            <AsoFooter />
        </React.Fragment>
     );
}
 
export default asoProductAdd;