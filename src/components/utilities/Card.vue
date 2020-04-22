<template>
<!-- CARD COMPONENT -->

    <div class="max-w-2xl h-full overflow-hidden mx-auto bg-paletteGray ">
        <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
        <g-image class="w-full px-32 pt-5" src="~/assets/img/Caleb3.jpg" alt="Headshot of Caleb Alexander"/>
        
        <div class="text-center text-paletteWhite">
            <h2 class="text-5xl">Caleb Alexander</h2>
            <div class="text-xl">
                <h3 class="inline-block text-paletteMint">Electrical&nbsp;</h3>
                <h3 class="inline-block">+&nbsp;</h3>
                <h3 class="inline-block text-paletteMint">Electrical&nbsp;</h3>
                <h3 class="inline-block">Engineer</h3>
            </div>
            <p class="text-left m-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <h3 class="inline-block text-paletteMint text-2xl my-5">More About Me</h3>
        </div>
    </div>

    <!-- <div class="max-w-s flex-auto flex-col mx-5">
        <div class="bg-paletteRed px-6 py-8 rounded-lg shadow-xl justify-center">
            <div class="mb-3">
                <g-image class="w-1/2 rounded-lg" src="~/assets/img/Caleb3.jpg" alt="Headshot of Caleb Alexander"/>
            </div>
            <h2 class="text-4xl font-bold text-gray-700">Caleb Alexander</h2>
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
            </ul>
        </div>
    </div> -->
</template>


<script>
export default {
    name: 'Card',
    data() {
        return {

        }
    }
}
</script>