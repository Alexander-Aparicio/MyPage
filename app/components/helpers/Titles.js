const TitleOfPages = (title,id)=>{

    const $title = document.createElement('h2')
    $title.setAttribute('class','h2 title')
    if(id){$title.setAttribute('id',id)}
    $title.textContent = title 
    return $title
}

const SubTitlesOfPages = (title,id)=>{

    const $title = document.createElement('h2')
    $title.setAttribute('class','h3 title')
    if(id){$title.setAttribute('id',id)}
    $title.textContent = title 
    return $title

}

export {TitleOfPages, SubTitlesOfPages}