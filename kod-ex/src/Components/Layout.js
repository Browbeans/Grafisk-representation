import "../style/layout.css"
import Header from "./Header"
import ShowCase from "./ShowCase"
import { Switch } from "react-router"

function Layout() {
    return (
    <div className="Layout">
        <Header />
        <ShowCase />
        <Switch>
        </Switch>
    </div>
    )
}

export default Layout