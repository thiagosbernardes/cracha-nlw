const linksSocialMedia = {
  github: 'thiagosbernardes',
  youtube: 'UCkadinx_5mccDCx1dnJOHOA',
  facebook: 'thiago.bernardes.545',
  instagram: 'thiagosbernardes930',
  twitter: '@s_thiagao'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
