import React, { Component } from 'react';
import './asoMainPage.css';
import AsoNavbar from '../asoNavbar/asoNavbar';
import AsoFirstPageContent from '../../asoComponents/asoFirstPageContent/asoFirstPageContent';

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
        }
     }
    render() { 
        return ( 
            <div className={"asoMainPage"}>
                <AsoFirstPageContent products={this.state.products} />
                <AsoNavbar 
                    brands={this.state.asoBrands} 
                    rooms={this.state.asoRooms} 
                    defaultAd={this.state.asoDefaultSubMenuAd} />
            </div>
         );
    }
}
 
export default asoMainPage;