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
        products : {
            11101 : {
                category: 'Chairs',
                ProductName : 'Lounge Chair',
                SKU : '111',
                colorCode : '01',
                mainPic : 'https://www.ikea.com/ca/en/images/products/froeset-chair-red-stained-oak-veneer__0832018_pe777555_s5.jpg?f=xl',
                otherImages : ['https://www.ikea.com/ca/en/images/products/froeset-chair-red-stained-oak-veneer__0937801_pe793857_s5.jpg?f=xl','https://www.ikea.com/ca/en/images/products/froeset-chair-red-stained-oak-veneer__0832029_pe777563_s5.jpg?f=xl'],
                desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit fugiat sed autem cum sequi aliquam perferendis, in reiciendis nobis?',
                Qty : 10,
                fullPrice : 675,
                currentPrice : 660,
            },
            11102 : {
                category: 'Chairs',
                ProductName : 'Lounge Chair',
                SKU : '111',
                colorCode : '02',
                mainPic : 'https://www.ikea.com/ca/en/images/products/froeset-chair-black-stained-oak-veneer__0824150_pe776003_s5.jpg?f=xl',
                otherImages : ['https://www.ikea.com/ca/en/images/products/froeset-chair-black-stained-oak-veneer__0937800_pe793855_s5.jpg?f=xl','https://www.ikea.com/ca/en/images/products/froeset-chair-black-stained-oak-veneer__0985892_pe816864_s5.jpg?f=xl'],
                desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit fugiat sed autem cum sequi aliquam perferendis, in reiciendis nobis?',
                Qty : 8,
                fullPrice : 0,
                currentPrice : 660,
            },
            11201 : {
                category: 'Lamps',
                ProductName : 'Metal Lamp',
                SKU : '112',
                colorCode : '01',
                mainPic : 'https://www.ikea.com/ca/en/images/products/paerlband-tealight-holder__0985134_pe816514_s5.jpg?f=xl',
                otherImages : ['https://www.ikea.com/ca/en/images/products/paerlband-tealight-holder__0985136_pe816515_s5.jpg?f=xl','https://www.ikea.com/ca/en/images/products/paerlband-tealight-holder__0610813_ph149204_s5.jpg?f=xl'],
                desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit fugiat sed autem cum sequi aliquam perferendis, in reiciendis nobis?',
                Qty : 8,
                fullPrice : 685,
                currentPrice : 660,
            },
            11301 : {
                category: 'Cushions',
                ProductName : 'White Floral Cushion',
                SKU : '113',
                colorCode : '01',
                mainPic : 'https://www.ikea.com/ca/en/images/products/roedarv-cushion-multicolor__0600167_pe678583_s5.jpg?f=xl',
                otherImages : ['https://www.ikea.com/ca/en/images/products/roedarv-cushion-multicolor__0889174_pe597147_s5.jpg?f=xl','https://www.ikea.com/ca/en/images/products/roedarv-cushion-multicolor__0456293_pe604020_s5.jpg?f=xl'],
                desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit fugiat sed autem cum sequi aliquam perferendis, in reiciendis nobis?',
                Qty : 15,
                fullPrice : 675,
                currentPrice : 660,
            },
            11302 : {
                category: 'Cushions',
                ProductName : 'Dark Floral Cushion',
                SKU : '113',
                colorCode : '02',
                mainPic : 'https://www.ikea.com/ca/en/images/products/skogskorn-cushion-dark-gray-multicolor__0712216_pe728663_s5.jpg?f=xl',
                otherImages : ['https://www.ikea.com/ca/en/images/products/skogskorn-cushion-dark-gray-multicolor__0739373_pe741711_s5.jpg?f=xl','https://www.ikea.com/ca/en/images/products/skogskorn-cushion-dark-gray-multicolor__0712213_pe728662_s5.jpg?f=xl'],
                desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit fugiat sed autem cum sequi aliquam perferendis, in reiciendis nobis?',
                Qty : 8,
                fullPrice : 0,
                currentPrice : 660,
            },
            11401 : {
                category: 'Armchairs',
                ProductName : 'Banana Yellow Armchair',
                SKU : '114',
                colorCode : '01',
                mainPic : 'https://www.ikea.com/ca/en/images/products/strandmon-armchair-skiftebo-yellow__0325450_pe517970_s5.jpg?f=xl',
                otherImages : ['https://www.ikea.com/ca/en/images/products/strandmon-armchair-skiftebo-yellow__0837286_pe596513_s5.jpg?f=xl','https://www.ikea.com/ca/en/images/products/strandmon-armchair-skiftebo-yellow__0837297_pe601176_s5.jpg?f=xl'],
                desc : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit fugiat sed autem cum sequi aliquam perferendis, in reiciendis nobis?',
                Qty : 8,
                fullPrice : 1200,
                currentPrice : 960,
            },

        },
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

    //  componentDidMount() { 
    //      axios.get('/ProductList.json')
    //      .then(res => {
    //         const asoProductList = res.data;
    //         this.setState({asoProductList});
    //         console.log(this.state.asoProductList);
    //      })
    //  }

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

         axios.post('/ProductList.json', newProductValues)
         .then (response => {
             this.setState({eraseValues : true});
             console.log(response, newProductValues);
         })
         .catch (error => {
             this.setState({eraseValues : false});
             console.log(error, newProductValues);
         });

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
                products={this.state.products} 
                brands={this.state.asoBrands} 
                rooms={this.state.asoRooms} 
                asoAdList={this.state.asoDefaultSubMenuAd}
                firstPage={this.state.asoFirstPage}
                asoPageChange={this.asoPageChangeHandler}
                 />
        } else if (!this.state.asoFirstPage && this.state.asoProductsAddPage) { 
            asoCurrentComponent = <AsoProductAdd 
                products={this.state.products} 
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

