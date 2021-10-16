import React from 'react'
import GoogleMapReact from 'google-map-react'

function Map({lat,lng}) {
  const AnyReactComponent = ({ text }) => <div>{text}</div>
    return (
        <div>  
            <div id="user-map" className="user-map" style={{ height: '30vh', width: '33%' }}>
      {' '}
      {myLoc && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBnqTH6Fp4WVRJt9zDxgQpG4VNSS85UKsM' }}
          defaultCenter={myLoc}
          defaultZoom={18}
        >
          <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
        </GoogleMapReact>
      )}
     </div>
            
        </div>
    )
}

export default Map
