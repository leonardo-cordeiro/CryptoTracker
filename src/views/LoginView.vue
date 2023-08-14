<!-- <template>
  <section class="gradient-form h-screen bg-[url('src/img/background.jpg')]">
    <div class="container h-full p-10 xl:ml-28">
      <div
        class="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200"
      >
        <div class="w-screen ml-44">
          <div class="block rounded-lg bg-[#080726] shadow-lg dark:bg-[#080726]">
            <div class="g-0 lg:flex lg:flex-wrap">
              <div class="px-4 md:px-0 lg:w-6/12">
                <div class="md:mx-6 md:p-12">
                  <div class="text-center pb-20">
                    <a href="/"><img class="mx-auto w-48" src="src/img/logo.png" alt="logo" /></a>
                  </div>

                  <form>
                    <p class="mb-4 text-[#e3cc63]">Please login to your account</p>
                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                      <label
                        for="exampleFormControlInput1"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Username
                      </label>
                    </div>

                    <div class="relative mb-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder="Password"
                      />
                      <label
                        for="exampleFormControlInput11"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Password
                      </label>
                    </div>

                    <div class="mb-12 pb-1 pt-1 text-center">
                      <button
                        class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style="
                          background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
                        "
                      >
                        Log in
                      </button>
                    </div>

                    <div class="flex items-center justify-between pb-6">
                      <p class="mb-0 mr-2 text-[#e3cc63]">Don't have an account?</p>
                      <button
                        type="button"
                        class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#e3cc63] transition duration-150 ease-in-out hover:border-danger-600 hover:bg-slate-300 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="dark"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div
                class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
              >
                <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 class="mb-6 text-xl font-semibold">We are more than just a company</h4>
                  <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->
<template>
  <div
    class="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[url('src/img/background.jpg')]"
  >
    <div
      class="lg:w-2/6 mx-auto md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <a href="/">
          <img class="mx-auto h-28 w-auto" src="src/img/logo.png" alt="Your Company"
        /></a>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-[#e3cc63]"
              >Email address</label
            >
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required=""
                class="block w-full rounded-md py-1.5 text-gray-900ring-1 ring-inset placeholder:text-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-[#e3cc63]"
                >Password</label
              >
              <!-- <div class="text-sm">
                <a href="#" class="font-semibold text-[#e3cc63] hover:text-[#c9ae36]"
                  >Forgot password?</a
                >
              </div> -->
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required=""
                class="block w-full rounded-md py-1.5 text-gray-900ring-1 ring-inset placeholder:text-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-[#e3cc63] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#c9ae36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ ' ' }}
          <a href="#" class="font-semibold leading-6 text-[#e3cc63] hover:text-[#c9ae36]"
            >Sign Up!</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
