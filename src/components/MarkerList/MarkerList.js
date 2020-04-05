import React from 'react'
import {Button} from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux'

const MarkerList = () => {
    const markers = useSelector(state => state.markers);
    const dispatch = useDispatch()
    const handleClick = (e) => {
        dispatch({
            type: "REMOVE_MARKER",
            id: e.currentTarget.id
        })
    }
    return <>
    <ul>
        {markers.map(((e, index) => {
            return <li>{index}
            latitude {e.coordinates[0]}
            longtitude {e.coordinates[1]}
            <Button className="btn-round" color="danger" outline id={e.id} onClick={handleClick}>
            remove
          </Button></li>
        }))
        }

    </ul>

    </>
}


export default MarkerList