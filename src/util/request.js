import axios from 'axios'
import qs from 'qs'

const baseUrl='/api'
//拦截响应
axios.interceptors.response.use(res=>{
    console.log('==========请求的路径:'+res.config.url+'================');
    console.log(res);
    return res
})

//菜单模块的请求
//菜单的添加
export const reqMenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}
//菜单列表
export const reqMenuList=(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
}
//获取一条数据
export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
}

//菜单编辑
export const reqMenuEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}

//菜单删除
export const reqMenuDel=(data)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:data
    })
}
///////////////////////////////////角色管理/////////////////////////////////////

//角色添加
export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}
///////////////////////////////////角色列表/////////////////////////////////////

//角色列表
export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get',
    })
}

//角色的一条数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:id
    })
}
//角色编辑
export const reqRoleEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:qs.stringify(id)
    })
}
//角色删除
export const reqRoleDel=(id)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:qs.stringify(id)
    })
}
///////////////////////////////////管理员管理/////////////////////////////////////

// 管理员添加
export const requserAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:qs.stringify(data)
    })
}
// 管理员列表
export const requserList=(params)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:params
    })
}

// 管理员一条数据
export const requserListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:id
    })
}

// 管理员编辑
export const requserEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:id
    })
}

// 管理员删除
export const requserDel=(id)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:id
    })
}

// 管理员总数
export const requserCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',
       
    })
}

// 管理员登录
export const requserLogin=(data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
    })
}
//////////////////////////商品分类管理///////////////////////////////////
// 商品分类添加
export const reqcateAdd=(data)=>{
    // 由于上传的是文件 所以需要用qs转一下
    var form  = new FormData()
    // {pid:1,catename:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateadd',
        method:'post',
        data:form
    })
}
// 商品分类列表
export const reqcateList=(params)=>{
    return axios({
        url:baseUrl+'/api/catelist',
        method:'get',
        params:params
    })
}

// 商品分类一条数据
export const reqcateListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/cateinfo',
        method:'get',
        params:id
    })
}

// 商品分类编辑
export const reqcateEdit=(data)=>{
    var form  = new FormData()
    // {pid:1,catename:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateedit',
        method:'post',
        data:form
    })
}

// 商品分类删除
export const reqcateDel=(id)=>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method:'post',
        data:id
    })
}

