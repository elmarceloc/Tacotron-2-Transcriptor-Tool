const { createApp } = Vue

createApp({
  data() {
    return {
      wavs: [],
      amount: 1,
      outputString: '',
      inputTxt: ''
    }
  },
  methods: {
      addWavs: function() {
        for (var i = 0; i < this.amount; i++){
            this.wavs.push('')
        }
      },
      outputTxt() {
          var outputString = ''
          this.wavs.forEach(function(wav, index){
              outputString += `wavs/${index}.wav|${wav}\n`
          })
          this.outputString = outputString
          return outputString
      },
      saveTxt() {
        var a = document.getElementById("download");
        var file = new Blob([this.outputString], {type: 'text/json'});
        a.href = URL.createObjectURL(file);
        a.download = 'wavs.txt';
      },
      importTxt() {
        var wavs = []
        console.log(this.inputTxt)
        this.inputTxt.split('\n').forEach(function(wav) {
            if (wav != ''){
                wavs.push( wav.split('|')[1])
            }
        })
        this.wavs = wavs
    }
  }
}).mount('#app')