// #region 配置与相册数据
// 配置与数据：城市相册、照片路径与地图坐标共用同一城市 key。

const albums = {
  baoding: {name:'保定', photos:[{src:'assets/photos/baoding/1.jpg',caption:'保定'},{src:'assets/photos/baoding/2.jpg',caption:'保定'}]},
  langfang: {name:'廊坊', photos:[{src:'assets/photos/langfang/1.jpg',caption:'廊坊'},{src:'assets/photos/langfang/2.jpg',caption:'廊坊'}]},
  chengde: {name:'承德', photos:[{src:'assets/photos/chengde/1.jpg',caption:'承德'},{src:'assets/photos/chengde/2.jpg',caption:'承德'}]},
  baotou: {name:'包头', photos:[{src:'assets/photos/baotou/1.jpg',caption:'包头'},{src:'assets/photos/baotou/2.jpg',caption:'包头'},{src:'assets/photos/baotou/3.jpg',caption:'包头'}]},
  moscow: {name:'莫斯科', photos:Array.from({length:38},(_,index)=>({src:`assets/photos/moscow/${index+1}.jpg`,caption:'莫斯科'}))},
  changbaishan: {name:'长白山', photos:[{src:'assets/photos/changbaishan/1.jpg',caption:'长白山'},{src:'assets/photos/changbaishan/2.jpg',caption:'长白山'}]},
  changchun: {name:'长春', photos:[{src:'assets/photos/changchun/1.jpg',caption:'长春 · 旅行照片 1'},{src:'assets/photos/changchun/2.jpg',caption:'长春 · 旅行照片 2'}]},
  harbin: {name:'哈尔滨', photos:[
    {src:'assets/photos/harbin/1.jpg',caption:'哈尔滨 · 旅行照片 1'},
    {src:'assets/photos/harbin/2.jpg',caption:'哈尔滨 · 旅行照片 2'},
    {src:'assets/photos/harbin/3.jpg',caption:'哈尔滨 · 旅行照片 3'}
  ]},
  beijing: {name:'北京', photos:[]}, ganzhou:{name:'赣州',photos:[]},
  nanjing:{name:'南京',photos:[]}, yancheng:{name:'盐城',photos:[]},
  huizhou:{name:'惠州',photos:[]}, changzhi:{name:'长治',photos:[1,2,3,4,5,6,7,8].map(n=>({src:`assets/photos/changzhi/${n}.jpg`,caption:'长治'}))}
};
const setSequentialAlbumPhotos = (city, count) => {
  albums[city].photos = Array.from({length: count}, (_, index) => ({
    src: `assets/photos/${city}/${index + 1}.jpg`, caption: albums[city].name
  }));
};
albums.tianjin = {name:'天津',photos:[1,2,3].map(n=>({src:`assets/photos/tianjin/${n}.jpg`,caption:'天津'}))};
for (const [key,name] of Object.entries({taian:'泰安',qingdao:'青岛',weihai:'威海',suzhou:'苏州',shanghai:'上海',shenzhen:'深圳',nanchang:'南昌',changsha:'长沙',zhangjiajie:'张家界',chengdu:'成都',chongqing:'重庆'})) albums[key]={name,photos:[]};
albums.lushan={name:'庐山',photos:[]};
albums.wuhan={name:'武汉',photos:[]};
albums.jian={name:'吉安',photos:[]};
setSequentialAlbumPhotos('taian', 5);
setSequentialAlbumPhotos('qingdao', 8);
setSequentialAlbumPhotos('weihai', 7);
setSequentialAlbumPhotos('yancheng', 3);
setSequentialAlbumPhotos('suzhou', 9);
setSequentialAlbumPhotos('nanjing', 9);
setSequentialAlbumPhotos('lushan', 7);
setSequentialAlbumPhotos('nanchang', 15);
albums.nanchang.photos = [albums.nanchang.photos[13], albums.nanchang.photos[14], ...albums.nanchang.photos.slice(0,13)];
setSequentialAlbumPhotos('shanghai', 8);
setSequentialAlbumPhotos('huizhou', 5);
setSequentialAlbumPhotos('shenzhen', 3);
setSequentialAlbumPhotos('wuhan', 2);
setSequentialAlbumPhotos('zhangjiajie', 7);
setSequentialAlbumPhotos('changsha', 7);
albums.changsha.photos = [...albums.changsha.photos.slice(5), ...albums.changsha.photos.slice(0,5)];
setSequentialAlbumPhotos('chongqing', 14);
albums.chongqing.photos = [albums.chongqing.photos[12], albums.chongqing.photos[13], ...albums.chongqing.photos.slice(0,12)];
setSequentialAlbumPhotos('chengdu', 12);
setSequentialAlbumPhotos('jian', 5);
albums.ganzhou.sections=[
 {name:'赣州',photos:Array.from({length:60},(_,index)=>({src:`assets/photos/ganzhou/ganzhou/${index+1}.jpg`,caption:'赣州'}))},
 {name:'信丰',photos:Array.from({length:10},(_,index)=>({src:`assets/photos/ganzhou/xinfeng/${index+1}.jpg`,caption:'赣州 · 信丰'}))},
 {name:'宁都',photos:Array.from({length:3},(_,index)=>({src:`assets/photos/ganzhou/ningdu/${index+1}.jpg`,caption:'赣州 · 宁都'}))},
 {name:'崇义过埠中学',photos:Array.from({length:8},(_,index)=>({src:`assets/photos/ganzhou/chongyi-guobu/${index+1}.jpg`,caption:'赣州 · 崇义过埠中学'}))}
];
albums.beijing.sections=['I','II','III','IV'].flatMap(year=>['Fall','Spring'].map(season=>({name:`${year} ${season}`,photos:[]})));
albums.beijing.sections[0].photos=Array.from({length:8},(_,index)=>({src:`assets/photos/beijing/1fall/${index+1}.jpg`,caption:'北京 · I Fall'}));
albums.beijing.sections[1].photos=Array.from({length:8},(_,index)=>({src:`assets/photos/beijing/1spring/${index+1}.jpg`,caption:'北京 · I Spring'}));
albums.beijing.sections[2].photos=Array.from({length:12},(_,index)=>({src:`assets/photos/beijing/2fall/${index+1}.jpg`,caption:'北京 · II Fall'}));
albums.beijing.sections[3].photos=Array.from({length:10},(_,index)=>({src:`assets/photos/beijing/2spring/${index+1}.jpg`,caption:'北京 · II Spring'}));
albums.beijing.sections[4].photos=Array.from({length:14},(_,index)=>({src:`assets/photos/beijing/3fall/${index+1}.jpg`,caption:'北京 · III Fall'}));
albums.beijing.sections[5].photos=Array.from({length:12},(_,index)=>({src:`assets/photos/beijing/3spring/${index+1}.jpg`,caption:'北京 · III Spring'}));
albums.beijing.sections[6].photos=Array.from({length:17},(_,index)=>({src:`assets/photos/beijing/4fall/${index+1}.jpg`,caption:'北京 · IV Fall'}));
albums.beijing.sections[7].photos=Array.from({length:25},(_,index)=>({src:`assets/photos/beijing/4spring/${index+1}.jpg`,caption:'北京 · IV Spring'}));
// #endregion

// #region 城市坐标与地图配置
// 城市坐标与相册共用城市 key，新增地点只需维护这里和上方照片列表。

const cityLocations = {
 harbin:[126.535,45.803,10,18],changchun:[125.3245,43.8868,-10,18],changbaishan:[128.05,42.03,10,18],baotou:[109.84,40.66,-10,-12],moscow:[105.5,45,-10,-12],
 beijing:[116.405,39.905,-16,-24],chengde:[117.963,40.953,18,-16],langfang:[116.684,39.538,-30,18],baoding:[115.48,38.87,-28,32],tianjin:[117.2,39.12,28,4],
 changzhi:[113.117,36.195,-10,-12],taian:[117.087,36.2,-10,26],qingdao:[120.383,36.067,10,18],weihai:[122.12,37.513,10,-12],
 yancheng:[120.163,33.348,10,-12],nanjing:[118.797,32.06,-16,8],suzhou:[120.585,31.299,10,16],shanghai:[121.473,31.23,32,-7],
 ganzhou:[114.935,25.831,10,18],jian:[114.992,27.113,-16,-9],huizhou:[114.416,23.112,22,-10],shenzhen:[114.058,22.543,22,23],nanchang:[115.858,28.683,10,-12],lushan:[116.02,29.59,-12,-16],wuhan:[114.305,30.593,-14,-14],
 changsha:[112.939,28.228,-10,20],zhangjiajie:[110.479,29.127,-12,-12],chengdu:[104.066,30.572,-10,-12],chongqing:[106.552,29.563,10,18]
};
const MAP_CONFIG = {
 url: 'assets/maps/china-map.svg',
 svgNamespace: 'http://www.w3.org/2000/svg',
 projection: {longitudeStart: 73, latitudeTop: 54, xScale: 12, yScale: 15, xOffset: 30, yOffset: 25},
 zoom: {min: 1, max: 5, step: 1.18},
 marker: {dotRadius: 4.5, leaderLineEndOffset: 4, beijingStar: {outerRadius: 10, innerRadius: 4.25}}
};
const LABEL_LAYOUT = {
 characterWidth: 13,
 horizontalPadding: 6,
 bounds: {startLeftOffset: 2, endRightOffset: 2, topOffset: 11, bottomOffset: 4},
 candidates: {angleOffsets: [0,Math.PI/4,-Math.PI/4,Math.PI/2,-Math.PI/2,Math.PI*.75,-Math.PI*.75,Math.PI], distances: [16,23,31,40]},
 nearbyCityDistance: 55,
 pinAvoidDistance: 10,
 pinBufferDistance: 22,
 pinOverlapPenalty: 100000,
 pinBufferPenalty: 500,
 labelOverlapPenalty: 10000,
 distancePenalty: 2
};
const SHORTCUT_CONFIG = {priorities: {beijing: 2, ganzhou: 1}};
// #endregion

// 页面初始化：地图插入完成后，依次建立地图和相册交互。

async function initializeTravelPage() {

 // #region 页面初始化与地图加载
 // 地图加载：外部 SVG 仍作为真正的内联 SVG 插入页面。

 const mapHost=document.querySelector('#china-map-host');
 const response=await fetch(MAP_CONFIG.url);
 if(!response.ok)throw new Error(`无法加载地图：${response.status}`);
 const mapDocument=new DOMParser().parseFromString(await response.text(),'image/svg+xml');
 const map=document.importNode(mapDocument.documentElement,true);
 if(map.nodeName.toLowerCase()!=='svg'||map.namespaceURI!==MAP_CONFIG.svgNamespace||!map.classList.contains('china-map'))throw new Error('地图文件格式无效。');
 mapHost.replaceChildren(map);
 const shortcuts=document.querySelector('.city-shortcuts');
 // #endregion

 // #region 地图缩放
 // 地图缩放：按住 Ctrl 时以鼠标位置为中心缩放 SVG 视口。

if (map.viewBox && map.getBoundingClientRect) {
 const initialViewBox = map.viewBox.baseVal;
 const mapBounds = {
  x: initialViewBox.x,
  y: initialViewBox.y,
  width: initialViewBox.width,
  height: initialViewBox.height
 };
 map.addEventListener('wheel', event => {
  if (!event.ctrlKey) return;
  event.preventDefault();
  const rect = map.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const viewBox = map.viewBox.baseVal;
  const zoom = mapBounds.width / viewBox.width;
  const nextZoom = Math.min(MAP_CONFIG.zoom.max, Math.max(MAP_CONFIG.zoom.min, zoom * (event.deltaY < 0 ? MAP_CONFIG.zoom.step : 1 / MAP_CONFIG.zoom.step)));
  if (nextZoom === zoom) return;
  const pointX = viewBox.x + ((event.clientX - rect.left) / rect.width) * viewBox.width;
  const pointY = viewBox.y + ((event.clientY - rect.top) / rect.height) * viewBox.height;
  const nextWidth = mapBounds.width / nextZoom;
  const nextHeight = mapBounds.height / nextZoom;
  const nextX = Math.min(mapBounds.x + mapBounds.width - nextWidth, Math.max(mapBounds.x, pointX - ((pointX - viewBox.x) / viewBox.width) * nextWidth));
  const nextY = Math.min(mapBounds.y + mapBounds.height - nextHeight, Math.max(mapBounds.y, pointY - ((pointY - viewBox.y) / viewBox.height) * nextHeight));
  map.setAttribute('viewBox', `${nextX} ${nextY} ${nextWidth} ${nextHeight}`);
  map.classList.toggle('is-zoomed', nextZoom > MAP_CONFIG.zoom.min);
 }, {passive:false});
}
 // #endregion

 // #region 城市标签布局
function createSvgElement(tag,attrs) {const element=document.createElementNS(MAP_CONFIG.svgNamespace,tag);for(const [k,v] of Object.entries(attrs))element.setAttribute(k,v);return element;}

// 城市标记：先为密集区域排布标签，尽量避免标签与标记重叠。

const cityEntries=Object.entries(cityLocations).map(([key,[lon,lat,dx,dy]])=>({key,x:(lon-MAP_CONFIG.projection.longitudeStart)*MAP_CONFIG.projection.xScale+MAP_CONFIG.projection.xOffset,y:(MAP_CONFIG.projection.latitudeTop-lat)*MAP_CONFIG.projection.yScale+MAP_CONFIG.projection.yOffset,dx,dy}));
const labelPlacements={};
const placedLabels=[];
const distanceToRect=(x,y,rect)=>Math.hypot(Math.max(rect.left-x,0,x-rect.right),Math.max(rect.top-y,0,y-rect.bottom));
const labelRect=(x,y,anchor,name)=>{
 const width=name.length*LABEL_LAYOUT.characterWidth+LABEL_LAYOUT.horizontalPadding;
 return anchor==='end'
  ? {left:x-width,right:x+LABEL_LAYOUT.bounds.endRightOffset,top:y-LABEL_LAYOUT.bounds.topOffset,bottom:y+LABEL_LAYOUT.bounds.bottomOffset}
  : {left:x-LABEL_LAYOUT.bounds.startLeftOffset,right:x+width,top:y-LABEL_LAYOUT.bounds.topOffset,bottom:y+LABEL_LAYOUT.bounds.bottomOffset};
};
const overlaps=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
const labelCandidates=(entry)=>{
 const preferredAngle=Math.atan2(entry.dy,entry.dx);
 return LABEL_LAYOUT.candidates.distances.flatMap(distance=>LABEL_LAYOUT.candidates.angleOffsets.map(angleOffset=>{
  const angle=preferredAngle+angleOffset;
  const dx=Math.cos(angle)*distance;
  const dy=Math.sin(angle)*distance;
  return {dx,dy,anchor:dx<0?'end':'start'};
 }));
};
const nearbyCount=entry=>cityEntries.filter(other=>other!==entry&&Math.hypot(entry.x-other.x,entry.y-other.y)<LABEL_LAYOUT.nearbyCityDistance).length;
for(const entry of [...cityEntries].sort((a,b)=>nearbyCount(b)-nearbyCount(a))) {
 const name=albums[entry.key].name;
 let best;
 for(const candidate of labelCandidates(entry)) {
  const x=entry.x+candidate.dx;
  const y=entry.y+candidate.dy;
  const rect=labelRect(x,y,candidate.anchor,name);
  let score=Math.hypot(candidate.dx,candidate.dy)*LABEL_LAYOUT.distancePenalty;
  for(const other of cityEntries) {
   if(other===entry) continue;
   const distance=distanceToRect(other.x,other.y,rect);
   if(distance<LABEL_LAYOUT.pinAvoidDistance) score+=LABEL_LAYOUT.pinOverlapPenalty;
   else if(distance<LABEL_LAYOUT.pinBufferDistance) score+=(LABEL_LAYOUT.pinBufferDistance-distance)*LABEL_LAYOUT.pinBufferPenalty;
  }
  for(const other of placedLabels) score+=overlaps(rect,other.rect)*LABEL_LAYOUT.labelOverlapPenalty;
  if(!best||score<best.score) best={...candidate,score};
 }
 labelPlacements[entry.key]=best;
 placedLabels.push({rect:labelRect(entry.x+best.dx,entry.y+best.dy,best.anchor,name)});
}
 // #endregion

 // #region 城市标记绘制
for(const entry of cityEntries) {
 const {key,x,y}=entry;
 const {dx,dy,anchor}=labelPlacements[key];
 const name=albums[key].name;
 const pin=createSvgElement('g',{class:`city-pin${key==='moscow'?' moscow-pin':''}`,role:'button',tabindex:'0','data-city':key,'aria-label':`打开${name}相册`});
 if(key!=='moscow') {
  pin.append(createSvgElement('line',{x1:x,y1:y,x2:x+dx,y2:y+dy-MAP_CONFIG.marker.leaderLineEndOffset,stroke:'#85a6bd','stroke-width':'.7','pointer-events':'none'}));
  if(key==='beijing') {
   const points=Array.from({length:10},(_,index)=>{
    const angle=-Math.PI/2+index*Math.PI/5;
    const radius=index%2===0?MAP_CONFIG.marker.beijingStar.outerRadius:MAP_CONFIG.marker.beijingStar.innerRadius;
    return `${x+Math.cos(angle)*radius},${y+Math.sin(angle)*radius}`;
   }).join(' ');
   pin.append(createSvgElement('polygon',{points,class:'capital-star'}));
  } else pin.append(createSvgElement('circle',{cx:x,cy:y,r:MAP_CONFIG.marker.dotRadius,class:'pin-dot'}));
 }
 const label=createSvgElement('text',{x:x+dx,y:y+dy,'text-anchor':anchor});label.textContent=name;pin.append(label);map.append(pin);
}
 // #endregion

 // #region 快捷入口
// 快捷按钮：按城市优先级、照片数量和名称生成。

const getAlbumPhotoCount=key=>albums[key].photos.length+(albums[key].sections||[]).reduce((count,section)=>count+section.photos.length,0);
const shortcutEntries=[...cityEntries].sort((a,b)=>{
 return (SHORTCUT_CONFIG.priorities[b.key]||0)-(SHORTCUT_CONFIG.priorities[a.key]||0)||getAlbumPhotoCount(b.key)-getAlbumPhotoCount(a.key)||albums[a.key].name.localeCompare(albums[b.key].name,'zh-CN');
});
for(const {key} of shortcutEntries) {
 const button=document.createElement('button');button.type='button';button.dataset.city=key;button.textContent=albums[key].name;shortcuts.append(button);
}
 // #endregion

 // #region 相册交互
// 相册交互：城市相册、分区、缩略图和大图浏览共用同一组状态。

const albumDialog = document.querySelector('#city-album');
const photoViewerDialog = document.querySelector('#photo-viewer');
let activeAlbum, activeAlbumKey, activeIndex = 0, activePhotos = [];
const albumSectionNav=document.createElement('div');albumSectionNav.className='album-sections';
document.querySelector('#album-grid').before(albumSectionNav);
function openCityAlbum(key) {
  activeAlbum = albums[key];activeAlbumKey=key;
  if(!activeAlbum)return;
  if(activeAlbum.sections) renderCitySections(); else renderPhotoGrid(activeAlbum.photos,activeAlbum.name);
  if(!albumDialog.open)albumDialog.showModal(); document.body.classList.add('album-open');
}
function appendPhotoButtons(photos,grid) {
  photos.forEach((photo,index) => {
    const button=document.createElement('button'); button.type='button';
    button.setAttribute('aria-label',`查看照片 ${index+1}：${photo.caption || activeAlbum.name}`);
    const img=document.createElement('img'); img.src=photo.thumb || photo.src;
    img.alt=photo.caption || activeAlbum.name; img.loading='lazy';
    button.append(img); button.addEventListener('click',()=>{activePhotos=photos;activeIndex=index;renderPhotoViewer();photoViewerDialog.showModal();});grid.append(button);
  });
}
function renderCitySections() {
  document.querySelector('#album-title').textContent=activeAlbum.name;
  albumSectionNav.classList.add('album-section-nav');albumSectionNav.replaceChildren();albumSectionNav.hidden=false;
  const grid=document.querySelector('#album-grid');grid.classList.add('album-city-sections');grid.replaceChildren();
  document.querySelector('#album-empty').hidden=true;
  activeAlbum.sections.forEach((section,index)=>{
    const id=`${activeAlbumKey}-section-${index}`;
    const button=document.createElement('button');button.type='button';button.textContent=section.name;
    button.onclick=()=>document.querySelector(`#${id}`)?.scrollIntoView?.({behavior:'smooth',block:'start'});
    albumSectionNav.append(button);
    const sectionElement=document.createElement('section');sectionElement.id=id;sectionElement.className='album-city-section';
    const heading=document.createElement('h3');heading.textContent=section.name;
    const photoGrid=document.createElement('div');photoGrid.className='album-grid';
    appendPhotoButtons(section.photos,photoGrid);
    sectionElement.append(heading,photoGrid);grid.append(sectionElement);
  });
}
function renderPhotoGrid(photos,title) {
  activePhotos=photos;albumSectionNav.classList.remove('album-section-nav');albumSectionNav.hidden=true;
  document.querySelector('#album-title').textContent = title;
  const grid = document.querySelector('#album-grid'); grid.classList.remove('album-city-sections');grid.replaceChildren();
  document.querySelector('#album-empty').hidden = photos.length > 0;
  appendPhotoButtons(photos,grid);
}
function renderPhotoViewer() {
  const photos=activePhotos; const photo=photos[activeIndex];
  const img=document.querySelector('#full-photo'); img.src=photo.src;img.alt=photo.caption || activeAlbum.name;
  document.querySelector('#photo-caption').textContent=photo.caption || '';
  document.querySelector('#photo-count').textContent=`${activeIndex+1} / ${photos.length}`;
  document.querySelector('#prev-photo').disabled=activeIndex===0;
  document.querySelector('#next-photo').disabled=activeIndex===photos.length-1;
}
 // #endregion

 // #region 页面事件
document.querySelectorAll('[data-city]').forEach(pin=>{
 pin.addEventListener('click',()=>openCityAlbum(pin.dataset.city));
 if(pin.tagName.toLowerCase()==='g')pin.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCityAlbum(pin.dataset.city);}});
});
document.querySelector('#close-album').onclick=()=>albumDialog.close();
document.querySelector('#back-album').onclick=()=>photoViewerDialog.close();
albumDialog.addEventListener('close',()=>document.body.classList.remove('album-open'));
albumDialog.addEventListener('click',event=>{
 const rect=albumDialog.getBoundingClientRect?.();
 if(rect&&event.clientX<rect.left||rect&&event.clientX>rect.right||rect&&event.clientY<rect.top||rect&&event.clientY>rect.bottom) albumDialog.close();
});
photoViewerDialog.addEventListener('click',event=>{
 const rect=photoViewerDialog.getBoundingClientRect();
 if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom) photoViewerDialog.close();
});
 document.querySelector('#prev-photo').onclick=()=>{if(activeIndex>0){activeIndex--;renderPhotoViewer();}};
 document.querySelector('#next-photo').onclick=()=>{if(activeIndex<activePhotos.length-1){activeIndex++;renderPhotoViewer();}};
 photoViewerDialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')document.querySelector('#prev-photo').click();if(e.key==='ArrowRight')document.querySelector('#next-photo').click();});
 // #endregion
}

// #region 页面启动
initializeTravelPage().catch(error=>console.error(error));
// #endregion
