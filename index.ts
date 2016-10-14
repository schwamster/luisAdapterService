import * as Promise from "bluebird";

import {LuisAdapter} from 'luis-adapter/dist';

var options = {appId: "c413b2ef-382c-45bd-8ff0-f76d60e2a821", subscriptionKey: process.env.LuisSubscriptionKey };

var la = new LuisAdapter(options);

la.query("set up an appointment at 2:00 pm tomorrow for 90 minutes called discuss budget", null, null).then((result) => 
{
    console.log(result);
});