import flags, {statuses} from "./flags";
import resources from '../lib/resources';
import {downloadData} from '../lib/dist';

function getData(dispatch) {
	
	

	/*(function queryCafeList($) {

		$.ajax(resources.queryCafeList, {
			crossDomain: true,
			success: (data)=>{
				console.log(data);
				//dispatch(compLoadCafeList(flags.compCafeList, data));
			},//Пробросить данные
			error: ()=>{
				setTimeout(()=>{
					queryCafeList($);
				}, 1000);
			},
			cache: false,
			dataType: "jsonp",
		});
	})(jQuery);*/
}

export {getData};

