import { StorageSerializers } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object,
})

export const useUser = () => {
  const loginModel = ref({
    username: '',
    password: '',
  })

  const login = async () => {
    user.value = { id: 1, username: loginModel.value.username }
    ElMessage.success('Login Success')
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
