import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    inputText: '',
    inputDescription: '',
    commentsList: [],
  }

  onBtnClick = id => {
    const {commentsList} = this.state
    const filterList = commentsList.map(i => {
      if (i.id === id) {
        return {...i, isLiked: !i.isLiked}
      }
      return i
    })
    this.setState(i => ({
      commentsList: filterList,
    }))
  }

  onDelete = id =>
    this.setState(i => ({
      commentsList: i.commentsList.filter(j => j.id !== id),
    }))

  onClicked = e => {
    console.log('working')
    e.preventDefault()
    const {inputText, inputDescription} = this.state
    const CommentObject = {
      id: uuidv4(),
      title: inputText,
      desc: inputDescription,
      isLiked: false,
      color:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }

    this.setState(i => ({
      commentsList: [...i.commentsList, CommentObject],
      inputText: '',
      inputDescription: '',
    }))
  }

  updateInputText = e => this.setState({inputText: e.target.value})

  updateInputDescription = e =>
    this.setState({inputDescription: e.target.value})

  render() {
    const {inputText, inputDescription, commentsList, isLike} = this.state
    return (
      <div className="cont">
        <div>
          <h1>Comments</h1>
          <div className="inside">
            <form
              className="section"
              onSubmit={
                inputText && inputDescription
                  ? this.onClicked
                  : e => {
                      e.preventDefault()
                    }
              }
            >
              <p className="para">Say something about 4.0 Technologies</p>
              <input
                className="inputSpace"
                onChange={this.updateInputText}
                value={inputText}
                type="text"
                placeholder="Your Name"
              />
              <textarea
                onChange={this.updateInputDescription}
                className="inputSpace"
                value={inputDescription}
                cols="8"
                rows="8"
                placeholder="Your Comment"
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                alt="comments"
              />
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="countBox">
          <p className="countStyle">{commentsList.length}</p>
          <p className="countPara">Comments</p>
        </div>
        <ul>
          {commentsList.map(i => (
            <CommentItem
              key={i.id}
              itemDetails={i}
              isLike={isLike}
              onBtnClick={this.onBtnClick}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
