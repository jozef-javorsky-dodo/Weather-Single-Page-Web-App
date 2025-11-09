<script lang="ts">

    import SearchForm from "./lib/components/SearchForm.svelte";
  
    import ErrorMessage from "./lib/components/ErrorMessage.svelte";
  
    import WeatherDisplay from "./lib/components/WeatherDisplay.svelte";

</script>

<main class="flex items-center justify-center min-h-screen p-4 font-sans">

    <div class="w-full max-w-md p-8 bg-background-secondary rounded-lg shadow-lg">

        <h1 class="mb-8 text-2xl font-bold text-center">Weather App</h1>

      <SearchForm />
    
      <ErrorMessage />
    
      <WeatherDisplay />
  
  </div>

</main>
