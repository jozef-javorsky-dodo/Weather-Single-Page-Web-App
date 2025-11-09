<script lang="ts">

  import { isLoading } from '../store';
  
  import { fetchWeather } from '../weatherService';

  let city: string = '';

  async function handleSubmit() {
  
    await fetchWeather(city);
  
    city = '';
  
  }

</script>

<form on:submit|preventDefault={handleSubmit} class="flex mb-6">
  
  <input
    
  type="text"
  
  bind:value={city}
  
  placeholder="Enter city name..."
  
    class="flex-grow 
    p-3 text-base border-none rounded-l-lg bg-background-primary 
    text-text-primary placeholder-text-secondary 
    focus:outline-none disabled:opacity-50"
  
    aria-label="City Name"
    
    disabled={$isLoading}
  />
  
  <button
  
  type="submit"
  
  class="flex items-center justify-center p-3 text-base
   font-semibold text-white border-none rounded-r-lg
    cursor-pointer bg-primary hover:bg-primary-hover 
    disabled:bg-gray-400 disabled:cursor-not-allowed"
  
  disabled={$isLoading}
  >

    {#if $isLoading}
  
    <div
  
    class="w-5 h-5 border-4 border-white rounded-full 
    border-opacity-30 border-t-white animate-spin"
  
    ></div>
  
    {:else}
  
    <span>Search</span>
  
    {/if}
  
  </button>

</form>
