import './ListItem.css';
import { confirmAlert } from 'react-confirm-alert';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItem(props:any) {
    const items = props.items;
    const [detail, setDetail] = useState(items);
    useEffect(() => {
        setDetail(detail);
    }, [items])
    function viewDetail(key: any) {
        items.map((item: { key: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) => {
            if (item.key === key) {
                setDetail(
                    <div>
                        <div className='detail-header'><p>Detail Task</p></div>
                        <div className='detail-infor'>
                            <div className='detail-title'>
                                <p>Name </p>
                                <p>Description </p>
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
            {items.map((item: { key: React.Key; name: string | number | readonly string[]; }) => (
                <div key={item.key}>
                    <div className="list" >
                        <p>
                            <label><input type="text" value={item.name} onChange={(e) => {
                                props.Update(e.target.value, item.key)
                            }} />
                            </label>
                            <span>
                                <FontAwesomeIcon className="faicons" icon="trash"
                                    onClick={() => { window.confirm('Are you sure?',) && props.Delete(item.key) }} />
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