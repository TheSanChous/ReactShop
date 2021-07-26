class SearchParser {
    constructor (searchParams){
        // validate Params
        this.Params = (typeof searchParams == "string"? String(searchParams): null);   //?.slice(1)?.split("&")?.map(s => s.split("="));
        // earese '?' from params
        this.Params = this.Params.slice(1);
    }

    getValueByName(name) {
        if(this.Params || !this.Params.length < 3){
            
        }
    }
    
}