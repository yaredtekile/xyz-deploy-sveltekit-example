import {json} from '@sveltejs/kit';

export const GET = ({url}) => json({ready:true,framework:'sveltekit',origin:url.origin});
