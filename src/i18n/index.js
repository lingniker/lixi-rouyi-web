import langObj from './lang/index'


var defaultLang = langObj['zh'];


function use(lang){
  defaultLang = langObj[lang] ? langObj[lang] : langObj['zh'];
}

function t(str){
  var value = '';

  if(!str){
    return value;
  }
  var data = str.split('.');
  // 递归处理
  function walk(obj,index){
    if(data.length - 1 == index){
      value = obj[data[index]];
      return;
    }
    if(obj[data[index]]){
      walk(obj[data[index]], index + 1);
    } else {
      value = ''
    }
  }
  walk(defaultLang, 0);
  return value;
}
export { use, t };