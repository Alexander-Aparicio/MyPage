import { App } from "./App.js"
import { Footer } from "./components/Footer.js"
import { Header } from "./components/Header.js"

document.addEventListener('DOMContentLoaded', ()=>{
    Header()
    App()
    Footer()
})

window.addEventListener('hashchange', App)
