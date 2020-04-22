<template>
    <div id="Projects_HobbiesPreview"
    class="
    w-full ">
        <div class="flex items-stretch">

            <div class="flex-1 my-1
            w-full">
                <div class="max-w-3xl m-auto">
                    <LissajousCircuit />
                </div>
            </div>

            <div class="flex-initial
            ">
                <div class="max-w-md h-full overflow-hidden mx-auto bg-paletteGray">
                    <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->                    
                    <div class="text-center text-paletteWhite block">
                        <p class="text-justify m-5">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 class="inline-block text-paletteMint text-2xl m-5">Projects</h3>
                    </div>
                    <div class="text-center text-paletteWhite block">
                        <p class="text-justify m-5">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </p>
                        <h3 class="inline-block text-paletteMint text-2xl m-5">Hobbies</h3>
                    </div>
                </div>
            </div>           

        </div>
    </div>
</template>

<script>

import ProjectViewer from "~/components/experiments/ProjectViewer.vue"
export default {
    name: 'Projects_HobbiesPreview',
    components: {
        ProjectViewer,
    },
    data() {
        return {

        }
    },
    
}
</script>