import * as Promise from "bluebird";

import { LuisAdapter } from 'luis-adapter/dist';


export module utils {
    export function analyze(query: string): Promise<any> {
        let appId = process.env.LuisAppId; 
        if(!process.env.LuisAppId)
        {
            //msft sample app with cortana model
            let appId = "c413b2ef-382c-45bd-8ff0-f76d60e2a821";
        }
        
        let options = { appId: appId, subscriptionKey: process.env.LuisSubscriptionKey };

        let la = new LuisAdapter(options);

        return la.query(query, null, null).then((result) => {
            console.log(result);
            return result;
        });
    }
}