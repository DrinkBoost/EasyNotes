

function getValue() {
    var switchElement = document.getElementById("switch-EasyNotes");
    var switchValue = switchElement.checked;
    if (switchValue === true)
    {
        console.log("EasyNotes ATTIVATO");

    }
}


var dataMicFake= [{"confidence":0.631011445616564,"text":"hello","start":630,"end":665},{"confidence":0.999901066080675,"text":"my","start":1110,"end":1145},{"confidence":0.999055563164504,"text":"name","start":1190,"end":1225},{"confidence":0.99984302601284,"text":"is","start":1550,"end":1585},{"confidence":0.900481622437296,"text":"marco","start":1950,"end":2065},{"confidence":0.575394431065165,"text":"and","start":2510,"end":2545},{"confidence":0.917174078357604,"text":"today","start":2870,"end":2905}];
var dataTasFake = [
    {"ultimaLettera": "H", "nuovotesto": "H", "timestamp": 1309},
    {"ultimaLettera": "e", "nuovotesto": "He", "timestamp": 1589},
    {"ultimaLettera": "l", "nuovotesto": "Hel", "timestamp": 1691},
    {"ultimaLettera": "l", "nuovotesto": "Hell", "timestamp": 1851},
    {"ultimaLettera": "o", "nuovotesto": "Hello", "timestamp": 2019},
    {"ultimaLettera": " ", "nuovotesto": "Hello ", "timestamp": 2179},
    {"ultimaLettera": "m", "nuovotesto": "Hello m", "timestamp": 2389},
    {"ultimaLettera": "y", "nuovotesto": "Hello my", "timestamp": 2596},
    {"ultimaLettera": " ", "nuovotesto": "Hello my ", "timestamp": 2781},
    {"ultimaLettera": "n", "nuovotesto": "Hello my n", "timestamp": 2974},
    {"ultimaLettera": "a", "nuovotesto": "Hello my na", "timestamp": 3069},
    {"ultimaLettera": "m", "nuovotesto": "Hello my nam", "timestamp": 3176},
    {"ultimaLettera": "e", "nuovotesto": "Hello my name", "timestamp": 3329},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name ", "timestamp": 3470},
    {"ultimaLettera": "i", "nuovotesto": "Hello my name i", "timestamp": 3792},
    {"ultimaLettera": "s", "nuovotesto": "Hello my name is", "timestamp": 3920},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is ", "timestamp": 4044},
    {"ultimaLettera": "m", "nuovotesto": "Hello my name is m", "timestamp": 4240},
    {"ultimaLettera": "a", "nuovotesto": "Hello my name is ma", "timestamp": 4314},
    {"ultimaLettera": "r", "nuovotesto": "Hello my name is mar", "timestamp": 4548},
    {"ultimaLettera": "c", "nuovotesto": "Hello my name is marc", "timestamp": 4725},
    {"ultimaLettera": "o", "nuovotesto": "Hello my name is marco", "timestamp": 4811},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is marco ", "timestamp": 4966},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco ", "timestamp": 4980},
    {"ultimaLettera": "a", "nuovotesto": "Hello my name is Marco a", "timestamp": 5345},
    {"ultimaLettera": "n", "nuovotesto": "Hello my name is Marco an", "timestamp": 5474},
    {"ultimaLettera": "d", "nuovotesto": "Hello my name is Marco and", "timestamp": 5567},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco and ", "timestamp": 5699},
    {"ultimaLettera": "t", "nuovotesto": "Hello my name is Marco and t", "timestamp": 5878},
    {"ultimaLettera": "o", "nuovotesto": "Hello my name is Marco and to", "timestamp": 6020},
    {"ultimaLettera": "d", "nuovotesto": "Hello my name is Marco and tod", "timestamp": 6212},
    {"ultimaLettera": "a", "nuovotesto": "Hello my name is Marco and toda", "timestamp": 6442},
    {"ultimaLettera": "y", "nuovotesto": "Hello my name is Marco and today", "timestamp": 6675},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco and today ", "timestamp": 6837},
    {"ultimaLettera": "i", "nuovotesto": "Hello my name is Marco and today i", "timestamp": 7352},
    {"ultimaLettera": "m", "nuovotesto": "Hello my name is Marco and today im", "timestamp": 7524},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco and today im ", "timestamp": 7716},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco and today I'm ", "timestamp": 7741},
    {"ultimaLettera": "g", "nuovotesto": "Hello my name is Marco and today I'm g", "timestamp": 7851},
    {"ultimaLettera": "o", "nuovotesto": "Hello my name is Marco and today I'm go", "timestamp": 7991},
    {"ultimaLettera": "i", "nuovotesto": "Hello my name is Marco and today I'm goi", "timestamp": 8198},
    {"ultimaLettera": "n", "nuovotesto": "Hello my name is Marco and today I'm goin", "timestamp": 8369},
    {"ultimaLettera": "g", "nuovotesto": "Hello my name is Marco and today I'm going", "timestamp": 8635},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco and today I'm going ", "timestamp": 8778},
    {"ultimaLettera": "t", "nuovotesto": "Hello my name is Marco and today I'm going t", "timestamp": 8969},
    {"ultimaLettera": "o", "nuovotesto": "Hello my name is Marco and today I'm going to", "timestamp": 9077},
    {"ultimaLettera": " ", "nuovotesto": "Hello my name is Marco and today I'm going to ", "timestamp": 9453},
    {"ultimaLettera": "s", "nuovotesto": "Hello my name is Marco and today I'm going to s", "timestamp": 10106},
    {"ultimaLettera": "w", "nuovotesto": "Hello my name is Marco and today I'm going to sw", "timestamp": 10276},
    {"ultimaLettera": "o", "nuovotesto": "Hello my name is Marco and today I'm going to swo", "timestamp": 10795},
    {"ultimaLettera": "w", "nuovotesto": "Hello my name is Marco and today I'm going to swow", "timestamp": 11247},
    {"ultimaLettera": "w", "nuovotesto": "Hello my name is Marco and today I'm going to show", "timestamp": 12599}
];
var dataMic;
var dataTas = [];
function getMicInput(array) {
    dataMic = array
    console.log(JSON.stringify(dataMic))
}

var time;

function startTas()
{
    time = Date.now();
}

function findTimeOnMic()
{

}

function saveDataTas()
{
    const nuovotesto = document.getElementById("myText").value;
    const ultimaLettera = nuovotesto[nuovotesto.length - 1];
    const timestamp = Date.now() - time;
    //console.log(nuovotesto+" in: "+timestamp);
    dataTas.push({ultimaLettera,nuovotesto,timestamp});
    console.log(JSON.stringify(dataTas));
    findTimeOnMic()
}
