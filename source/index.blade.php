@extends('_layouts.master')

@section('body')
    <div id="home" class="w-full bg-white mx-auto container shadow-2xl">
        <header class="bg-white text-center sticky top-0 border-b-2 border-gray-300 lg:pb-6 lg:pt-24">
            <div class="logo lg:-m-20 flex justify-center"><a href="#home"><img class="text-center" style="width:16rem;" src="/assets/images/logo.png" alt="Bryants Custom Machine"></a></div>
                <scrollactive active-class="active" :offset="135" class="flex my-nav text-center justify-center mb-2 lg:px-4">
                    <div class="nav-left flex flex-row no-underline font-medium tracking-wide md:text-xl lg:flex-1 lg:px-4 xl:ml-8">
                        <a href="#home" class="scrollactive-item no-underline px-4 py-2 mr-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:p-4">Home</a>
                        <a href="#services" class="scrollactive-item no-underline px-4 py-2 mr-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:ml-4 lg:p-4 xl:ml-12">Services</a>
                    </div>
                    <div class="nav-right flex flex-row no-underline font-medium tracking-wide md:text-xl lg:justify-end lg:flex-1 xl:mr-8">
                        <a href="#about" class="scrollactive-item no-underline px-4 py-2 mr-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:p-4 lg:mr-4 xl:mr-12">About</a>
                        <a href="#contact" class="scrollactive-item no-underline px-4 py-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:p-4">Contact</a>
                    </div>
                </scrollactive>
        </header>
        <section class="flex flex-col hero text-center justify-center">
            <div class="text-xl text-white font-hairline uppercase mb-6 md:text-3xl shadow-lg">
                Innovative | Precise | Efficient
            </div>
            <div>
                <button class="bg-white text-black px-8 py-4 rounded hover:bg-black hover:text-white"><a href="tel:806-385-3738">(806) 385-3738</a></button>
            </div>   
        </section>
        <svg class="container h-6 md:h-12 text-white w-full -mt-8 md:-mt-16" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,100 100,100 0,100 0" />
        </svg>
        <div id="services" class="flex flex-col bg-white container px-4 py-12 justify-between md:flex-row">
            <div class="bg-gray-200 p-8 mb-4 md:w-1/3 md:mr-4">
                <h3 class="text-left md:text-right font-light text-xl uppercase tracking-wide not-sr-only"><span class="font-bold">Our</span> Services</h3>
                <hr class="ml-0 md:ml-auto md:mr-0 border-t-2 border-customGreenDarker w-12 pb-4">
                <p class="text-left md:text-right leading-loose text-base text-gray-800">As a family owned and operated business, we understand the challenges and disconnect customers face when dealing with
                overseas companies or large corporations. We stand behind our product 100% and guarantee each part received will be of
                highest quality and within the industries specifications.</p>
            </div>
            <div class="mb-4 overflow-hidden md:w-1/3 md:mr-4">
                <img src="https://res.cloudinary.com/noble-integrations/image/upload/v1568924471/BCM/service2_k4ccc1.jpg" alt="Threaded Pipe Picture">
                <div class="py-4">
                    <div class="font-bold text-l mb-2 text-customGreenDarker uppercase tracking-wide">Threaded Pipe</div>
                    <p class="text-sm text-gray-800 leading-normal">We manufactuer up to 3" pipe for water well applications. Our threads are machined to be precise and quality is our top
                    priority. We guarantee our products.</p>
                </div>
            </div>
            <div class="overflow-hidden mb-2 md:w-1/3">
                <img src="https://res.cloudinary.com/noble-integrations/image/upload/v1568924471/BCM/service1_z3mob7.jpg" alt="Custom Maching Picture">
                <div class="py-4">
                    <div class="font-bold text-l mb-2 text-customGreenDarker uppercase tracking-wide">Custom Machining</div>
                    <p class="text-sm text-gray-800 leading-normal">Our shop can make any part you need for your operation. We specialize in creating those hard to find parts needed in the
                    water well and oil field industries.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row px-4 py-12 bg-gray-200">
            <div class="flex-1 p-4 text-center">
                <svg class="fill-current h-16 w-16 text-customGreenDarker bg-white inline-block text-center rounded-full p-4 mb-4"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 8a7 7 0 1 1 10.62 6l-.64 3.2a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8L8.38 14A7 7 0 0 1 5 8zm12 0a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0zM15 21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
                </svg>
                <div class="uppercase text-gray-800 font-semibold text-lg">Innovative</div>
                <div class="mt-4 text-gray-800 leading-loose">We are bringing innovative techniques to the industry by designing
                    and building custom equipment to elevate production.
                    With the equipment and machines that are in place, we will be able to compete with the leading manufactures
                    in todays
                    market.</div>
            </div>
            <div class="flex-1 p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="fill-current h-16 w-16 text-customGreenDarker bg-white inline-block text-center rounded-full p-4 mb-4">
                    <path class="primary"
                        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm11 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path class="secondary"
                        d="M9.73 14H17a1 1 0 0 1 0 2H9.73a2 2 0 0 0 0-2zm4.54-6a2 2 0 0 0 0 2H7a1 1 0 1 1 0-2h7.27z" />
                </svg>
                <div class="uppercase text-gray-800 font-semibold text-lg">Precise</div>
                <div class="mt-4 text-gray-800 leading-loose">We have seven (7) CNC Machines that have been precisely calibrated
                    to produce a consistent and flawless product. We used
                    precision instruments that are calibrated daily to measure each product.</div>
            </div>
            <div class="flex-1 p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    class="fill-current h-16 w-16 text-customGreenDarker bg-white inline-block text-center rounded-full p-4 mb-4">
                    <path class="secondary"
                        d="M6.64 6.46h7.07a1 1 0 0 1 .7 1.71l-4.24 4.24a1 1 0 0 1-.7.3H2.38A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3zm10.9 10.9a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-7.07a1 1 0 0 1 .29-.71l4.24-4.24a1 1 0 0 1 1.7.7v7.07z" />
                    <path class="primary"
                        d="M5.78 13.19a15.94 15.94 0 0 1 14.39-10.4 1 1 0 0 1 1.04 1.04 15.94 15.94 0 0 1-10.4 14.39 1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16zm.59 2.57a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47z" />
                    <path class="secondary"
                        d="M7.23 10.26a19.04 19.04 0 0 1 6.5 6.51c-.92.58-1.9 1.07-2.92 1.45a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16c.38-1.03.87-2 1.45-2.93zM17.62 3.1c.84-.17 1.7-.27 2.55-.3a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55a19.2 19.2 0 0 0-3.29-3.29zm-3.91 7.2a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83z" />
                </svg>
                <div class="uppercase text-gray-800 font-semibold text-lg">Efficient</div>
                <div class="mt-4 text-gray-800 leading-loose">Efficiency is key to success! With that in mind we have worked
                    effortlessly on making our shop the most efficient out
                    there. Each station is capable of being operated by only one person. These systems allow the operator to
                    move twenty foot sections of pipe
                    or shaft with ease.</div>
            </div>
        </div>
        <div id="about" class="flex flex-col px-4 py-12 justify-between md:flex-row">
            <div class="flex-grow bg-cover p-8 mb-4 h-64 md:mr-6 md:w-1/2 md:mb-0 md:h-auto" style="background-image: url('https://res.cloudinary.com/noble-integrations/image/upload/v1568924653/BCM/about_x9mbfd.jpg')"></div>
            <div class="flex-1 bg-gray-200 p-8 md:w-1/2">
                <h3 class="text-left pb-4 font-light text-xl uppercase tracking-wide"><span class="font-bold border-b-2 pb-2 border-customGreen">About</span> Us</h3>
                <p class="text-left leading-loose text-gray-800 text-base">
                    Established in 2018, Bryants Custom Machine is located in Littlefield, TX. A family owned and operated business with more than 40 Years of experience in the water well industry.<br><br>Our mission is to manufacture a precise product in a timely manner at a reasonable price!
                </p>
            </div>
        </div>
        <div class="bg-gray-800 container text-gray-400 text-xl text-center px-4 py-8 md:p-12 md:text-2xl">
            Need a custom part built for your business? Give us a <a href="tel:806-385-3738" class="border-b-2 border-customGreen hover:border-gray-400">call</a> today.
        </div>
        <div id="contact" class="bg-white text-center">
            <div class="text-xl uppercase font-light p-8"><span class="font-bold">Our</span> <span class="border-b-2 border-customGreen">Loc</span>ation</div>
            <div class="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.721012864555!2d-102.33059108456675!3d33.92257923199888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8702096b61332d47%3A0x8ebbdaf00a8191cf!2sBryants+Custom+Machine!5e0!3m2!1sen!2sus!4v1537560191325"
                    width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <footer>
            <div class="flex flex-col bg-gray-900 text-white container px-4 py-8 md:flex-row">
                <div class="flex flex-col w-full font-light md:flex-1 md:max-w-sm">
                    <div class="uppercase text-l font-semibold py-4 tracking-wide md:px-4">Contact Us</div>
                    <div class="text-gray-400 leading-normal md:px-4">
                        <div class="pb-6">
                            Bryants Custom Machine<br>
                            705 E. 4th St.<br>
                            Littlefield, TX 79339
                        </div>
                        <div class="pb-4">
                            <b>Phone:</b> (806) 385-3738<br>
                            <b>Email:</b> info@bryantscustommachine.com
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full pb-4 md:flex-1 md:pr-4 md:w-4/5">
                    <div class="uppercase text-l font-semibold py-4 tracking-wide">Connect</div>
                    <div class="">
                        <form name="contact" class="flex flex-col md:flex-row" method="POST" netlify>
                            <div class="md:w-1/3 md:flex-1 md:mr-2">
                                <input class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight mb-2 focus:bg-white focus:outline-none focus:border-customGreen"
                                    id="inline-full-name" name="name" type="text" placeholder="Full Name">
                                <input class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight mb-2 focus:bg-white focus:outline-none focus:border-customGreen"
                                    id="inline-full-name" name="email" type="text" placeholder="Email">
                                <input class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight mb-2 focus:bg-white focus:outline-none focus:border-customGreen"
                                    id="inline-full-name" name="phone" type="text" placeholder="Phone">
                            </div>
                            <div class="md:w-2/3 md:flex-1">
                                <textarea class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight
                                focus:bg-white focus:outline-none focus:border-customGreen sm:mb-2 md:mb-1" name="message" rows="4" placeholder="Message"></textarea>
                                <button class="shadow bg-customGreenDarker text-white font-bold py-2 px-4 rounded w-full hover:bg-customGreen focus:outline-none"
                                    type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-gray-600 py-4 container text-gray-300 px-4 text-center justify-between font-light md:flex-row">
                <div class="text-sm mb-4 md:mb-0 md:text-xs">Copyright All Rights Reserved &copy; 2019</div>
                <div class="text-xs text-gray-300 md:text-sm">Powered by <a class="no-underline text-gray-300 hover:text-black md:text-sm" href="https://nobleintegrationsllc.com">Noble Integrations LLC</a></div>
            </div>
        </footer>
    </div>
@endsection
