import axios from 'axios'
import {
  commonParams
} from './config'

export function getMvList() {
  const url = '/api/getMvList'

  const data = JSON.stringify(getDataInfo())

  const common = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq.json',
    format: 'json',
    notice: 0,
    g_tk: 5381,
    data: data
  })

  return axios.get(url, {
    params: common
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

function getDataInfo() {
  return {
    'comm': {
      'ct': 24
    },
    'mv_tag': {
      'module': 'MvService.MvInfoProServer',
      'method': 'GetAllocTag',
      'param': {}
    },
    'mv_list': {
      'module': 'MvService.MvInfoProServer',
      'method': 'GetAllocMvInfo',
      'param': {
        'start': 0,
        'size': 20,
        'version_id': 7,
        'area_id': 15,
        'order': 1
      }
    }
  }
}
