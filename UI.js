//preparing the ui to display data
class UI{
    constructor(){
        this.profile = document.getElementById('profile');

    }
    showProfile(user){
        //console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body b-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="image-fluid mb-2" src="${user.avatar_url}" width="200px" height="200px">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary
                     btn-block mb-4"> View Profile</a>
                </div>    
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: 
                    ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: 
                    ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: 
                    ${user.followers}</span>
                    <span class="badge badge-info">Following: 
                    ${user.following}</span>
                    <br /><br />
                    <ul class="list-group">
                      <li class="list-group-item">Company: ${user.company}</li>
                      <li class="list-group-item">Website / Blog: ${user.blog}</li>
                      <li class="list-group-item">Location: ${user.location}</li>
                      <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>            
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
        
    }

    //show repose on the ui
    showRepos(repos){
        let output;
       repos.forEach(repo =>{
            output += `
             <div class="card card-body mb-2">
                <div class="row">
                   <div class="col-md-6">
                       <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                   </div>
                   <div class="col-md-6">
                   <span class="badge badge-primary">Stars: 
                   ${repo.stargazers_count}</span>
                   <span class="badge badge-secondary">Watchers: 
                   ${repo.watchers_count}</span>
                   <span class="badge badge-success">Forks: 
                   ${repo.forks_count}</span>
                   </div>
                </div>
             </div>
            `;
        });

        //output repos.
        document.getElementById('repos').innerHTML = output;

    }
    //show alert mesaage.
    showAlert(message, className){
        //cear any remaining alerts.
        this.clearAlert(); 
        //create a div
        const div = document.createElement('div');
        //create a class
        div.className = className;
        //append text
        div.appendChild(document.createTextNode(message));
        //get the parent
        const container = document.querySelector('.searchContainer');
        //get search box
        const searchBox = document.querySelector('.search');
        //insert alert 
        container.insertBefore(div, searchBox);
        //lets set the timeout for an alert to 3s..
        setTimeout(()=>{
            this.clearAlert();
        }, 3000);
    }

    //clear alert
    clearAlert(){
        const curAlert = document.querySelector('.alert');
        if(curAlert){
            curAlert.remove();
        }
    }

    //clear profile
    clearProfile(){
        this.profile.innerHTML ='';
    }
}