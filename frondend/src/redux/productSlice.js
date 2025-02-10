import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {     

    productList : [],
    cartItem : [],
                              

} 

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setDataProduct: (state, action) => {
           
            // Fix: Update the state with the payload
           state.productList =[...action.payload]
        },

        addCartItem : (state,action)=>{
            
            const check = state.cartItem.some(el=>el._id === action.payload._id)
            console.log(check);
            if(check){
                toast.error("Already item in Cart")
            }
            else{

                toast.success("Item Added Successfully")
                const total = action.payload.price


            state.cartItem = [...state.cartItem,{...action.payload,qty: 1,total : total}]
            

            }



            

        },

        deleteCartItem: (state, action) => {
           
            toast.success("Item Deleted")
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            state.cartItem.splice(index,1)
            console.log(index);
            
           
          },
        IncreaseQty : (state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
           let  qty= state.cartItem[index].qty 
         const  qtyinc = ++qty
           state.cartItem[index].qty = qtyinc

           const price = state.cartItem[index].price

           const total = price * qtyinc

           state.cartItem[index].total = total

        },
        DecreaseQty : (state,action)=>{
            const index = state.cartItem.findIndex((el)=>el._id === action.payload)
            let  qty= state.cartItem[index].qty 
            if(qty>1){
                const  qtyDec = ++qty
                state.cartItem[index].qty = qtyDec
                
                const price = state.cartItem[index].price

           const total = price * qtyDec

           state.cartItem[index].total = total


            }
            

        },
    }
});

export const { setDataProduct,addCartItem ,deleteCartItem,IncreaseQty,DecreaseQty} = productSlice.actions;

export default productSlice.reducer;
