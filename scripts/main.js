import { display } from "./display.js"
import { getCompleteFigParts, getCompleteFig } from "./practiceProvider.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    Promise.all([getCompleteFig(), getCompleteFigParts()])
    .then(
        () => {
            mainContainer.innerHTML = display()
        }
    )
}
render()


