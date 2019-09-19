@extends('_layouts.master')

@section('body')
    <div id="home" class="lg:w-4/5 w-full bg-white mx-auto container shadow-2xl">
        <header class="bg-white text-center sticky top-0 border-b-2 border-gray-300 lg:pb-8 lg:pt-24">
            <div class="logo lg:-m-20 flex justify-center"><a href="#home"><img class="text-center" style="width:19rem;" src="/assets/images/logo.png"></a></div>
                <scrollactive active-class="active" :offset="152" class="flex my-nav text-center justify-center mb-2 lg:px-4">
                    <div class="nav-left flex flex-row no-underline font-medium tracking-wide md:text-xl lg:flex-1 lg:px-4 xl:ml-4">
                        <a href="#home" class="scrollactive-item no-underline px-4 py-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:p-4">Home</a>
                        <a href="#services" class="scrollactive-item no-underline px-4 py-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:ml-4 lg:p-4 xl:ml-12">Services</a>
                    </div>
                    <div class="nav-right flex flex-row no-underline font-medium tracking-wide md:text-xl lg:justify-end lg:flex-1 xl:mr-4">
                        <a href="#about" class="scrollactive-item no-underline px-4 py-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:p-4 lg:mr-4 xl:mr-12">About</a>
                        <a href="#contact" class="scrollactive-item no-underline px-4 py-2 rounded hover:bg-customGreen hover:text-white hover:border-customGreen lg:p-4">Contact</a>
                    </div>
                </scrollactive>
        </header>
        <div class="flex flex-col hero text-center justify-center">
            <div class="text-xl text-white font-hairline uppercase mb-6 md:text-3xl">
                Innovative | Precise | Efficient
            </div>
            <div>
                <button class="bg-white text-black px-8 py-4 rounded hover:bg-black hover:text-white">(806) 385-3738</button>
            </div>
        </div>
        <div id="services" class="flex flex-col bg-white container px-8 pt-8 justify-between md:flex-row">
            <div class="bg-gray-300 p-8 mb-4 md:w-1/3 md:mr-4">
                <h3 class="text-right pb-4 font-light text-lg uppercase tracking-wide"><span class="font-bold">Our</span> Ser<span class="border-b-2 pb-2 border-customGreen">vices</span></h3>
                <p class="text-right leading-loose text-base text-gray-800">We provide a wide variety of services in the water well and oil field industry. We can custom make any part for your shop
                and help fill in any manufacturing gaps. More info about services will go here once I have the information.</p>
            </div>
            <div class="mb-4 overflow-hidden md:w-1/3 md:mr-4">
                <img src="https://res.cloudinary.com/noble-integrations/image/upload/v1568924471/BCM/service1_z3mob7.jpg">
                <div class="py-4">
                    <div class="font-bold text-l mb-2 text-customGreenDarker uppercase tracking-wide">Threaded Pipe</div>
                    <p class="text-sm text-gray-800 leading-normal">We manufactuer threaded column pipe for any job application. Our threads are machined to be precise and quality is our top
                    priority. We guarantee our products.</p>
                </div>
            </div>
            <div class="overflow-hidden mb-2 md:w-1/3">
                <img src="https://res.cloudinary.com/noble-integrations/image/upload/v1568924471/BCM/service2_k4ccc1.jpg">
                <div class="py-4">
                    <div class="font-bold text-l mb-2 text-customGreenDarker uppercase tracking-wide">Custom Machining</div>
                    <p class="text-sm text-gray-800 leading-normal">Our shop can make any part you need for your operation. We specialize in creating those hard to find parts needed in the
                    water well and oil field industries.</p>
                </div>
            </div>
        </div>
        <div id="about" class="flex flex-col bg-gray-300er p-8 justify-between md:flex-row">
            <div class="flex-grow bg-cover p-8 mb-4 h-64 md:mr-8 md:w-1/2 md:mb-0 md:h-auto" style="background-image: url('https://res.cloudinary.com/noble-integrations/image/upload/v1568924653/BCM/about_x9mbfd.jpg')"></div>
            <div class="flex-1 bg-gray-300 p-8 md:w-1/2">
                <h3 class="text-left pb-4 font-light text-lg uppercase tracking-wide"><span class="font-bold border-b-2 pb-2 border-customGreen">About</span> Us</h3>
                <p class="text-left leading-loose text-gray-800 text-base">
                    Established in 2018, Bryants Custom Machine is located in Littlefield, TX. Although it’s a new bsuiness, Willie and Chase
                    have over 40 years of expereince in the water well industry. They’ve decided to take their talents and start out on a new
                    endeavor as a family owned and operated business.
                </p>
            </div>
        </div>
        <div class="bg-gray-800 container text-gray-400 text-xl text-center p-12 md:text-2xl">
            Need a custom part built for your business? Give us a call today.
        </div>
        <div id="contact" class="bg-white text-center">
            <div class="text-2xl uppercase font-light p-8"><span class="font-bold">Our</span> <span class="border-b-2 border-customGreen">Loc</span>ation</div>
            <div class="w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.721012864555!2d-102.33059108456675!3d33.92257923199888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8702096b61332d47%3A0x8ebbdaf00a8191cf!2sBryants+Custom+Machine!5e0!3m2!1sen!2sus!4v1537560191325"
                    width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <footer>
            <div class="flex flex-col bg-gray-900 text-white container p-4 md:flex-row">
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
                                <input class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight mb-2 focus:bg-white focus:border-customGreen"
                                    id="inline-full-name" name="name" type="text" placeholder="Full Name">
                                <input class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight mb-2 focus:bg-white focus:border-customGreen"
                                    id="inline-full-name" name="email" type="text" placeholder="Email">
                                <input class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight mb-2 focus:bg-white focus:border-customGreen"
                                    id="inline-full-name" name="phone" type="text" placeholder="Phone">
                            </div>
                            <div class="md:w-2/3 md:flex-1">
                                <textarea class="bg-gray-300 appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-600 leading-tight
                                focus:bg-white focus:border-customGreen sm:mb-2 md:mb-1" name="message" rows="4" placeholder="Message"></textarea>
                                <button class="shadow bg-customGreenDarker text-white font-bold py-2 px-4 rounded w-full hover:bg-customGreen focus:shadow-outline"
                                    type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-gray-600 py-4 container text-gray-300 px-4 text-center justify-between font-light md:flex-row">
                <div class="text-sm mb-4 md:mb-0 md:text-base">Copyright All Rights Reserved &copy; 2018</div>
                <div class="text-xs text-gray-300 md:text-base">Powered by <a class="no-underline text-gray-300 hover:text-black md:text-base" href="https://nobleintegrationsllc.com">Noble Integrations LLC</a></div>
            </div>
        </footer>
    </div>
@endsection
