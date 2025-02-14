export const accordions_1 = `
    < !--FAQ Component -->
<div class="container mx-auto py-12 px-4 max-[640px]:px-1">
    <h1 class="text-center text-gray-900 dark:text-white text-3xl md:text-4xl font-bold">Common Questions</h1>
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg mt-8 p-6">
        <!-- Search Bar -->
       <div class="flex flex-col md:flex-row items-center justify-between gap-6 py-6 px-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
    <!-- Text Section -->
    <div class="text-center md:text-left">
        <h2 class="text-2xl font-semibold text-gray-800 dark:text-white">Need Help?</h2>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
            Can't find what you're looking for? Reach out to us and our team will assist you promptly.
        </p>
    </div>

    <!-- Search Box -->
    <div class="relative w-full md:w-1/2">
        <input 
            type="text" 
            placeholder="Search your question..." 
            class="w-full py-3 px-5 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition duration-300">
        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-600 dark:text-indigo-400">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
</div>


    <!-- FAQ Section -->
<div class="mt-6 space-y-6">
        <!-- FAQ Item -->
        <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div class="flex justify-between items-center">
                    <h3 class="text-gray-900 dark:text-white text-lg font-semibold">How to track my order?</h3>
                    <button class="focus:outline-none toggle-icon">
                        <svg class="text-gray-500 dark:text-gray-400 rotate-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                <p class="hidden mt-4 text-gray-600 dark:text-gray-300">
                    You can track your order status from the "Order History" section of your account or contact our customer service team for assistance.
                </p>
            </div>

            <!-- FAQ Item -->
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div class="flex justify-between items-center">
                    <h3 class="text-gray-900 dark:text-white text-lg font-semibold">What payment methods do you accept?</h3>
                    <button class="focus:outline-none toggle-icon">
                        <svg class="text-gray-500 dark:text-gray-400 rotate-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                <p class="hidden mt-4 text-gray-600 dark:text-gray-300">
                    We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Visit our payments page for more details.
                </p>
            </div>

                        <!-- FAQ Item -->
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div class="flex justify-between items-center">
                    <h3 class="text-gray-900 dark:text-white text-lg font-semibold">What payment methods do you accept?</h3>
                    <button class="focus:outline-none toggle-icon">
                        <svg class="text-gray-500 dark:text-gray-400 rotate-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                <p class="hidden mt-4 text-gray-600 dark:text-gray-300">
                    We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Visit our payments page for more details.
                </p>
            </div>

                        <!-- FAQ Item -->
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div class="flex justify-between items-center">
                    <h3 class="text-gray-900 dark:text-white text-lg font-semibold">What payment methods do you accept?</h3>
                    <button class="focus:outline-none toggle-icon">
                        <svg class="text-gray-500 dark:text-gray-400 rotate-0 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
                <p class="hidden mt-4 text-gray-600 dark:text-gray-300">
                    We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Visit our payments page for more details.
                </p>
            </div>
        </div>
    </div>
</div>

<script>
    const toggles = document.querySelectorAll(".toggle-icon");
    toggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const content = toggle.closest("div").nextElementSibling;
            content.classList.toggle("hidden");
            toggle.querySelector("svg").classList.toggle("rotate-180");
        });
    });
</script>
`
export const accordions_2 = ` 
          <!-- component -->
<div class="bg-white container mx-auto p-6">
    <h1 class="text-center dark:text-white lg:text-4xl mb-5 text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>
  <div class="mb-4">
    <div
      class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
      onclick="toggleFaq(this)"
    >
      Lorem ipsum dolor sit amet?
      <span class="h-6 w-6 flex items-center justify-center text-teal-500">
        <i class="fas fa-plus"></i>
      </span>
    </div>
    <div class="p-3 hidden">
      <p class="text-gray-600 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum.
      </p>
      <p class="text-gray-600">
        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo.
      </p>
    </div>
  </div>
  <div class="mb-4">
    <div
      class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
      onclick="toggleFaq(this)"
    >
      Lorem ipsum dolor sit amet?
      <span class="h-6 w-6 flex items-center justify-center text-teal-500">
        <i class="fas fa-plus"></i>
      </span>
    </div>
    <div class="p-3 hidden">
      <p class="text-gray-600 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum.
      </p>
      <p class="text-gray-600">
        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo.
      </p>
    </div>
  </div>
  <div class="mb-4">
    <div
      class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
      onclick="toggleFaq(this)"
    >
      Lorem ipsum dolor sit amet?
      <span class="h-6 w-6 flex items-center justify-center text-teal-500">
        <i class="fas fa-plus"></i>
      </span>
    </div>
    <div class="p-3 hidden">
      <p class="text-gray-600 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum.
      </p>
      <p class="text-gray-600">
        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo.
      </p>
    </div>
  </div>
</div>

<script>
  function toggleFaq(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector("i");
    const isOpen = !content.classList.contains("hidden");

    if (isOpen) {
      content.classList.add("hidden");
      icon.classList.replace("fa-minus", "fa-plus");
    } else {
      content.classList.remove("hidden");
      icon.classList.replace("fa-plus", "fa-minus");
    }
  }
</script>
`
export const accordions_3 = `
<body class='bg-gray-50 px-4'>

<div class="font-sans border-2 max-w-4xl border-gray-200 rounded-lg shadow-lg overflow-hidden  mx-auto">

 <h2 class="text-3xl font-semibold ms-5 mt-5 text-gray-800 mb-6">Frequently Asked Questions (FAQs)</h2>
    <div role="radiogroup" class="space-y-2">
        <!-- Option 1 -->
        <label class="flex items-center cursor-pointer py-4 px-6 hover:bg-gray-100 transition-all">
            <input 
                type="radio" 
                name="eventOption" 
                value="timings" 
                class="hidden peer" 
                onclick="toggleContent('timings', this)" 
            />
            <div class="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center transition-colors peer-checked:bg-indigo-600 peer-checked:border-indigo-600">
                <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span class="ml-4 text-gray-700">What are the event timings and venues?</span>
        </label>
        <div id="timings" class="hidden px-6 py-4">
            <p class="text-sm text-gray-600 leading-relaxed">
                The event timings are from 10:00 AM to 5:00 PM, and it will be held at our main conference hall in downtown.
            </p>
        </div>

        <!-- Option 2 -->
        <label class="flex items-center cursor-pointer py-4 px-6 hover:bg-gray-100 transition-all">
            <input 
                type="radio" 
                name="eventOption" 
                value="rsvp" 
                class="hidden peer" 
                onclick="toggleContent('rsvp', this)" 
            />
            <div class="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center transition-colors peer-checked:bg-indigo-600 peer-checked:border-indigo-600">
                <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span class="ml-4 text-gray-700">Can I RSVP for the event in advance?</span>
        </label>
        <div id="rsvp" class="hidden px-6 py-4">
            <p class="text-sm text-gray-600 leading-relaxed">
                Yes, you can RSVP by filling out the form on our website or contacting us directly.
            </p>
        </div>

        <!-- Option 3 -->
        <label class="flex items-center cursor-pointer py-4 px-6 hover:bg-gray-100 transition-all">
            <input 
                type="radio" 
                name="eventOption" 
                value="dresscode" 
                class="hidden peer" 
                onclick="toggleContent('dresscode', this)" 
            />
            <div class="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center transition-colors peer-checked:bg-indigo-600 peer-checked:border-indigo-600">
                <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span class="ml-4 text-gray-700">What is the dress code for the event?</span>
        </label>
        <div id="dresscode" class="hidden px-6 py-4">
            <p class="text-sm text-gray-600 leading-relaxed">
                The dress code is business casual. Feel free to wear something comfortable yet professional.
            </p>
        </div>
    </div>
</div>

<script>
    function toggleContent(id, radio) {
        // Hide all content
        const contents = document.querySelectorAll('[id]');
        contents.forEach(content => {
            content.classList.add('hidden');
        });

        // Show the selected content
        const selectedContent = document.getElementById(id);
        if (selectedContent) {
            selectedContent.classList.remove('hidden');
        }
    }
</script>
`
export const accordions_4 = ``
export const accordions_5 = ``


