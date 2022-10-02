
// Github api "https://api.github.com/"


const url = "https://api.github.com/",
      userInput = document.getElementById('input')
      btnSearch = document.getElementById('submit')
      fullName = document.getElementById('name')
      userName = document.getElementById('user')
      dateJoined = document.getElementById('date')
      bioDate = document.getElementById('bio')
      avatar = document.getElementById('avatarimg')
      repository = document.getElementById('repos')
      followers = document.getElementById('followers')
      following = document.getElementById('following')
      Userlocation = document.getElementById('location')
      githubUrl = document.getElementById('page')
      twitter = document.getElementById('twitter')
      company = document.getElementById('company')
      noResultSearch = document.getElementById('no-results')

    
     // style properties 
      githubUrl.style.width = '90%'
      githubUrl.style.fontWeight = 'bold'
      noResultSearch.style.display = "none"


const getUser = (user) =>{

fetch(`${url}users/${user}`)
    .then(response => response.json())
    .then(json => {

      console.log(json)


        fullName.innerHTML = `${json.name}`
        userName.innerHTML = `@${json.login}`
        dateJoined.innerHTML = `"joined:" ${json.created_at.split("T").shift()}`
        bioDate.innerHTML = `${json.bio}`
        bioDate.innerHTML = `${json.bio}`
        avatar.innerHTML = `<img id="avatar" src='${json.avatar_url}'/>`
        repository.innerHTML = `${json.public_repos}`
        followers.innerHTML = `${json.followers}`
        following.innerHTML = `${json.following}`
        Userlocation.innerHTML = `${json.location}`
        githubUrl.innerHTML = `${json.url}`
        twitter.innerHTML = `${json.twitter_username}`
        company.innerHTML = `${json.company}`

        let formValidation = () =>{
            if (json.message == "Not Found") {
                noResultSearch.style.display = "block"
                console.log("empty");
            }else{
                noResultSearch.style.display = "none"
            }
        }
        formValidation()
        
    })
}



    btnSearch.onclick = () => getUser(userInput.value)














