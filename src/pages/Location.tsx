import { useEffect, useState } from "react";
import axios from "axios";

import type { Forecast } from "../types";

async function getWeatherInformation(key: string, setWeatherInfo: (p: Forecast) => void): Promise<void> {
	try {
		const response = await axios.get(
			`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`
		);
		if (response.status === 200) {
			setWeatherInfo(response.data);
		}
	} catch (error) {
		console.error(error);
	}

}

const Location = (): JSX.Element => {
    const [ query, setQuery ] = useState<string>("");
	const [ locations, setLocations ] = useState([])
	const [ locationKey, setLocationKey ] = useState<string>("");
	const [ weatherInformation, setWeatherInformation ] = useState<null | Forecast>(null);

	useEffect(() => {
		getWeatherInformation(locationKey, setWeatherInformation);
	}, [ locationKey ]);

    return (
        <div className={"Location"}>
            <form onSubmit={async e => {
				setLocations([]);
                e.preventDefault();
                try {
                    const response = await axios.get(
						`http://dataservice.accuweather.com/locations/v1/search?q=${query}&apikey=${process.env.REACT_APP_API_KEY}`
					);
                    if (response.status === 200) {
						setLocations(response.data);
					}
                } catch (error) {
                    console.error(error);
                }
            }}>
                <input
                    type="text"
                    name="query"
                    id="query"
                    className={"Location-input"}
                    onChange={e => setQuery(e.target.value)}
                />
            </form>
			{locations.length > 0 && <ul>
				{locations.map((location: any) => <li key={location.Key}>
					{location.LocalizedName}
					<button type={"button"} onClick={() => setLocationKey(location.Key)}>
						Set as favourite
					</button>
				</li>)}
			</ul>}
			{weatherInformation !== null && <div>
				{weatherInformation.Headline.Text}
				{weatherInformation.DailyForecasts.map(dailyForecast => <div key={dailyForecast.EpochDate}>
					<div>Day</div>
					<div>{dailyForecast.Day.PrecipitationType}</div>
					<div>Max: {dailyForecast.Temperature.Maximum.Value} </div>
					<div>Min: {dailyForecast.Temperature.Minimum.Value}</div>
					<div>Night</div>
					<div>{dailyForecast.Night.IconPhrase}</div>
				</div>)}
			</div>}
        </div>
    )
};

export default Location;
