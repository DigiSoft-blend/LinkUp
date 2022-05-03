import { createStore } from 'vuex'

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/' 

export default createStore({
    state:{
      token: localStorage.getItem('token') || null,  
      Name: 'welcome',
      loading: false,
      pageLoader: false,
      page: true,
      user: [],
      users: [],
      posts: [],
      authUser: '',
      registeredUser: '',
      loginError: '',
      registrationError: '',
      forgotPasswordError: '',
      messageForgotPassword: '',
      likesCount: 0,
      email:'silasudofia469@gmail.com',
      password:'12345678',
      postBtnState: false,
      background:'dark',
      parentBackground:'parent-dark',
      textColor:'light',
      sideNav: 'class1',
      postLoader: false,
      notification: false,
      likes: [],
      like: [],
      userId:'',
      commentBtnState: false,
      postId:'',
      commentLoaderState: false,
      notificationText:'',
      morePost:false,
      pageNumber: 1,
      lastPage: 0,
      currentPage: '',
      backEndNotifications: []
    },
    getters:{
      getbackEndNotifications(state){
        return state.backEndNotifications
      },
      getLastPage(state){
        return state.lastPage
      },
      getMorePost(state){
        return state.morePost
      },
      getPageNumber(state){
         return state.pageNumber
      },
      getNotificationText(state){
        return state.notificationText
      },
      getCommentLoaderState(state){
        return state.commentLoaderState
      },
      getPostId(state){
        return state.postId
      },
      getCommentBtnState(state){
        return state.commentBtnState
      },
      getUserId(state){
        return state.userId
      },
      getLikes(state){
       return state.likes
      },
      getLike(state){
        return state.like
      }
      ,
      getNotificationState(state){
        return state.notification
      },
      getPostLoaderState(state){
        return state.postLoader
      },
      getPost(state){
        return state.posts
      },
      getSideNav(state){
        return state.sideNav
      },
      getBackgroundMode(state){
        return state.background
      },
      getParentBackgroundMode(state){
        return state.parentBackground
      },
      getTextColor(state){
        return state.textColor
      },
      getPostBtnState(state){
        return state.postBtnState
      },
        getPage(state){
          return state.page
        },
        getPageLoader(state){
          return state.pageLoader
        },
        getAuthUser(state){
          return state.authUser
        },
        getRegisteredUser(state){
          return state.registeredUser
        },
        getLikesCount(state){
          return state.likesCount
        },
        getForgotPasswordError(state){
          return state.forgotPasswordError
        },
        getForgotPasswordMessage(state){
          return state.messageForgotPassword
        },
        getRegistrationError(state){
          return state.registrationError
        },
        
        getLoginError(state){
          return state.loginError
        },
        getName(state){
            return state.Name
        },
        getToken(state){
            return state.token
        },
        getLoader(state){
          return state.loading
        },
        getUser(state){
          return state.user
        },
        getUsers(state){
          return state.users
        }
    },
   
    actions:{

      
      loadMorePost(context){
        axios.defaults.headers.common['Content-Type'] = 'application/json',
        axios.defaults.headers.common['Accept'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
  
      return new Promise(( resolve, reject) => {  
        axios.get('getposts?page='+context.state.pageNumber)
        .then(response => {
           const post = response.data.data
           const lastPage = response.data.meta.last_page
          //  context.state.currentPage = response.data.meta.current_page
           context.commit('setLastPage', lastPage)
           context.commit("loadMorePost", post )
           context.commit('setMorePost', false)
         
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
      })
      },

  
     
     
      AuthUser(context){
        context.state.registrationError = ''
        // context.commit('setPageLoader', true)
        axios.defaults.headers.common['Content-Type'] = 'application/json',
        axios.defaults.headers.common['Accept'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

      return new Promise(( resolve, reject) => {  
        axios.get('/authuser')
        .then(response => {
          const regUser = response.data
          context.commit('setAuthUser', regUser)
          // context.commit('setPageLoader',false)
          resolve(response)
        })
        .catch(error => {
          // context.commit('setPageLoader',false)
          reject(error)
        })
      })
    },

    Users(context){
      // context.commit('setPageLoader', true)
      axios.defaults.headers.common['Content-Type'] = 'application/json',
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    return new Promise(( resolve, reject) => {  
      axios.get('/users')
      .then(response => {
        const users = response.data.data
        context.commit('setUsers', users)
        // context.commit('setPageLoader',false)
        resolve(response)
      })
      .catch(error => {
        // context.commit('setPageLoader',false)
        console.log(error)
        reject(error)
      })
    })
  },

 


updateCurrentPost(context){
   
    axios.defaults.headers.common['Content-Type'] = 'application/json',
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

  return new Promise(( resolve, reject) => {  
    // let req1 = axios.get('getposts?page='+context.state.currentPage);
    // let req2 = axios.get('getposts?page='+context.state.currentPage);
    // let req3 = axios.get('getposts?page='+context.state.currentPage);

    axios.get('getposts?page='+context.state.currentPage)
    .then(response => {
      let post = response.data.data
     context.state.posts = post
      resolve(response)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
  })
  },

  

  
  likeComment(context, id){
   return new Promise(( resolve, reject) => { 
        let req1 =  axios.post('/likecomment/'+id);
        let req2 = axios.get('getposts?page='+context.state.pageNumber);
      axios.all([req1, req2])  
      .then(axios.spread((...responses) =>{
         const req2 = responses[1].data.data
        context.commit("updatePost",req2)
        resolve(responses)
      }))
      .catch(error => {
        console.log(error)
        reject(error)
      })
    }) 
  },


  likePost(context, id){
    return new Promise(( resolve, reject) => { 
      let req1 =  axios.post('/like/'+id);
      let req2 = axios.get('getposts?page='+context.state.pageNumber);
    axios.all([req1, req2])  
    .then(axios.spread((...responses) =>{
       const req2 = responses[1].data.data
      context.commit("updatePost",req2)
      resolve(responses)
    }))
    .catch(error => {
      console.log(error)
      reject(error)
    })
    }) 
  },

  getLike(context, id){
    return new Promise((resolve, reject) => {
      axios.get('/like/'+id)
      .then(response => {
        const like = response.data
        context.commit("setLike", like)
        console.log(context.state.getLike)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  

  getNotifications(context){
    return new Promise((resolve, reject) => {
      axios.get('unreadNotifications')
      .then(response => {
        const notification = response.data
        context.commit("setbackEndNotifications", notification)
        console.log(notification)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },

  loadLikes(context, id){
    return new Promise((resolve, reject) => {
      axios.get('/likes')
      .then(response => {
        const likes = response.data.data
        context.commit("setLikes", likes)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
    })
  },


    updatePost(context){
     
      axios.defaults.headers.common['Content-Type'] = 'application/json',
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    return new Promise(( resolve, reject) => {  
      axios.get('getposts?page='+context.state.pageNumber)
      .then(response => {
        const post = response.data.data
       
        context.commit('updatePost',post)
        context.commit('setPostLoaderState', false)
        context.commit('setNotification', true)
       
        setTimeout(()=>{
          context.commit("setNotification", false)
        },2000) 
        resolve(response)
      })
      .catch(error => {
        context.commit('setPostLoaderState', false)
        console.log(error)
        reject(error)
      })
    })
    },


    Post(context){
      context.commit('setPageLoader', true)
      axios.defaults.headers.common['Content-Type'] = 'application/json',
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

    return new Promise(( resolve, reject) => {  
      axios.get('getposts?page='+context.state.pageNumber)
      .then(response => {
        const post = response.data.data
        const lastPage = response.data.meta.last_page
        context.commit('setLastPage', lastPage)
        context.commit('setPost',post)
        context.commit('setPageLoader', false)
       
        resolve(response)
      })
      .catch(error => {
        context.commit('setPageLoader', false)
        reject(error)
      })
    })
  },

 
  addComment(context, credentials){
    
    axios.defaults.headers.common['Content-Type'] = 'application/json',
    axios.defaults.headers.common['Accept'] = 'application/json'
 
     return new Promise(( resolve, reject) => {
        let req1 =  axios.post('/comment', {
                      body: credentials.body,
                      id: credentials.id
                    });
        let req2 = axios.get('getposts?page='+context.state.pageNumber);
       axios.all([req1, req2])  
      .then(axios.spread((...responses) =>{
         const req2 = responses[1].data.data
       
        context.commit("updatePost",req2)
        context.commit('setLoader', false)
        resolve(responses)
      }))
      .catch(error => {
        console.log(error)
        context.commit('setLoader', false)
        reject(error)
      })
     })
 },
  


        signUp(context, credentials){
            
            context.state.registrationError = '',
            context.state.loginError = ''
            context.commit('setLoader', true)
            axios.defaults.headers.common['Content-Type'] = 'application/json',
            axios.defaults.headers.common['Accept'] = 'application/json'
            
          return new Promise(( resolve, reject) => {  
            axios.post('/signup', { 
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
              password_confirmation: credentials.password_confirmation,
            })
            .then(response => {
              const token = response.data.token 
              const regUser = response.data.user
              localStorage.setItem('token', token)
              context.commit('setRegisteredUser', regUser)
              context.commit('setLoader',false)
              resolve(response)
            })
            .catch(error => {
              context.commit('setLoader',false)
              const regError = error.response.data.errors
              context.commit('setRegistrationError', regError)
              reject(error)
            })
          })
        },

     

      login(context, credentials){
        context.state.loginError = ''
        context.commit('setLoader', true)
        // Tell axios the header you want
        axios.defaults.headers.common['Content-Type'] = 'application/json',
        axios.defaults.headers.common['Accept'] = 'application/json'
     
         return new Promise(( resolve, reject) => {
             axios.post('/signin', {
             email: credentials.email,
             password: credentials.password,
             })
             .then(response => {
             const token = response.data.token 
             localStorage.setItem('token', token)
             context.commit('setToken', token)
             context.commit('setLoader', false)
             resolve(response) 
             })
             .catch(error => {
              context.commit('setLoader',false)
              const rror = error.response.data.message
              context.commit('setLoginError', rror)
              reject(error)
             })
         })
     },

     
     creatPost(context, credentials){

      // context.state.pageNumber=1
    
      axios.defaults.headers.common['Content-Type'] = 'application/json',
      axios.defaults.headers.common['Accept'] = 'application/json'
   
       return new Promise(( resolve, reject) => {
          let req1 =   axios.post('/createpost', {
                          body: credentials.body,
                        })
          let req2 = axios.get('getposts');
          axios.all([req1, req2])  
          .then(axios.spread((...responses) =>{
          const req2 = responses[1].data.data
          context.commit("createPost",req2)
          context.commit('setPostLoaderState', false)
          console.log(context.state.lastPage)
          resolve(responses)
          }))
          .catch(error => {
          console.log(error)
          context.commit('setPostLoaderState', false)
          reject(error)
         })
     })
   },

       

       forgotPassword(context, credentials){
        context.state.messageForgotPassword = ''
        context.state.forgotPasswordError = ''
        context.commit('getLoader', true)
        //Tell axios the header you want
        axios.defaults.headers.common['Content-Type'] = 'application/ecmascript',
        axios.defaults.headers.common['Accept'] = 'application/json'
     
         return new Promise(( resolve, reject) => {
             axios.post('/forgot-password', {
             email: credentials.email,
             })
             .then(response => {
             const message = response.data.data.message 
             context.commit('getForgotPasswordMessage', message)
           
             resolve(response)
             context.commit('getLoader', false)
             })
             .catch(error => {
              context.commit('getLoader',false)
              const rror = error.response.data.error.fields.email[0]
              context.commit('getForgotPasswordError', rror)
              reject(error)
             })
         })
     },


     logout(context){ 
      //Tell axios the header you want
      axios.defaults.headers.common['Content-Type'] = 'application/json',
      axios.defaults.headers.common['Accept'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      // if(context.getters.loggedIn){
  
        context.commit('setLoader', true)
        
        return new Promise(( resolve, reject) => {
          axios.post('logout')
          .then(response => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            resolve(response)
            context.commit('setLoader', false)
          })
          .catch(error => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            context.commit('setLoader',false)
            reject(error)
          })
         })
      // }
    },
    
     clearRegistrationError(context){
       context.commit('clearRegError', '')
     },

     clearLoginError(context){
       context.commit('clearLoginError', '')
     },
     clearForgotPasswordError(context){
       context.commit('clearForgotPasswordError', '')
     },

     asyncIncrementLikes(context){
       context.commit('asyncIncrementLikes')
     }

    },





    mutations:{
      setPageLoader(state, payLoad){
         state.pageLoader = payLoad
      },
      setAuthUser(state, authUser){
        state.authUser = authUser
      },
      setToken(state, payloadToken){
        state.token = payloadToken
      },
      destroyToken(state){
         state.token = null
      },
      clearForgotPasswordError(state, empty){
        state.forgotPasswordError = empty
        state.messageForgotPassword = empty
      },
        clearRegError(state, empty){
          state.registrationError = empty
        },
        clearLoginError(state, empty){
          state.loginError = empty
        },
        register(state, token){
            state.token = token
        },
        setLoader(state, payLoad){
          state.loading = payLoad
        }, 
        setUser(state, user){
          state.user = user
        },
        setRegisteredUser(state, regUser){
          state.registeredUser = regUser
        },
        setLoginError(state, error){
          state.loginError = error
        },
        setRegistrationError(state, error){
          state.registrationError = error
        },
        setForgotPasswordMessage(state, message){
           state.messageForgotPassword = message
        },
        setForgotPasswordError(state, error){
          state.forgotPasswordError = error
        },
        asyncIncrementLikes(state){
          state.likesCount = state.likesCount + 1
        },
        setPage(state, payLoad){
          state.page = payLoad
        },

        postBtnState(state, payLoad){
          state.postBtnState = payLoad
        },
        setBackgroundMode(state, payLoad){
          state.background = payLoad
        },
        setParentBackgroundMode(state, payLoad){
          state.parentBackground = payLoad
        },
        setTextColor(state, payLoad){
          state.textColor = payLoad
        },
        setSideNav(state, payLoad){
          state.sideNav = payLoad
        },
        setPost(state, payLoad){
          state.posts = payLoad
        },
        setPostLoaderState(state, payLoad){
          state.postLoader = payLoad
        },
       updatePost(state, payLoad){
        state.posts = payLoad;
       },
       createPost(state, payLoad){
        state.posts = payLoad;
       },
       setNotification(state, payLoad){
         state.notification = payLoad
       }, 
      setUsers(state, payLoad){
        state.users = payLoad
      },
      setLikes(state, payLoad){
        state.likes = payLoad
      },
      setLike(state, payLoad){
        state.like = payLoad
      },
      setUserId(state, payLoad){
        state.userId = payLoad
      },
      setCommentBtnState(state, payLoad){
        state.commentBtnState = payLoad
      },
      setPostId(state, payLoad){
        state.postId = payLoad
      },
      setCommentLoaderState(state, payload){
        state.commentLoaderState = payload
      },
      setNotificationText(state, payLoad){
        state.notificationText = payLoad
      },
     setPageNumber(state){
         state.pageNumber = state.pageNumber + 1
     },

     setMorePost(state, payLoad){
       state.morePost = payLoad
     },

     loadMorePost(state, post){
       state.posts = post
     },

     setLastPage(state, lastPage){
       state.lastPage = lastPage
     },
     setbackEndNotifications(state, notifications){
       state.backEndNotifications = notifications
     },
    }
})

