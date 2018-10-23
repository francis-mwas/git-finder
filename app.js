//init github
const github = new gitHub;
//init UI
const ui = new UI;
//search user input
const searchUser = document.getElementById('searchUser');
//add event listener

searchUser.addEventListener('keyup', (e)=>{
    const userInput = e.target.value;
    if(userInput !== ''){
        github.getUser(userInput)
        .then(data =>{
           if(data.profileData.message === 'Not Found'){
            ui.showAlert('User not found', 'alert alert-danger');
           }else{
               //show user profile
               ui.showProfile(data.profileData);
               ui.showRepos(data.repos);
           }
        });
    }else{
        //clear the profile..
        ui.clearProfile();
    }

});
