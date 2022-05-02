import request from '@/utils/request';

const reqGetSiteMessage = async ()=>{
    return request({
        url:"/admin/site/msg",
        method:"get"
    })
}

const reqSetSiteMessage = async (message)=>{
    return request({
        url: "/admin/site/update",
        method:"put",
        data: message
    })
}

export default {
    reqGetSiteMessage,
    reqSetSiteMessage
}