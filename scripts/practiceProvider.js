const applicationState = {
    completeFig: {},
    completeFigParts:{},
}

export const getCompleteFig = () => {
    return fetch("https://rebrickable.com/api/v3/lego/minifigs/fig-000073/?key=67defb55cb3d7d95d714dbb8be7e2fe9")
    .then(res => res.json())
    .then(
        (fig) => {
            console.log(fig)
            applicationState.completeFig = fig 
        }
    )
}

export const getCompleteFigParts = () => {
    return fetch("https://rebrickable.com/api/v3/lego/minifigs/fig-000073/parts/?key=67defb55cb3d7d95d714dbb8be7e2fe9")
    .then(res => res.json())
    .then(
        (figParts) => {
            applicationState.completeFigParts = figParts
        }
    )
}
export const practice = () => {
    

        let htmlString = `<div class="set"> Complete Fig: ${applicationState.completeFig.name}   <img src = "${applicationState.completeFig.set_img_url}"/>`
htmlString += `<div class="part">`
        for (const result of applicationState.completeFigParts.results) {
            htmlString += `<div class="part"> Fig Part: ${result.part.name}<img src ="${result.part.part_img_url}"/> </div>` 
        }
        htmlString+=`</div>`
        
        return htmlString
        }


