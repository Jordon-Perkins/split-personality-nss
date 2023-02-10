const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const disorders = originalDisorderFormat.split("|$|")
const HTML = disorders.join(`</div> 
<div>`)
console.log(`<div>${HTML}</div>`)
