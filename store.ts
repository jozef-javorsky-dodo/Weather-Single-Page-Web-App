import { writable } from 'svelte/store';

import type { WeatherData } from './types';

export const weatherData = writable<WeatherData | null>(null);

export const isLoading = writable<boolean>(false);

export const errorMessage = writable<string | null>(null);
