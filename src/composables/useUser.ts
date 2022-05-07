import { StorageSerializers } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object,
})

export const useUser = () => {
  const router = useRouter()
  const loginModel = ref({
    username: 'Oyxiaoxi',
    email: 'Oyxiaoxi@me.com',
    password: 'secret',
  })

  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username, email: loginModel.value.email }
    setTimeout(() => {
      router.push('/')
      ElMessage({
        showClose: true,
        message: 'Login success',
        type: 'success',
      })
    }, 1000)
  }

  const loggedIn = computed(() => user.value?.id)
  const logout = async () => {
    user.value = null
    ElMessage({
      showClose: true,
      message: 'Logout Success',
      type: 'success',
    })
  }

  const registerModule = ref({})
  const register = async () => {
    ElMessage({
      showClose: true,
      message: 'Register Success',
      type: 'success',
    })
  }

  return {
    loginModel,
    user,
    login,
    loggedIn,
    logout,

    registerModule,
    register,
  }
}
