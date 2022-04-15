//平台属性管理模块请求文件
import request from '@/utils/request';

//获取一级分类数据接口
///admin/product/getCategory1   get
export const reqCategory1List = ()=>request({url:'/admin/product/getCategory1',method:'get'});


//获取二级分类数据接口
//admin/product/getCategory2/{category1Id} get
export const reqCategory2List = (category1Id)=>request({url:`/admin/product/getCategory2`,method:'get',params:{category1Id}});

//获取三级分类数据接口
///admin/product/getCategory3/{category2Id}  get
export const reqCategory3List = (category2Id)=>request({url:`/admin/product/getCategory3`,method:'get',params:{category2Id}});


//获取平台属性接口
///admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}  get
export const reqAttrList = (category3Id)=>request({url:`/admin/product/attr/list`,method:'get',params:{category3Id}});


//添加属性与属性值接口
///admin/product/saveAttrInfo  post
export const reqAddOrUpdateAttr = (data)=>request({url:'/admin/product/attr/add',method:'post',data});
export const reqDeleteAttr = (data)=>request({url:'/admin/product/attr/del',method:'delete',data});


/*
{
  "attrName": "",      属性名
  "attrValueList": [   属性名中属性值，因为属性值可以是多个，因此需要的是数组
    {
      "attrId": 0,          属性的id
      "valueName": "string"  属性值
    }
  ],
  "categoryId": 0,    category3Id
  "categoryLevel":3,
}
*/


