import React from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';
const { Meta } = Card;
class Cards extends React.Component{
  render(){
    return(
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <div>
      <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="ladies outfit" description="shopping outfit used in Europe" />
    </Card>
    </div>
    <div>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://webmeup.com/upload/blog/lead-image-105.png" />}
>
<Meta title="mind thinking" description="new ideas comes daily" />
</Card></div>

<div>
<Card
hoverable
style={{ width: 240 }}
cover={<img alt="example" src="https://s23527.pcdn.co/wp-content/uploads/2020/01/100k-moon.jpg.optimal.jpg" />}
>
<Meta title="Moon" description="moon zoom pic" />
</Card></div>
</div>
    )
  }
}

export default Cards;