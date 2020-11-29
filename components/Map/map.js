import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import styles from './map.module.scss'

class Map extends Component {
  state = {
    viewport: {
      width: '95%',
      height: '40vh',
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 12
    }
  };
  render() {
    return (
      <ReactMapGL
        className={styles.map}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        //mapboxApiAccessToken= {process.env.googleapikey}
        mapboxApiAccessToken="pk.eyJ1IjoiYXV0b2Vjb2xlc2FpbnRsYXphcmUiLCJhIjoiY2tocnVzZnNlMGR5ZjJxbGhzNHFtZXpzbCJ9.SS42fxd-WVLk2ycjM64qQQ"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      > 
      <Marker latitude={48.8534} longitude={2.345} offsetLeft={-20} offsetTop={-10}>
      <div className={styles.marker} > </div>
      <div className={styles.pulse} > </div>
    </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;