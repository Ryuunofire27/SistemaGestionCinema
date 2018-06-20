import React from 'react';

export const Promociones = (props) => {
  return (
    <div className="promociones">
      <div className="promocion">
        <div className="promocion-img">
          <img src="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/ItemGraphic/499?allowPlaceHolder=true"/>
        </div>
        <div className="promocion-body">
          <div className="promocion-title">Combo 3L Agrandado</div>
          <span className="promocion-description">1 Canchita Súper Gigante + 3 Bebidas Medianas (21oz)</span>
        </div>
        <div className="promocion-footer">
          <button className="btn-comprar">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp; Comprar
          </button>
        </div>
      </div>
      <div className="promocion">
        <div className="promocion-img">
          <img src="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/ItemGraphic/499?allowPlaceHolder=true"/>
        </div>
        <div className="promocion-body">
          <div className="promocion-title">Combo 3L Agrandado</div>
          <span className="promocion-description">1 Canchita Súper Gigante + 3 Bebidas Medianas (21oz)</span>
        </div>
        <div className="promocion-footer">
          <button className="btn-comprar">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp; Comprar
          </button>
        </div>
      </div>
      <div className="promocion">
        <div className="promocion-img">
          <img src="https://cineplanetstatic.azureedge.net/CDN/media/entity/get/ItemGraphic/499?allowPlaceHolder=true"/>
        </div>
        <div className="promocion-body">
          <div className="promocion-title">Combo 3L Agrandado</div>
          <span className="promocion-description">1 Canchita Súper Gigante + 3 Bebidas Medianas (21oz)</span>
        </div>
        <div className="promocion-footer">
          <button className="btn-comprar">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp; Comprar
          </button>
        </div>
      </div>
      {/*
        props.promociones.map((p) => {
          return (
            <div className="promocion">
              <div className="promocion-img">
                <img src={p.img}/>
              </div>
              <div className="promocion-body">
                <div className="promocion-title">{p.title}</div>
                <span className="promocion-description">{p.description}</span>
              </div>
              <div className="promocion-footer">
                <button className="btn-comprar">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp; Comprar
                </button>
              </div>
            </div>
          )
        })*/
      }
    </div>
  )
}