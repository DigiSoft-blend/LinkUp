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
      likes: 0,
      userId:'',
      commentBtnState: false,
      postId:'',
      commentLoaderState: false,
      notificationText:''
    },
    getters:{
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
        const users = response.data.users
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

  likePost(context, id){
    return new Promise(( resolve, reject) => { 
      axios.post('/like/'+id)
      .then(response => {
        const post = response.data.data
        context.commit('updatePost', post)
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
      axios.post('/likecomment/'+id)
      .then(response => {
        const post = response.data.data
        context.commit('updatePost', post)
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
    }) 
  },

  getLikes(context, id){
    return new Promise((resolve, reject) => {
      axios.get('/likes/'+id)
      .then(response => {
        const likes = response.data
        // context.commit("setLikes", likes)
        console.log(likes)
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
      axios.get('getposts')
      .then(response => {
        const post = response.data.data
        context.commit('updatePost', post)
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
      axios.get('getposts')
      .then(response => {
        const post = response.data.data
        context.commit('setPost', post)
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
    // context.commit('setLoader', true)
    // Tell axios the header you want
    axios.defaults.headers.common['Content-Type'] = 'application/json',
    axios.defaults.headers.common['Accept'] = 'application/json'
 
     return new Promise(( resolve, reject) => {
         axios.post('/comment', {
          body: credentials.body,
          id: credentials.id
         })
         .then(response => {
         console.log(response)
        //  context.commit('setLoader', false)
         resolve(response) 
         })
         .catch(error => {
           console.log(error)
          // context.commit('setLoader',false)
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

      // context.commit('setLoader', true)
      // Tell axios the header you want
      axios.defaults.headers.common['Content-Type'] = 'application/json',
      axios.defaults.headers.common['Accept'] = 'application/json'
   
       return new Promise(( resolve, reject) => {
           axios.post('/createpost', {
            body: credentials.body,
           })
           .then(response => {
           console.log(response)
          //  context.commit('setLoader', false)
           resolve(response) 
           })
           .catch(error => {
             console.log(error)
            // context.commit('setLoader',false)
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
         state.posts = payLoad
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
    }
})

