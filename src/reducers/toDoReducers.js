const initialData = {
    list: []
}

const toDoReducers = (state = initialData,action) => {

        switch (action.type) {
            case "create": 
                
                const {id,data} = action.payload;
                if(data==="")data.preventDefault();
                
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id:id,
                            data:data
                        }
                    ]
                };

            case "del": 
                
                const newList = state.list.filter((elem)=>elem.id !==action.id);
                return{
                    ...state,
                    list:newList
                }

            case "remove": 
                
                return{
                    ...state,
                    list:[]
                };
        
            default:
                return state;
        }

}

export default toDoReducers;