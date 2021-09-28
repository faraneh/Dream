import React from 'react';
import './asoProductAdd.css';
import AsoFooter from '../../asoComponents/asoFooter/asoFooter';
import AsoNavbar from '../../asoContainers/asoNavbar/asoNavbar';

const asoProductAdd = (props) => {
    return ( 
        <React.Fragment>
            <div className="asoProductAdd">
                <div className="asoProductAddBody">
                    <form className={'asoProductAddForm'}>
                        <p style={{fontSize: 30, fontWeight: '700'}}>Add your new product here</p>
                        <label>
                            Category:
                            <input type="text" name="category" />
                        </label>
                        <label>
                            Product name:
                            <input type="text" name="productName" />
                        </label>
                        
                        <label>
                            Product SKU:
                            <input type="text" name="sku" />
                        </label>
                        <label>
                            Product color code:
                            <input type="text" name="colorCode" />
                        </label>
                        <label>
                            Product barcode:
                            <input type="text" name="barcode" />
                        </label>
                        <label>
                            Main Image:
                            <input type="text" name="mainPic" />
                        </label>
                        <label>
                            Image 2:
                            <input type="text" name="imageTwo" />
                        </label>
                        <label>
                            Image 3:
                            <input type="text" name="imageThree" />
                        </label>
                        <label>
                            Image 4:
                            <input type="text" name="imageFour" />
                        </label>
                        <label>
                            Description :
                            <input type="textarea" name="desc" />
                        </label>
                        <label>
                            Qty :
                            <input type="text" name="qty" />
                        </label>
                        <label>
                            Full Price :
                            <input type="text" name="fullPrice" />
                        </label>
                        <label>
                            Current Price :
                            <input type="text" name="currentPrice" />
                        </label>
                        <div className="asoBtnArrange" style={{display: 'flex', flexFlow: 'row'}}>
                        <button className={'asoBtnSbmt'} type='submit'>SUBMIT</button>
                        <button className={'asoBtnSbmt'} style={{backgroundColor: "#ccc", margin : '30px 10px'}} type='reset'>CLEAR</button>
                        </div>
                    </form>
                    <hr style={{border: 'none', borderTop : '1px solid #ccc', width: '80%'}} />
                </div>
                <hr style={{border: 'none', borderTop : '1px solid #ccc', width: '80%', display: 'flex'}} />
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