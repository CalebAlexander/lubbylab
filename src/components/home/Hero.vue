<template>
    <div id="Hero"
    class="
     text-paletteWhite">
        <div
        class="
        min-h-screen flex">
            <div class="my-56 ml-20">
                <!-- <h1 class="text-6xl font-semibold">A little bit of me, online</h1> -->
                <h1 class="ml11">
                    <span class="text-wrapper">
                        <span class="line line1"></span>
                        <span class="letters">A little bit of me online</span>
                    </span>
                </h1>
                <!-- <h3 class="text-xl ml-8 font-light">a <strong class="">new</strong> CalebsWebsite because he felt like it</h3> -->
                <div class="text-2xl ml-8 font-light text-paletteWhite">
                    <h3 class="inline-block">a&nbsp;</h3>
                    <h3 class="inline-block text-paletteDarkPurple">new&nbsp;</h3>
                    <h3 class="inline-block text-paletteMint">CalebsWebsite&nbsp;</h3>
                    <h3 class="inline-block">because he felt like it&nbsp;</h3>
                </div>
            </div>
            <!-- <div class="border-red-500 border-solid border-2
            w-56 h-56 m-auto flex">
                <h2 class="m-auto text-4xl">Caleb<br>Alexander</h2>
            </div> -->
        </div>

        <div
        class="
         text-2xl font-light text-paletteWhite
        lg:min-h-screen lg:mb-20">
            <div class="
            lg:mb-32 lg:mt-5">
                <div class="text-left ml-16">
                    <h3 class="inline-block text-paletteMint">CalebsWebsite&nbsp;</h3>
                    <h3 class="inline-block">LubbyLab =&nbsp;</h3>
                    <h3 class="inline-block text-paletteDarkPurple">new&nbsp;</h3>
                    <h3 class="inline-block text-paletteMint">CalebsWebsite</h3>
                    <h3 class="inline-block">();</h3>
                </div>
            </div>
            <div class="
            lg:my-32">
                <div class="text-right mr-16">
                    <h3 class="inline-block">LubbyLab.</h3>
                    <h3 class="inline-block text-paletteYellow">learnWebDevelopment4Fun</h3>
                    <h3 class="inline-block">();</h3>
                </div>

            </div>
            <div class="
            lg:my-32">
                <div class="text-left ml-16">
                    <h3 class="inline-block">LubbyLab.</h3>
                    <h3 class="inline-block text-paletteYellow">makeFromScratch</h3>
                    <h3 class="inline-block">();</h3>
                </div>
            </div>
            <div class="
            lg:my-32">
                <div class="text-right mr-16">
                    <div>
                        <h3 class="inline-block">LubbyLab == (</h3>
                        <h3 class="inline-block text-paletteMint">resume&nbsp;</h3>
                        <h3 class="inline-block">+&nbsp;</h3>
                        <h3 class="inline-block text-paletteMint">portfolio&nbsp;</h3>
                        <h3 class="inline-block">+&nbsp;</h3>
                        <h3 class="inline-block text-paletteYellow">sum</h3>
                        <h3 class="inline-block">(</h3>
                        <h3 class="inline-block text-paletteYellow">random</h3>
                        <h3 class="inline-block">(</h3>
                        <h3 class="inline-block text-paletteMint">thingsILike</h3>
                        <h3 class="inline-block">)))</h3>
                    </div>
                    <div class="">
                        <h3 class="inline-block">>&nbsp;</h3>
                        <h3 class="inline-block text-paletteDarkPurple">true</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
    name: 'Hero',
    components: {

    },
    data() {
        return {

        }
    },
    mounted() {
        // Wrap every letter in a span
        var textWrapper = document.querySelector('.ml11 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
        .add({
            targets: '.ml11 .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        })
        .add({
            targets: '.ml11 .letter',
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i+1)
        });
        // .add({
        //     targets: '.ml11',
        //     opacity: 0,
        //     duration: 1000,
        //     easing: "easeOutExpo",
        //     delay: 1000
        // });
    }
}
</script>

<style>
.ml11 {
  font-weight: 700;
  font-size: 3.5em;
}

.ml11 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.ml11 .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: #000;
  transform-origin: 0 50%;
}

.ml11 .line1 { 
  top: 0; 
  left: 0;
}

.ml11 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>