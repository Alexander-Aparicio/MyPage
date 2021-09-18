const Footer = ()=>{

    const d = document
    const $footer = d.getElementById('footer')
    $footer.setAttribute('class','flex footer')
    const author = d.createElement('p')
    author.setAttribute('class','footerAuthor')
    author.textContent = 'Alexander-Aparicio'

    $footer.appendChild(author)

    return $footer

}

export { Footer }