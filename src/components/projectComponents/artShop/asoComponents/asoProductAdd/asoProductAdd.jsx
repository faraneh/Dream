import React from 'react';
import './asoProductAdd.css';
import AsoFooter from '../../asoComponents/asoFooter/asoFooter';
import AsoNavbar from '../../asoContainers/asoNavbar/asoNavbar';

const asoProductAdd = (props) => {
    return ( 
        <React.Fragment>
            <div className="asoProductAdd">

                <div className="asoProductAddBody">
                    <form>
                        <p style={{fontSize: 20, fontWeight: '700'}}>Add your new product here</p>
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
                        <hr />
                        <label>
                            Product color code:
                            <input type="text" name="colorCode" />
                        </label>
                        <label>
                            Product barcode:
                            <input type="text" name="barcode" />
                        </label>
                        <hr />
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
                        <hr />
                        <label>
                            Description :
                            <input type="textarea" name="desc" />
                        </label>
                        <hr />
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
                        <button className={'asoBtnSbmt'} type='submit'>SUBMIT</button>
                    </form>
                    
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