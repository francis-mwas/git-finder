class gitHub {
    constructor(){
      this.client_id = '36c64aea9d3788d13049';//user id
      this.client_secret = 'd2b935da32d3f860b81d3ca65912bc4d0d8e8627';//api key
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }

     async getUser(user){
     const pResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?
     client_secret=${this.client_secret}`);

     const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
     client_id=${this.client_id}?client_secret=${this.client_secret}`);

        const profileData = await pResponse.json();
        const repos = await reposResponse.json();
       
        return {
            profileData,
            repos
        }
    }
}


