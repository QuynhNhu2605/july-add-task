import './ListItem.css';
import { confirmAlert } from 'react-confirm-alert';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItem(props) {
    const items = props.items;
    const [detail, setDetail] = useState();
    useEffect(() =>{
        setDetail();
    },[items])
    function viewDetail(key) {
        items.map(item => {
            if (item.key === key) {
                setDetail(
                    <div>
                        <div className='detail-header'><p>Detail Task</p></div>
                        <div className='detail-infor'>
                            <div className='detail-title'>
                                <p>name </p>
                                <p>description </p>
                            </div>
                            <div className='detail-content'>
                                <p>{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }



    return <div className="infor-tasks">
        <div>
            {items.map((item) => (
                <div key={item.key}>
                    <div className="list" >
                        <p>
                            <input type="text" value={item.name} onChange={(e) => {
                                props.Update(e.target.value, item.key)
                            }} />
                            <span>
                                <FontAwesomeIcon className="faicons" icon="trash"
                                    onClick={() => {window.confirm('Are you sure?',)&& props.Delete(item.key) }} />
                            </span>
                            <button type="submit" onClick={() => { viewDetail(item.key) }}>View Detail</button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <div className="bottom"></div>
        <div className="detail-tasks">{detail}</div>
    </div>;
}
export default ListItem;