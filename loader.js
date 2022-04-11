google.charts.load('current', {
    'packages':['geochart'],
    // Note: Because this chart requires geocoding, you'll need mapsApiKey.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

 /*  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country',   'Latitude'],

    ]);

    var options = {
      region: 'US', // Africa
      colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
      backgroundColor: '#81d4fa',
      datalessRegionColor: '#f8bbd0',
      defaultColor: '#f5f5f5',
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
    chart.draw(data, options);
  }; */
  function drawRegionsMap() {
var data = google.visualization.arrayToDataTable([
['State', 'Foo Factor'],
['US-IL', 200],
['US-IN', 300],
['US-IA', 20],
['US-RI', 150]
]);

var chart = new google.visualization.GeoChart(
  document.getElementById('geochart-colors'));
chart.draw(data, {width: 556, height: 347, region: "US", resolution: "provinces"});
}
