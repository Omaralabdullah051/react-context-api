import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../Contexts/themeContext";

export default function Content() {
    return (
        <div>
            <h1>This is a Content</h1>
            <Counter>
                {(count, handleEvent) => {
                    return <ThemeContext.Consumer>{({ theme }) => <HoverCounter count={count} handleEvent={handleEvent} theme={theme} />}</ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    )
}