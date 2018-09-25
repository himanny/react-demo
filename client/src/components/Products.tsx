import * as React from 'react';
import { productAPI } from '../api/productlist';
import { Items } from '../models/item';

interface IState{
        products: Items[];
}


export class Products extends React.Component<{},IState>{

    constructor(props:any) {
        super(props);

        this.state = {
            products:[]
        };
    }

    public componentDidMount(){

            productAPI.fetchProducts()
                .then((products) => {
                    this.setState({products});
                });
                
    }

    public render() {
        return (        
        <div >
     <table><tbody>
         
                 {this.state.products.map((user, i) => {
                                     return <tr key={i}> <td> {user.name} </td> <td> {user.date} </td></tr> 
                                        })
                                    }
           </tbody></table>
        </div>


        )
    }
}


export default Products;