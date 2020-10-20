<template>
<section class="o-page gap-4">
    <div class="text-left pb-4">
      <p class="text-2xl text-gray-500">My Profile</p>
    </div>
    <div class="grid grid-rows-8 grid-cols-6 gap-4">
      <div class=" col-span-12">
        <div class="" style="">
            <div class="bg-gray-100 flex gap-8 px-8">
                <div class="w-1/4 py-8">
                    <div class="max-w-4xl mx-auto">
                        <div class=" overflow-hidden text-left">
                            <div class="px-4 py-3 sm:px-6 bg-white border-yellow-dark border-l-4">
                                <h3 class="text-md font-bold text-blue-dark ">
                                    My Account
                                </h3>
                            </div>
                            <div class="px-4 py-3 sm:px-6 ">
                                <h3 class="text-md leading-6 font-medium text-gray-900">
                                    Change Password
                                </h3>
                            </div>
                            <div class="px-4 py-3 sm:px-6">
                                <h3 class="text-md leading-6 font-medium text-gray-900">
                                    Help Center
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-3/4 py-8 ">
                    <div class="max-w-4xl mx-auto">
                        <div class="bg-white shadow overflow-hidden sm:rounded-lg text-left">
                            <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                                <h3 class="text-lg leading-6 font-medium text-gray-900">Account Details</h3>
                                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">Personal details and application.</p>
                            </div>
                            <div>
                                <dl>
                                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm leading-5 font-medium text-gray-500">
                                            Full name
                                        </dt>
                                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                            {{user.name}}
                                        </dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm leading-5 font-medium text-gray-500">
                                            Username
                                        </dt>
                                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                            {{user.username}}
                                        </dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm leading-5 font-medium text-gray-500">
                                            Mobile Number
                                        </dt>
                                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                            {{user.mobile_number}}
                                        </dd>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm leading-5 font-medium text-gray-500">
                                            Email address
                                        </dt>
                                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                            {{user.email}}
                                        </dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm leading-5 font-medium text-gray-500">
                                            Member since
                                        </dt>
                                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                            {{user.created_at}}
                                        </dd>
                                    </div>
                                    <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm leading-5 font-medium text-gray-500">
                                            Attachments
                                        </dt>
                                        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                                            <ul class="border border-gray-200 rounded-md">
                                                <li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" x-description="Heroicon name: paper-clip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate">
                                                            resume_back_end_developer.pdf
                                                        </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                                                            Download
                                                        </a>
                                                    </div>
                                                </li>
                                                <li class="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
                                                    <div class="w-0 flex-1 flex items-center">
                                                        <svg class="flex-shrink-0 h-5 w-5 text-gray-400" x-description="Heroicon name: paper-clip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <span class="ml-2 flex-1 w-0 truncate">
                                                            coverletter_back_end_developer.pdf
                                                        </span>
                                                    </div>
                                                    <div class="ml-4 flex-shrink-0">
                                                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                                                            Download
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user'))
        }
    }
}
</script>

<style>

</style>