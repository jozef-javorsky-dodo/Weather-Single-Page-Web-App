<script lang="ts">

  import { weatherData } from '../store';
  
  import { getWeatherIcon } from '../weatherService';

</script>

{#if $weatherData}

<div class="text-center">

  <div class="flex items-center justify-center gap-4">

    <h2 class="text-xl font-semibold">

      {$weatherData.name}, {$weatherData.sys.country}

    </h2>

    <img
        class="w-24 h-24"

        src={getWeatherIcon($weatherData.weather[0].icon)}

        alt={$weatherData.weather[0].description}
      />
    </div>
    
    <div class="mt-4">
    
      <p class="text-6xl font-bold">{Math.round($weatherData.main.temp)}°C</p>
    
      <p class="-mt-2 text-lg capitalize">
        {$weatherData.weather[0].main}
      </p>
    
      <div class="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
    
        <p class="p-3 rounded-lg bg-background-primary">
    
          Feels like: {Math.round($weatherData.main.feels_like)}°C
    
        </p>
    
        <p class="p-3 rounded-lg bg-background-primary">
    
          Humidity: {$weatherData.main.humidity}%
    
        </p>
    
        <p class="p-3 rounded-lg bg-background-primary">
    
          Wind: {$weatherData.wind.speed.toFixed(1)} m/s
    
        </p>
    
      </div>
    
    </div>
  
  </div>

  {/if}
