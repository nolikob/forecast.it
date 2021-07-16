import { Link } from "react-router-dom";

export interface LayoutProps {
    children: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <section>
                <Link to={"/"}>Forecast.it</Link>
            </section>
            <main>
                <aside>
                    <Link to={"/location"}>
                        Location
                    </Link>
                    <Link to={"/favourite"}>
                        Favourite
                    </Link>
                </aside>
                <section>
                    { children }
                </section>
            </main>
        </>
    )
}
