import React from 'react'
import GoogleMapReact from 'google-map-react'

function HelpHero({ data }) {
  return (
    <div className="hero-help">
      <h1 style={{ textAlign: 'center' }}>Emergency Help</h1>

      {data.map((d) => (
        <div style={{ width: '100%', height: '300px', margin: '20px 0' }}>
          {' '}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDSU-8MXJ558cQrTjG1xwkBsTqV2dyXOs8',
            }}
            defaultCenter={d.myLoc}
            defaultZoom={18}
          >
            <h1 style={{ color: 'red' }}>{d.name}</h1>
          </GoogleMapReact>
        </div>
      ))}
    </div>
  )
}

export default HelpHero
