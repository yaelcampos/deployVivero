
import { useEffect, useState } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemtDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const {id} = useParams();  
    const [product, setProduct] = useState([]);

    useEffect (() => {
        getItem();
        
    },)

    const getItem = () => {
        const db = getFirestore();
        const queryDoc = doc(db, "items", id);
        getDoc(queryDoc).then((res) =>{
            setProduct({id: res.id, ...res.data()});
        }).catch((err) => console.log(err));
    }


    return (
        <div>
            <ItemDetail item={product} 
            />
        </div>
    );
};

export default  ItemDetailContainer
