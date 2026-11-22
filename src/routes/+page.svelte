<script>
  let {data,form} = $props();
</script>

<svelte:head>
  <title>{data.label}</title>
</svelte:head>

<main>
  <header>
    <p>XYZ Deploy</p>
    <h1>{data.label}</h1>
  </header>
  {#if data.interactive}
    <section aria-label="Server action">
      <form method="POST">
        <label for="message">Send a message to the server</label>
        <div>
          <input id="message" name="message" maxlength="80" required />
          <button>Send</button>
        </div>
      </form>
      {#if form?.message}
        <p role="status">Server received {form.message}</p>
      {:else if form?.error}
        <p role="alert">{form.error}</p>
      {/if}
    </section>
  {/if}
  <a href="/api/health">Health endpoint</a>
</main>

<style>
  :global(body){margin:0;background:#142722;color:#f0f5dc;font:16px/1.5 system-ui,sans-serif}
  main{width:min(640px,calc(100% - 48px));margin:clamp(46px,11vh,110px) auto}
  header p{margin:0;color:#a6cfb3;font-weight:700}
  h1{margin:12px 0 28px;font-size:clamp(2.4rem,8vw,4.5rem);line-height:1.04;letter-spacing:-.045em}
  section{border-top:1px solid #57786a;padding:24px 0}
  form div{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
  input,button{min-height:44px;border:1px solid #6a8c7f;border-radius:5px;padding:0 12px;font:inherit}
  input{flex:1;min-width:150px;background:#213a32;color:inherit}
  button{background:#ebf4b2;color:#1b2c20;font-weight:700;cursor:pointer}
  a{color:#d3eaa7}
</style>
