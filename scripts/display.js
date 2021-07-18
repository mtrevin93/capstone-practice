import { practice } from "./practiceProvider.js"

export const display = () => {

    const htmlString = `
    <h1> Lego Practice</h1>
    <section class="Lego">
    ${practice()}
    </section>
    `
    return htmlString
}