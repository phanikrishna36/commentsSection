// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {itemDetails, onBtnClick, onDelete} = props
  const {id, title, desc, isLiked, color} = itemDetails
  const btnClick = () => onBtnClick(id)
  const deleteBtn = () => onDelete(id)
  return (
    <li type="none">
      <div className="totalCont">
        <div className="mixedCont">
          <div className={`profile ${color}`}>
            <h1>{title[0].toUpperCase()}</h1>
          </div>

          <div className="content">
            <div className="title">
              <h1 className="head">{title}</h1>
              <p className="time">{formatDistanceToNow(new Date())} ago</p>
            </div>
            <p>{desc}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btnStyle" onClick={btnClick} type="button">
            {!isLiked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
              />
            )}
            <span> Like</span>
          </button>
          <button
            className="btnStyle"
            data-testid="button"
            type="button"
            onClick={deleteBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
