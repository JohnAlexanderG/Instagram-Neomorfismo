const BASE_API = 'https://graph.instagram.com/v12.0/'
const ACCESS_TOKEN = 'IGQVJVSUViUTZArQUpfMnlyYlFsTG0zNkJDY2JMb25TQ2EtSExUTFJ3enllLWlTMWpDTXBuUTNLcVExQXdaa25WbjMxXzBDaGhySzBrMkdYUUg4WjFQZAXZAlbkNROTYzcnRpMC1nc1hHSmpJT0VjSzhLRzBnRjhwX1c2UkF3'

const username = document.getElementById('username')
const posts = document.getElementById('posts')
const photos = document.getElementById('photos')

async function getUserInfo() {
    const response = await fetch(`${BASE_API}me/?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
    const userInfo = await response.json()
    console.log(userInfo)
    username.innerHTML = userInfo.username
    posts.innerHTML = userInfo.media_count
    return userInfo
}

getUserInfo()

async function getUserMediaInfo() {
    const response = await fetch(`${BASE_API}/17841400266315115/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`)
    const userMediaInfo = await response.json()
    console.log(userMediaInfo)
    return userMediaInfo
}

getUserMediaInfo().then(media => {
    media.data.map((mediaInfo) => {
        const img = document.createElement('img')
        img.style.width = '100px'
        img.src = mediaInfo.media_url
        photos.appendChild(img)
    })
})