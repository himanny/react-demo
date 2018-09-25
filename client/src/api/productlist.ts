import { Items } from '../models/item';

const baseURL = 'http://localhost:5000/api/items';

const fetchProducts =(): Promise<Items[]> => {

    return fetch(baseURL)
            .then((response) => (response.json()))
            .then(mapToProducts);

};


const mapToProducts = (productItems: any[]): Items[] => {
    return productItems.map(mapToProductList);
};

const mapToProductList = (productItem : any): Items => {

    return{
        duedate : productItem.duedate,
            name : productItem.name
            
    };
};

export const productAPI = {
    fetchProducts
};