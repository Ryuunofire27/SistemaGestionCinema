import React from 'react';
import { AppContext } from '../AppContext';

export class EmployeeRegister extends React.PureComponent{

  photo = React.createRef();

  state = {
    photo: null,
    thumbnail: ""
  }

  handleUploadPhoto = () => {
    cloudinary.openUploadWidget({
      cloud_name: 'di9ypoqyl', max_files: 1, multiple: false,
      upload_preset: 'aptpylfv'
    }, (err, res) => {
      if(err) return console.log(err);
      this.setState({ photo: res[0].secure_url, thumbnail: res[0].thumbnail_url })
    });
  }
  render(){
    return (<AppContext.Consumer> 
      {(app) => (
        <div className="register">
          <div className="register-header">
            {!this.state.photo ? <i className="fa fa-user-o login-header-icon" aria-hidden="true"></i>
            : <img src={this.state.thumbnail}/>}
          </div>
          <div className="register-body">
            <form onSubmit={app.fn.registerController}>
              <div id="upload_widget_opener" onClick={this.handleUploadPhoto}>Subir imagen
              </div>
              <input type="hidden" name="photo" value={this.state.thumbnail}/>
              <div>
                <label>Nombres</label>
                <input type="text" name="name" required/>
              </div>
              <div>
                <label>Apellido Paterno</label>
                <input type="text" name="apePat" required/>
              </div>
              <div>
                <label>Apellido Materno</label>
                <input type="text" name="apeMat" required/>
              </div>
              <div>
                <label>Cine</label>
                <select name="cine" defaultValue="0">
                  <option value="0">CINES</option>
                  {app.state.cines.map(c => <option value={c.codigo}>{c.nombre}</option>)}
                </select>
              </div>
              <div>
                <label>Dni</label>
                <input type="text" name="dni" required/>
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" required/>
              </div>
              <div>
                <label>Re-Password</label>
                <input type="password" name="repassword" required/>
              </div>
              <input type="submit" value="Registrarse"/>
            </form>
          </div>
        </div>
      )}
    </AppContext.Consumer>
    );
  }
}