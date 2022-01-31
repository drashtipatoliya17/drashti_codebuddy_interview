// level 2

const getUsers=async()=> {
    Promise.all(getUser(), getProfile(), getPosts())
    .then((doc)=>{
        const [user,profile,p,...userConfig]=doc;
        const userProfile = {
            user: user,
            profile: profile,
            posts: p
          };
        return userProfile;
    })
  }
