import {
  commonParams,
  options
} from './config'
import axios from 'axios'
import {
  ERR_OK
} from 'api/config'
import jsonp from 'common/js/jsonp'

export function getTopList() {
  const url = '/api/getCommonInfo'

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    format: 'json',
    platform: 'h5',
    needNewCode: 1,
    uin: 0
  })

  const commonInfo = commonData('musicToplist.ToplistInfoServer', 'GetAll', {})

  return new Promise((resolve, reject) => {
    let tryTime = 3

    function request() {
      return axios.post(url, {
        comm: data,
        req_0: commonInfo
      }).then((response) => {
        const res = response.data
        if (res.code === ERR_OK) {
          resolve(res)
        } else {
          retry()
        }
      })
    }

    function retry() {
      if (--tryTime >= 0) {
        request()
      } else {
        reject(new Error('Can not get the songs url'))
      }
    }

    request()
  })
}

function commonData(module, method, param) {
  return {
    module: module,
    method: method,
    param: param
  }
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
