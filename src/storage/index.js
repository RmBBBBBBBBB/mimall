/**
 * Storage封装
 */
const  STORAGE_KEY = 'mall';

export default{
  //存值
  setItem(key,value,module_name){
    if(module_name){
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name,val)
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
  },
  // 取值  获取某一个模块下的属性， {"user":{"userName":"杨瑞峰","age":"25"},""}
  getItem(key,module_name){
    if(module_name){
      let val = this.getItem(module_name)
      if(val) return val[key]
    }
    return this.getStorage()[key];
  },
  // 删除值
  clear(key,module_name){
    let val = this.getStorage()
    if(module_name){
      delete val[module_name][key];
    }else{
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))

  },
  //获取整个Storage
  getStorage(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  }

}
