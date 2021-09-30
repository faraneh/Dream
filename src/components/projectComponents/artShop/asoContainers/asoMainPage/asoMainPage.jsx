import React, { Component } from 'react';
import './asoMainPage.css';
// import { Route, Switch } from 'react-router-dom';
import AsoProductAdd from '../../asoComponents/asoProductAdd/asoProductAdd';
import AsoFirstPageContent from '../../asoComponents/asoFirstPageContent/asoFirstPageContent';
import axios from '../../../../../axios-orders';
import AsoProductPage from '../../asoComponents/asoProductPage/asoProductPage';


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
        asoProductPage : false,
        asoProduct : '',
        asoCurrentProductImage : '',
        asoImageFrame : '',
        asoProductCount : 1,
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////

     componentDidMount() { 
         axios.get('/ProductList.json')
         .then(res => {
            const asoProductList = res.data;
            this.setState({asoProductList});
            // console.log(this.state.asoProductList);
         })
     }
     componentWillUnmount() {
        this.setState({asoProductList : ''});
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////

     asoPageChangeHandler = () => { 
            this.setState({asoFirstPage : false , asoProductsAddPage : true, asoProductPage : false })
     }

     asoGoToHomePageHandler = () => { 
            this.setState({asoFirstPage : true , asoProductsAddPage : false, asoProductPage : false })
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

     ////////////////////////////////////////////////////////////////////////////////////////////////////

     asoGoToProductPageHandler = (event) => {
        window.scrollTo({
            top: 200,
            left: 0,
            behavior: "smooth"
          });
        const asoProductList = Object.entries(this.state.asoProductList);
        const asoProduct = asoProductList[event];
        const asoFirstImage = asoProduct[1].mainPic;
        this.setState({asoProduct : asoProduct, asoFirstPage : false , asoProductsAddPage : false, asoProductPage : true, asoImageFrame : asoFirstImage});
     }

     asoChangeProductMainPicHandler = (event) => { 
        if(event === 'mainPic') { 
            // return asoImageFrame = asoProduct.mainPic;
            let asoCurrentImage = this.state.asoProduct[1].mainPic
            this.setState({asoImageFrame : asoCurrentImage})
        } else if (event ==='imageOne') { 
            // return asoImageFrame = asoProduct.imageOne
            let asoCurrentImage = this.state.asoProduct[1].imageOne
            this.setState({asoImageFrame : asoCurrentImage})
        } else if (event ==='imageTwo') { 
            // return asoImageFrame = asoProduct.imageTwo
            let asoCurrentImage = this.state.asoProduct[1].imageTwo
            this.setState({asoImageFrame : asoCurrentImage})
        } else if (event ==='imageThree') { 
            // return asoImageFrame = asoProduct.imageThree
            let asoCurrentImage = this.state.asoProduct[1].imageThree
            this.setState({asoImageFrame : asoCurrentImage})
        } else if (event ==='imageFour') { 
            // return asoImageFrame = asoProduct.imageFour
            let asoCurrentImage = this.state.asoProduct[1].imageFour
            this.setState({asoImageFrame : asoCurrentImage})
        }
     }

     asoCountChangeHandler = (e) => { 
         e.preventDefault();

         console.log(e.target.value);

         let asoCurrentCount = this.state.asoProductCount;
         
         if(e.target.value === "+") { 
            asoCurrentCount = asoCurrentCount + 1;
            this.setState({asoProductCount : asoCurrentCount})
         } else if(e.target.value === '-' && this.state.asoProductCount > 1) { 
            asoCurrentCount = asoCurrentCount - 1;
            this.setState({asoProductCount : asoCurrentCount})
         }
     }

     ////////////////////////////////////////////////////////////////////////////////////////////////////
    
    render() { 

        let asoCurrentComponent = <AsoFirstPageContent products={this.state.products} brands={this.state.asoBrands} rooms={this.state.asoRooms} asoAdList={this.state.asoDefaultSubMenuAd} />;
        if(this.state.asoFirstPage && !this.state.asoProductsAddPage && !this.state.asoProductPage) { 
            asoCurrentComponent = <AsoFirstPageContent 
                products={this.state.asoProductList} 
                brands={this.state.asoBrands} 
                rooms={this.state.asoRooms} 
                asoAdList={this.state.asoDefaultSubMenuAd}
                firstPage={this.state.asoFirstPage}
                asoPageChange={this.asoPageChangeHandler}
                asoGoToProductPage={this.asoGoToProductPageHandler} 
                asoGoToHomePage={this.asoGoToHomePageHandler}
                 />
        } else if (!this.state.asoFirstPage && this.state.asoProductsAddPage && !this.state.asoProductPage) { 
            asoCurrentComponent = <AsoProductAdd 
                products={this.state.asoProductList} 
                brands={this.state.asoBrands} 
                rooms={this.state.asoRooms} 
                asoAdList={this.state.asoDefaultSubMenuAd}
                firstPage={this.state.asoFirstPage}
                asoPageChange={this.asoPageChangeHandler}
                asoProductAddValueChanged={this.ProductValueAddHandler}
                productValue={this.state.newProduct}
                AddProductSubmit={this.AddProductSubmit}
                asoGoToHomePage={this.asoGoToHomePageHandler} />
        } else if (!this.state.asoFirstPage && !this.state.asoProductsAddPage && this.state.asoProductPage) { 
                asoCurrentComponent = <AsoProductPage
                products={this.state.asoProductList} 
                brands={this.state.asoBrands} 
                rooms={this.state.asoRooms} 
                asoAdList={this.state.asoDefaultSubMenuAd}
                firstPage={this.state.asoFirstPage}
                asoPageChange={this.asoPageChangeHandler}
                asoGoToHomePage={this.asoGoToHomePageHandler}
                product={this.state.asoProduct}
                asoImageFrame={this.state.asoImageFrame}
                asoChangeProductMainPic={this.asoChangeProductMainPicHandler}
                asoProductCount={this.state.asoProductCount}
                asoCountChange={this.asoCountChangeHandler} />
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

