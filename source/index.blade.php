@extends('_layouts.master')

@section('body')
    <div class="lg:w-4/5 w-full bg-white mx-auto container">
        <header id="home" class="bg-white text-center lg:pb-10 lg:pt-32">
            <div class="logo text-center lg:-m-20 block"><a href="#"><img style="width:19rem;" src="/assets/images/logo.png"></a></div>
            <div class="flex pb-4 text-center justify-center lg:px-4">
                <div class="nav-left flex flex-row no-underline font-medium tracking-wide md:text-xl lg:flex-1 lg:justify-start lg:px-4 xl:ml-4">
                    <a href="#home" class="text-black no-underline px-4 py-2 rounded hover:bg-green-dark hover:text-white hover:border-green-dark lg:p-4">Home</a>
                    <a href="#services" class="text-black no-underline px-4 py-2 rounded hover:bg-green-dark hover:text-white hover:border-green-dark lg:ml-4 lg:p-4 xl:ml-12">Services</a>
                </div>
                <div class="nav-right flex flex-row no-underline font-medium tracking-wide md:text-xl lg:justify-end lg:flex-1 xl:mr-4">
                    <a href="#about" class="text-black no-underline px-4 py-2 rounded hover:bg-green-dark hover:text-white hover:border-green-dark lg:p-4 lg:mr-4 xl:mr-12">About</a>
                    <a href="#contact" class="text-black no-underline px-4 py-2 rounded hover:bg-green-dark hover:text-white hover:border-green-dark lg:p-4">Contact</a>
                </div>
            </div>
        </header>
        <div class="flex flex-col hero text-center justify-center">
            <div class="text-xl text-white font-light uppercase mb-4 md:text-3xl">
                Innovative | Precise | Efficient
            </div>
            <div>
                <button class="bg-white text-black px-8 py-4 rounded hover:bg-green-darker hover:text-white">(806) 385-3738</button>
            </div>
        </div>
        <div id="services" class="flex flex-col bg-white container px-8 pt-8 justify-between md:flex-row">
            <div class="bg-grey-light p-8 mb-4 md:w-1/3 md:mr-4">
                <h3 class="text-right pb-4 font-light uppercase tracking-wide"><span class="font-bold">Our</span> Ser<span class="border-b-2 border-green-dark">vices</span></h3>
                <p class="text-right leading-loose text-sm text-grey-darkest">We provide a wide variety of services in the water well and oil field industry. We can custom make any part for your shop
                and help fill in any manufacturing gaps. More info about services will go here once I have the information.</p>
            </div>
            <div class="mb-4 overflow-hidden md:w-1/3 md:mr-4">
                <img src="/assets/images/services-card1.jpg">
                <div class="py-4">
                    <div class="font-bold text-l mb-2 text-green-dark uppercase">Threaded Pipe</div>
                    <p class="text-sm text-grey-darker leading-normal">We manufactuer threaded column pipe for any job application. Our threads are machined to be precise and quality is our top
                    priority. We guarantee our products.</p>
                </div>
            </div>
            <div class="overflow-hidden mb-2 md:w-1/3">
                <img src="/assets/images/services-card2.jpg">
                <div class="py-4">
                    <div class="font-bold text-l text-green-dark uppercase">Custom Machining</div>
                    <p class="text-sm text-grey-darker leading-normal">Our shop can make any part you need for your operation. We specialize in creating those hard to find parts needed in the
                    water well and oil field industries.</p>
                </div>
            </div>
        </div>
        <div id="about" class="flex flex-col bg-grey-lighter p-8 justify-between md:flex-row">
            <div class="flex-grow bg-cover p-8 mb-4 h-64 md:mr-8 md:w-1/2 md:mb-0 md:h-auto" style="background-image: url('/assets/images/aboutus.jpg')"></div>
            <div class="flex-1 bg-grey-light p-8 md:w-1/2">
                <h3 class="text-left pb-4 font-light uppercase tracking-wide"><span class="font-bold border-b-2 border-green-dark">About</span> Us</h3>
                <p class="text-left leading-loose text-grey-darkest text-sm">
                    Established in 2018, Bryants Custom Machine is located in Littlefield, TX. Although it’s a new bsuiness, Willie and Chase
                    have over 40 years of expereince in the water well industry. They’ve decided to take their talets and start out on a new
                    endeavor as a family owned and operated business.
                </p>
            </div>
        </div>
        <div class="bg-grey-darkest container text-grey text-xl text-center p-12 md:text-2xl">
            Need a custom part built for your business? Give us a call today.
        </div>
        <div class="bg-white text-center">
            <div class="text-2xl uppercase font-light p-8"><span class="font-bold">Our</span> <span class="border-b-2 border-green-dark">Loc</span>ation</div>
            <div class="w-full">
                {{-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7210128682455!2d-102.33059644899906!3d33.922579231903924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870209999cec9961%3A0x204f1f5291c0dd1e!2s705+E+4th+St%2C+Littlefield%2C+TX+79339!5e0!3m2!1sen!2sus!4v1536605261178" --}}
                    {{-- width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe> --}}
            </div>
        </div>
        <footer id="contact">
            <div class="flex flex-col bg-black text-white container p-4 md:flex-row">
                <div class="flex flex-col w-full font-light md:flex-1 md:max-w-sm">
                    <div class="uppercase text-l font-semibold py-4 tracking-wide md:px-4">Contact Us</div>
                    <div class="text-grey md:px-4">
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
                        <form class="flex flex-col md:flex-row">
                            <div class="md:w-1/3 md:flex-1 md:mr-2">
                                <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight mb-2 focus:outline-none focus:bg-white focus:border-green-dark"
                                    id="inline-full-name" type="text" value="Full Name">
                                <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none mb-2 focus:bg-white focus:border-green-dark"
                                    id="inline-full-name" type="text" value="Email">
                                <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight mb-2 focus:outline-none focus:bg-white focus:border-green-dark"
                                    id="inline-full-name" type="text" value="Phone">
                            </div>
                            <div class="md:w-2/3 md:flex-1">
                                <textarea class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none
                                focus:bg-white focus:border-green-dark sm:mb-2 md:mb-1" rows="4">Message</textarea>
                                <button class="shadow bg-green-dark text-white font-bold py-2 px-4 rounded w-full hover:bg-green-light focus:shadow-outline focus:outline-none"
                                    type="button">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex flex-col bg-grey-dark py-4 container text-grey-lighter px-4 text-center justify-between font-light md:flex-row">
                <div class="text-sm mb-4 md:mb-0 md:text-base">Copyright All Rights Reserved &copy; 2018</div>
                <div class="text-xs text-grey-light md:text-base md:text-grey-lighter">Powered by <a class="no-underline text-grey-light hover:text-black md:text-base md:text-grey-lighter" href="https://nobleintegrationsllc.com">Noble Integrations LLC</a></div>
            </div>
        </footer>
    </div>
@endsection
