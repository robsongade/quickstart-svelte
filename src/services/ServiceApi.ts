import { repositories } from "@src/services/repositories";
const user = {
    "login": "robsongade",
    "id": 69439752,
    "node_id": "MDQ6VXNlcjY5NDM5NzUy",
    "avatar_url": "https://avatars.githubusercontent.com/u/69439752?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/robsongade",
    "html_url": "https://github.com/robsongade",
    "followers_url": "https://api.github.com/users/robsongade/followers",
    "following_url": "https://api.github.com/users/robsongade/following{/other_user}",
    "gists_url": "https://api.github.com/users/robsongade/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/robsongade/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/robsongade/subscriptions",
    "organizations_url": "https://api.github.com/users/robsongade/orgs",
    "repos_url": "https://api.github.com/users/robsongade/repos",
    "events_url": "https://api.github.com/users/robsongade/events{/privacy}",
    "received_events_url": "https://api.github.com/users/robsongade/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Robson Gomes",
    "company": null,
    "blog": "https://robsongomes.com.br",
    "location": "Brazil",
    "email": null,
    "hireable": null,
    "bio": "Full Stack Developer",
    "twitter_username": null,
    "public_repos": 52,
    "public_gists": 1,
    "followers": 1,
    "following": 0,
    "created_at": "2020-08-09T23:46:03Z",
    "updated_at": "2022-11-06T04:00:42Z"
  }

export const ServiceApi = {
    Repositories : () => {
        return repositories
    },
    User : () => {
        return user
    },
    Techs : () => {
        return [{
            name : "HTML"
        },{
            name : "CSS"
        },{
            name : "PHP"
        },{
            name : "JavaScript"
        },{
            name : "JQuery"
        },{
            name : "Node.js"
        },{
            name : "AngularJs"
        },{
            name : "CodeIginter"
        },{
            name : "Laravel"
        },{
            name : "AngularJs"
        },{
            name : "Node.JS"
        },{
            name : "React Native"
        },{
            name : "C#"
        },{
            name : "Python"
        },{
            name : "DJango"
        },{
            name : "VB6"
        },{
            name : "Java"
        },{
            name : "Engine Unity 3d"
        },{
            name : "Mysql"
        },{
            name : "Sql Server"
        },{
            name : "MongoDB"
        },{
            name : "postgreSQL"
        },{
            name : "ApiRest"
        },{
            name : "WebSocket"
        },{
            name : "Soap"
        },{
            name : "Docker"
        },{
            name : "Kubernetes"
        },{
            name : "Git"
        },{
            name : "SVN"
        }]
    }
}