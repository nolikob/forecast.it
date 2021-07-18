import { useContext, useEffect, useState } from "react";
import * as dayjs from "dayjs";

import { forecast1day, forecast5days, locations } from "../static";
import AppContext from "../context";
import type { Forecast } from "../types";
import { getWeatherInformation, get5DayWeatherInformation } from "../api/api";

const Favourite = (): JSX.Element => {
	const location = locations[0];
	
	const [ dayForecast, setDayForecast ] = useState<Forecast>(forecast1day);
	const [ fiveDayForecast, setFiveDayForecast ] = useState<Forecast>(forecast5days);
	const { Headline, DailyForecasts } = dayForecast;
	const min = DailyForecasts[0].Temperature.Minimum;
	const max = DailyForecasts[0].Temperature.Maximum;
	const futureForecasts = fiveDayForecast.DailyForecasts;
	
	const { favouriteKey } = useContext(AppContext);

	useEffect(() => {
		// API requests to get 1 day forecast and 5 day forecast
		// not making requests due to accuweather limitations, using stored constants instead
		// if (favouriteKey !== null) {
		// 	getWeatherInformation(favouriteKey, setDayForecast);
		// 	get5DayWeatherInformation(favouriteKey, setFiveDayForecast)
		// }
	}, [ favouriteKey ]);

	return (
		<div className={"Favourite"}>
			{favouriteKey !== null ? <>
			<div className={"Favourite-header"}>
				<h1>{location.LocalizedName}</h1>,&nbsp;{location.Region.LocalizedName}
			</div>
			<div className={"Favourite-content"}>
				<div className="Favourite-block Favourite-mainBlock">
					<div className={"Favourite-boxWrapper"}>
						<div className={"Favourite-info"}>
							<strong>{Headline.Text}</strong>
							<ul>
								<li>Min: { min.Value } { min.Unit }</li>
								<li>Max: { max.Value } { max.Unit }</li>
							</ul>
						</div>
						<div className={"Favourite-temperatureWrapper"}>
							<strong className={"Favourite-temperature"}>
								{Headline.Category}
							</strong>
						</div>
					</div>
				</div>
				<div className="Favourite-dayNightWrapper">
					<div className="Favourite-block Favourite-block--half">
						<div className="Favourite-boxWrapper Favourite-boxWrapper--secondary">
							<h3 className={"Favourite-boxWrapperHeader"}>Day</h3>
							<span>{DailyForecasts[0].Day.PrecipitationType}</span>
							<span>{DailyForecasts[0].Day.PrecipitationIntensity}</span>
						</div>
					</div>
					<div className="Favourite-block Favourite-block--half">
						<div className="Favourite-boxWrapper Favourite-boxWrapper--secondary">
							<h3 className={"Favourite-boxWrapperHeader"}>Night</h3>
							<span>{DailyForecasts[0].Night.IconPhrase}</span>
						</div>
					</div>
				</div>
				<div className="Favourite-futureForecast">
					<h2>Forecast</h2>
					<div className="Favourite-forecasts">
						{futureForecasts.map((future, i) => {
							const date = dayjs(future.Date).format("YYYY-MM-DD");
							const diff = dayjs(date).diff(dayjs().format("YYYY-MM-DD"), "day");
							let toDisplay = "";
							const unit = future.Temperature.Maximum.Unit;

							switch (diff) {
								case 0:
									toDisplay = "Today";
									break;
								case 1:
									toDisplay = "Tomorrow";
									break;
								default:
									toDisplay = dayjs(date).format("dddd");
									break;
							}

							return <div key={i} className="Favourite-block Favourite-block--third">
								<div className="Favourite-boxWrapper Favourite-boxWrapper--secondary">
									<h5 className={"Favourite-boxWrapperHeader"}>{toDisplay}</h5>
									<span className={"Favourite-minMaxInfo"}>Max: {future.Temperature.Maximum.Value} {unit}</span>
									<span className={"Favourite-minMaxInfo"}>Min: {future.Temperature.Minimum.Value} {unit}</span>
								</div>
							</div>
						})}
					</div>
				</div>
			</div>
			</> : <div className="Favourite-header">
				<h1>Please select favourite location to see forecast detail</h1>
			</div>}
		</div>
	)
};

export default Favourite;
