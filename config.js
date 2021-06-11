module.exports = function () {
  return {
    // Array of data provider are supported
    'dataPath': [
      'https://map.tecff.de/yanic/'
    ],
    'siteName': 'Freifunk Altdorf',
    'maxAgeAlert': 1,

    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        "name": "Clients (1 Tag)",
        "image": "https://stats.tecff.de/render/d-solo/000000003/node?panelId=1&var-node_id={NODE_ID}&width=650&height=300&theme=light&from=now-24h",
        "href": "https://stats.tecff.de/d/000000003/node?var-node_id={NODE_ID}",
        'title': 'Knoten {NODE_ID} - weitere Statistiken'
      },
      {
        "name": "Traffic (24 Stunden)",
        "image": "https://stats.tecff.de/render/d-solo/000000003/node?panelId=6&var-node_id={NODE_ID}&width=650&height=350&theme=light&from=now-24h",
        "href": "https://stats.tecff.de/d/000000003/node?var-node_id={NODE_ID}",
        'title': 'Knoten {NODE_ID} - weitere Statistiken'
      },
      {
        'name': 'Airtime (24 Stunden)',
        'image': 'https://stats.tecff.de/render/d-solo/000000003/node?panelId=33&var-node_id={NODE_ID}&width=650&height=300&theme=light&from=now-24h',
        "href": "https://stats.tecff.de/d/000000003/node?var-node_id={NODE_ID}",
        'title': 'Knoten {NODE_ID} - weitere Statistiken'
      },
      {
        "name": "Clients (7 Tage)",
        "image": "https://stats.tecff.de/render/d-solo/000000003/node?panelId=1&var-node_id={NODE_ID}&width=650&height=300&theme=light&from=now-7d",
        "href": "https://stats.tecff.de/d/000000003/node?var-node_id={NODE_ID}",
        'title': 'Knoten {NODE_ID} - weitere Statistiken'
      },
      {
        "name": "Traffic (7 Tage)",
        "image": "https://stats.tecff.de/render/d-solo/000000003/node?panelId=6&var-node_id={NODE_ID}&width=650&height=350&theme=light&from=now-7d",
        "href": "https://stats.tecff.de/d/000000003/node?var-node_id={NODE_ID}",
        'title': 'Knoten {NODE_ID} - weitere Statistiken'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diesen Knoten',
        'image': 'https://stats.tecff.de/render/d-solo/000000003/node?panelId=36&var-node_id={SOURCE_ID}&var-nodetolink={TARGET_ID}&width=650&height=300&theme=light&from=now-24h',
        'href': 'https://stats.tecff.de/d/000000003/node?var-node_id={SOURCE_ID}&panelId=36&fullscreen&var-nodetolink={TARGET_ID}',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    'mapLayers': [
      {
        "name": "OpenStreetMap Mapnik",
        "url": "https://osmtiles.tecff.de/osm/{z}/{x}/{y}.png",
        "config": {
          "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>. ♥ <a href=\"http://donate.openstreetmap.org\" class=\"donate-attr\">Make a Donation</a>",
          "maxZoom": 19
        }
      },
      {
        "name": "OpenStreetMap Humanitarian/HOT)",
        "url": "https://osmtiles.tecff.de/osmhot/{z}/{x}/{y}.png",
        "config": {
          "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap contributors</a>. Tiles courtesy of <a href=\"http://hot.openstreetmap.org\" target=\"_blank\">Humanitarian OpenStreetMap Team</a>",
          "maxZoom": 20
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        48.7014,
        11.8666
      ],
      // Southeast
      [
        48.2421,
        12.7689
      ]
    ],
    'domainNames': [
      {
        'site': 'tecff',
        'name': 'Freifunk Altdorf'
      },
      {
        'site': 'ffgri.init.tk',
        'name': 'Freifunk Grießbach'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://www.freifunk-altdorf.de/verein/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://www.freifunk-altdorf.de/verein/impressum/datenschutz/'
      }
    ]
  };
};
