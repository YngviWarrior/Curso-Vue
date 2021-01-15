import Vue from 'vue'
import Axios from 'axios'

// Global
// Axios.defaults.baseURL = 'https://curso-vue-5b975-default-rtdb.firebaseio.com/'

// Setar Headers em axios Global
// Axios.defaults.headers.common['Authorization'] = 'abc123'
// Axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = Axios
    // Na instancia, o baseUrl vai ser apenas dessa instancia.
    Vue.prototype.$http = Axios.create({
      baseURL: 'https://curso-vue-5b975-default-rtdb.firebaseio.com/',
      headers: {
        get: {
          //Apenas no get
          "Authorization": '123',
        },
        //Todos os requests enviaram o Authorization
        "Authorization" : "123"
      }
    })
    // Interceptar a requisição no momento do envio.
    Vue.prototype.$http.interceptors.request.use(config => {
      // console.log(config.method)
      // if(config.method == 'post') { //Converte post para put, na hora do envio.
      //   config.method = 'put'
      // }
      return config
    }, error => Promise.reject(error))

    // Vue.prototype.$http.interceptors.response.use(res => {
    //   const array = []
    //   for(let chave in res.data) {
    //     array.push({id: chave, ...res.data[chave]}) // Espalha todos os atributos no array
    //   }
    //    Não funciona como na videoaula.
    //   res.data = array
    //   return res
    // }, error => Promise.reject(error))
  }
})