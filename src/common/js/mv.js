export default class Mv {
  constructor({
    id,
    name,
    image,
    singer,
    sid,
    vid,
    url
  }) {
    this.id = id
    this.name = name
    this.image = image
    this.singer = singer
    this.vid = vid
    this.url = url
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${sid}.jpg?max_age=2592000`
  }
}

export function createMv(MvData) {
  return new Mv({
    id: MvData.mv_id,
    name: MvData.mv_name,
    image: MvData.mv_pic_url,
    singer: MvData.singer_name,
    sid: MvData.singerMID,
    vid: MvData.v_id,
    url: MvData.url
  })
}
