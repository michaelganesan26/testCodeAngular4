//Type Definition Files

export interface IBillRequest{
     bill_name?:string;
     draft_id?:number;
     draft_doc_id?:number;
     bdweb_published_updated?:string
}

export interface IBill{
   br_num:number;
   br?:IBillRequest
}

