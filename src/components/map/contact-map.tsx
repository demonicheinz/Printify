"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  LayersControl,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet.awesome-markers/dist/leaflet.awesome-markers.css";
import L from "leaflet";
import { useEffect, useRef } from "react";
import type { ContactInfo } from "@/data";

// Import plugins
import "leaflet.awesome-markers";
// Import Awesome Markers
import "leaflet-fullscreen";

// Deklarasi tipe untuk Awesome Markers
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

    function icon(options: AwesomeMarkersOptions): L.Icon;
  }

  interface LeafletStatic {
    AwesomeMarkers: typeof AwesomeMarkers;
  }

  // Deklarasi tipe untuk Fullscreen control
  namespace Control {
    interface FullscreenOptions extends L.ControlOptions {
      title?: {
        false: string;
        true: string;
      };
      forceSeparateButton?: boolean;
      forcePseudoFullscreen?: boolean;
      fullscreenElement?: HTMLElement | null;
    }

    class Fullscreen extends L.Control {
      constructor(options?: FullscreenOptions);
    }
  }

  interface LeafletStatic {
    Control: {
      Fullscreen: typeof Control.Fullscreen;
    };
  }
}

/**
 * Panduan Penggunaan Leaflet Awesome Markers:
 *
 * 1. Pastikan Font Awesome sudah diimpor di layout.tsx
 * 2. Gunakan nama ikon dari Font Awesome tanpa awalan 'fa-'
 *    Contoh: 'location-dot', 'square-parking', 'utensils'
 * 3. Pilihan warna marker:
 *    - red, darkred, orange, green, darkgreen, blue, purple, darkpurple, cadetblue
 * 4. Prefix:
 *    - 'fa' untuk Font Awesome 6
 *    - 'glyphicon' untuk Bootstrap Glyphicons
 *    - 'ion' untuk Ionicons
 *
 * Referensi ikon Font Awesome: https://fontawesome.com/icons
 */

// Mengatasi masalah ikon default Leaflet
const defaultIcon = L.icon({
  iconUrl: "/images/contact/map/marker-icon.png",
  shadowUrl: "/images/contact/map/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 35],
  popupAnchor: [1, -30],
  shadowSize: [41, 41],
});

// Membuat custom marker untuk lokasi
const customIcon = L.icon({
  iconUrl: "/images/contact/map/marker-icon-2x.png", // Menggunakan marker dengan resolusi tinggi
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -45],
});

// Membuat Awesome Marker
// @ts-ignore - Mengabaikan error tipe untuk AwesomeMarkers
const awesomeMarker = L.AwesomeMarkers.icon({
  icon: "print", // Nama ikon dari Font Awesome
  prefix: "fa", // Prefix untuk Font Awesome (fa untuk Font Awesome 6)
  markerColor: "blue", // Warna marker: red, darkred, orange, green, darkgreen, blue, purple, darkpurple, cadetblue
  iconColor: "white", // Warna ikon
  spin: false, // Apakah ikon berputar
});

interface MapProps {
  position: [number, number];
  zoom: number;
  contactInfo?: ContactInfo;
}

// Komponen untuk menambahkan tombol fullscreen
function FullscreenButton() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Hapus tombol fullscreen yang mungkin sudah ada
    const existingButtons = document.querySelectorAll(".leaflet-control-fullscreen");
    existingButtons.forEach((button) => {
      button.remove();
    });

    try {
      if (L.Control.Fullscreen) {
        console.log("Fullscreen control is available");

        const fullscreenControl = new L.Control.Fullscreen({
          title: {
            false: "Tampilkan Layar Penuh",
            true: "Keluar dari Layar Penuh",
          },
          position: "topleft",
          fullscreenElement: map.getContainer(),
        });

        map.addControl(fullscreenControl);
        console.log("Fullscreen control added to map");

        // Pastikan tombol fullscreen terlihat
        setTimeout(() => {
          const fullscreenButton = document.querySelector(".leaflet-control-fullscreen");
          if (fullscreenButton && fullscreenButton instanceof HTMLElement) {
            fullscreenButton.style.display = "block";
            fullscreenButton.style.visibility = "visible";
            fullscreenButton.style.opacity = "1";
            console.log("Fullscreen button visibility enforced");
          } else {
            console.error("Fullscreen button not found after map initialization");
          }
        }, 500);
      }
    } catch (error) {
      console.error("Error adding fullscreen control:", error);
    }

    return () => {
      // Cleanup jika diperlukan
    };
  }, [map]);

  return null;
}

export default function ContactMap({ position, zoom, contactInfo }: MapProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Mengatasi masalah ikon default
    L.Marker.prototype.options.icon = defaultIcon;

    if (mapRef.current) {
      // Hapus scale control yang mungkin sudah ada
      const existingScales = document.querySelectorAll(".leaflet-control-scale");
      existingScales.forEach((scale) => {
        scale.remove();
      });

      // Refresh map dan set view
      setTimeout(() => {
        mapRef.current?.invalidateSize();
        mapRef.current?.setView(position, zoom);
      }, 100);
    }
  }, [position, zoom]);

  // Styling untuk popup
  useEffect(() => {
    // Menambahkan CSS untuk styling popup
    const style = document.createElement("style");
    style.innerHTML = `
      .leaflet-popup-content-wrapper {
        border-radius: 8px;
        padding: 0;
      }
      .leaflet-popup-content {
        margin: 12px 16px;
        line-height: 1.5;
      }
      .leaflet-popup-tip {
        background-color: white;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      className="z-0"
      ref={mapRef}
      zoomControl={false}
    >
      <FullscreenButton />
      <ZoomControl position="bottomright" />
      <LayersControl position="topright">
        <LayersControl.BaseLayer
          checked
          name="OpenStreetMap"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="dark-mode-compatible"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Satelit">
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            className="satellite-layer"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Marker
        position={position}
        icon={awesomeMarker}
      >
        <Popup>
          <div className="font-bold text-base mb-1">Printify</div>
          {contactInfo ? (
            <div className="text-sm">
              {contactInfo.address},
              <br />
              {contactInfo.city}, {contactInfo.postalCode}
              <br />
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="text-primary hover:underline mt-2 inline-block"
              >
                {contactInfo.phone}
              </a>
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
              >
                Petunjuk Arah
              </a>
            </div>
          ) : (
            <div className="text-sm">
              Jl. Al Huda Sirau,
              <br />
              Kecamatan Kemranjen,
              <br />
              Kabupaten Banyumas, 53194
              <br />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
              >
                Petunjuk Arah
              </a>
            </div>
          )}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
