import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, deleteItems, editItems, fetchItems, updateItems } from './ItemsSlice'

function ItemDetails() {
    const dispatch = useDispatch();
    const itemList = useSelector(state => state.items);
    const { loading, items, error, editedItem } = itemList;
    const [name, pickName] = useState("")
    const [photo, pickPhoto] = useState("")
    const [details, pickDetails] = useState("")
    const [qty, pickQty] = useState("")
    const [price, pickPrice] = useState("");
    const [itemId, setItemId] = useState(null);
    console.log("wdw", itemList, items);
    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    const saveItem = () => {
        const newData = {
            name: name, photo: photo,
            details: details, qty: qty, price: price
        }
        dispatch(addItems(newData));
        pickName("")
        pickPhoto("")
        pickDetails("")
        pickQty("")
        pickPrice("")
        setItemId("")
    }
    // ----------------If u want to handle through GET METHOD----------------------------------
    // const editItem=(itemId)=>{
    //     console.log("rfrgyh",editedItem)
    //     dispatch(editItems(itemId));
    //     // pickName(editedItem && editedItem.name)
    // }
    // useEffect(() => {
    //     if (editedItem) {
    // pickName(editedItem.name)
    // pickPhoto(editedItem.photo)
    // pickDetails(editedItem.details)
    // pickQty(editedItem.qty)
    // pickPrice(editedItem.price)
    // setItemId(editedItem.id)
    //     }
    // }, [editedItem]);
    // -----------------------If u want to handle through items Array from useSelector----------------------------------------------------
    const editItem = (itemId) => {
        setItemId(itemId);
        const item = items.find((item) => item.id === itemId);
        pickName(item.name ? item.name : "");
        pickPrice(item.price ? item.price : "");
        pickDetails(item.details ? item.details : "");
        pickQty(item.qty ? item.qty : "");
        pickPhoto(item.photo ? item.photo : "");
    };

    const updateItemData = () => {
        const ItemData = {
            name: name, photo: photo,
            details: details, qty: qty, price: price
        }
        console.log("newDAFAG", ItemData)
        dispatch(updateItems({ itemId, ItemData }));
        pickName("")
        pickPhoto("")
        pickDetails("")
        pickQty("")
        pickPrice("")
        setItemId("")
    }
    const deleteItemData = (itemId) => {
        console.log("rfrgyh", editedItem)
        dispatch(deleteItems(itemId));
        pickName("")
        pickPhoto("")
        pickDetails("")
        pickQty("")
        pickPrice("")
        setItemId("")
        dispatch(fetchItems())
    }
    return (
        <div>
            <p>
                <input placeholder='Name' value={name} onChange={e => pickName(e.target.value)} />
                <input placeholder='Price' value={price} onChange={e => pickPrice(e.target.value)} />
                <input placeholder='Quantity' value={qty} onChange={e => pickQty(e.target.value)} />
                <input placeholder='Photo' value={photo} onChange={e => pickPhoto(e.target.value)} />
                <input placeholder='Details' value={details} onChange={e => pickDetails(e.target.value)} />
                <button onClick={() => saveItem()}>Save Data</button>
                <button onClick={() => updateItemData()}>Update Data</button>
            </p>
            {
                items.map((info, index) => {
                    return (
                        <p key={index}>
                            {info.id}-{info.name}-{info.price}
                            <button onClick={() => editItem(info.id)}>Edit Item</button>
                            <button onClick={() => deleteItemData(info.id)}>Delete Item</button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default ItemDetails