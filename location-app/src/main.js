import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import OpacityControl from "maplibre-gl-opacity";
import "maplibre-gl-opacity/dist/maplibre-gl-opacity.css";

const map = new maplibregl.Map({
  container: "map",
  zoom: 5,
  center: [138, 37],
  minZoom: 5,
  maxZoon: 18,
  maxBounds: [122, 20, 154, 50],
  style: {
    version: 8,
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        maxzoom: 19,
        tileSize: 256,
        attribution:
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
      },
      hazard_flood: {
        type: "raster",
        tiles: [
          "https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png",
        ],
        minzoom: 2,
        maxzoom: 17,
        tileSize: 256,
        attribution:
          '<a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a>',
      },
      hazard_haightide: {
        type: "raster",
        tiles: [
          "https://disaportaldata.gsi.go.jp/raster/03_hightide_l2_shinsuishin_data/{z}/{x}/{y}.png",
        ],
        minzoom: 2,
        maxzoom: 17,
        tileSize: 256,
        attribution:
          '<a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a>',
      },
      hazard_tsunami: {
        type: "raster",
        tiles: [
          "https://disaportaldata.gsi.go.jp/raster/04_tsunami_newlegend_data/{z}/{x}/{y}.png",
        ],
        minzoom: 2,
        maxzoom: 17,
        tileSize: 256,
        attribution:
          '<a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a>',
      },
      hazard_doseki: {
        type: "raster",
        tiles: [
          "https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki/{z}/{x}/{y}.png",
        ],
        minzoom: 2,
        maxzoom: 17,
        tileSize: 256,
        attribution:
          '<a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a>',
      },
      hazard_kyukeisya: {
        type: "raster",
        tiles: [
          "https://disaportaldata.gsi.go.jp/raster/05_kyukeishakeikaikuiki/{z}/{x}/{y}.png",
        ],
        minzoom: 2,
        maxzoom: 17,
        tileSize: 256,
        attribution:
          '<a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a>',
      },
      hazard_jisuberi: {
        type: "raster",
        tiles: [
          "https://disaportaldata.gsi.go.jp/raster/05_jisuberikeikaikuiki/{z}/{x}/{y}.png",
        ],
        minzoom: 2,
        maxzoom: 17,
        tileSize: 256,
        attribution:
          '<a href="https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html">ハザードマップポータルサイト</a>',
      },
      skhb: {
        type: "vector",
        tiles: [
          `${location.href.replace("/index.html", "")}/skhb/{z}/{x}/{y}.pbf`,
        ],
        minzoom: 5,
        maxzoom: 8,
        attribution:
          '<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="_blank">国土地理院:指定緊急避難場所データ</a>',
      },
    },
    layers: [
      {
        id: "osm-layer",
        source: "osm",
        type: "raster",
      },
      {
        id: "hazard_flood-layer",
        source: "hazard_flood",
        type: "raster",
        paint: { "raster-opacity": 0.7 },
        layout: { visibility: "none" },
      },
      {
        id: "hazard_hightide-layer",
        source: "hazard_haightide",
        type: "raster",
        paint: { "raster-opacity": 0.7 },
        layout: { visibility: "none" },
      },
      {
        id: "hazard_tsunami-layer",
        source: "hazard_tsunami",
        type: "raster",
        paint: { "raster-opacity": 0.7 },
        layout: { visibility: "none" },
      },
      {
        id: "hazard_doseki-layer",
        source: "hazard_doseki",
        type: "raster",
        paint: { "raster-opacity": 0.7 },
        layout: { visibility: "none" },
      },
      {
        id: "hazard_kyukeisya-layer",
        source: "hazard_kyukeisya",
        type: "raster",
        paint: { "raster-opacity": 0.7 },
        layout: { visibility: "none" },
      },
      {
        id: "hazard_jisuberi-layer",
        source: "hazard_jisuberi",
        type: "raster",
        paint: { "raster-opacity": 0.7 },
        layout: { visibility: "none" },
      },
      {
        id: "skhb-1-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster1"],
      },
      {
        id: "skhb-2-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster2"],
      },
      {
        id: "skhb-3-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster3"],
      },
      {
        id: "skhb-4-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster4"],
      },
      {
        id: "skhb-5-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster5"],
      },
      {
        id: "skhb-6-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster6"],
      },
      {
        id: "skhb-7-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster7"],
      },
      {
        id: "skhb-8-layer",
        source: "skhb",
        "source-layer": "skhb",
        type: "circle",
        paint: {
          "circle-color": "#6666cc",
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 2, 14, 6],
          "circle-stroke-width": 1,
          "circle-color": "#ffffff",
        },
        filter: ["get", "disaster8"],
      },
    ],
  },
});

map.on("load", () => {
  const opacity = new OpacityControl({
    baseLayers: {
      "hazard_flood-layer": "洪水浸水想定区域",
      "hazard_hightide-layer": "高潮浸水想定区域",
      "hazard_tsunami-layer": "津波浸水想定区域",
      "hazard_doseki-layer": "土石流警戒区域",
      "hazard_kyukeisya-layer": "急傾斜警戒区域",
      "hazard_jisuberi-layer": "地すべり警戒区域",
    },
  });
  const opacitySkhb = new OpacityControl({
    baseLayers: {
      "skhb-1-layer": "洪水",
      "skhb-2-layer": "崖崩れ/土石流/地すべり",
      "skhb-3-layer": "高潮",
      "skhb-4-layer": "地震",
      "skhb-5-layer": "津波",
      "skhb-6-layer": "大規模な火事",
      "skhb-7-layer": "内水氾濫",
      "skhb-8-layer": "火山現象",
    },
  });

  map.addControl(opacity, "top-left");
  map.addControl(opacitySkhb, "top-right");

  map.on("click", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: [
        "skhb-1-layer",
        "skhb-2-layer",
        "skhb-3-layer",
        "skhb-4-layer",
        "skhb-5-layer",
        "skhb-6-layer",
        "skhb-7-layer",
        "skhb-8-layer",
      ],
    });
    if (features.length === 0) return;
    const feature = features[0];
    const popup = new maplibregl.Popup()
      .setLngLat(feature.geometry.coordinates)
      .setHTML(
        `\
        <div style="font-weight:900; font-size: 1.2rem;">${
          feature.properties.name
        }</div>\
        <div>${feature.properties.address}</div>\
        <div>${feature.properties.remarks ?? ""}</div>\
        <div>\
        <span${
          feature.properties.disaster1 ? "" : ' style="color:#ccc;"'
        }">洪水</span>\
        <span${
          feature.properties.disaster2 ? "" : ' style="color:#ccc;"'
        }> 崖崩れ/土石流/地滑り</span>\
        <span${
          feature.properties.disaster3 ? "" : ' style="color:#ccc;"'
        }> 高潮</span>\
        <span${
          feature.properties.disaster4 ? "" : ' style="color:#ccc;"'
        }> 地震</span>\
        <div>\
        <span${
          feature.properties.disaster5 ? "" : ' style="color:#ccc;"'
        }>津波</span>\
        <span${
          feature.properties.disaster6 ? "" : ' style="color:#ccc;"'
        }> 大規模な火事</span>\
        <span${
          feature.properties.disaster7 ? "" : ' style="color:#ccc;"'
        }> 内水氾濫</span>\
        <span${
          feature.properties.disaster8 ? "" : ' style="color:#ccc;"'
        }> 火山現象</span>\
        </div>`
      )
      .addTo(map);
  });
});
