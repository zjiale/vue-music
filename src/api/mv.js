import {
  commonParams
} from './config'
import jsonp from 'common/js/jsonp'
import axios from 'axios'

export function getMvList() {
  const url = '/api/search'

  const data = Object.assign({}, commonParams, {
    ct: 24,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq.json',
    format: 'json',
    notice: 0,
    g_tk: 5381,
    qqmusic_ver: 1298,
    remoteplace: 'txt.yqq.mv',
    searchid: 127522763080551074,
    aggr: 0,
    catZhida: 1,
    lossless: 0,
    sem: 1,
    t: 12,
    p: 1,
    n: 12,
    w: '米津玄師'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMvUrl(mvList) {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = JSON.stringify(getParams(mvList))

  const common = Object.assign({}, commonParams, {
    g_tk: 5381,
    hostUin: 0,
    format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    data: data
  })

  return jsonp(url, common)
}

function getParams(vids) {
  let ret = []

  vids.forEach((item) => {
    ret.push(item.v_id)
  })

  return {
    getMvUrl: {
      module: 'gosrf.Stream.MvUrlProxy',
      method: 'GetMvUrls',
      param: {
        vids: ret,
        request_typet: 10001
      }
    }
  }
}
