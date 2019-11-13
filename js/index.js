function showProfile () {
    fetch("https://api.github.com/users/SutantoAdiNugroho")
    .then(res => {
        return res.json();
    })
    .then(data => {

        let username = data.login
        let profileImage = data.avatar_url
        let followerMe = data.followers
        let followingMe = data.following
        let createTime = data.created_at

        //text username and create time
        var usernameNode = document.createTextNode(username)
        var timeCreateNode = document.createTextNode(createTime)
        var userNode = document.createElement("h3") 
        var timeNode = document.createElement("span")
        var element = document.getElementById("username")

        element.className = "span3 well"
        timeNode.className = "badge badge-secondary"

        userNode.appendChild(usernameNode)
        element.appendChild(userNode)
        timeNode.appendChild(timeCreateNode)
        element.appendChild(timeNode)
        

        //image profile
        document.getElementById("image-profile").src = profileImage;
        
        //show follower and following
        var spanFollower = document.getElementById("badge-follower")
        spanFollower.textContent = followerMe

        var spanFollowing = document.getElementById("badge-following")
        spanFollowing.textContent = followingMe

    })
    .catch(error => {
        console.log(error, "error")
    })
}

function showFollower() {
    fetch("https://api.github.com/users/SutantoAdiNugroho/followers")
    .then(res => {
        return res.json();
    })
    .then(data => {
        let list = document.getElementById("list")
        data.map(({login, avatar_url, type})=> {
            let li = document.createElement("h3")
            let imageProfileList = document.createElement("img")
            var spanTypeUser = document.createElement("span")
            let listContainer = document.createElement("div")
            let titleList = document.createTextNode("@"+login)
            let typeUser = document.createTextNode(type)

            spanTypeUser.className = "badge badge-secondary"
            listContainer.className = "span3 well"
            imageProfileList.setAttribute("src", avatar_url)
            imageProfileList.style.width = "140px"
            imageProfileList.style.height = "140px"
            imageProfileList.className = "img-circle"

            spanTypeUser.appendChild(typeUser)
            li.appendChild(titleList)
            listContainer.appendChild(imageProfileList)
            listContainer.appendChild(li)
            listContainer.appendChild(spanTypeUser)
            list.appendChild(listContainer)
        })
    })
    .catch(error => {
        console.log(error, "error")
    })
}

function showFollowing() {
    fetch("https://api.github.com/users/SutantoAdiNugroho/following")
    .then(res => {
        return res.json();
    })
    .then(data => {
        let list = document.getElementById("listFollowing")
        data.map(({login, avatar_url, type})=> {
            let li = document.createElement("h3")
            let imageProfileList = document.createElement("img")
            var spanTypeUser = document.createElement("span")
            let listContainer = document.createElement("div")
            let titleList = document.createTextNode("@"+login)
            let typeUser = document.createTextNode(type)

            listContainer.className = "span3 well"
            spanTypeUser.className = "badge badge-secondary"
            imageProfileList.setAttribute("src", avatar_url)
            imageProfileList.style.width = "140px"
            imageProfileList.style.height = "140px"
            imageProfileList.className = "img-circle"

            spanTypeUser.appendChild(typeUser)
            li.appendChild(titleList)
            listContainer.appendChild(imageProfileList)
            listContainer.appendChild(li)
            listContainer.appendChild(spanTypeUser)
            list.appendChild(listContainer)
        })
    })
    .catch(error => {
        console.log(error, "error")
    })
}

showProfile()
showFollower()
showFollowing()
