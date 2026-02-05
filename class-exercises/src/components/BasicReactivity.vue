<script setup>
import { ref } from 'vue';
const msg = ref('reactivity works!');
msg.value = "it changed!";


const basicInteger = ref(1)
const basicDecimal = ref(0.1)
const specialDecimal = ref(0.1 + 0.2)

basicInteger.value = 45

const sampleDqText = ref("Text in double quotes")
const sampleSqText = ref('Text in single quotes')
const sampleParagraphText = ref("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quas, necessitatibus tempora non dignissimos inventore deleniti provident quibusdam, cumque vitae labore impedit numquam quasi maxime perspiciatis ipsa voluptas animi exercitationem!")
const sampleMultilineText = ref(`I'm on line one.
This is line two.
This is the last line.
${basicInteger.value}`)
const sampleUrl = ref("https://sandbox.582multi.media/")
const sampleImageUrl = ref("https://placehold.co/600x400?text=Sample+Image")
const sampleHtml = ref(`<p>Sample Paragraph with some text. Sample text that is <em>emphasized</em>. Sample text that is <strong>strongly emphasized</strong>.</p>`)

const sampleBoolean = ref(true)
const sampleNegativeBoolean = ref(!true) // (not) true, will give use false
const sampleZeroConversion = ref(!!0)
const sampleNonZeroConversion = ref(!!42)
const sampleEmptyStringConversion = ref(!!"")
const sampleNonEmptyStringConversion = ref(!!"Hello")

const toogleBoolean = () => {
  sampleBoolean.value = !sampleBoolean.value
}
const setNumber = (newNumber) => {
  basicInteger.value = newNumber
}

</script>


<template>
<p>{{ msg }}</p>

<button @click="setNumber(42)">Set Number to 42</button>
<input type="number" @input="setNumber($event.target.value)" />
   
<p>Basic Integer: {{basicInteger}}</p>
<p>Basic Integer with tax: {{basicInteger * 1.15}}</p>
<p>Basic Decimal: {{basicDecimal}}</p>
<p>Special Decimal: {{specialDecimal}}</p>

<p>{{ sampleDqText }}</p>
<p>{{ sampleSqText }}</p>
<p>{{ sampleParagraphText }}</p>
<pre>{{ sampleMultilineText }}</pre>
<p>{{ sampleUrl }}</p>
<a :href="sampleUrl">Test the link</a>
<p>{{ sampleImageUrl }}</p>
<img :src="sampleImageUrl" alt="Sample Image">
<p>{{ sampleHtml }}</p>
<section v-html="sampleHtml"></section>

<button @click="togleBoolean">Toggle Boolean</button>

<p>Boolean: {{ sampleBoolean }}</p>

<section v-if="sampleBoolean">
  <p>Boolean value is true!</p>
</section>
<section v-else>
  <p>Boolean value is false!</p>
</section>

<section v-show="sampleBoolean">
  <p>This section is always in the DOM but visibility is toggled via CSS.</p>
</section>

<p>Negative Boolean: {{ sampleNegativeBoolean }}</p>
<p>Zero Conversion: {{ sampleZeroConversion }}</p>
<p>Non Zero Conversion: {{ sampleNonZeroConversion }}</p>
<p>Empty String Conversion: {{ sampleEmptyStringConversion }}</p>
<p>Non Empty String Conversion: {{ sampleNonEmptyStringConversion }}</p>



</template>