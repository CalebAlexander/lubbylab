<template>
    <div id="AboutPreview"
    class="border-green-500 border-solid border-2
    block min-h-64">
        <h3>About Preview</h3>
        <div class="flex p-20">

            <Card />

            <div class="w-full px-40">
                <LissajousCircuit />
            </div>

        </div>
    </div>
</template>

<script>
import Card from "~/components/utilities/Card.vue"
import LissajousCircuit from "~/components/experiments/LissajousCircuit.vue"

export default {
    name: 'AboutPreview',
    components: {
        Card,
        LissajousCircuit,
    },
    data() {
        return {

        }
    },
    
}
</script>