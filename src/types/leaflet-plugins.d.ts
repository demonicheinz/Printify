import "leaflet";
import "leaflet.awesome-markers";

declare module "leaflet" {
  namespace AwesomeMarkers {
    interface AwesomeMarkersOptions {
      icon?: string;
      prefix?: string;
      markerColor?: string;
      iconColor?: string;
      spin?: boolean;
      extraClasses?: string;
    }
  }

  namespace marker {
    function awesome(
      latlng: L.LatLngExpression,
      options?: L.MarkerOptions & L.AwesomeMarkers.AwesomeMarkersOptions,
    ): L.Marker;
  }
}
