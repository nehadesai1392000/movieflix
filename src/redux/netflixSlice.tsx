import { createSlice } from '@reduxjs/toolkit'

export const netflixSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
    data:[],
    para:[],
    item:[],
    val:[],
    name:[],
    doc:[]
  },
  reducers: {
    getData: (state:any, action:any) => {
      state.value = action.payload
    },
   secondData: (state:any,action:any) =>{
    state.data = action.payload
   },
   thadData: (state:any,action:any) =>{
    state.para = action.payload
   },
   forData: (state:any,action:any) =>{
    state.item = action.payload
   },
   fiveData: (state:any,action:any) =>{
    state.val = action.payload
   },
   sixData: (state:any,action:any) =>{
    state.name = action.payload
   },

   sevenData: (state:any,action:any) =>{
    state.doc = action.payload
   },

  },
})

export const { getData,secondData,thadData,forData,fiveData,sixData,sevenData } = netflixSlice.actions

export default netflixSlice.reducer