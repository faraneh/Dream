import React, { Component } from 'react';
import './asoMainPage.css';
// import { Route, Switch } from 'react-router-dom';
import AsoProductAdd from '../../asoComponents/asoProductAdd/asoProductAdd';
import AsoFirstPageContent from '../../asoComponents/asoFirstPageContent/asoFirstPageContent';
import axios from '../../../../../axios-orders';


class asoMainPage extends Component {
    state = { 
        asoBrands : ['Metricsilo', 'Drivemo', 'Excursy', 'Hiphonic', 'Zipp', 'Ravada', 'Notrichi', 'GQR', 'Kimini', 'HelloHome', 'BananaYellow', 'Rivass', 'JaarJewel', 'Xeroks', 'Lighvi'],
        asoRooms : ['Living Room', 'Dining Room', 'Office', 'Bedroom', 'Kids'],
        asoDefaultSubMenuAd : 
            [['SOFAS FOR FALL', 'URL("https://images.unsplash.com/photo-1567016420071-ec27a7835119?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c29mYXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")', ''],
            ['EVERYDAY CALM', 'URL("https://images.unsplash.com/photo-1630585308572-f53438fc684f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")', ''],
            ['NEW TEXTURES', 'URL("https://images.unsplash.com/photo-1575548347531-229797bf9ed0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvZmF8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")', ''],
            ['COLORS LIKE COLORS', 'URL("https://images.unsplash.com/photo-1567016432779-094069958ea5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")', '']],
        newProduct : { 
            category: '',
            productName : '',
            sku : '',
            colorCode : '',
            barcode : '',
            mainPic : '',
            imageTwo : '',
            imageThree : '',
            imageFour : '',
            desc : '',
            qty : 0,
            fullPrice : 0,
            currentPrice : 0,
        },
        asoProductList : {},
        asoFirstPage : true,
        asoProductsAddPage : false,
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////

     componentDidMount() { 
         axios.get('/ProductList.json')
         .then(res => {
            const asoProductList = res.data;
            this.setState({asoProductList});
            console.log(this.state.asoProductList);
         })
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////

     asoPageChangeHandler = () => { 
         if(this.state.asoFirstPage === false && this.state.asoProductsAddPage === true) { 
            this.setState({asoFirstPage : true , asoProductsAddPage : false})
         } else if (this.state.asoFirstPage === true && this.state.asoProductsAddPage === false) { 
            this.setState({asoFirstPage : false , asoProductsAddPage : true})
         }
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////

     AddProductSubmit = (e) => { 
        e.preventDefault();

        const newProductValues = {
            category: this.state.newProduct.category,
            productName : this.state.newProduct.productName,
            sku : this.state.newProduct.sku,
            colorCode : this.state.newProduct.colorCode,
            barcode : this.state.newProduct.barcode,
            mainPic : this.state.newProduct.mainPic,
            imageTwo : this.state.newProduct.imageTwo,
            imageThree : this.state.newProduct.imageThree,
            imageFour : this.state.newProduct.imageFour,
            desc : this.state.newProduct.desc,
            qty : this.state.newProduct.qty,
            fullPrice : this.state.newProduct.fullPrice,
            currentPrice : this.state.newProduct.currentPrice,
         }
         const emptyProduct = { 
            category: '',
            productName : '',
            sku : '',
            colorCode : '',
            barcode : '',
            mainPic : '',
            imageTwo : '',
            imageThree : '',
            imageFour : '',
            desc : '',
            qty : 0,
            fullPrice : 0,
            currentPrice : 0,
        }

         axios.post('/ProductList.json', newProductValues)
         .then (response => {
             this.setState({eraseValues : true});
             console.log(response, newProductValues);
         })
         .catch (error => {
             this.setState({eraseValues : false});
             console.log(error, newProductValues);
         });

         this.setState({newProduct : emptyProduct});
         alert('Done');
     }

      ////////////////////////////////////////////////////////////////////////////////////////////////////

     ProductValueAddHandler = (e) => {
         const asonewCat = e.target.name;
         const asoNewVal = e.target.value;
         const asoNewProduct = this.state.newProduct;
         asoNewProduct[asonewCat] = asoNewVal;
         this.setState({ newProduct : asoNewProduct});
     }



    
    render() { 

        let asoCurrentComponent = <AsoFirstPageContent products={this.state.products} brands={this.state.asoBrands} rooms={this.state.asoRooms} asoAdList={this.state.asoDefaultSubMenuAd} />;
        if(this.state.asoFirstPage && !this.state.asoProductsAddPage) { 
            asoCurrentComponent = <AsoFirstPageContent 
                products={this.state.asoProductList} 
                brands={this.state.asoBrands} 
                rooms={this.state.asoRooms} 
                asoAdList={this.state.asoDefaultSubMenuAd}
                firstPage={this.state.asoFirstPage}
                asoPageChange={this.asoPageChangeHandler}
                 />
        } else if (!this.state.asoFirstPage && this.state.asoProductsAddPage) { 
            asoCurrentComponent = <AsoProductAdd 
                products={this.state.asoProductList} 
                brands={this.state.asoBrands} 
                rooms={this.state.asoRooms} 
                asoAdList={this.state.asoDefaultSubMenuAd}
                firstPage={this.state.asoFirstPage}
                asoPageChange={this.asoPageChangeHandler}
                asoProductAddValueChanged={this.ProductValueAddHandler}
                productValue={this.state.newProduct}
                AddProductSubmit={this.AddProductSubmit} />
        }
        

        return ( 
            <div className={"asoMainPage"}>
                    {/* <AsoProductAdd products={this.state.products} brands={this.state.asoBrands} rooms={this.state.asoRooms} asoAdList={this.state.asoDefaultSubMenuAd} /> */}
                    {/* <AsoFirstPageContent products={this.state.products} brands={this.state.asoBrands} rooms={this.state.asoRooms} asoAdList={this.state.asoDefaultSubMenuAd} /> */}
                    {asoCurrentComponent}
            </div>
         );
    }
}
 
export default asoMainPage;

