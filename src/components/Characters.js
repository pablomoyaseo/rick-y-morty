import React from 'react'

const Characters = (props) => {
    const  {characters , setCharacters } = props 
    const resetCharacter = () => {
        setCharacters(null)
    }
    console.log(characters)
  return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home' onClick={resetCharacter}>Volver a la home</span>
    
        <div className = "container-characters">
            {characters.map((character, index) => (
                <div className='character-container' key={index}>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h4>
                            {character.status === 'Alive' ? (
                                <>
                                    <span className='alive'/>
                                    Alive
                                </>
                            ): (
                                <>
                                    <span className='dead'/>
                                    Dead
                                </>
                            )}
                        </h4>
                        <p className='text-grey'>
                            <span>Episodios: </span> 
                            <span>{character.episode.length}</span>
                        </p>
                        <p className='text-grey'>
                            <span>Especie: </span> 
                            <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div> {/* container charater ends */}
        <span className='back-home' onClick={resetCharacter}>Volver a la home</span>
    </div>
  )
}

export default Characters