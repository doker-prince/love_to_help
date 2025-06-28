import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    state: () => ({
        token: '',
        username: '',
        role: '', // admin/org/user
    }),
    actions: {
        setUser({ token, username, role }) {
            this.token = token
            this.username = username
            this.role = role
            localStorage.setItem('user', JSON.stringify({ token, username, role }))
        },
        logout() {
            this.token = ''
            this.username = ''
            this.role = ''
            localStorage.removeItem('user')
        },
        loadUser() {
            const data = localStorage.getItem('user')
            if (data) {
                const { token, username, role } = JSON.parse(data)
                this.token = token
                this.username = username
                this.role = role
            }
        }
    }
}) 