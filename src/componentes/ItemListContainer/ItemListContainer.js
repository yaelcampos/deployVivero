import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
    const { categoryName } = useParams();  
    const [ productList, setProductList ] = useState([]);

    useEffect (() => {
        getProducts();  
    },[categoryName])

    const getProducts = () => {
        const db = getFirestore();
        const queryBase = collection(db, "items");
        const querySnapshot = categoryName ? query(queryBase, where("categoria", "==",categoryName)) : queryBase;
            getDocs(querySnapshot).then((response) => {
                console.log(response.docs);
                const data = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductList(data);
            })
        
    }
        
        return (
                <>
                    <ItemList lista={productList}/>
                </>
        );
    };

export default ItemListContainer