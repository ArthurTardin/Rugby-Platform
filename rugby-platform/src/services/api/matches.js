import api from '../http/api.js'

export async function createMatch(matchData) {
    const response = await api.post('/matches', matchData,

    )
    
    return response.data
    
}