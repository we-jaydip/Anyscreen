// types/three-globe.d.ts
declare module 'three-globe' {
  import * as THREE from 'three';
  
  type Accessor<T, U> = U | ((d: T) => U);
  type ArcData = Record<string, any>;
  type PointData = Record<string, any>;
  type RingData = Record<string, any>;

  class ThreeGlobe {
    constructor(config?: object);
    
    // Globe methods
    globeMaterial(): THREE.Material;
    hexPolygonsData(data: GeoJSON.FeatureCollection): this;
    hexPolygonResolution(resolution: number): this;
    hexPolygonMargin(margin: number): this;
    showAtmosphere(show: boolean): this;
    atmosphereColor(color: string): this;
    atmosphereAltitude(altitude: number): this;
    hexPolygonColor(fn: Accessor<GeoJSON.Feature, string>): this;
    
    // Arc methods
    arcsData(data: ArcData[]): this;
    arcStartLat(fn: Accessor<ArcData, number>): this;
    arcStartLng(fn: Accessor<ArcData, number>): this;
    arcEndLat(fn: Accessor<ArcData, number>): this;
    arcEndLng(fn: Accessor<ArcData, number>): this;
    arcColor(fn: Accessor<ArcData, string>): this;
    arcAltitude(fn: Accessor<ArcData, number>): this;
    arcStroke(fn: Accessor<ArcData, number>): this;
    arcDashLength(length: number): this;
    arcDashInitialGap(fn: Accessor<ArcData, number>): this;
    arcDashGap(gap: number): this;
    arcDashAnimateTime(time: Accessor<ArcData, number>): this;
    
    // Point methods
    pointsData(data: PointData[]): this;
    pointColor(fn: Accessor<PointData, string>): this;
    pointsMerge(merge: boolean): this;
    pointAltitude(altitude: Accessor<PointData, number>): this;
    pointRadius(radius: Accessor<PointData, number>): this;
    
    // Ring methods
    ringsData(data: RingData[]): this;
    ringColor(fn: Accessor<RingData, string>): this;
    ringMaxRadius(radius: Accessor<RingData, number>): this;
    ringPropagationSpeed(speed: Accessor<RingData, number>): this;
    ringRepeatPeriod(period: Accessor<RingData, number>): this;
    
    // Utility methods
    getCoords(lat: number, lng: number, altitude?: number): THREE.Vector3;
    toGeoCoords(position: THREE.Vector3): { lat: number, lng: number, altitude: number };
    
    // Animation control
    pauseAnimation(): this;
    resumeAnimation(): this;
    resetAnimation(): this;
  }

  export = ThreeGlobe;
}