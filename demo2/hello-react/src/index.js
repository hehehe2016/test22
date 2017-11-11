import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

class LikeButton extends React.Component{
	static defaultProps = {   //默认
		likedText : '取消',
		unlikedText : '点赞'
	}

	constructor(){
		super()
		this.state = {
			likedText : '已赞',
			unlikedText : '赞'
		}
	}

	handleClickOnChange(){
		this.setState({
			likedText : '取消',
			unlikedText : '点赞'
		})
	}

	handleClickOnLikeButton(){
		this.setState({
			isLiked:!this.state.isLiked
		})

		if(this.props.onClick){
			this.props.onClick()  
		}

	}

	render(){
		return (
			
			<button onClick={this.handleClickOnLikeButton.bind(this)}>
				{this.state.isLiked? this.props.likedText : this.props.unlikedText}
			</button>
		)
	}
}

class Index extends React.Component{
	constructor(){
		super()
		this.state = {
			likedText : '已赞',
			unlikedText : '赞'
		}
	}

	handleClickOnChange(){
		this.setState({
			likedText : '取消',
			unlikedText : '点赞'
		})
	}

	render () {
	    return (
	        <div>
		        <LikeButton
		          	likedText={this.state.likedText}
		         	unlikedText={this.state.unlikedText} />
		        <div>
		          	<button onClick={this.handleClickOnChange.bind(this)}>
		            修改 wordings
		        	</button>
		        </div>
	        </div>
	    )
	}
}

//类组件
class HelloWorld extends React.Component{
	constructor(){
		super()
	}

	sayHi(){
		alert('Hello World')
	}

	render(){
		return (
			<div onClick={this.sayHi.bind(this)}>Hello World</div>
		)
	}
}


//函数式组件:无状态组件
const HelloWorld2 = (props) => {
	const sayHi = (event) => alert('Hello World')
	return (
		<div onClick={sayHi}>Hello World</div>
	)
}

//数据列表
const users = [
	{username:'Jerry',age:21,gender:'male'},
	{username:'Tomy',age:22,gender:'male'},
	{username:'Lily',age:19,gender:'female'},
	{username:'Lucy',age:20,gender:'female'}
]

//使用map遍历数组
class User extends Component{
	render(){
		//const useritem = this.props.useritem
		const {useritem} = this.props //简写
		return (
			<div>
				<div>姓名：{useritem.username}</div>
				<div>年龄：{useritem.age}</div>
				<div>性别：{useritem.gender}</div>
				<hr/>
			</div>
		)	
	}
}

class Index2 extends Component{
	render(){
		return (
			<div>
				{users.map((user) => <User useritem={user} />)}
			</div>
		)
	}
}

ReactDOM.render(
		<Index2 />,
	document.getElementById('root2')
)

ReactDOM.render(

	<Index />,
	document.getElementById('root')
)