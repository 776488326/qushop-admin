//sku模块
import request from '@/utils/request';
//sku列表的接口
///admin/product/list/{page}/{limit}
export const reqSkuList = (page,limit)=>request({url:`/admin/product/sku/list/${page}/${limit}`,method:'get'}); 

//上架
///admin/product/onSale/{skuId}
export const reqSale = (skuId)=>request({url:`/admin/product/sku/onSale/${skuId}`,method:'get'});

//下架
///admin/product/cancelSale/{skuId}
export const reqCancel = (skuId)=>request({url:`/admin/product/sku/cancelSale/${skuId}`,method:'get'});

//删除
export const reqDelSku = (skuId)=>request({url:`/admin/product/sku/del/${skuId}`,method:'delete'});

//获取SKU详情的接口
///admin/product/getSkuById/{skuId}  get
export const reqSkuById = (skuId)=>request({url:`/admin/product/sku/info/${skuId}`,method:'get'});

