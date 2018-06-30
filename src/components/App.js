import React from 'react';
import { AppContext } from './AppContext';
import { Header } from './header/Header';
import { Content } from './content/Content';
import { Footer } from './footer/Footer';
import Axios from 'axios';
import qs from 'qs';
import { Modal } from './content/Modal';

const cloudinaryConfig = {
  cloud_name: 'di9ypoqyl',
  api_key: '832963352331166',
  api_secret: 'M8UNKmq22zb9uydzTs4ECyzsDBA'
};

const base = "http://localhost:8080/SistemaCinema";
const axios = Axios.create({
  baseURL: base,
  timeout: 5000
});


class App extends React.Component{
  
  state = {
    user: null,
    cines: null,
    movies: null,
    cities: null,
    candies: null,
    modal: null
  };

  componentWillMount(){
    this.setState({
      user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem("user")) : null,
      cines: sessionStorage.getItem('cines') ? JSON.parse(sessionStorage.getItem("cines")) : null,
      cities: sessionStorage.getItem("movies") ? JSON.parse(sessionStorage.getItem("movies")) : null,
      candies: sessionStorage.getItem("candies") ? JSON.parse(sessionStorage.getItem("candies")) : null,
      movies: sessionStorage.getItem("movies") ? JSON.parse(sessionStorage.getItem("movies")) : null
    });
  }

  fn = {
    closeModal: () => {
      this.setState({ modal: null });
    },
    getHome: () => {
      if(!this.state.cines && !this.state.movies && !this.state.cities && !this.state.candies)
        axios
          .get(`/Home`)
          .then((res) => {
            console.log(res.data);
            this.setState({
              cines: res.data.cines,
              movies: res.data.movies,
              cities: res.data.cities,
              candies: res.data.candies
            });
            sessionStorage.setItem("cines", JSON.stringify(res.data.cines));
            sessionStorage.setItem("movies", JSON.stringify(res.data.peliculas));
            sessionStorage.setItem("cities", JSON.stringify(res.data.ciudades));
            sessionStorage.setItem("candies", JSON.stringify(res.data.dulces));
          })
          .catch(err => console.log(err));
    },
    loginController: (e) => {
      e.preventDefault();
      const form = {
        user: e.target.user.value,
        password: e.target.password.value
      }
      axios
        .post(`/api/users/login`, qs.stringify(form))
        .then((res) => {
          console.log(res.data);
          if(res.data.err) return this.setState({ modal: err.error })
          this.setState({ user: res.data, modal: 'Inicio de sesion exitoso' });
          sessionStorage.setItem("user", JSON.stringify(res.data));

        })
        .catch(err => this.setState({ modal: err.response.data.error }));
    },
    logoutController: (e) => {
      this.setState({ user: null });
      sessionStorage.removeItem("user");
    },
    registerController: (e) => {
      e.preventDefault();
      const password = e.target.password.value;
      const repassword = e.target.repassword.value;
      if(password == repassword){
        const form = {
          name: e.target.name.value,
          apePat: e.target.apePat.value,
          apeMat: e.target.apeMat.value,
          dni: e.target.dni.value,
          password: e.target.password.value
        }
        if(e.target.photo){
          if(e.target.photo.value == "") return this.setState({ modal: 'Es necesaria la foto' });
          form.photo = e.target.photo.value;
          if(e.target.cine.value == 0) return this.setState({ modal: 'Es necesario el cine'});
          form.cine = e.target.cine.value;
        }
        return axios
          .post('/api/users',qs.stringify(form))
          .then((res) => {
            console.log(res.data);
            if (res.data.err) return this.setState({ modal: res.data.err});
            this.setState({ user: res.data });
            if (!e.target.photo) sessionStorage.setItem("user",JSON.stringify(res.data));
            this.setState({ modal: 'Registro exitoso'});
          })
          .catch(err => {
            console.log(err);
            this.setState({ modal: err.response.data.error })
          });
      }else{
        alert("El password y el repassword no son iguales");
      }
    },
    getCines: () => {
      if(!this.state.cines)
        axios
          .get(`/Cine`)
          .then((res) => {
            this.setState({
              cines: res.data.cines,
            });
            sessionStorage.setItem("cines", JSON.stringify(res.data.cines));
          })
          .catch(err => this.setState({modal: err.err}));
    },
    getFilter: (e) => {
      const childrens = [...e.target.children];
      const filter = {};
      childrens.map((c) => {
        filter[c.name] = c.value;
      });
      console.log(filter);
    }
  }
  
  render(){
    return (
      <AppContext.Provider value={{state: this.state, fn: this.fn}}>
        {this.state.modal && <Modal/>}
        <Header/>
        <Content/>
        <Footer/>
      </AppContext.Provider>
    );
  }
}

export default App;