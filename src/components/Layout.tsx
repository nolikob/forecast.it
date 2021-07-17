import { Link } from "react-router-dom";

export interface LayoutProps {
    children: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={"Layout"}>
            <section className={"Layout-top"}>
                <Link to={"/"}>Forecast.it</Link>
            </section>
            <main className={"Layout-wrapper"}>
                <aside className={"Layout-sideNavigation"}>
                    <Link to={"/location"}>
                        Location
                    </Link>
                    <Link to={"/favourite"}>
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
