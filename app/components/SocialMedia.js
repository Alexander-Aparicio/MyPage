const SocialMedia = ()=>{

    const d = document

    const container = d.createElement('div')
    container.setAttribute('class','socialMedia boxShadowStrong')

    const socialNetworks = [

        {redSocial:'Github', id:''},
        {redSocial:'Facebook', id:''},
        {redSocial:'Instagram', id:''},
        {redSocial:'WhatsApp', id:'924998093'}

    ]

    const socialFragment = d.createDocumentFragment()

    socialNetworks.forEach((el)=>{

        const enlace = d.createElement('a')
        enlace.setAttribute('href', `${el.id}`)
        
        const card = d.createElement('figure')
        card.setAttribute('class','cardSocial card')

        const img = d.createElement('img')
        img.setAttribute('class','imgSocial imgW')
        img.setAttribute('src',`app/assets/logos-svg/${el.redSocial}.svg`)

        const name = d.createElement('figcaption')
        name.setAttribute('class','figc')
        name.textContent = `${el.redSocial}`

        card.appendChild(img)
        card.appendChild(name)

        enlace.appendChild(card)
        socialFragment.appendChild(enlace)

    })

    container.appendChild(socialFragment)

    return container

}

export { SocialMedia }