<template>
    <div id="AboutPreview"
    class="
    w-full ">
        <div class="flex items-stretch">

            <div class="flex-initial
            ">
                <div class="max-w-md h-full overflow-hidden mx-auto bg-paletteGray ">
                    <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
                    <g-image class="w-full px-24 pt-5" src="~/assets/img/Caleb3.jpg" alt="Headshot of Caleb Alexander"/>
                    
                    <div class="text-center text-paletteWhite">
                        <h2 class="text-5xl">Caleb Alexander</h2>
                        <div class="text-xl">
                            <h3 class="inline-block text-paletteMint">Electrical&nbsp;</h3>
                            <h3 class="inline-block">+&nbsp;</h3>
                            <h3 class="inline-block text-paletteMint">Electrical&nbsp;</h3>
                            <h3 class="inline-block">Engineer</h3>
                        </div>
                        <p class="text-justify m-10">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 class="inline-block text-paletteMint text-2xl m-5">More About Me</h3>
                    </div>
                </div>
            </div>
            

            <!-- <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1366 461.3" 
                class="">

            </svg> -->

            <div class="flex-1 my-1
            w-full">
                <div class="max-w-3xl m-auto">
                    <!-- <LissajousCircuit /> -->
                </div>
            </div>

        </div>
    </div>
</template>



<script>
// import Card from "~/components/utilities/Card.vue"
// import LissajousCircuit from "~/components/experiments/LissajousCircuit.vue"

export default {
    name: 'AboutPreview',
    components: {
        // Card,
        // LissajousCircuit,
    },
    data() {
        return {

        }
    },
    
}
</script>