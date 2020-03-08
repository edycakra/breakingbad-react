import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { allActions } from '../../store/actions'
import Loading from '../Loading'

export default function CharacterDetail() {
    const { id } = useParams()
    const detail = useSelector(state => state.characters.detail)
    const loading = useSelector(state => state.characters.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.fetchDetail(id))
    }, [dispatch, id])

    return (
        <>
            {
                (loading || detail.length < 1) ?
                    <Loading />
                    :
                    < div className="box charDetail">
                        <div className="columns is-6">
                            <div className="column is-3">
                                <figure className="image is-3by4">
                                    <img src={detail[0].img} alt="detail" />
                                </figure>
                            </div>
                            <div className="column is-6">
                                <p className="is-size-4"><b>{detail[0].name}</b></p><hr />
                                <p className="is-size-4">Nickname: {detail[0].nickname}</p>
                                <p className="is-size-4">Birthday: {detail[0].birthday}</p>
                                <p className="is-size-4">Status: {detail[0].status} </p>
                                <p className="is-size-4">Portrayed by: {detail[0].portrayed} </p><hr />
                                <button className="button is-rounded favorites">
                                    <b>Add to Favorites</b>
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}