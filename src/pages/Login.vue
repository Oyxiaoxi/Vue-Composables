<script setup lang="ts">
import { useUser } from '~/composables/useUser'
const { loginModel, user, login, loggedIn, logout } = useUser()
</script>

<template>
  <h2 v-if="loggedIn" mt-6 text-center text-2xl text-gray-600>
    Welcome {{ user?.username }}
    <a
      href="#"
      inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
      @click.prevent="logout"
    >
      Logout
    </a>
  </h2>
  <div v-if="!loggedIn" min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8>
    <div sm:mx-auto sm:w-full sm:max-w-md>
      <img mx-auto h-12 w-auto src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
      <h2 mt-6 text-center text-3xl font-extrabold text-gray-900>
        Sign in to your account
      </h2>
      <p mt-2 text-center text-sm text-gray-600>
        Or
        {{ ' ' }}
        <a href="#" font-medium text-indigo-600 hover:text-indigo-500> start your 14-day free trial </a>
      </p>
    </div>

    <div mt-8 sm:mx-auto sm:w-full sm:max-w-md>
      <div bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10>
        <form ref="form" space-y-6 :model="loginModel">
          <div>
            <label for="UserName" block text-sm font-medium text-gray-700 text-left> User Name </label>
            <div mt-1>
              <input
                v-model="loginModel.username"
                appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
              >
            </div>
          </div>

          <div>
            <label for="PassWord" block text-sm font-medium text-gray-700 text-left> Password </label>
            <div mt-1>
              <input
                v-model="loginModel.password"
                appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
              >
            </div>
          </div>

          <div flex items-center justify-between>
            <div flex items-center>
              <input id="remember-me" name="remember-me" type="checkbox" h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded>
              <label for="remember-me" ml-2 block text-sm text-gray-900> Remember me </label>
            </div>

            <div text-sm>
              <a href="#" font-medium text-indigo-600 hover:text-indigo-500> Forgot your password? </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              @click.prevent="login"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
