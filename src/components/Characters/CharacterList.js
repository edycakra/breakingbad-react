import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allActions } from '../../store/actions'
import Loading from '../Loading'
import CharacterCard from '../Characters/CharacterCard'

export default function CharacterList() {
    const characters = useSelector(state => state.characters.characters)
    const loading = useSelector(state => state.characters.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allActions.fetchCharacters())
    }, [dispatch])

    return (
        <>
            {
                (loading || characters.length < 1) ?
                    <Loading />
                    :
                    <div className="box">
                        <div className="columns is-multiline">
                            {characters.map(char => {
                                return <CharacterCard
                                    char={char}
                                    key={char.char_id}
                                />
                            })}
                        </div>
                    </div>
            }
        </>
    )
}