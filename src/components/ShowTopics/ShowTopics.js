import React from 'react'
import '../ShowTopics/showtopics.css'
import { Link } from 'react-router-dom'
class ShowTopics extends React.Component {
  render () {
    const { data } = this.props
    console.log(data)
    const showTopics = data.length !== 0 ? data.map( item => {
      return (
        <div key={item.id} className='showtopic'>
          <img src={item.author.avatar_url} alt="11"/>
          <span className='topic-info'>{item.reply_count}/{item.visit_count}</span>
          <span className={`topic-tab ${(item.top || item.good)&&'active'}`}>{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':'问答'}</span>
          <span className='topic-title'><Link to={`/topic/${item.id}`}>{item.title}</Link></span>
        </div>
      )
    }) : <img src="http://wanzao2.b0.upaiyun.com/system/pictures/16295394/original/1f72f52fa6e0f24d.gif" alt="加载中，请稍后～" className='jiazai' />
    return (
      <div>{showTopics}</div>
    )
  }
}

export default ShowTopics
