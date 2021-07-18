import axios from "axios";
import type { Location, Forecast } from "../types";

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getLocations(query: string): Promise<Location[] | undefined> {
	try {
		const response = await axios.get(`http://dataservice.accuweather.com/locations/v1/search?q=${query}&apikey=${API_KEY}`);
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.error(error);
	}
}

export async function getWeatherInformation(key: string, setWeatherInfo: (p: Forecast) => void): Promise<void> {
	try {
		const response = await axios.get(
			`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${API_KEY}&metric=true`
		);
		if (response.status === 200) {
			setWeatherInfo(response.data);
		}
	} catch (error) {
		console.error(error);
	}
}

export async function get5DayWeatherInformation(key: string, setWeatherInfo: (p: Forecast) => void): Promise<void> {
	try {
		const response = await axios.get(
			`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=true`
		);
		if (response.status === 200) {
			setWeatherInfo(response.data);
		}
	} catch (error) {
		console.error(error);
	}
}
