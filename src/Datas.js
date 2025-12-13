let PUBLIC = process.env.PUBLIC_URL || '';

let unitsDatas = [
    { id: 2, title: 'iPhone', img: `${PUBLIC}/images/iphone-17-colors.jpg`, desc: 'Say hello to the lastest generation of iPhone', firstBtnText: 'Learn More', secondBtnText: 'Shop iPhone' },
    { id: 3, title: 'AirPods Pro 3', img: `${PUBLIC}/images/airpods-pro-3.jpg`, desc: 'The Worlds best in-ear Active Noice Cancellation', firstBtnText: 'Learn More', secondBtnText: 'Buy' },
]

let anotherUnitsDatas = [
    { id: 1, title: 'iPad', img: `${PUBLIC}/images/ipad.jpg`, desc: 'Now superCharged by the M3 chip', firstBtnText: 'Learn More', secondBtnText: 'Buy', classname: 'blueBg' },
    { id: 2, title: 'Watch series 11', img: `${PUBLIC}/images/watch.jpg`, desc: 'The ultimate way to watch your health', firstBtnText: 'Learn More', secondBtnText: 'Buy', classname: 'main-white' },
    { id: 3, title: 'iPad', img: `${PUBLIC}/images/ipads.jpg`, desc: 'The ultimate way to watch your health', firstBtnText: 'Learn More', secondBtnText: 'Buy', classname: 'main-white' },
    { id: 4, title: 'macBook Air', img: `${PUBLIC}/images/macbook.jpg`, desc: 'The ultimate way to watch your health', firstBtnText: 'Learn More', secondBtnText: 'Buy', classname: 'main-white' },
    { id: 5, title: 'Trade In', img: `${PUBLIC}/images/customers.jpg`, desc: 'The ultimate way to watch your health', firstBtnText: 'Learn More', secondBtnText: 'Buy', classname: 'main-white' },
    { id: 6, title: 'Card', img: `${PUBLIC}/images/cart.jpg`, desc: 'The ultimate way to watch your health', firstBtnText: 'Learn More', secondBtnText: 'Buy', classname: 'main-white' },
]

let moviesDatas = [
    { id: 1, category: 'Comedy', activity: 'active', desc: 'same family, new plan', img: `${PUBLIC}/images/family.jpg` },
    { id: 2, category: 'Drama', activity: '', desc: 'Happiness is a state of the mind', img: `${PUBLIC}/images/pluribus.jpg` },
    { id: 3, category: 'Thriller', activity: '', desc: 'Start your holidays on a high notes', img: `${PUBLIC}/images/spirited.jpg` },
    { id: 4, category: 'Action', activity: '', desc: '600,000 squares mile, now here to hide', img: `${PUBLIC}/images/front.jpg` },
    { id: 5, category: 'Comedy', activity: '', desc: 'the truth is the top story', img: `${PUBLIC}/images/morning.jpg` },
]

let scrollSliderDatas = [
    { id: 1, img: `${PUBLIC}/images/ww.jpg`, btnCaption: 'Watch Now' },
    { id: 2, img: `${PUBLIC}/images/nba.jpg`, btnCaption: 'Watch Now' },
    { id: 3, img: `${PUBLIC}/images/z2.jpg`, btnCaption: 'Watch Now' },
    { id: 4, img: `${PUBLIC}/images/gym.jpg`, btnCaption: 'Watch Now' },
    { id: 5, img: `${PUBLIC}/images/ww.jpg`, btnCaption: 'Watch Now' },
    { id: 6, img: `${PUBLIC}/images/nba.jpg`, btnCaption: 'Watch Now' },
    { id: 7, img: `${PUBLIC}/images/z2.jpg`, btnCaption: 'Watch Now' },
    { id: 8, img: `${PUBLIC}/images/gym.jpg`, btnCaption: 'Watch Now' },
    { id: 9, img: `${PUBLIC}/images/ww.jpg`, btnCaption: 'Watch Now' },
    { id: 10, img: `${PUBLIC}/images/nba.jpg`, btnCaption: 'Watch Now' },
]

let productsCategoryData = [
    { id: 1, category: 'Mac', img: `${PUBLIC}/images/store-card-mac.png` },
    { id: 2, category: 'iPhone', img: `${PUBLIC}/images/store-card-iphone.png` },
    { id: 3, category: 'iPad', img: `${PUBLIC}/images/store-card-ipad.png` },
    { id: 4, category: 'Apple Watch', img: `${PUBLIC}/images/store-card-watch.png` },
    { id: 5, category: 'Apple Vision Pro', img: `${PUBLIC}/images/store-card-vision.png` },
    { id: 6, category: 'Airpods', img: `${PUBLIC}/images/store-card-airpod.png` },
    { id: 7, category: 'AirTag', img: `${PUBLIC}/images/store-card-airtag.png` },
    { id: 8, category: 'Apple TV 4K', img: `${PUBLIC}/images/store-card-tv.png` },
]

let scrollCardDatas = [
    { id: 1, title: 'iPhone 17 pro', price: 'From $999 or $41.62/mo. for 24 mo.*', img: `${PUBLIC}/images/iphone-17-pro.jpg` },
    { id: 2, title: 'MacBook Pro', price: 'From $999 or $41.62/mo. for 24 mo.*', img: `${PUBLIC}/images/mac.jpg` },
    { id: 3, title: 'iPad Pro', price: 'From $999 or $41.62/mo. for 24 mo.*', img: `${PUBLIC}/images/ipad-pro.jpg` },
    { id: 4, title: 'Apple Watch series 11', price: 'From $999 or $41.62/mo. for 24 mo.*', img: `${PUBLIC}/images/watch-11.jpg` },
    { id: 5, title: 'iPhone Air', price: 'From $999 or $41.62/mo. for 24 mo.*', img: `${PUBLIC}/images/iphone-air.jpg` },
    { id: 6, title: 'MacBook Air', price: 'From $999 or $41.62/mo. for 24 mo.*', img: `${PUBLIC}/images/mac-air.jpg` },
]

let MainProductsData = [
    { id: 1, title: '11-inch iPad Air', price: 50, img: `${PUBLIC}/images/ipad-air.jpg` },
    { id: 2, title: 'AirPod Pro 3', price: 249, img: `${PUBLIC}/images/airpods-pro-3.jpg` },
    { id: 3, title: 'AirTag', price: 29, img: `${PUBLIC}/images/airtag.jpg` },
    { id: 4, title: 'AirPods Max - orange', price: 140, img: `${PUBLIC}/images/airpods-max.jpg` },
    { id: 5, title: 'Apple Pencil Pro', price: 129, img: `${PUBLIC}/images/pencil.jpg` },
    { id: 6, title: 'iPad mini', price: 42, img: `${PUBLIC}/images/ipad-mini.jpg` },
]

let macPageProducts = [
    { id: 1, category: 'Laptops', title: 'MacBook Air', price: 999, img: `${PUBLIC}/images/mac.jpg` },
    { id: 2, category: 'Laptops', title: 'MacBook Pro 13-inch', price: 1299, img: `${PUBLIC}/images/mac.jpg` },
    { id: 3, category: 'Laptops', title: 'MacBook Pro 16-inch', price: 2399, img: `${PUBLIC}/images/mac.jpg` },
    { id: 4, category: 'Desktops', title: 'iMac 24-inch', price: 1299, img: `${PUBLIC}/images/mac-mini.jpg` },
    { id: 5, category: 'Desktops', title: 'Mac mini', price: 699, img: `${PUBLIC}/images/mac-mini.jpg` },
    { id: 6, category: 'Desktops', title: 'Mac Studio', price: 1999, img: `${PUBLIC}/images/desktop.jpg` },
    { id: 7, category: 'Desktops', title: 'Mac Pro', price: 5999, img: `${PUBLIC}/images/desktop.jpg` },
    { id: 8, category: 'Displays', title: 'Studio Display', price: 1599, img: `${PUBLIC}/images/display.jpg` },
    { id: 9, category: 'Displays', title: 'AppleCare+ for Mac', price: 249, img: `${PUBLIC}/images/display.jpg` },
]

export default unitsDatas

export { anotherUnitsDatas, moviesDatas, scrollSliderDatas, productsCategoryData, scrollCardDatas, MainProductsData, macPageProducts}


// {id: 1, title: 'Give Something Special', img: 'images/apple-logo.jpg', desc: 'Find what they have been waiting for all year', firstBtnText:'Shop gifts',},