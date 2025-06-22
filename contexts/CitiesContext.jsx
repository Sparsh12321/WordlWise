import { useState,useEffect, useReducer, useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CityContext=createContext();
function reducer(state,action){
switch(action.type){
    case "loading":
        return{...state,isLoading:true};
    case "cities/loaded":
        return {...state, isLoading:false, cities:action.payload }
        case "city/loaded":
        return {...state, isLoading:false, currentCity:action.payload }
        case "city/created":
            return {...state,isLoading:false,currentCity:action.payload,cities:[...state.cities,action.payload]};
            case "rejected":{
                return {...state,isLoading:false,error:action.payload};
            }
            case "city/deleted":{
                return {...state,isLoading:false,cities:state.cities.filter(city=>city.id!==action.payload)};
            }
                default: throw new Error("error");

}
}
const initialState={
    cities:[],
    isLoading:false,
    currentCity:{},
    error:""
}
function CitiesProvider({children}){
//     const[cities,setCities]=useState([]);
//     const[isLoading,setIsLoading]=useState(false);
//   const[currentCity,setCurrentCity]=useState({});
const [{cities,isLoading,currentCity},dispatch]=useReducer(reducer,initialState);
     useEffect(function(){

        async function fetchCities(){
        dispatch({type:"loading"});
            try{
        
            const res=await fetch("http://localhost:3000/cities");
            const data=await res.json();
            dispatch({type:"cities/loaded",payload:data})
        }catch(err){
            dispatch({type:"rejected",payload:"error occured"});
        }
        
    }
    fetchCities();
    },[])

    const getCity=useCallback( async function getCity(id){
  dispatch({type:"loading"});
        try{
           
            const res=await fetch(`http://localhost:3000/cities/${id}`);
            const data=await res.json();
           dispatch({type:"city/loaded",payload:data});
        }catch(err){
           dispatch({type:"rejected",payload:"error occured"});
        }
       
    
    },[])
 async function createCity(newCity){
 
        try{
             dispatch({type:"loading"});
            const res=await fetch(`http://localhost:3000/cities/`,{method:'POST',
             body:JSON.stringify(newCity)   ,
             headers:{
                "Content-Type":"application/json"
             }
            });
            const data=await res.json();
           dispatch({type:'city/created',payload:data});
        }catch(err){
            dispatch({type:"rejected",payload:"error occured"});
        }
       
    }
async function deleteCity(id){
 
        try{
            dispatch({type:"loading"});
            await fetch(`http://localhost:3000/cities/${id}`,{method:'DELETE',
             
            });
            
           dispatch({type:"city/deleted",payload:id});
        }catch(err){
            dispatch({type:"rejected",payload:"error occured"});
        }
        
    
    }

    
    return <CityContext.Provider value={{cities,isLoading,currentCity ,deleteCity,getCity ,createCity }}>
        {children}
    </CityContext.Provider>
    

}
function useCities(){
    const context=useContext(CityContext);
    return context;
}
export {CitiesProvider,useCities};