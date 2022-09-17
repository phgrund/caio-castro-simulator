import { defineStore } from 'pinia'
import { uid } from 'quasar'

export const useSessionStore = defineStore('sessions', {
  state: () => ({
    sessions: []
  }),
  getters: {
    getSessions: (state) => state.sessions,
    getSessionById: (state) => sessionId => state.sessions.find(session => session.id === sessionId),
    getParticipantTotalValue (state) {
      return (sessionId, participantId) => {
        const session = this.getSessionById(sessionId)
        if (!session) return 0

        return session.items.reduce((total, item) => {
          return total + (item.participantsIds.includes(participantId)
            ? item.value / item.participantsIds.length
            : 0)
        }, 0)
      }
    },
    getItemById (state) {
      return (sessionId, itemId) => {
        const session = this.getSessionById(sessionId)
        if (!session) return null

        return session.items.find(item => item.id === itemId)
      }
    },
    getSessionTotalValueById (state) {
      return (sessionId) => {
        const session = this.getSessionById(sessionId)
        if (!session) return 0

        return session.items.reduce((total, item) => total + item.value, 0)
      }
    },
    getParticipantById (state) {
      return (sessionId, participantId) => {
        const session = this.getSessionById(sessionId)
        if (!session) return null

        return session.participants.find(participant => participant.id === participantId)
      }
    },
    getParticipantItemsById (state) {
      return (sessionId, participantId) => {
        const session = this.getSessionById(sessionId)
        if (!session) return []

        return session.items.filter(item => item.participantsIds.includes(participantId))
      }
    }
  },
  actions: {
    createSession (name) {
      this.sessions.push({
        id: uid(),
        name,
        participants: [],
        items: []
      })
    },
    createParticipant (sessionId, name) {
      const session = this.sessions.find(sessions => sessions.id === sessionId)
      if (!session) return

      session.participants.push({
        id: uid(),
        name
      })
    },
    createItem (sessionId, name, value, participantsIds) {
      const session = this.sessions.find(sessions => sessions.id === sessionId)
      if (!session) return

      session.items.push({
        id: uid(),
        name,
        value,
        participantsIds
      })
    },
    updateItem (sessionId, itemId, name, value, participantsIds) {
      const item = this.getItemById(sessionId, itemId)
      if (!item) return

      Object.assign(item, { name, value, participantsIds })
    },
    deleteItem (sessionId, itemId) {
      const session = this.sessions.find(sessions => sessions.id === sessionId)
      if (!session) return

      session.items.splice(session.items.findIndex(item => item.id === itemId), 1)
    },
    removeParticipantById (sessionId, participantId) {
      const session = this.getSessionById(sessionId)
      if (!session) return

      session.participants.splice(session.participants.findIndex(participant => participant.id === participantId), 1)
      session.items.forEach(item => {
        const participantIndex = item.participantsIds.indexOf(participantId)
        if (participantIndex !== -1) item.participantsIds.splice(participantIndex, 1)
      })
    }
  },
  persist: {
    paths: ['sessions']
  }
})
