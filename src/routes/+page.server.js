import {fail} from '@sveltejs/kit';
import {env} from '$env/dynamic/private';

export const load = () => ({
  label:env.DEMO_LABEL || 'SvelteKit on XYZ Deploy',
  interactive:env.DEMO_ENABLE_FORM === 'true'
});

export const actions = {
  async default({request}) {
    const value = (await request.formData()).get('message');
    const message = typeof value === 'string' ? value.trim() : '';
    if (!message || message.length > 80) return fail(400,{error:'Enter a message of 1–80 characters.'});
    return {message};
  }
};
