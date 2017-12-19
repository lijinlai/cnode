import React from 'react'
import '../Footer/footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className='Foot'>
        <div className='FootInner'>
          <span>RSS</span>
          <span>|</span>
          <span>源码地址</span>
        </div>
        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        <p>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean('https://www.digitalocean.com/')</p>
      </div>
    )
  }
}

export default Footer
