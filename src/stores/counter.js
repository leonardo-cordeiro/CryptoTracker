import { createPinia, defineStore } from 'pinia'
import router from '@/router'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  getters: {
    currentUser: (state) => state.user
  },
  actions: {
    async login(details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('User not found')
            break
          case 'auth/wrong-password':
            alert('Wrong password')
            break
          default:
            alert('Something went wrong')
        }

        return
      }

      this.SET_USER(auth.currentUser)

      router.push('/coins')
    },

    async register(details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('Email already in use')
            break
          case 'auth/invalid-email':
            alert('Invalid email')
            break
          case 'auth/operation-not-allowed':
            alert('Operation not allowed')
            break
          case 'auth/weak-password':
            alert('Weak password')
            break
          default:
            alert('Something went wrong')
        }

        return
      }

      this.SET_USER(auth.currentUser)

      router.push('/coins')
    },

    async logout() {
      await signOut(auth)

      this.CLEAR_USER()

      router.push('/login')
    },

    fetchUser() {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.CLEAR_USER()
        } else {
          this.SET_USER(user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/coins')
          }

          if (router.isReady() && router.currentRoute.value.path === '/') {
            router.push('/')
          }
        }
      })
    },

    SET_USER(user) {
      this.user = user
    },

    CLEAR_USER() {
      this.user = null
    }
  }
})

export const pinia = createPinia()

export function useStore() {
  return useAuthStore(pinia)
}
