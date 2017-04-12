define(function(require) {
    var ol = require('ol');
    return function(options) {
        if (typeof options.version == 'undefined') options.version = '1.1.0';
        if (typeof options.hsproxy == 'undefined') options.hsproxy = true;
        if (typeof options.format == 'undefined') options.format = new ol.format.GeoJSON();
        options.projection = options.projection.toUpperCase();
        options.layerType = "WFS";
        if (typeof options.outputFormat == 'undefined') {
            if (options.format instanceof ol.format.GeoJSON) 
                options.outputFormat = 'json';
            else options.outputFormat = 'gml3';
        }
        
        var src = new ol.source.Vector({
            format: options.format,//options.format,
            loader: function(extent, resolution, projection) {
                this.set('loaded', false);
                //this.clear();
                //if (console) console.log("resolution", resolution);
                var p;
                switch (options.provider) {
                    case 'mapserver':
                        p = options.url + '&'+
                    'service=WFS&TYPENAME=' + options.typename + '&request=GetFeature&' +
                    'version=' + options.version + '&' +
                    'srsname=' + options.projection + '&outputFormat=geojson'  + '&bbox=' + extent.join(',');
                        break;
                    default:
                        p = options.url + (options.url.indexOf('?') > 0 ? '&' : '?') +
                    'service=WFS&TYPENAME=' + options.typename + '&request=GetFeature&' +
                    'version=' + options.version + '&' +
                    'SRSNAME=' + options.projection + '&outputFormat=' + options.outputFormat + '&bbox=' + extent.join(',') + ',urn:ogc:def:crs:EPSG:6.3:3857';
                        break;
                }
                var url = options.hsproxy ? "/cgi-bin/hsproxy.cgi?toEncoding=utf-8&url=" + window.escape(p) : p;

                $.ajax({
                        url: url,
                        context: this
                    })
                    .done(function(response) {
                        this.addFeatures(options.format.readFeatures(response));
                        this.hasLine = false;
                        this.hasPoly = false;
                        this.hasPoint = false;
                        var source = this;
                        angular.forEach(this.getFeatures(), function(f) {
                            if (f.getGeometry()) {
                                switch (f.getGeometry().getType()) {
                                    case 'LineString':
                                    case 'MultiLineString':
                                        source.hasLine = true;
                                        break;
                                    case 'Polygon':
                                    case 'MultiPolygon':
                                        source.hasPoly = true;
                                        break;
                                    case 'Point':
                                    case 'MultiPoint':
                                        source.hasPoint = true;
                                        break;
                                }
                            }
                        })

                        if (this.hasLine || this.hasPoly || this.hasPoint) {
                            this.styleAble = true;
                        }
                        this.set('loaded', true);
                    });
            },
            projection: options.projection,
            strategy: ol.loadingstrategy.bbox

        });
        src.defOptions = options;
        return src;
    };
});
