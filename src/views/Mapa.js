import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { data } from '../data.json'
import LocateControl from '../components/LocateControl'

export default class Mapa extends Component {
    state = {
        lat: 21.87982,
        lng: -102.296,
        data: data,
        zoom: 5,
        cheked: null
      }


    handleChange = (e) => {
        const name = e.target.name
        this.setState({
            data: data.filter(state => state.state === name),
            cheked: true ? false : true
        })

    }
        
    
    render() {
        const center = [this.state.lat, this.state.lng]
        const locateOptions = {
            position: 'topright',
            strings: {
                title: 'Show me where I am, yo!'
            },
            onActivate: () => {
            } // callback before engine starts retrieving locations
        }
        return (
            <div className="container-map">
                <Map center={center} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png"
                    />
                    {
                        this.state.data.map(marcador =>
                            <Marker position={[marcador.geolocation.latitude, marcador.geolocation.longitude]} key={marcador.id}>
                                <Popup>
                                    {marcador.state}
                                </Popup>
                            </Marker>
                        )
                    }
                    <LocateControl options={locateOptions} startDirectly />
                </Map>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="radio" name="free" id="option1" autocomplete="off" checked={this.state.cheked} onChange={this.handleChange}/> Disponible
                    </label>
                    <label className="btn btn-secondary">
                        <input type="radio" name="busy" id="option2" autocomplete="off" checked={this.state.cheked} onChange={this.handleChange}/> Ocupado
                    </label>
                </div>
               
            </div>
        );
    }
}