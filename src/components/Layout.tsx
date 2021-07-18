import { Link } from "react-router-dom";

export interface LayoutProps {
    children: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={"Layout"}>
            <section className={"Layout-top"}>
                <Link to={"/"} className={"Layout-brand"}>Forecast.it</Link>
            </section>
            <main className={"Layout-wrapper"}>
                <aside className={"Layout-sideNavigation"}>
                    <Link to={"/location"} className={"Layout-link"}>
                        Location
                    </Link>
                    <Link to={"/favourite"} className={"Layout-link"}>
                        Favourite
                    </Link>
                </aside>
                <section className={"Layout-content"}>
                    { children }
                </section>
            </main>
        </div>
    )
}
