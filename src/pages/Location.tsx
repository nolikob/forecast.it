import { useEffect, useState } from "react";
// import { getLocations, getWeatherInformation } from "../api/api";
import { locations } from "../static.js";

import type { Forecast, Location as LocationType } from "../types";

const Location = (): JSX.Element => {
	const [ query, setQuery ] = useState<string>("");
	// const [ locations ] = useState<LocationType[]>(locs);
	const [ locationKey, setLocationKey ] = useState<string>("");
	const [ weatherInformation ] = useState<null | Forecast>(null);

	useEffect(() => {
		if (locationKey !== "") {
			// getWeatherInformation(locationKey, setWeatherInformation);
		}
	}, [ locationKey ]);

    return (
        <div className={"Location"}>
			<h1>Locations</h1>
            <div className={"Location-inputWrapper"}>
                <input
                    type="text"
                    name="query"
                    id="query"
                    className={"Location-input"}
					value={query}
                    onChange={e => setQuery(e.target.value)}
					placeholder={"Search for location"}
                />
            </div>
			<ul className={"Location-results"}>
				{locations.filter(loc => loc.LocalizedName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) === 0)
				.map((location: LocationType) => <li key={location.Key} className={"Location-result Result"}>
					<span className={"Result-headline"}>
						<h3>{location.LocalizedName}</h3>
						<span>{String(location.Country.LocalizedName)}</span>
					</span>
					<button type={"button"} onClick={() => setLocationKey(location.Key)} className={"Button Button-secondary Result-cta"}>
						Set as home
					</button>
				</li>)}
			</ul>
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
