import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = () => (
  <div>
    <img src="./marker.png" alt="" width={50} height={50} />
  </div>
)

function HelpHero({ data }) {
  return (
    <div className="hero-help" id="hero-help">
      <h1 style={{ textAlign: 'center' }}>Emergency Help</h1>

      {data.map((d) => (
        <div style={{ width: '50vw', height: '400px', margin: '20px 0' }}>
          {' '}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDSU-8MXJ558cQrTjG1xwkBsTqV2dyXOs8',
            }}
            defaultCenter={d.myLoc}
            defaultZoom={18}
          >
            <AnyReactComponent
              lat={d.myLoc.lat}
              lng={d.myLoc.lng}
              text="My Marker"
            />
          </GoogleMapReact>
          <button>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${d.myLoc.lat},${d.myLoc.lng}`}
            >
              MAP
            </a>
          </button>
        </div>
      ))}
    </div>
  )
}

export default HelpHero
