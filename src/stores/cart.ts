import { productStore, type Product } from "@/stores/product";
import { defineStore } from 'pinia'
export interface CartPreview{
    id?: number,
    image: string
    title: string
    quantity: number
    cost: number
  }
  interface CartPreviewStore{
    listCart:Array<CartPreview>,
    one: CartPreview
  }


  function initState(): CartPreviewStore{
    return {
      listCart: [],
      one:{
        image: "",
        title: "",
        quantity: 0,
        cost: 0,
    }
  }
}

export const cartStore = defineStore('cartStore', {
    state: () => {
      return initState()
    },

},

)