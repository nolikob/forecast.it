import * as dayjs from "dayjs";
import { forecast1day, forecast5days, locations } from "../static";

const Favourite = (): JSX.Element => {
	const { Headline, DailyForecasts } = forecast1day;
	const location = locations[0];
	const min = DailyForecasts[0].Temperature.Minimum;
	const max = DailyForecasts[0].Temperature.Maximum;
	const futureForecasts = forecast5days.DailyForecasts;

	return (
		<div className={"Favourite"}>
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
		</div>
	)
};

export default Favourite;
