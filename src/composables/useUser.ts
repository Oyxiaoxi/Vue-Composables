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
      ElMessage.success('Login Success')
    }, 1000)
  }

  const loggedIn = computed(() => user.value?.id)
  const logout = async () => {
    user.value = null
    ElMessage.success('Logout Success')
  }

  const registerModule = ref({})
  const register = async () => {
    ElMessage.success('Register Success')
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
