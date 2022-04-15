import request from '@/utils/request';

//获取SPU列表数据的接口
///admin/product/{page}/{limit}   get   page limit category3Id
export const reqSpuList = (page, limit, category3Id) => request({ url: `/admin/product/spu/list`, method: 'get', params: {limit,page, category3Id } });

//获取SPU信息
///admin/product/getSpuById/{spuId}   get   
export const reqSpu = (spuId) => request({ url: `/admin/product/spu/info/${spuId}`, method: 'get' });

//获取品牌的信息
///admin/product/baseTrademark/getTrademarkList  get
export const reqTradeMarkList = () => request({ url: `/admin/product/baseTrademark/lists`, method: 'get' })


export const reqBaseSaleAttrList = () => request({ url: '/admin/product/attr/lists', method: 'get' });


//修改SPU||添加SPU：对于修改或者添加，携带给服务器参数大致一样的，唯一的区别就是携带的参数是否带id
export const reqAddOrUpdateSpu = (spuInfo) => {
    //携带的参数带有id----修改spu
    if (spuInfo.id) {
        return request({ url: '/admin/product/spu/update', method: 'post', data: spuInfo });
    } else {
        //携带的参数不带id---添加SPU
        return request({ url: '/admin/product/spu/add', method: 'post', data: spuInfo });
    }
}

//删除SPU
///admin/product/deleteSpu/{spuId}
export const reqDeleteSpu = (spuId)=>request({url:`/admin/product/spu/del/${spuId}`,method:'delete'});


//添加SKU
///admin/product/saveSkuInfo  post
export const reqAddSku = (skuInfo)=>request({url:'/admin/product/sku/add',method:'post',data:skuInfo});


//获取SKU列表数据的接口
//GET /admin/product/findBySpuId/{spuId}  
export const reqSkuList = (spuId)=>request({url:`/admin/product/sku/lists/${spuId}`,method:'get'});