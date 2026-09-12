// 每座城市的 photos 数组用于保存照片路径和说明。
const albums = {
  baoding: {name:'保定', photos:[{src:'assets/baoding/1.jpg',caption:'保定'},{src:'assets/baoding/2.jpg',caption:'保定'}]},
  langfang: {name:'廊坊', photos:[{src:'assets/langfang/1.jpg',caption:'廊坊'},{src:'assets/langfang/2.jpg',caption:'廊坊'}]},
  chengde: {name:'承德', photos:[{src:'assets/chengde/1.jpg',caption:'承德'},{src:'assets/chengde/2.jpg',caption:'承德'}]},
  baotou: {name:'包头', photos:[{src:'assets/baotou/1.jpg',caption:'包头'},{src:'assets/baotou/2.jpg',caption:'包头'},{src:'assets/baotou/3.jpg',caption:'包头'}]},
  changbaishan: {name:'长白山', photos:[{src:'assets/changbaishan/1.jpg',caption:'长白山'},{src:'assets/changbaishan/2.jpg',caption:'长白山'}]},
  changchun: {name:'长春', photos:[{src:'assets/changchun/1.jpg',caption:'长春 · 旅行照片 1'},{src:'assets/changchun/2.jpg',caption:'长春 · 旅行照片 2'}]},
  harbin: {name:'哈尔滨', photos:[
    {src:'assets/harbin/1.jpg',caption:'哈尔滨 · 旅行照片 1'},
    {src:'assets/harbin/2.jpg',caption:'哈尔滨 · 旅行照片 2'},
    {src:'assets/harbin/3.jpg',caption:'哈尔滨 · 旅行照片 3'}
  ]},
  beijing: {name:'北京', photos:[]}, ganzhou:{name:'赣州',photos:[]},
  nanjing:{name:'南京',photos:[]}, yancheng:{name:'盐城',photos:[]},
  huizhou:{name:'惠州',photos:[]}, changzhi:{name:'长治',photos:[1,2,3,4,5,6,7,8].map(n=>({src:`assets/changzhi/${n}.jpg`,caption:'长治'}))}
};
const album = document.querySelector('#city-album');
const setAlbumPhotos = (city, count) => {
  albums[city].photos = Array.from({length: count}, (_, index) => ({
    src: `assets/${city}/${index + 1}.jpg`, caption: albums[city].name
  }));
};
albums.tianjin = {name:'天津',photos:[1,2,3].map(n=>({src:`assets/tianjin/${n}.jpg`,caption:'天津'}))};
for (const [key,name] of Object.entries({taian:'泰安',qingdao:'青岛',weihai:'威海',suzhou:'苏州',shanghai:'上海',shenzhen:'深圳',nanchang:'南昌',changsha:'长沙',zhangjiajie:'张家界',chengdu:'成都',chongqing:'重庆'})) albums[key]={name,photos:[]};
albums.lushan={name:'庐山',photos:[]};
albums.wuhan={name:'武汉',photos:[]};
albums.jian={name:'吉安',photos:[]};
setAlbumPhotos('taian', 5);
setAlbumPhotos('qingdao', 8);
setAlbumPhotos('weihai', 7);
setAlbumPhotos('yancheng', 3);
setAlbumPhotos('suzhou', 9);
setAlbumPhotos('nanjing', 9);
setAlbumPhotos('lushan', 6);
setAlbumPhotos('nanchang', 15);
albums.nanchang.photos = [albums.nanchang.photos[13], albums.nanchang.photos[14], ...albums.nanchang.photos.slice(0,13)];
setAlbumPhotos('shanghai', 8);
setAlbumPhotos('huizhou', 5);
setAlbumPhotos('shenzhen', 3);
setAlbumPhotos('wuhan', 2);
setAlbumPhotos('zhangjiajie', 7);
setAlbumPhotos('changsha', 7);
albums.changsha.photos = [...albums.changsha.photos.slice(5), ...albums.changsha.photos.slice(0,5)];
setAlbumPhotos('chongqing', 14);
albums.chongqing.photos = [albums.chongqing.photos[12], albums.chongqing.photos[13], ...albums.chongqing.photos.slice(0,12)];
setAlbumPhotos('chengdu', 12);
setAlbumPhotos('jian', 5);
albums.ganzhou.sections=['赣州','信丰','宁都','崇义过埠中学'].map(name=>({name,photos:[]}));
albums.beijing.sections=['I','II','III','IV'].flatMap(year=>['Fall','Spring'].map(season=>({name:`${year} ${season}`,photos:[]})));
// 城市坐标与相册共用城市 key，新增地点只需维护这里和上方照片列表。
const cityLocations = {
 harbin:[126.535,45.803,10,18],changchun:[125.3245,43.8868,-10,18],changbaishan:[128.05,42.03,10,18],baotou:[109.84,40.66,-10,-12],
 beijing:[116.405,39.905,-16,-24],chengde:[117.963,40.953,18,-16],langfang:[116.684,39.538,-30,18],baoding:[115.48,38.87,-28,32],tianjin:[117.2,39.12,28,4],
 changzhi:[113.117,36.195,-10,-12],taian:[117.087,36.2,-10,26],qingdao:[120.383,36.067,10,18],weihai:[122.12,37.513,10,-12],
 yancheng:[120.163,33.348,10,-12],nanjing:[118.797,32.06,-16,8],suzhou:[120.585,31.299,10,16],shanghai:[121.473,31.23,32,-7],
 ganzhou:[114.935,25.831,10,18],jian:[114.992,27.113,-16,-9],huizhou:[114.416,23.112,22,-10],shenzhen:[114.058,22.543,22,23],nanchang:[115.858,28.683,10,-12],lushan:[116.02,29.59,-12,-16],wuhan:[114.305,30.593,-14,-14],
 changsha:[112.939,28.228,-10,20],zhangjiajie:[110.479,29.127,-12,-12],chengdu:[104.066,30.572,-10,-12],chongqing:[106.552,29.563,10,18]
};
const map=document.querySelector('.china-map');
const shortcuts=document.querySelector('.city-shortcuts');
// 按住 Ctrl 在地图上滚动时，以鼠标位置为中心缩放 SVG 视口。
if (map.viewBox && map.getBoundingClientRect) {
 const initialViewBox = map.viewBox.baseVal;
 const mapBounds = {
  x: initialViewBox.x,
  y: initialViewBox.y,
  width: initialViewBox.width,
  height: initialViewBox.height
 };
 const minZoom = 1;
 const maxZoom = 5;
 map.addEventListener('wheel', event => {
  if (!event.ctrlKey) return;
  event.preventDefault();
  const rect = map.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const viewBox = map.viewBox.baseVal;
  const zoom = mapBounds.width / viewBox.width;
  const nextZoom = Math.min(maxZoom, Math.max(minZoom, zoom * (event.deltaY < 0 ? 1.18 : 1 / 1.18)));
  if (nextZoom === zoom) return;
  const pointX = viewBox.x + ((event.clientX - rect.left) / rect.width) * viewBox.width;
  const pointY = viewBox.y + ((event.clientY - rect.top) / rect.height) * viewBox.height;
  const nextWidth = mapBounds.width / nextZoom;
  const nextHeight = mapBounds.height / nextZoom;
  const nextX = Math.min(mapBounds.x + mapBounds.width - nextWidth, Math.max(mapBounds.x, pointX - ((pointX - viewBox.x) / viewBox.width) * nextWidth));
  const nextY = Math.min(mapBounds.y + mapBounds.height - nextHeight, Math.max(mapBounds.y, pointY - ((pointY - viewBox.y) / viewBox.height) * nextHeight));
  map.setAttribute('viewBox', `${nextX} ${nextY} ${nextWidth} ${nextHeight}`);
  map.classList.toggle('is-zoomed', nextZoom > minZoom);
 }, {passive:false});
}
map.querySelectorAll('.city-pin').forEach(pin=>pin.remove());
shortcuts.replaceChildren();
const svgNS='http://www.w3.org/2000/svg';
function svgElement(tag,attrs) {const element=document.createElementNS(svgNS,tag);for(const [k,v] of Object.entries(attrs))element.setAttribute(k,v);return element;}
for(const [key,[lon,lat,dx,dy]] of Object.entries(cityLocations)) {
 const x=(lon-73)*12+30,y=(54-lat)*15+25,name=albums[key].name;
 const pin=svgElement('g',{class:'city-pin',role:'button',tabindex:'0','data-city':key,'aria-label':`打开${name}相册`});
 pin.append(svgElement('line',{x1:x,y1:y,x2:x+dx,y2:y+dy-4,stroke:'#85a6bd','stroke-width':'.7','pointer-events':'none'}));
 pin.append(svgElement('circle',{cx:x,cy:y,r:4.5,class:'pin-dot'}));
 const label=svgElement('text',{x:x+dx,y:y+dy,'text-anchor':dx<0?'end':'start'});label.textContent=name;pin.append(label);map.append(pin);
 const button=document.createElement('button');button.type='button';button.dataset.city=key;button.textContent=name;shortcuts.append(button);
}
const viewer = document.querySelector('#photo-viewer');
let activeCity, activeIndex = 0, activePhotos = [];
const sectionNav=document.createElement('div');sectionNav.className='album-sections';
document.querySelector('#album-grid').before(sectionNav);
const backSections=document.createElement('button');backSections.type='button';backSections.textContent='返回分区';backSections.hidden=true;
document.querySelector('#album-title').after(backSections);
backSections.onclick=()=>showSections();
function openCity(key) {
  activeCity = albums[key];
  if(!activeCity)return;
  if(activeCity.sections) showSections(); else showPhotos(activeCity.photos,activeCity.name);
  if(!album.open)album.showModal(); document.body.classList.add('album-open');
}
function showSections() {
  document.querySelector('#album-title').textContent=activeCity.name;
  backSections.hidden=true;sectionNav.replaceChildren();sectionNav.hidden=false;
  document.querySelector('#album-grid').replaceChildren();document.querySelector('#album-empty').hidden=true;
  activeCity.sections.forEach(section=>{
    const button=document.createElement('button');button.type='button';button.textContent=section.name;
    button.onclick=()=>showPhotos(section.photos,`${activeCity.name} · ${section.name}`,true);sectionNav.append(button);
  });
}
function showPhotos(photos,title,isSection=false) {
  activePhotos=photos;sectionNav.hidden=true;backSections.hidden=!isSection;
  document.querySelector('#album-title').textContent = title;
  const grid = document.querySelector('#album-grid'); grid.replaceChildren();
  document.querySelector('#album-empty').hidden = photos.length > 0;
  photos.forEach((photo,index) => {
    const button=document.createElement('button'); button.type='button';
    button.setAttribute('aria-label',`查看照片 ${index+1}：${photo.caption || activeCity.name}`);
    const img=document.createElement('img'); img.src=photo.thumb || photo.src;
    img.alt=photo.caption || activeCity.name; img.loading='lazy';
    button.append(img); button.addEventListener('click',()=>{activeIndex=index;renderPhoto();viewer.showModal();});grid.append(button);
  });
}
function renderPhoto() {
  const photos=activePhotos; const photo=photos[activeIndex];
  const img=document.querySelector('#full-photo'); img.src=photo.src;img.alt=photo.caption || activeCity.name;
  document.querySelector('#photo-caption').textContent=photo.caption || '';
  document.querySelector('#photo-count').textContent=`${activeIndex+1} / ${photos.length}`;
  document.querySelector('#prev-photo').disabled=activeIndex===0;
  document.querySelector('#next-photo').disabled=activeIndex===photos.length-1;
}
document.querySelectorAll('[data-city]').forEach(pin=>{
 pin.addEventListener('click',()=>openCity(pin.dataset.city));
 if(pin.tagName.toLowerCase()==='g')pin.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openCity(pin.dataset.city);}});
});
document.querySelector('#close-album').onclick=()=>album.close();
document.querySelector('#back-album').onclick=()=>viewer.close();
album.addEventListener('close',()=>document.body.classList.remove('album-open'));
document.querySelector('#prev-photo').onclick=()=>{if(activeIndex>0){activeIndex--;renderPhoto();}};
document.querySelector('#next-photo').onclick=()=>{if(activeIndex<activePhotos.length-1){activeIndex++;renderPhoto();}};
viewer.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')document.querySelector('#prev-photo').click();if(e.key==='ArrowRight')document.querySelector('#next-photo').click();});
