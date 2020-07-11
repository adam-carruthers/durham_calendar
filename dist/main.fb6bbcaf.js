// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/consts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODULES = void 0;
var MODULES = [{
  "code": "ANTH1041",
  "title": "Health, Illness and Society"
}, {
  "code": "ANTH1061",
  "title": "People and Cultures"
}, {
  "code": "ANTH1091",
  "title": "Human Evolution and Diversity"
}, {
  "code": "ANTH1101",
  "title": "Doing Anthropological Research"
}, {
  "code": "ANTH1111",
  "title": "Being Human: An Introduction to the history and practice of Anthropology"
}, {
  "code": "ANTH2051",
  "title": "Politics and Economics"
}, {
  "code": "ANTH2061",
  "title": "Evolution, Variation and Adaptation"
}, {
  "code": "ANTH2071",
  "title": "Our Place in Nature"
}, {
  "code": "ANTH2111",
  "title": "Sex, Reproduction and Love"
}, {
  "code": "ANTH2121",
  "title": "Debating Anthropology & Archaeology"
}, {
  "code": "ANTH2131",
  "title": "Anthropology Field Course"
}, {
  "code": "ANTH2141",
  "title": "Global Health and Disease"
}, {
  "code": "ANTH2151",
  "title": "Interrogating Anthropology"
}, {
  "code": "ANTH2161",
  "title": "Kinship and Religion"
}, {
  "code": "ANTH3141",
  "title": "Anthropology Dissertation (20 credits)"
}, {
  "code": "ANTH3162",
  "title": "Anthropology Dissertation (40 credits)"
}, {
  "code": "ANTH3341",
  "title": "South Africa Field Course"
}, {
  "code": "ANTH3372",
  "title": "Research Proposal"
}, {
  "code": "ANTH3382",
  "title": "Anthropology Dissertation CH/HNS (40 credits)"
}, {
  "code": "ANTH3491",
  "title": "Research Proposal"
}, {
  "code": "ANTH3742",
  "title": "Anthropology and Archaeology Interdisciplinary Dissertation(40 credits)"
}, {
  "code": "ANTH3761",
  "title": "Specialised Aspects of Evolutionary Anthropology (20credits)"
}, {
  "code": "ANTH3762",
  "title": "Specialised Aspects of Evolutionary Anthropology (40credits)"
}, {
  "code": "ANTH3763",
  "title": "Specialised Aspects of Evolutionary Anthropology (60credits)"
}, {
  "code": "ANTH3777",
  "title": "Specialised Aspects of Evolutionary Anthropology(10 credits)"
}, {
  "code": "ANTH3787",
  "title": "Specialised Aspects of Social Anthropology"
}, {
  "code": "ANTH3797",
  "title": "Specialised Aspects of Health and Medical Anthropology(10 credits)"
}, {
  "code": "ANTH3801",
  "title": "Specialised Aspects of Social Anthropology (20 credits)"
}, {
  "code": "ANTH3811",
  "title": "Specialised Aspects of Health and Medical Anthropology(20 credits)"
}, {
  "code": "ANTH3822",
  "title": "Specialised Aspects of Social Anthropology (40 credits)"
}, {
  "code": "ANTH3832",
  "title": "Specialised Aspects of Health and Medical Anthropology(40 credits)"
}, {
  "code": "ANTH3843",
  "title": "Specialised Aspects of Social Anthropology (60 credits)"
}, {
  "code": "ANTH3853",
  "title": "Specialised Aspects of Health and Medical Anthropology(60 credits)"
}, {
  "code": "ANTH3993",
  "title": "Anthropology Study Abroad Module"
}, {
  "code": "ANTH3996",
  "title": "Study at  Overseas University"
}, {
  "code": "ANTH40030",
  "title": "Key Issues in Sociocultural Theory"
}, {
  "code": "ANTH4013",
  "title": "MAnth Dissertation"
}, {
  "code": "ANTH4018",
  "title": "Energy, Environment and Development"
}, {
  "code": "ANTH4038",
  "title": "Global and Public Health"
}, {
  "code": "ANTH40415",
  "title": "Statistical Analysis in Anthropology"
}, {
  "code": "ANTH40730",
  "title": "Advanced Change and Development"
}, {
  "code": "ANTH4148",
  "title": "Ethnography and Theory in Social Anthropology"
}, {
  "code": "ANTH4183",
  "title": "Advanced Specialised Aspects of Evolutionary Anthropologyfor MAnth students (60 credits)"
}, {
  "code": "ANTH4198",
  "title": "Advanced Specialised Aspects of Evolutionary Anthropologyfor MAnth students (30 credits)"
}, {
  "code": "ANTH4208",
  "title": "Advanced Specialised Aspects of Health and MedicalAnthropology for MAnth Students (30 credits)"
}, {
  "code": "ANTH4218",
  "title": "Advanced Specialised Aspects of Social Anthropology forMAnth Students (30 credits)"
}, {
  "code": "ANTH4223",
  "title": "Advanced Specialised Aspects of Social Anthropology forMAnth Students (60 credits)"
}, {
  "code": "ANTH4233",
  "title": "Advanced Specialised Aspects in Health and Medical Anthropology for MAnth Students (60 credits)"
}, {
  "code": "ANTH43415",
  "title": "Fieldwork and Interpretation"
}, {
  "code": "ANTH43615",
  "title": "Anthropology of Global Health"
}, {
  "code": "ANTH43815",
  "title": "Public Health Anthropology"
}, {
  "code": "ANTH44015",
  "title": "Thinking Anthropologically"
}, {
  "code": "ANTH44115",
  "title": "Interrogating Ethnography"
}, {
  "code": "ANTH44215",
  "title": "Anthropology and Development"
}, {
  "code": "ANTH44515",
  "title": "Society, Energy, Environment and Resilience"
}, {
  "code": "ANTH44630",
  "title": "Context and Challenges in Energy and Society"
}, {
  "code": "ANTH44730",
  "title": "Energy Society and Energy Practices"
}, {
  "code": "ANTH44815",
  "title": "Field Study"
}, {
  "code": "ANTH45360",
  "title": "Dissertation Module"
}, {
  "code": "ANTH45515",
  "title": "Cultural Evolution for MARM"
}, {
  "code": "ANTH45615",
  "title": "Evolutionary Theory for MARM"
}, {
  "code": "ANTH45830",
  "title": "Field Study of Erasmus Plus"
}, {
  "code": "ANTH45915",
  "title": "Advanced Specialised Aspects of Evolutionary Anthropology (15 credits)"
}, {
  "code": "ANTH46030",
  "title": "Advanced Specialised Aspects of Evolutionary Anthropology (30 credits)"
}, {
  "code": "ANTH46160",
  "title": "Advanced Specialised Aspects of Evolutionary Anthropology (60 credits)"
}, {
  "code": "ANTH46215",
  "title": "Advanced Specialised Aspects in Health and Medical Anthropology (15 credits)"
}, {
  "code": "ANTH46330",
  "title": "Advanced Specialised Aspects in Health and Medical Anthropology (30 credits)"
}, {
  "code": "ANTH46460",
  "title": "Advanced Specialised Aspects in Health and Medical Anthropology (60 credits)"
}, {
  "code": "ANTH46515",
  "title": "Advanced Specialised Aspects in Social Anthropology(15 credits)"
}, {
  "code": "ANTH46630",
  "title": "Advanced Specialised Aspects in Social Anthropology (30 credits)"
}, {
  "code": "ANTH46760",
  "title": "Advanced Specialised Aspects in Social Anthropology (60 credits)"
}, {
  "code": "ANTH5999",
  "title": "Research Program in Anthropology"
}, {
  "code": "ANTHNEW01",
  "title": "ANTHNEW01"
}, {
  "code": "ANTHNEW02",
  "title": "ANTHNEW02"
}, {
  "code": "ANTHNEW03",
  "title": "ANTHNEW03"
}, {
  "code": "ANTHNEW04",
  "title": "ANTHNEW04"
}, {
  "code": "ANTHNEW05",
  "title": "ANTHNEW05"
}, {
  "code": "ANTHPGR1",
  "title": "PGR Writing Up"
}, {
  "code": "ANTHResStaff",
  "title": "Research Seminars"
}, {
  "code": "ANTHStudySkills",
  "title": "ANTH Academic Skills"
}, {
  "code": "ARAB1012",
  "title": "Arabic Language 1"
}, {
  "code": "ARAB1021",
  "title": "Introduction to Middle Eastern Cultures"
}, {
  "code": "ARAB2002",
  "title": "Arabic Language 2"
}, {
  "code": "ARAB2011",
  "title": "Arabic Literature"
}, {
  "code": "ARAB20240",
  "title": "Intensive Arabic"
}, {
  "code": "ARAB2041",
  "title": "Persian I"
}, {
  "code": "ARAB2051",
  "title": "Middle Eastern Cinema"
}, {
  "code": "ARAB3012",
  "title": "Arabic Language 4"
}, {
  "code": "ARAB30160",
  "title": "Intensive Arabic D/E"
}, {
  "code": "ARAB3041",
  "title": "Specialised Arabic-English Translation"
}, {
  "code": "ARAB3061",
  "title": "Arabic Linguistics and Dialectology"
}, {
  "code": "ARAB3071",
  "title": "Trends in Modern Arabic Literature and Film"
}, {
  "code": "ARAB3081",
  "title": "Literature of the 19th-Century Arabic Nahda"
}, {
  "code": "ARAB3101",
  "title": "Identity and Alterity in Classical Arabic Literature"
}, {
  "code": "ARAB40130",
  "title": "General Translation Practica"
}, {
  "code": "ARAB40160",
  "title": "Dissertation"
}, {
  "code": "ARAB40260",
  "title": "Final Translation Project"
}, {
  "code": "ARAB40360",
  "title": "Dissertation (Arab World Studies)"
}, {
  "code": "ARAB40515",
  "title": "Legal Translation (Arabic>English/English>Arabic)"
}, {
  "code": "ARAB40615",
  "title": "Interpreting (Arabic>English/English>Arabic)"
}, {
  "code": "ARAB5999",
  "title": "Research Program in Arabic"
}, {
  "code": "ARABNEW01",
  "title": "ARABNEW01"
}, {
  "code": "ARABNEW02",
  "title": "New Arabic Module - 2"
}, {
  "code": "ARABNEW03",
  "title": "New Arabic Module - 3"
}, {
  "code": "ARABNEW04",
  "title": "ARABNEW04"
}, {
  "code": "ARABNEW05",
  "title": "ARABNEW05"
}, {
  "code": "ARCH1041",
  "title": "Scientific Methods in Archaeology 1"
}, {
  "code": "ARCH1061",
  "title": "Archaeology Practicals"
}, {
  "code": "ARCH1071",
  "title": "Archaeology in Britain"
}, {
  "code": "ARCH1081",
  "title": "Applied Archaeological Methods"
}, {
  "code": "ARCH1111",
  "title": "Ancient Civilisations of the East"
}, {
  "code": "ARCH1121",
  "title": "Discovering World Prehistory"
}, {
  "code": "ARCH1131",
  "title": "Cities in Antiquity"
}, {
  "code": "ARCH1141",
  "title": "Medieval to Modern: An Introduction to the Archaeology ofthe Medieval to Post"
}, {
  "code": "ARCH1151",
  "title": "Ancient Civilisations: Sources, Approaches and Methods"
}, {
  "code": "ARCH1161",
  "title": "Historical and Archaeological Methods and Sources"
}, {
  "code": "ARCH2041",
  "title": "Scientific Methods in Archaeology 2"
}, {
  "code": "ARCH2081",
  "title": "Prehistoric Europe: from foragers to state formation"
}, {
  "code": "ARCH2091",
  "title": "Becoming Roman: From Iron Age to Empire in Italy and the West"
}, {
  "code": "ARCH2131",
  "title": "Archaeology of Medieval and Post-Medieval Britain in its European Context"
}, {
  "code": "ARCH2141",
  "title": "The East Mediterranean World in the Bronze Age"
}, {
  "code": "ARCH2161",
  "title": "Ancient Mediterranean Civilizations: East and West"
}, {
  "code": "ARCH2171",
  "title": "Introduction to Field Archaeology and Medieval Studies"
}, {
  "code": "ARCH2181",
  "title": "Developing Archaeological Research"
}, {
  "code": "ARCH2191",
  "title": "Professional Training"
}, {
  "code": "ARCH2212",
  "title": "Advanced Skills in Archaeology (40 credits)"
}, {
  "code": "ARCH2221",
  "title": "Advanced Skills in Archaeology (20 credits)"
}, {
  "code": "ARCH3051",
  "title": "Scientific Methods in Archaeology"
}, {
  "code": "ARCH3362",
  "title": "Archaeology Dissertation (Double)"
}, {
  "code": "ARCH3451",
  "title": "Specialized Aspects of Archaeology (Single)"
}, {
  "code": "ARCH3472",
  "title": "Specialized Aspects of Archaeology (Double)"
}, {
  "code": "ARCH3562",
  "title": "Archaeology Dissertation"
}, {
  "code": "ARCH3571",
  "title": "Advanced Skills in Archaeology"
}, {
  "code": "ARCH3581",
  "title": "Advanced Professional Training"
}, {
  "code": "ARCH3591",
  "title": "Current Archaeology"
}, {
  "code": "ARCH3601",
  "title": "Interpreting Heritage"
}, {
  "code": "ARCH3611",
  "title": "Scientific Methods in Archaeology 3"
}, {
  "code": "ARCH3621",
  "title": "Museum Representation"
}, {
  "code": "ARCH3631",
  "title": "Advanced Professional Training with Skills Passport"
}, {
  "code": "ARCH3993",
  "title": "Archaeology Study Abroad module"
}, {
  "code": "ARCH3996",
  "title": "Archaeology Study Abroad"
}, {
  "code": "ARCH40130",
  "title": "Research and Study Skills in Archaeological Science"
}, {
  "code": "ARCH40145",
  "title": "Conservation Theory"
}, {
  "code": "ARCH40160",
  "title": "Field Projects"
}, {
  "code": "ARCH40190",
  "title": "Professional Practice"
}, {
  "code": "ARCH40215",
  "title": "Cultural Landscapes of Eurasia"
}, {
  "code": "ARCH40230",
  "title": "Digital Mapping and Spatial Analysis"
}, {
  "code": "ARCH40290",
  "title": "Dissertation"
}, {
  "code": "ARCH40330",
  "title": "Research Topic in Theory and Method in Landscape Archaeology"
}, {
  "code": "ARCH40360",
  "title": "Dissertation (MSc Bioarchaeology)"
}, {
  "code": "ARCH40530",
  "title": "Research & Study Skills in Human Palaeoecology"
}, {
  "code": "ARCH40930",
  "title": "Practical Guided Study"
}, {
  "code": "ARCH41130",
  "title": "The Anglo-saxon World Ad 400-1100"
}, {
  "code": "ARCH41230",
  "title": "Conservation Practice"
}, {
  "code": "ARCH41330",
  "title": "Conservation Skills"
}, {
  "code": "ARCH41430",
  "title": "Chronometry"
}, {
  "code": "ARCH41530",
  "title": "Isotopic and Biomolecular Archaeology"
}, {
  "code": "ARCH41630",
  "title": "Topics in Archaeological Science"
}, {
  "code": "ARCH41760",
  "title": "Managing Cultural Heritage in Context"
}, {
  "code": "ARCH41815",
  "title": "Communicating Cultural Heritage"
}, {
  "code": "ARCH41930",
  "title": "Cultural Heritage, Communities and Identities"
}, {
  "code": "ARCH42060",
  "title": "Professional Practice Project"
}, {
  "code": "ARCH42160",
  "title": "Dissertation"
}, {
  "code": "ARCH42215",
  "title": "Research and Study Skills in Archaeology"
}, {
  "code": "ARCH42315",
  "title": "Practical Research and Study Skills"
}, {
  "code": "ARCH42430",
  "title": "Environmental Archaeology"
}, {
  "code": "ARCH42530",
  "title": "Research Topics in the Archaeology of Egypt, The Near East and Asia (Single Module)"
}, {
  "code": "ARCH50130",
  "title": "Approaches to Museums and Artefact Studies"
}, {
  "code": "ARCH50190",
  "title": "Dissertation in Archaeology (Triple)"
}, {
  "code": "ARCH50360",
  "title": "Double Guided Study"
}, {
  "code": "ARCH51630",
  "title": "Identification and Analysis of the Normal Human Skeleton"
}, {
  "code": "ARCH51730",
  "title": "Palaeopathology: Theory and Method"
}, {
  "code": "ARCH51830",
  "title": "Themes in Palaeopathology"
}, {
  "code": "ARCH51860",
  "title": "Dissertation"
}, {
  "code": "ARCH51960",
  "title": "Research Topics in the Archaeology of Egypt, the Near Eastand Asia (ENEA) (Double Module)"
}, {
  "code": "ARCH52230",
  "title": "Research Paper in Museum and Artefact Studies"
}, {
  "code": "ARCH52360",
  "title": "Research Topics in Classical and Roman Archaeology (Double)"
}, {
  "code": "ARCH52460",
  "title": "Research Topics in Medieval and Post Medieval Archaeology(Double Module)"
}, {
  "code": "ARCH52730",
  "title": "Research Topics in Prehistoric Archaeology (Single Module)"
}, {
  "code": "ARCH52760",
  "title": "Research Topics in Prehistoric Archaeology (Double Module)"
}, {
  "code": "ARCH52830",
  "title": "Research Topics in the Archaeology of Egypt, the Near Eastand Asia (ENEA)"
}, {
  "code": "ARCH52930",
  "title": "Research Topics in the Classical and Roman Archaeology"
}, {
  "code": "ARCH53030",
  "title": "Research Topics in Medieval and Post Medieval Archaeology(Single Module)"
}, {
  "code": "ARCH54530",
  "title": "Museum Principles and Practice"
}, {
  "code": "ARCH54630",
  "title": "Artefact Studies"
}, {
  "code": "ARCH54930",
  "title": "Care of Collections"
}, {
  "code": "ARCH55230",
  "title": "Museum Communication"
}, {
  "code": "ARCH55360",
  "title": "Dissertation in Museum and Artefact Studies"
}, {
  "code": "ARCH57830",
  "title": "Guided Study"
}, {
  "code": "ARCH5999",
  "title": "Research Program in Archaeology"
}, {
  "code": "ARCHNEW02",
  "title": "New Archaeology Module - 2"
}, {
  "code": "ARCHNEW03",
  "title": "New Archaeology Module - 3"
}, {
  "code": "ARCHNEW04",
  "title": "New Archaeology Module - 4"
}, {
  "code": "ARCHNEW05",
  "title": "New Archaeology Module - 5"
}, {
  "code": "ARCHSTAFFSEM",
  "title": "Archaeology Staff Research Seminar"
}, {
  "code": "BIOL1151",
  "title": "Introduction to Physiology"
}, {
  "code": "BIOL1161",
  "title": "Organisms and Environment"
}, {
  "code": "BIOL1171",
  "title": "Genetics"
}, {
  "code": "BIOL1281",
  "title": "Molecules and Cells"
}, {
  "code": "BIOL1321",
  "title": "Fundamentals of Research"
}, {
  "code": "BIOL2421",
  "title": "Immune Systems"
}, {
  "code": "BIOL2431",
  "title": "Microbiology"
}, {
  "code": "BIOL2441",
  "title": "Molecular Biology"
}, {
  "code": "BIOL2451",
  "title": "Evolution"
}, {
  "code": "BIOL2461",
  "title": "Ecology"
}, {
  "code": "BIOL2471",
  "title": "Development"
}, {
  "code": "BIOL2481",
  "title": "Cell Biology"
}, {
  "code": "BIOL2491",
  "title": "Biochemistry"
}, {
  "code": "BIOL2501",
  "title": "Cell Signalling"
}, {
  "code": "BIOL2511",
  "title": "Behaviour"
}, {
  "code": "BIOL2521",
  "title": "Integrated Physiological Systems"
}, {
  "code": "BIOL2571",
  "title": "Plant and Algal Physiology"
}, {
  "code": "BIOL2581",
  "title": "Research Skills for Biosciences"
}, {
  "code": "BIOL3161",
  "title": "Fieldcourse"
}, {
  "code": "BIOL3431",
  "title": "Biology into Schools"
}, {
  "code": "BIOL3441",
  "title": "Biological Enterprise"
}, {
  "code": "BIOL3451",
  "title": "Literature Review"
}, {
  "code": "BIOL3481",
  "title": "Advanced Cell Biology"
}, {
  "code": "BIOL3491",
  "title": "Stress and Responses to the Environment"
}, {
  "code": "BIOL3521",
  "title": "Advanced Topics in Development"
}, {
  "code": "BIOL3531",
  "title": "Stem Cells and Tissue Engineering"
}, {
  "code": "BIOL3541",
  "title": "Ecology in the Anthropocene"
}, {
  "code": "BIOL3551",
  "title": "Conservation Biology"
}, {
  "code": "BIOL3561",
  "title": "Advanced Topics in Ecology, Evolution andBehaviour"
}, {
  "code": "BIOL3571",
  "title": "Research Project"
}, {
  "code": "BIOL3581",
  "title": "Workshop"
}, {
  "code": "BIOL3591",
  "title": "Ageing"
}, {
  "code": "BIOL3601",
  "title": "Biochemistry and Biotechnology"
}, {
  "code": "BIOL3611",
  "title": "Crops for the Future"
}, {
  "code": "BIOL3621",
  "title": "Biology of Disease"
}, {
  "code": "BIOL3631",
  "title": "Research Proposal"
}, {
  "code": "BIOL3641",
  "title": "Contemporary Issues in the Biosciences"
}, {
  "code": "BIOL3651",
  "title": "Genomics"
}, {
  "code": "BIOL3986",
  "title": "Biology with year abroad"
}, {
  "code": "BIOL3996",
  "title": "Biology Placement"
}, {
  "code": "BIOL40040",
  "title": "Principles and Research Practice in the Biological Sciences"
}, {
  "code": "BIOL40140",
  "title": "Principles and Research practice in the Biological Sciences"
}, {
  "code": "BIOL40215",
  "title": "Molecular Cell Biology"
}, {
  "code": "BIOL4022",
  "title": "Biochemistry Research Project"
}, {
  "code": "BIOL4063",
  "title": "Biophysical Research Project (T)"
}, {
  "code": "BIOL4071",
  "title": "Biophysical Research Project (S)"
}, {
  "code": "BIOL4094",
  "title": "Research Project MBiol"
}, {
  "code": "BIOL4101",
  "title": "Field Course MBiol"
}, {
  "code": "BIOL4111",
  "title": "Workshop Mbiol"
}, {
  "code": "BIOL4121",
  "title": "Research Skills Mbiol"
}, {
  "code": "BIOL5899",
  "title": "BBSRC Research Module"
}, {
  "code": "BIOL5999",
  "title": "Research Program in Biology"
}, {
  "code": "BIOL9999",
  "title": "PGR Collaborating Provider"
}, {
  "code": "BIOLNEW01",
  "title": "BIOLNEW01"
}, {
  "code": "BIOLNEW02",
  "title": "BIOLNEW02"
}, {
  "code": "BIOLNEW03",
  "title": "BIOLNEW03"
}, {
  "code": "BIOLNEW04",
  "title": "BIOLNEW04"
}, {
  "code": "BIOLNEW05",
  "title": "BIOLNEW05"
}, {
  "code": "BUSI0000A",
  "title": "PhD Student Teacher Training"
}, {
  "code": "BUSI0000B",
  "title": "MSc Management Entrepreneurship Accelerator Skills Sessions"
}, {
  "code": "BUSI0000C",
  "title": "PhD Quantitative Sequence"
}, {
  "code": "BUSI0000D",
  "title": "MSc Management Research Methods Data Streaming"
}, {
  "code": "BUSI0000E",
  "title": "MSc Management Module Talks"
}, {
  "code": "BUSI0000H",
  "title": "FT MBA Careers Sessions"
}, {
  "code": "BUSI0000L",
  "title": "EBS Induction"
}, {
  "code": "BUSI0000M",
  "title": "FT MBA Pathway Masterclass"
}, {
  "code": "BUSI0000N",
  "title": "FT MBA Induction Activities"
}, {
  "code": "BUSI0000P",
  "title": "DBA - Admission Activities"
}, {
  "code": "BUSI0000Q",
  "title": "Masters Careers Sessions (Durham)"
}, {
  "code": "BUSI0000R",
  "title": "Online MBA - Induction (Taught)"
}, {
  "code": "BUSI0000U",
  "title": "Part Time MA Management - Induction"
}, {
  "code": "BUSI0001",
  "title": "Business Placement - Level I"
}, {
  "code": "BUSI0002",
  "title": "Placement Module - Level II"
}, {
  "code": "BUSI0003",
  "title": "Business Placement - Level III"
}, {
  "code": "BUSI1131",
  "title": "Marketing Principles"
}, {
  "code": "BUSI1141",
  "title": "People, Management and Organisations"
}, {
  "code": "BUSI1151",
  "title": "New Venture Creation"
}, {
  "code": "BUSI1161",
  "title": "Financial Information for Managers"
}, {
  "code": "BUSI1171",
  "title": "The Changing World of Business"
}, {
  "code": "BUSI1181",
  "title": "Economics and Psychology of Decision-Making"
}, {
  "code": "BUSI1191",
  "title": "Introduction to Business Research"
}, {
  "code": "BUSI2131",
  "title": "Managing in a Global Environment"
}, {
  "code": "BUSI2141",
  "title": "Entrepreneurship"
}, {
  "code": "BUSI2151",
  "title": "Information Systems"
}, {
  "code": "BUSI2161",
  "title": "Human Resource Management"
}, {
  "code": "BUSI2171",
  "title": "Strategic Brand Management"
}, {
  "code": "BUSI2181",
  "title": "Operations Management"
}, {
  "code": "BUSI2191",
  "title": "Marketing Research Methods"
}, {
  "code": "BUSI2201",
  "title": "Integrated Marketing Communications"
}, {
  "code": "BUSI2211",
  "title": "Consumer Psychology"
}, {
  "code": "BUSI2221",
  "title": "Consulting in the Public Sector"
}, {
  "code": "BUSI2231",
  "title": "Research Methods and Statistics"
}, {
  "code": "BUSI2251",
  "title": "Financial and Management Accounting"
}, {
  "code": "BUSI2301",
  "title": "Marketing Decisions in Practice"
}, {
  "code": "BUSI2986",
  "title": "Business Placement"
}, {
  "code": "BUSI2996",
  "title": "Business Study Abroad"
}, {
  "code": "BUSI2KPMG",
  "title": "KPMG Consultation and Concession Exams"
}, {
  "code": "BUSI3041",
  "title": "Asia and the Pacific Rim"
}, {
  "code": "BUSI3122",
  "title": "Dissertation in Business (Double Module)"
}, {
  "code": "BUSI3161",
  "title": "Leadership"
}, {
  "code": "BUSI3171",
  "title": "Corporate Entrepreneurship"
}, {
  "code": "BUSI3181",
  "title": "Strategic Management"
}, {
  "code": "BUSI3191",
  "title": "Global Marketing"
}, {
  "code": "BUSI3201",
  "title": "Social Marketing"
}, {
  "code": "BUSI3211",
  "title": "Service Operations Management"
}, {
  "code": "BUSI3221",
  "title": "Retail and Services Marketing"
}, {
  "code": "BUSI3232",
  "title": "Dissertation"
}, {
  "code": "BUSI3241",
  "title": "Corporate Responsibility"
}, {
  "code": "BUSI3251",
  "title": "Corporate Governance"
}, {
  "code": "BUSI3261",
  "title": "Contemporary Issues in Management Research"
}, {
  "code": "BUSI3271",
  "title": "Design Thinking"
}, {
  "code": "BUSI3281",
  "title": "Work, Organisation and Society"
}, {
  "code": "BUSI3311",
  "title": "Big Data Analytics"
}, {
  "code": "BUSI3986",
  "title": "Business Placement"
}, {
  "code": "BUSI3996",
  "title": "Study Abroad"
}, {
  "code": "BUSI40000",
  "title": "Internship"
}, {
  "code": "BUSI40030",
  "title": "Methods of Organisational Inquiry"
}, {
  "code": "BUSI4005",
  "title": "BUSI4005"
}, {
  "code": "BUSI4011",
  "title": "Reflections on Management Practice"
}, {
  "code": "BUSI40160",
  "title": "Dissertation"
}, {
  "code": "BUSI40215",
  "title": "Project Management (Full-time, Part-time and Executive MBA)"
}, {
  "code": "BUSI40M15",
  "title": "Operations and Supply Chain Management (DL)"
}, {
  "code": "BUSI40Q15",
  "title": "Information Systems: Realising the Benefits"
}, {
  "code": "BUSI41000",
  "title": "MSc Management - Developing Skills for Business and HR Leadership"
}, {
  "code": "BUSI41415",
  "title": "Financial Risk Management"
}, {
  "code": "BUSI41515",
  "title": "Financial Planning and Control"
}, {
  "code": "BUSI41Q15",
  "title": "Strategy (Online)"
}, {
  "code": "BUSI41R15",
  "title": "Business Economics and Accounting (DL)"
}, {
  "code": "BUSI41W15",
  "title": "Information Systems: Realising The Benefits (Dl)"
}, {
  "code": "BUSI42015",
  "title": "Multinational Finance"
}, {
  "code": "BUSI42115",
  "title": "Strategy"
}, {
  "code": "BUSI42515",
  "title": "Buyer Behaviour and Marketing Innovation"
}, {
  "code": "BUSI42815",
  "title": "Fundamentals of Finance"
}, {
  "code": "BUSI42R15",
  "title": "Methods of Inquiry (Online) (From 2010)"
}, {
  "code": "BUSI42S15",
  "title": "Managing Finance (Online) (From 2015)"
}, {
  "code": "BUSI42U15",
  "title": "Managing in the Global Environment (DL)"
}, {
  "code": "BUSI42V15",
  "title": "Managing People (DL) (from 2010)"
}, {
  "code": "BUSI42W15",
  "title": "Delivering Service Excellence (Blended Learning)"
}, {
  "code": "BUSI43A15",
  "title": "Global Marketing"
}, {
  "code": "BUSI43B15",
  "title": "Project Management"
}, {
  "code": "BUSI43V15",
  "title": "Event Management (Taught)"
}, {
  "code": "BUSI43W15",
  "title": "Global Business (Taught)"
}, {
  "code": "BUSI43X15",
  "title": "Retail Management (Taught)"
}, {
  "code": "BUSI43Y15",
  "title": "Sales Management (Taught)"
}, {
  "code": "BUSI43Z15",
  "title": "Services Management (Taught)"
}, {
  "code": "BUSI44H15",
  "title": "Tourism Management (Taught)"
}, {
  "code": "BUSI44P15",
  "title": "Practising Social Marketing (Taught)"
}, {
  "code": "BUSI44Q15",
  "title": "Strategic Marketing Management (Taught)"
}, {
  "code": "BUSI44U15",
  "title": "The Science of Leadership"
}, {
  "code": "BUSI44V15",
  "title": "Managing Social Entrepreneurship"
}, {
  "code": "BUSI45015",
  "title": "Corporate Governance"
}, {
  "code": "BUSI45J15",
  "title": "Consulting"
}, {
  "code": "BUSI45L15",
  "title": "Human Resource Development"
}, {
  "code": "BUSI45S15",
  "title": "Financial Planning and Control"
}, {
  "code": "BUSI45U15",
  "title": "Financial Management"
}, {
  "code": "BUSI45W15",
  "title": "Global Marketing"
}, {
  "code": "BUSI45X15",
  "title": "Entrepreneurship (Msc)"
}, {
  "code": "BUSI45Y15",
  "title": "MSc Management - Project Management"
}, {
  "code": "BUSI46515",
  "title": "Strategic Innovation (Executive)"
}, {
  "code": "BUSI46915",
  "title": "New Venture Creation"
}, {
  "code": "BUSI46R15",
  "title": "Small Business Management (Taught)"
}, {
  "code": "BUSI46S15",
  "title": "Competive Strategies and Organisational Fitness"
}, {
  "code": "BUSI46V15",
  "title": "Organisational Behaviour"
}, {
  "code": "BUSI46W15",
  "title": "Strategy"
}, {
  "code": "BUSI46X15",
  "title": "Business Economics and Accounting (Taught)"
}, {
  "code": "BUSI46Y15",
  "title": "Operations and Supply Chain Management (Taught)"
}, {
  "code": "BUSI47G15",
  "title": "The Entrepreneur's Environment"
}, {
  "code": "BUSI47H15",
  "title": "Entrepreneurship and the Entrepreneurial Process"
}, {
  "code": "BUSI47I15",
  "title": "Digital Marketing Strategies (Taught)"
}, {
  "code": "BUSI47L15",
  "title": "International Marketing (Taught)"
}, {
  "code": "BUSI47P15",
  "title": "Leadership (Taught)"
}, {
  "code": "BUSI47W15",
  "title": "Leadership (Online)"
}, {
  "code": "BUSI47W60",
  "title": "Dissertation (Part Time)"
}, {
  "code": "BUSI47X15",
  "title": "Leadership (Taught)"
}, {
  "code": "BUSI47Z15",
  "title": "International Study Tour"
}, {
  "code": "BUSI48515",
  "title": "Managing in the Competitive Environment"
}, {
  "code": "BUSI48P15",
  "title": "Digital Marketing Strategies (Blended Learning)"
}, {
  "code": "BUSI48Q15",
  "title": "Entrepreneurship and Venture Growth (Taught)"
}, {
  "code": "BUSI48V15",
  "title": "Research Methods and Philosophical Analysis"
}, {
  "code": "BUSI48W15",
  "title": "Green Supply Chain and Logistics Systems"
}, {
  "code": "BUSI48Z15",
  "title": "Global Supply Chain Leadership"
}, {
  "code": "BUSI49A15",
  "title": "Managing Marketing Communications (FT MBA)"
}, {
  "code": "BUSI49H30",
  "title": "Change in Organisations"
}, {
  "code": "BUSI49I30",
  "title": "Leadership in Organisations"
}, {
  "code": "BUSI49J30",
  "title": "The Ecology of Organisations"
}, {
  "code": "BUSI49K30",
  "title": "Power, Control and Resistance in Organisations"
}, {
  "code": "BUSI49L60",
  "title": "Research Design Workshop (Level 4)"
}, {
  "code": "BUSI49N15",
  "title": "Sustaining Change in Organisations (MBA) (ONLINE)"
}, {
  "code": "BUSI49O15",
  "title": "Sustaining Change in Organisations (MBA) (Taught)"
}, {
  "code": "BUSI49Q15",
  "title": "Sustaining Change in Organisations (Ma) (Taught)"
}, {
  "code": "BUSI49S15",
  "title": "International Business in Context (Blended)"
}, {
  "code": "BUSI49T15",
  "title": "Retail Marketing Management"
}, {
  "code": "BUSI49U15",
  "title": "Designing and Marketing Services"
}, {
  "code": "BUSI49V15",
  "title": "Strategic Brand Management"
}, {
  "code": "BUSI49W15",
  "title": "Advanced Marketing Strategy"
}, {
  "code": "BUSI49Z15",
  "title": "Employee Reward Strategy"
}, {
  "code": "BUSI4A515",
  "title": "Strategy Simulation and System Thinking"
}, {
  "code": "BUSI4D615",
  "title": "Strategic Marketing Management"
}, {
  "code": "BUSI4F015",
  "title": "Buyer Behaviour & Marketing Communications (Taught)"
}, {
  "code": "BUSI4G115",
  "title": "Corporate Finance for Managers"
}, {
  "code": "BUSI4G215",
  "title": "Decision Making and Business Modelling"
}, {
  "code": "BUSI4G360",
  "title": "Dissertation in Marketing"
}, {
  "code": "BUSI4G415",
  "title": "MSc Marketing - Social Marketing"
}, {
  "code": "BUSI4G515",
  "title": "Business to Business Marketing"
}, {
  "code": "BUSI4G615",
  "title": "MSc Marketing - Arts, Heritage and Tourism Marketing"
}, {
  "code": "BUSI4G715",
  "title": "MSc Marketing - Research Methods in Marketing"
}, {
  "code": "BUSI4G815",
  "title": "MSc Marketing - Consumers and Consumption"
}, {
  "code": "BUSI4G915",
  "title": "MSc Marketing - Marketing Management and Strategy"
}, {
  "code": "BUSI4H015",
  "title": "MSc Marketing - Marketing Theory"
}, {
  "code": "BUSI4H215",
  "title": "MSc Marketing - Contemporary Marketing Communication"
}, {
  "code": "BUSI4H315",
  "title": "Mergers and Acquisitions (MSc Management)"
}, {
  "code": "BUSI4H530",
  "title": "Research Design, Process and Philosophy"
}, {
  "code": "BUSI4H615",
  "title": "Advanced Qualitative Research Methods (Management andMarketing)"
}, {
  "code": "BUSI4H715",
  "title": "Advanced Quantitative Research Methods (Management andMarketing)"
}, {
  "code": "BUSI4H815",
  "title": "Logic and Argumentation in the Social Sciences"
}, {
  "code": "BUSI4H915",
  "title": "Advanced Seminars in Management and Marketing"
}, {
  "code": "BUSI4I260",
  "title": "Dissertation (Integrated PhD)"
}, {
  "code": "BUSI4I460",
  "title": "Research Methods and Dissertation (Management - General)"
}, {
  "code": "BUSI4I560",
  "title": "Research Methods and Dissertation (Management - Finance)"
}, {
  "code": "BUSI4I710",
  "title": "FT MBA - Leading and Managing People"
}, {
  "code": "BUSI4I810",
  "title": "FT MBA - Accounting and Finance"
}, {
  "code": "BUSI4I910",
  "title": "FT MBA - Marketing"
}, {
  "code": "BUSI4J010",
  "title": "FT MBA - Strategic Management"
}, {
  "code": "BUSI4J110",
  "title": "FT MBA - Operations and Technology"
}, {
  "code": "BUSI4J210",
  "title": "FT MBA - Economics For Global Business"
}, {
  "code": "BUSI4J310",
  "title": "FT MBA - Sustainability and Ethics"
}, {
  "code": "BUSI4J420",
  "title": "FT MBA - International Business in Context"
}, {
  "code": "BUSI4J510",
  "title": "FT MBA - The Boardroom Exercise"
}, {
  "code": "BUSI4J660",
  "title": "FT MBA - Strategic Business Project"
}, {
  "code": "BUSI4J710",
  "title": "FT MBA - Entrepreneurship"
}, {
  "code": "BUSI4J810",
  "title": "FT MBA - New Venture Creation"
}, {
  "code": "BUSI4J910",
  "title": "FT MBA - Management Consultancy"
}, {
  "code": "BUSI4K010",
  "title": "FT MBA - Project Management"
}, {
  "code": "BUSI4K120",
  "title": "Online MBA - Accounting, Finance and Economics (Online)"
}, {
  "code": "BUSI4K220",
  "title": "Online MBA - Accounting, Finance and Economics (Taught)"
}, {
  "code": "BUSI4K320",
  "title": "Online MBA - Leading and Managing People (Online)"
}, {
  "code": "BUSI4K420",
  "title": "Online MBA - Leading and Managing People (Taught)"
}, {
  "code": "BUSI4K520",
  "title": "Marketing (Online)"
}, {
  "code": "BUSI4K620",
  "title": "Online MBA - Marketing (Taught)"
}, {
  "code": "BUSI4K720",
  "title": "Operations and Technology (Online)"
}, {
  "code": "BUSI4K820",
  "title": "Operations and Technology (Taught)"
}, {
  "code": "BUSI4K920",
  "title": "Strategic Management (Online)"
}, {
  "code": "BUSI4L020",
  "title": "Online MBA - Strategic Management (Taught)"
}, {
  "code": "BUSI4L160",
  "title": "Strategic Case Analysis"
}, {
  "code": "BUSI4L210",
  "title": "Online MBA - Entrepreneurship (Online)"
}, {
  "code": "BUSI4L310",
  "title": "Online MBA - Entrepreneurship (Taught)"
}, {
  "code": "BUSI4L410",
  "title": "Online MBA - New Venture Creation (Online)"
}, {
  "code": "BUSI4L510",
  "title": "Online MBA - New Venture Creation (Taught)"
}, {
  "code": "BUSI4L610",
  "title": "Online MBA - Management Consultancy (Online)"
}, {
  "code": "BUSI4L710",
  "title": "Management Consultancy (Taught)"
}, {
  "code": "BUSI4L810",
  "title": "Online MBA - Project Management (Online)"
}, {
  "code": "BUSI4L910",
  "title": "Project Management (Taught)"
}, {
  "code": "BUSI4M110",
  "title": "Business Analytics (Taught)"
}, {
  "code": "BUSI4M210",
  "title": "Technology Innovation (Online)"
}, {
  "code": "BUSI4M310",
  "title": "Technology Innovation (Taught)"
}, {
  "code": "BUSI4M410",
  "title": "International Business in Context (Taught)"
}, {
  "code": "BUSI4M515",
  "title": "Entrepreneurship (Taught)"
}, {
  "code": "BUSI4M615",
  "title": "Project Management (Taught)"
}, {
  "code": "BUSI4M710",
  "title": "FT MBA - Business Analytics"
}, {
  "code": "BUSI4M810",
  "title": "FT MBA - Technology Innovation"
}, {
  "code": "BUSI4M915",
  "title": "Practising Business Research (Fudan DBA)"
}, {
  "code": "BUSI4N015",
  "title": "Strategic Visioning, Leadership and Change Management(Fudan DBA)"
}, {
  "code": "BUSI4N115",
  "title": "Global Corporate Strategy (Fudan DBA)"
}, {
  "code": "BUSI4N230",
  "title": "Design Thinking for Innovation (Fudan DBA)"
}, {
  "code": "BUSI4N315",
  "title": "Global Financial Markets and Institutions (Fudan DBA)"
}, {
  "code": "BUSI4N430",
  "title": "Financial Data and Analysis and Econometrics Methods(Fudan DBA)"
}, {
  "code": "BUSI4N515",
  "title": "Applied Behaviour Analysis (Fudan DBA)"
}, {
  "code": "BUSI4N630",
  "title": "Advanced Business Data Analysis and Consultancy(Fudan DBA)"
}, {
  "code": "BUSI4N860",
  "title": "Research Methods and Dissertation (International)(MSc Management-Finance)"
}, {
  "code": "BUSI4N960",
  "title": "Research Methods and Dissertation (International)(MSc Management - General)"
}, {
  "code": "BUSI4O110",
  "title": "EBS MBA - Accounting"
}, {
  "code": "BUSI4O210",
  "title": "EBS MBA - Economics for Global Business"
}, {
  "code": "BUSI4O310",
  "title": "Finance (EBS)"
}, {
  "code": "BUSI4O410",
  "title": "Managing People (EBS)"
}, {
  "code": "BUSI4O510",
  "title": "EBS MBA - Marketing"
}, {
  "code": "BUSI4O610",
  "title": "EBS MBA - Operations and Technology"
}, {
  "code": "BUSI4O710",
  "title": "EBS MBA - Strategic Management"
}, {
  "code": "BUSI4O810",
  "title": "Sustainability and Ethics (EBS)"
}, {
  "code": "BUSI4O910",
  "title": "The Boardroom Exercise (EBS)"
}, {
  "code": "BUSI4P060",
  "title": "EBS MBA - Strategic Business Project"
}, {
  "code": "BUSI4P110",
  "title": "EBS MBA - Business Analytics"
}, {
  "code": "BUSI4P210",
  "title": "EBS MBA - Advanced Finance for Business"
}, {
  "code": "BUSI4P310",
  "title": "EBS MBA - Leading Change"
}, {
  "code": "BUSI4P410",
  "title": "EBS MBA - Negotiation"
}, {
  "code": "BUSI4P510",
  "title": "EBS MBA - Project Management"
}, {
  "code": "BUSI4P610",
  "title": "EBS MBA - Technology and Innovation"
}, {
  "code": "BUSI4P730",
  "title": "Global DBA - Leadership and Fellowship"
}, {
  "code": "BUSI4P930",
  "title": "Global Strategic Management (Level 4)"
}, {
  "code": "BUSI4Q030",
  "title": "Innovation and Technology Management (Level 4)"
}, {
  "code": "BUSI4Q415",
  "title": "MSc Marketing - Digital Marketing"
}, {
  "code": "BUSI4Q515",
  "title": "Global Sport Business"
}, {
  "code": "BUSI4Q615",
  "title": "Silicon Valley Field Trip"
}, {
  "code": "BUSI4Q715",
  "title": "Introduction to Management"
}, {
  "code": "BUSI4Q915",
  "title": "Building Customer Insights"
}, {
  "code": "BUSI4R015",
  "title": "Retail Science"
}, {
  "code": "BUSI4R115",
  "title": "Data Analytics for Strategic Decision-Making"
}, {
  "code": "BUSI4R210",
  "title": "Strategic Management (CPD)"
}, {
  "code": "BUSI4R310",
  "title": "Marketing (CPD)"
}, {
  "code": "BUSI4R410",
  "title": "Operations and Technology (CPD)"
}, {
  "code": "BUSI4R510",
  "title": "Leading Change (CPD)"
}, {
  "code": "BUSI4R610",
  "title": "Technology and Innovation (CPD)"
}, {
  "code": "BUSI4R710",
  "title": "Entrepreneurship (CPD)"
}, {
  "code": "BUSI4R930",
  "title": "Marketing Theory and Practice"
}, {
  "code": "BUSI4V815",
  "title": "MSc Management - Organisational Behaviour"
}, {
  "code": "BUSI4W160",
  "title": "Dissertation"
}, {
  "code": "BUSI4W715",
  "title": "Managing People"
}, {
  "code": "BUSI4W815",
  "title": "Managing Finance"
}, {
  "code": "BUSI4W915",
  "title": "Managing in the Competitive Environment"
}, {
  "code": "BUSI4XXXX",
  "title": "Global Corporate Strategy (Fundan DBA) - currently BUSI4XXX, waiting on confirmation of module code (28/03/1981)"
}, {
  "code": "BUSI4Y215",
  "title": "Managing in the Global Environment"
}, {
  "code": "BUSI4Y315",
  "title": "Methods of Inquiry"
}, {
  "code": "BUSI4Y415",
  "title": "Strategic Innovation (Ebs)"
}, {
  "code": "BUSI4Y515",
  "title": "Corporate Finance"
}, {
  "code": "BUSI4Y715",
  "title": "Entrepreneurship"
}, {
  "code": "BUSI4Y915",
  "title": "Improving Management Decision Making"
}, {
  "code": "BUSI4Z515",
  "title": "Leadership"
}, {
  "code": "BUSI4ZB15",
  "title": "Negotiation Management"
}, {
  "code": "BUSI4ZE15",
  "title": "Project Management"
}, {
  "code": "BUSI50915",
  "title": "Project Management (Distance Learning)"
}, {
  "code": "BUSI51715",
  "title": "Managing Change"
}, {
  "code": "BUSI52415",
  "title": "Business Economics and Accounting"
}, {
  "code": "BUSI52715",
  "title": "Business Research: Functions and Disciplines"
}, {
  "code": "BUSI53115",
  "title": "Financial Management"
}, {
  "code": "BUSI53215",
  "title": "Human Resource Management"
}, {
  "code": "BUSI53315",
  "title": "Innovation and Technology Management"
}, {
  "code": "BUSI54060",
  "title": "Research Design Workshop (Level 5)"
}, {
  "code": "BUSI54330",
  "title": "Econometric Methods and Applications"
}, {
  "code": "BUSI54515",
  "title": "Human Resource Management (ONLINE)"
}, {
  "code": "BUSI54615",
  "title": "Small Business Management (DL)"
}, {
  "code": "BUSI55215",
  "title": "Operations and Supply Chain Management"
}, {
  "code": "BUSI55415",
  "title": "Leading Your Team"
}, {
  "code": "BUSI55515",
  "title": "Marketing Management"
}, {
  "code": "BUSI55615",
  "title": "Interpreting and Improving Management Accounting Information"
}, {
  "code": "BUSI55715",
  "title": "Managing Process Improvement"
}, {
  "code": "BUSI55830",
  "title": "Leading and Managing The Strategic Process"
}, {
  "code": "BUSI55930",
  "title": "Leading and Managing Cultural Change"
}, {
  "code": "BUSI56360",
  "title": "Dissertation (MBA)(MBA Finance)"
}, {
  "code": "BUSI5919",
  "title": "Research Program in Accounting"
}, {
  "code": "BUSI5929",
  "title": "Research Program in Management"
}, {
  "code": "BUSI5939",
  "title": "Research Program in Finance"
}, {
  "code": "BUSI5949",
  "title": "Research Programme - Marketing"
}, {
  "code": "BUSI5969",
  "title": "Research Programme - Finance"
}, {
  "code": "BUSI5989",
  "title": "Research Program in Business Studies"
}, {
  "code": "BUSI5A115",
  "title": "Entrepreneurship"
}, {
  "code": "BUSI5A415",
  "title": "Strategic Supply Chain Management"
}, {
  "code": "BUSI5A515",
  "title": "Strategic Marketing"
}, {
  "code": "BUSI5A615",
  "title": "Research Methods (DL)"
}, {
  "code": "BUSI5A815",
  "title": "East Asian Business and Management"
}, {
  "code": "BUSI5B415",
  "title": "Small Business"
}, {
  "code": "BUSI5B815",
  "title": "Strategic Marketing Management"
}, {
  "code": "BUSI5C215",
  "title": "Management Information Strategy"
}, {
  "code": "BUSI5C315",
  "title": "Employee Relations"
}, {
  "code": "BUSI5C515",
  "title": "PT MA - Organisational Behaviour (Online) 2018 Cohort"
}, {
  "code": "BUSI5C715",
  "title": "New Venture Creation"
}, {
  "code": "BUSI5C815",
  "title": "The Entrepreneur's Environment (online)"
}, {
  "code": "BUSI5F015",
  "title": "Work and Society"
}, {
  "code": "BUSI5F215",
  "title": "Managing in The Competitive Environment"
}, {
  "code": "BUSI5G815",
  "title": "Global Business"
}, {
  "code": "BUSI5H060",
  "title": "Theory into Practice (Level 5) (Fudan DBA)"
}, {
  "code": "BUSI5H068",
  "title": "Theory into Practice"
}, {
  "code": "BUSI5Q260",
  "title": "Theory into Practice (Level 5)"
}, {
  "code": "BUSIPGWriting",
  "title": "MSc Management - Referencing and Plagiarism Session"
}, {
  "code": "BUSS1181",
  "title": "Law"
}, {
  "code": "BUSS2011",
  "title": "Information Systems"
}, {
  "code": "BUSS2241",
  "title": "BSc Accounting (KPMG) - Business Strategy"
}, {
  "code": "BUSS2251",
  "title": "BSc Accounting (KPMG) - Audit and Assurance"
}, {
  "code": "BUSS2776",
  "title": "Business Abroad"
}, {
  "code": "BUSS2996",
  "title": "Placement Year"
}, {
  "code": "CFLS1A11",
  "title": "Arabic Stage 1"
}, {
  "code": "CFLS1A21",
  "title": "Arabic Stage 2"
}, {
  "code": "CFLS1A31",
  "title": "Arabic Stage 3"
}, {
  "code": "CFLS1C11",
  "title": "Chinese Stage 1"
}, {
  "code": "CFLS1C21",
  "title": "Chinese Stage 2"
}, {
  "code": "CFLS1C31",
  "title": "Chinese Stage 3"
}, {
  "code": "CFLS1C41",
  "title": "Chinese Stage 4"
}, {
  "code": "CFLS1C51",
  "title": "Chinese Stage 5"
}, {
  "code": "CFLS1F11",
  "title": "French Stage 1"
}, {
  "code": "CFLS1F21",
  "title": "French Stage 2"
}, {
  "code": "CFLS1F31",
  "title": "French Stage 3"
}, {
  "code": "CFLS1F41",
  "title": "French Stage 4"
}, {
  "code": "CFLS1F51",
  "title": "French Stage 5"
}, {
  "code": "CFLS1F61",
  "title": "French Stage 6"
}, {
  "code": "CFLS1G11",
  "title": "German Stage 1"
}, {
  "code": "CFLS1G21",
  "title": "German Stage 2"
}, {
  "code": "CFLS1G31",
  "title": "German Stage 3"
}, {
  "code": "CFLS1G41",
  "title": "German Stage 4"
}, {
  "code": "CFLS1G51",
  "title": "German Stage 5"
}, {
  "code": "CFLS1I11",
  "title": "Italian Stage 1"
}, {
  "code": "CFLS1I21",
  "title": "Italian Stage 2"
}, {
  "code": "CFLS1I31",
  "title": "Italian Stage 3"
}, {
  "code": "CFLS1I41",
  "title": "Italian Stage 4"
}, {
  "code": "CFLS1J11",
  "title": "Japanese Stage 1"
}, {
  "code": "CFLS1J21",
  "title": "Japanese Stage 2"
}, {
  "code": "CFLS1J31",
  "title": "Japanese Stage 3"
}, {
  "code": "CFLS1J41",
  "title": "Japanese Stage 4"
}, {
  "code": "CFLS1K11",
  "title": "Korean Stage 1"
}, {
  "code": "CFLS1K21",
  "title": "Korean Stage 2"
}, {
  "code": "CFLS1P11",
  "title": "Portuguese Stage 1"
}, {
  "code": "CFLS1R11",
  "title": "Russian Stage 1"
}, {
  "code": "CFLS1R21",
  "title": "Russian Stage 2"
}, {
  "code": "CFLS1S11",
  "title": "Spanish Stage 1"
}, {
  "code": "CFLS1S21",
  "title": "Spanish Stage 2"
}, {
  "code": "CFLS1S31",
  "title": "Spanish Stage 3"
}, {
  "code": "CFLS1S41",
  "title": "Spanish Stage 4"
}, {
  "code": "CFLS1S51",
  "title": "Spanish Stage 5"
}, {
  "code": "CFLS1S61",
  "title": "Spanish Stage 6"
}, {
  "code": "CFLSNEW01",
  "title": "CFLSNEW01"
}, {
  "code": "CFLSNEW02",
  "title": "CFLSNEW02"
}, {
  "code": "CFLSNEW03",
  "title": "CFLSNEW03"
}, {
  "code": "CFLSNEW04",
  "title": "CFLSNEW04"
}, {
  "code": "CFLSNEW05",
  "title": "CFLSNEW05"
}, {
  "code": "CHEM1061",
  "title": "Molecules in Action"
}, {
  "code": "CHEM1078",
  "title": "Core Chemistry 1"
}, {
  "code": "CHEM1087",
  "title": "Practical Chemistry 1A"
}, {
  "code": "CHEM1098",
  "title": "Core Chemistry 1B"
}, {
  "code": "CHEM1107",
  "title": "Practical Chemistry 1B"
}, {
  "code": "CHEM1111",
  "title": "Mathematical and Experimental Tools required in Chemistry"
}, {
  "code": "CHEM1127",
  "title": "Introduction to Materials Chemistry"
}, {
  "code": "CHEM2012",
  "title": "Core Chemistry 2"
}, {
  "code": "CHEM2051",
  "title": "Biological Chemistry"
}, {
  "code": "CHEM2061",
  "title": "Computational Chemistry"
}, {
  "code": "CHEM2077",
  "title": "Chemistry of the Elements"
}, {
  "code": "CHEM2087",
  "title": "Structure and Reactivity in Organic Chemistry"
}, {
  "code": "CHEM2097",
  "title": "Properties of Molecules"
}, {
  "code": "CHEM2107",
  "title": "Practical Chemistry 2 - Inorganic"
}, {
  "code": "CHEM2117",
  "title": "Practical Chemistry 2 - Organic"
}, {
  "code": "CHEM2127",
  "title": "Practical Chemistry 2 - Physical"
}, {
  "code": "CHEM3012",
  "title": "Core Chemistry 3"
}, {
  "code": "CHEM3051",
  "title": "Materials Chemistry"
}, {
  "code": "CHEM3061",
  "title": "Chemistry and Society"
}, {
  "code": "CHEM3071",
  "title": "Advanced Computational Chemistry"
}, {
  "code": "CHEM3081",
  "title": "Chemistry into School"
}, {
  "code": "CHEM3097",
  "title": "Inorganic Concepts and Applications"
}, {
  "code": "CHEM3107",
  "title": "Practical Chemistry 3 - Inorganic"
}, {
  "code": "CHEM3117",
  "title": "Advanced Organic Chemistry"
}, {
  "code": "CHEM3127",
  "title": "Practical Chemistry 3 - Organic"
}, {
  "code": "CHEM3137",
  "title": "Molecules and their Interactions"
}, {
  "code": "CHEM3147",
  "title": "Practical Chemistry 3 - Physical"
}, {
  "code": "CHEM3151",
  "title": "Computational Chemical Physics"
}, {
  "code": "CHEM3161",
  "title": "Chemistry BSc Dissertation"
}, {
  "code": "CHEM3177",
  "title": "Chemistry Research Perspective"
}, {
  "code": "CHEM3187",
  "title": "Chemistry Literature Perspective"
}, {
  "code": "CHEM3211",
  "title": "Bioactive Chemistry 3"
}, {
  "code": "CHEM3411",
  "title": "Chemical Physics 3"
}, {
  "code": "CHEM3421",
  "title": "Advanced Biological Chemistry"
}, {
  "code": "CHEM4211",
  "title": "Bioactive Chemistry 4"
}, {
  "code": "CHEM4272",
  "title": "Bioactive Chemistry Research Project (D)"
}, {
  "code": "CHEM4311",
  "title": "Core Chemistry 4"
}, {
  "code": "CHEM4361",
  "title": "Core Chemistry 4D"
}, {
  "code": "CHEM4375",
  "title": "External Research Project"
}, {
  "code": "CHEM4411",
  "title": "Chemical Physics 4"
}, {
  "code": "CHEM4471",
  "title": "Advanced Computational Chemical Physics"
}, {
  "code": "CHEM4481",
  "title": "Advanced Research Concepts in Chemistry"
}, {
  "code": "CHEM4494",
  "title": "Chemistry Research Project"
}, {
  "code": "CHEM5999",
  "title": "Research Program in Chemistry"
}, {
  "code": "CHEMNEW01",
  "title": "CHEMNEW01"
}, {
  "code": "CHEMNEW02",
  "title": "CHEMNEW02"
}, {
  "code": "CHEMNEW03",
  "title": "CHEMNEW03"
}, {
  "code": "CHEMNEW04",
  "title": "CHEMNEW04"
}, {
  "code": "CHEMNEW05",
  "title": "CHEMNEW05"
}, {
  "code": "CHNS1012",
  "title": "Chinese Language 1B"
}, {
  "code": "CHNS1021",
  "title": "Introduction to Chinese Culture"
}, {
  "code": "CHNS1032",
  "title": "Chinese Language 1A"
}, {
  "code": "CHNS2012",
  "title": "Chinese Language 2B"
}, {
  "code": "CHNS2021",
  "title": "Chinese Cinema"
}, {
  "code": "CHNS2031",
  "title": "Classical Chinese I"
}, {
  "code": "CHNS2041",
  "title": "Chinese Language 2A"
}, {
  "code": "CHNS2996",
  "title": "Chinese Study Abroad"
}, {
  "code": "CHNS3021",
  "title": "Chinese Historical & Literary Texts"
}, {
  "code": "CHNS3031",
  "title": "Dissertation in Chinese Studies"
}, {
  "code": "CHNS3042",
  "title": "Dissertation in Chinese Studies"
}, {
  "code": "CHNS3062",
  "title": "Chinese Language 4"
}, {
  "code": "CHNSNEW01",
  "title": "New Chinese Module - 1"
}, {
  "code": "CHNSNEW02",
  "title": "New Chinese Module - 2"
}, {
  "code": "CHNSNEW03",
  "title": "New Chinese Module - 3"
}, {
  "code": "CHNSNEW04",
  "title": "CHNSNEW04"
}, {
  "code": "CHNSNEW05",
  "title": "CHNSNEW05"
}, {
  "code": "CLAS1062",
  "title": "Beginners' Latin 1"
}, {
  "code": "CLAS1072",
  "title": "Beginners' Greek 1"
}, {
  "code": "CLAS1101",
  "title": "Early Greek Philosophy"
}, {
  "code": "CLAS1301",
  "title": "Monuments and Memory in the Age of Augustus"
}, {
  "code": "CLAS1541",
  "title": "Intermediate Greek 1A"
}, {
  "code": "CLAS1551",
  "title": "Intermediate Greek 1B"
}, {
  "code": "CLAS1561",
  "title": "Intermediate Latin 1A"
}, {
  "code": "CLAS1571",
  "title": "Intermediate Latin 1B"
}, {
  "code": "CLAS1601",
  "title": "Introduction to the Greek World"
}, {
  "code": "CLAS1701",
  "title": "Language, Translation and Interpretation"
}, {
  "code": "CLAS1721",
  "title": "Greek Art and Architecture"
}, {
  "code": "CLAS1731",
  "title": "The Craft of the Ancient Historian"
}, {
  "code": "CLAS1741",
  "title": "Living in the Classical World"
}, {
  "code": "CLAS1761",
  "title": "Socrates and the Socratics"
}, {
  "code": "CLAS1771",
  "title": "Early Christianity: Experience and Memory"
}, {
  "code": "CLAS1781",
  "title": "Lives of Objects - Greek and Roman Antiquity"
}, {
  "code": "CLAS2032",
  "title": "Beginners' Latin 2"
}, {
  "code": "CLAS2062",
  "title": "Beginners' Greek 2"
}, {
  "code": "CLAS2121",
  "title": "Advanced Latin 2B"
}, {
  "code": "CLAS2131",
  "title": "Crisis of the Roman Republic"
}, {
  "code": "CLAS2151",
  "title": "Traditions of Epic"
}, {
  "code": "CLAS2171",
  "title": "Advanced Greek 2A"
}, {
  "code": "CLAS2181",
  "title": "Advanced Greek 2B"
}, {
  "code": "CLAS2191",
  "title": "Advanced Latin 2A"
}, {
  "code": "CLAS2521",
  "title": "Intermediate Latin 2A"
}, {
  "code": "CLAS2531",
  "title": "Intermediate Latin 2B"
}, {
  "code": "CLAS2541",
  "title": "Intermediate Greek 2A"
}, {
  "code": "CLAS2551",
  "title": "Intermediate Greek 2B"
}, {
  "code": "CLAS2601",
  "title": "Greek Literature and The Near East"
}, {
  "code": "CLAS2611",
  "title": "The Literary and Political Culture of the Roman Republic"
}, {
  "code": "CLAS2621",
  "title": "Interpreting Greek Tragedy Today"
}, {
  "code": "CLAS2631",
  "title": "Roman Buildings and Their Decoration"
}, {
  "code": "CLAS2641",
  "title": "Creation and Cosmology"
}, {
  "code": "CLAS2661",
  "title": "Emperors and Dynasties: From the Julio-Claudians to Diocletian's Tetrarchy"
}, {
  "code": "CLAS2721",
  "title": "Latin Literature of The Early Empire"
}, {
  "code": "CLAS2731",
  "title": "Ancient Epistolography"
}, {
  "code": "CLAS2761",
  "title": "Ancient Political Thought and Action"
}, {
  "code": "CLAS2781",
  "title": "The Hellenistic World"
}, {
  "code": "CLAS2791",
  "title": "Stoicism"
}, {
  "code": "CLAS2801",
  "title": "Classical Theories of Soul"
}, {
  "code": "CLAS2811",
  "title": "Dialogues with Antiquity: The Classical Past in the VisualArts from the Middle Ages to Modernity"
}, {
  "code": "CLAS2831",
  "title": "Living in the Classical World"
}, {
  "code": "CLAS2841",
  "title": "Alexandria"
}, {
  "code": "CLAS2851",
  "title": "Advanced Latin 2C"
}, {
  "code": "CLAS2861",
  "title": "Death in the Classical World"
}, {
  "code": "CLAS2871",
  "title": "Theatre and Spectacle in Ancient Rome"
}, {
  "code": "CLAS2881",
  "title": "Myths of Transformation in Ovid's Metamorphoses"
}, {
  "code": "CLAS2891",
  "title": "Classical Receptions and Contemporary Culture"
}, {
  "code": "CLAS2901",
  "title": "Ancient Science"
}, {
  "code": "CLAS2911",
  "title": "Roman Religion"
}, {
  "code": "CLAS2996",
  "title": "Classics Abroad Module"
}, {
  "code": "CLAS3231",
  "title": "Higher Latin 3A"
}, {
  "code": "CLAS3241",
  "title": "Higher Latin 3B"
}, {
  "code": "CLAS3271",
  "title": "Dissertation"
}, {
  "code": "CLAS3321",
  "title": "Urbs Roma"
}, {
  "code": "CLAS3331",
  "title": "The Literature and Language Of Ancient Babylon: An Introduction"
}, {
  "code": "CLAS3341",
  "title": "Love and Sex in Ancient Poetry"
}, {
  "code": "CLAS3371",
  "title": "Myth, Memory and History"
}, {
  "code": "CLAS3391",
  "title": "Advanced Latin 3B"
}, {
  "code": "CLAS3401",
  "title": "Advanced Latin 3A"
}, {
  "code": "CLAS3411",
  "title": "Advanced Greek 3B"
}, {
  "code": "CLAS3421",
  "title": "Advanced Greek 3A"
}, {
  "code": "CLAS3431",
  "title": "Higher Greek 3B"
}, {
  "code": "CLAS3441",
  "title": "Higher Greek 3A"
}, {
  "code": "CLAS3491",
  "title": "Roman Syria"
}, {
  "code": "CLAS3541",
  "title": "Knowledge and Doubt in Hellenistic Philosophy"
}, {
  "code": "CLAS3551",
  "title": "Greeks and Persians (c 560-336 BC)"
}, {
  "code": "CLAS3571",
  "title": "The World of Catullus"
}, {
  "code": "CLAS3581",
  "title": "Writing Alexander"
}, {
  "code": "CLAS3601",
  "title": "The Life and Times of Cicero"
}, {
  "code": "CLAS3612",
  "title": "Dissertation (40 Credits)"
}, {
  "code": "CLAS3631",
  "title": "Greek and Latin Literature of The Second Century A.d"
}, {
  "code": "CLAS3641",
  "title": "Intermediate Greek 3A"
}, {
  "code": "CLAS3651",
  "title": "Intermediate Greek 3B"
}, {
  "code": "CLAS3661",
  "title": "Lives and Afterlives of The Greek and Roman Poets"
}, {
  "code": "CLAS3671",
  "title": "The Later Roman Empire"
}, {
  "code": "CLAS3681",
  "title": "Intermediate Latin 3A"
}, {
  "code": "CLAS3691",
  "title": "Intermediate Latin 3B"
}, {
  "code": "CLAS3701",
  "title": "Comedy and Tragedy, Laughter and Sorrow"
}, {
  "code": "CLAS3711",
  "title": "Pompeii and Herculaneum: Rediscovery and Reconstruction"
}, {
  "code": "CLAS3721",
  "title": "Greek & Latin Literature of the Fourth-Sixth Centuries AD"
}, {
  "code": "CLAS3731",
  "title": "Technologies of Knowledge in Antiquity"
}, {
  "code": "CLAS3741",
  "title": "Advanced Latin 3C"
}, {
  "code": "CLAS3751",
  "title": "Roman Law and Latin Literature"
}, {
  "code": "CLAS3761",
  "title": "Classical Victorians: Greco-Roman Antiquity inNineteenth-Century Britain"
}, {
  "code": "CLAS3781",
  "title": "Ancient Philosophers on the Origins of Civilisation"
}, {
  "code": "CLAS3996",
  "title": "Study at Overseas University"
}, {
  "code": "CLAS40130",
  "title": "Classical Research Methods and Resources"
}, {
  "code": "CLAS40160",
  "title": "Dissertation (Ancient Epic)"
}, {
  "code": "CLAS40230",
  "title": "Forms After Plato"
}, {
  "code": "CLAS40260",
  "title": "Dissertation (Greece, Rome and The Near East)"
}, {
  "code": "CLAS40330",
  "title": "Latin for Research"
}, {
  "code": "CLAS40360",
  "title": "Dissertation (Ancient Historiography)"
}, {
  "code": "CLAS40430",
  "title": "Ancient Greek for Research"
}, {
  "code": "CLAS40460",
  "title": "Dissertation (Ancient Philosophy)"
}, {
  "code": "CLAS40530",
  "title": "Latin Text Seminar"
}, {
  "code": "CLAS40630",
  "title": "Greek Text Seminar"
}, {
  "code": "CLAS40730",
  "title": "Akkadian"
}, {
  "code": "CLAS40930",
  "title": "Latin Love Elegy"
}, {
  "code": "CLAS41030",
  "title": "History and Historiography in Fifth Century Bce Greece"
}, {
  "code": "CLAS41130",
  "title": "Religious Life in the Roman Near East"
}, {
  "code": "CLAS41230",
  "title": "Civil Conflict in Ancient Historiography"
}, {
  "code": "CLAS41430",
  "title": "Monumental Architecture of the Roman East"
}, {
  "code": "CLAS41530",
  "title": "Vitruvius, On Architecture: The First Treatise on Architecture: Its Significance and Legacy"
}, {
  "code": "CLAS42130",
  "title": "Ancient Philosophers On Necessity, Fate and Free Will"
}, {
  "code": "CLAS42230",
  "title": "The Classical Tradition: Art, Literature, Thought"
}, {
  "code": "CLAS42430",
  "title": "Comparative Approaches to Homeric Epic"
}, {
  "code": "CLAS42730",
  "title": "Law and Drama in Classical Athens"
}, {
  "code": "CLAS42830",
  "title": "Life and Death On Roman Sarcophagi"
}, {
  "code": "CLAS42930",
  "title": "Juvenal's Satires in Context"
}, {
  "code": "CLAS43030",
  "title": "Ancient Philosophers On Origins"
}, {
  "code": "CLAS43130",
  "title": "Animals in Graeco-Roman Antiquity"
}, {
  "code": "CLAS43230",
  "title": "The Queen of the Desert: Rise and Decline of Palmyra'sCivilization"
}, {
  "code": "CLAS43330",
  "title": "The Roman Republic: Debates and Approaches"
}, {
  "code": "CLAS43430",
  "title": "Rewriting Empire: Eusebius of Caesarea and The First Christian History"
}, {
  "code": "CLAS43530",
  "title": "Aristotle's Systems"
}, {
  "code": "CLAS43630",
  "title": "Diocletian and His Era: Sources and Narratives"
}, {
  "code": "CLAS43730",
  "title": "Plutarch of Chaeronea: Platonism at the Turn of the Second Century A.D"
}, {
  "code": "CLAS43830",
  "title": "What the Ancients Knew: Science in Greece and Rome"
}, {
  "code": "CLAS43930",
  "title": "Law and Literature in Ancient Greece and Rome"
}, {
  "code": "CLAS44030",
  "title": "Cicero Philosophus"
}, {
  "code": "CLAS44130",
  "title": "Romosexuality: Homosexuality in Latin Literature and its Reception"
}, {
  "code": "CLAS44230",
  "title": "Dreams in the Ancient World"
}, {
  "code": "CLAS44330",
  "title": "Baroque Modes : Classical Excess and its Reception in Literature and the Visual Arts"
}, {
  "code": "CLAS44430",
  "title": "Edessa: \"The Athens of the East\""
}, {
  "code": "CLAS44530",
  "title": "Greek Epigraphy"
}, {
  "code": "CLAS44630",
  "title": "Greeks and the East: 800-100 BCE"
}, {
  "code": "CLAS44730",
  "title": "Independent Research Topic"
}, {
  "code": "CLAS44830",
  "title": "Magic in the Roman World"
}, {
  "code": "CLAS51260",
  "title": "Dissertation"
}, {
  "code": "CLAS5999",
  "title": "Research Program in Classics"
}, {
  "code": "CLASStaffSEM",
  "title": "Staff Research Seminar"
}, {
  "code": "COMB3002",
  "title": "Interdisciplinary Dissertation (40 credits)"
}, {
  "code": "COMP1021",
  "title": "Mathematics for Computer Science"
}, {
  "code": "COMP1051",
  "title": "Computational Thinking"
}, {
  "code": "COMP1071",
  "title": "Computer Systems"
}, {
  "code": "COMP1081",
  "title": "Algorithms and Data Structures"
}, {
  "code": "COMP1101",
  "title": "Programming"
}, {
  "code": "COMP2181",
  "title": "Theory of Computation"
}, {
  "code": "COMP2211",
  "title": "Networks and Systems"
}, {
  "code": "COMP2221",
  "title": "Programming Paradigms"
}, {
  "code": "COMP2231",
  "title": "Software Methodologies"
}, {
  "code": "COMP2252",
  "title": "Software Engineering"
}, {
  "code": "COMP3012",
  "title": "Computer Science Project"
}, {
  "code": "COMP3371",
  "title": "Computing Methodologies III"
}, {
  "code": "COMP3381",
  "title": "Software, Systems and Applications III"
}, {
  "code": "COMP3391",
  "title": "Theoretical Computer Science III"
}, {
  "code": "COMP3402",
  "title": "Contemporary Computer Science III (40 credits)"
}, {
  "code": "COMP3411",
  "title": "Contemporary Computer Science III (20 credits)"
}, {
  "code": "COMP3421",
  "title": "Computer Science Into Schools"
}, {
  "code": "COMP3431",
  "title": "Advanced Computer Systems III"
}, {
  "code": "COMP3986",
  "title": "Computer Science Placement Module"
}, {
  "code": "COMP3996",
  "title": "Study at Overseas University"
}, {
  "code": "COMP4013",
  "title": "Advanced Project"
}, {
  "code": "COMP4031",
  "title": "Computing Methodologies IV"
}, {
  "code": "COMP4042",
  "title": "Contemporary Computer Science IV (40 credits)"
}, {
  "code": "COMP4051",
  "title": "Contemporary Computer Science IV (20 credits)"
}, {
  "code": "COMP4061",
  "title": "Software, Systems and Applications IV"
}, {
  "code": "COMP4071",
  "title": "Theoretical Computer Science IV"
}, {
  "code": "COMP41760",
  "title": "Business Analytics Project"
}, {
  "code": "COMP41815",
  "title": "Introduction to Computer Science"
}, {
  "code": "COMP41915",
  "title": "Data Analytics in Action"
}, {
  "code": "COMP42015",
  "title": "Learning from Data"
}, {
  "code": "COMP42115",
  "title": "Natural Language Analysis"
}, {
  "code": "COMP51915",
  "title": "Professional Skills"
}, {
  "code": "COMP52060",
  "title": "Project"
}, {
  "code": "COMP52130",
  "title": "Core IIB :Advanced Scientific and High Performance Computing"
}, {
  "code": "COMP5999",
  "title": "Research Program in Computer Science"
}, {
  "code": "COMPNEW01",
  "title": "COMPNEW01"
}, {
  "code": "COMPNEW02",
  "title": "COMPNEW02"
}, {
  "code": "COMPNEW03",
  "title": "COMPNEW03"
}, {
  "code": "COMPNEW04",
  "title": "COMPNEW04"
}, {
  "code": "COMPNEW05",
  "title": "COMPNEW05"
}, {
  "code": "COMPSTAFFSEM",
  "title": "Staff Research Seminars"
}, {
  "code": "COMPTEACH",
  "title": "Teaching Workshop"
}, {
  "code": "CSA3996",
  "title": "Combined Studies Abroad"
}, {
  "code": "CSSS3986",
  "title": "Faculty of Social Science and Health Placement Year"
}, {
  "code": "CSSS3996",
  "title": "Combined Studies Abroad"
}, {
  "code": "ECON0000B",
  "title": "MSc Finance - Introduction to Economics"
}, {
  "code": "ECON0000C",
  "title": "MSc Finance - Introduction to Maths and Statistics"
}, {
  "code": "ECON0000G",
  "title": "MSc Finance - Research Methods Data Streaming"
}, {
  "code": "ECON1011",
  "title": "Principles of Economics"
}, {
  "code": "ECON1021",
  "title": "Economic Methods"
}, {
  "code": "ECON1041",
  "title": "Accounting and Finance in Business"
}, {
  "code": "ECON1051",
  "title": "Introduction to Environmental Economics"
}, {
  "code": "ECON1071",
  "title": "The World Economy"
}, {
  "code": "ECON1081",
  "title": "Introduction to the History of Economic Thought"
}, {
  "code": "ECON1091",
  "title": "Introduction to Economic Ethics"
}, {
  "code": "ECON1101",
  "title": "Introduction to Economics"
}, {
  "code": "ECON1111",
  "title": "Introduction to Management Accounting"
}, {
  "code": "ECON1121",
  "title": "The Global Economy"
}, {
  "code": "ECON1131",
  "title": "Foundations of Finance"
}, {
  "code": "ECON1141",
  "title": "Introduction to Financial Accounting"
}, {
  "code": "ECON1151",
  "title": "Quantitative Methods"
}, {
  "code": "ECON1161",
  "title": "Business Environment and Functions"
}, {
  "code": "ECON2011",
  "title": "Economic Principles I: Macroeconomics"
}, {
  "code": "ECON2021",
  "title": "Economic Principles II: Microeconomics"
}, {
  "code": "ECON2061",
  "title": "Economic Data Analysis I"
}, {
  "code": "ECON2071",
  "title": "European Economics"
}, {
  "code": "ECON2081",
  "title": "Business Competition"
}, {
  "code": "ECON2091",
  "title": "Economics of Social Policy"
}, {
  "code": "ECON2101",
  "title": "Financial Economics"
}, {
  "code": "ECON2121",
  "title": "Intermediate Methods for Economics and Finance"
}, {
  "code": "ECON2131",
  "title": "Academic Studies at Pisa"
}, {
  "code": "ECON2141",
  "title": "Behavioural and Experimental Economics"
}, {
  "code": "ECON2151",
  "title": "Financial Markets and Institutions"
}, {
  "code": "ECON2161",
  "title": "Microeconomics for Finance"
}, {
  "code": "ECON2171",
  "title": "Macroeconomics and International Finance"
}, {
  "code": "ECON2181",
  "title": "Introduction to Financial Econometrics"
}, {
  "code": "ECON2191",
  "title": "Corporate Finance"
}, {
  "code": "ECON2201",
  "title": "Introduction to Taxation"
}, {
  "code": "ECON2211",
  "title": "Corporate Financial Reporting"
}, {
  "code": "ECON2231",
  "title": "Principles of Business Law"
}, {
  "code": "ECON2241",
  "title": "Management Accounting"
}, {
  "code": "ECON2251",
  "title": "Auditing and Assurance"
}, {
  "code": "ECON2776",
  "title": "Economics Abroad"
}, {
  "code": "ECON3011",
  "title": "Applied Econometrics"
}, {
  "code": "ECON3012",
  "title": "Dissertation in Economics"
}, {
  "code": "ECON3051",
  "title": "History of Economic Thought"
}, {
  "code": "ECON3061",
  "title": "Industrial Organisation"
}, {
  "code": "ECON3071",
  "title": "International Economics"
}, {
  "code": "ECON3081",
  "title": "Labour Economics"
}, {
  "code": "ECON3111",
  "title": "Monetary Economics"
}, {
  "code": "ECON3161",
  "title": "Environmental Economics and Policy"
}, {
  "code": "ECON3171",
  "title": "Development Economics"
}, {
  "code": "ECON3191",
  "title": "Public Economics"
}, {
  "code": "ECON3201",
  "title": "Advanced Microeconomic Theory"
}, {
  "code": "ECON3211",
  "title": "Advanced Macroeconomic Theory"
}, {
  "code": "ECON3241",
  "title": "Security Investment Analysis"
}, {
  "code": "ECON3251",
  "title": "Financial Theory and Corporate Policy"
}, {
  "code": "ECON3291",
  "title": "Post-Keynesian Economics"
}, {
  "code": "ECON3301",
  "title": "Game Theory and Applications"
}, {
  "code": "ECON3311",
  "title": "Heterodox Economic Theory"
}, {
  "code": "ECON3322",
  "title": "Dissertation in Finance and Accounting"
}, {
  "code": "ECON3331",
  "title": "Islamic Economics and Finance"
}, {
  "code": "ECON3341",
  "title": "Real Estate Finance"
}, {
  "code": "ECON3351",
  "title": "Computational Quantitative Finance"
}, {
  "code": "ECON3361",
  "title": "Behavioural Finance"
}, {
  "code": "ECON3371",
  "title": "Financial Econometrics"
}, {
  "code": "ECON3381",
  "title": "Financial Derivatives and Financial Engineering"
}, {
  "code": "ECON3391",
  "title": "International and Multinational Finance"
}, {
  "code": "ECON3402",
  "title": "Dissertation in Accounting"
}, {
  "code": "ECON3411",
  "title": "Contemporary Issues in Accounting"
}, {
  "code": "ECON3421",
  "title": "Financial Planning and Control"
}, {
  "code": "ECON3431",
  "title": "Tax Planning for Business"
}, {
  "code": "ECON3966",
  "title": "Study Abroad"
}, {
  "code": "ECON3986",
  "title": "Study Abroad"
}, {
  "code": "ECON3996",
  "title": "Placement Year"
}, {
  "code": "ECON40215",
  "title": "Security Analysis"
}, {
  "code": "ECON4025",
  "title": "Research Project"
}, {
  "code": "ECON40315",
  "title": "Financial Risk Management"
}, {
  "code": "ECON40515",
  "title": "Monetary Economics"
}, {
  "code": "ECON40615",
  "title": "Environmental Economics and Policy"
}, {
  "code": "ECON40715",
  "title": "International Financial Asset Pricing"
}, {
  "code": "ECON40815",
  "title": "International Economics"
}, {
  "code": "ECON40915",
  "title": "International Finance"
}, {
  "code": "ECON41015",
  "title": "Portfolio Management"
}, {
  "code": "ECON41115",
  "title": "Public Economics"
}, {
  "code": "ECON41215",
  "title": "MSc Finance - Advanced Financial Theory"
}, {
  "code": "ECON41315",
  "title": "MSc Finance - Corporate Finance"
}, {
  "code": "ECON41415",
  "title": "Derivative Markets"
}, {
  "code": "ECON41515",
  "title": "Econometrics I"
}, {
  "code": "ECON41615",
  "title": "Econometrics II"
}, {
  "code": "ECON41915",
  "title": "Corporate Reporting"
}, {
  "code": "ECON42015",
  "title": "Money and Banking"
}, {
  "code": "ECON42115",
  "title": "Financial Modelling and Business Forecasting"
}, {
  "code": "ECON42215",
  "title": "Corporate Governance"
}, {
  "code": "ECON42315",
  "title": "Market Microstructure"
}, {
  "code": "ECON42415",
  "title": "Mergers and Acquisitions (MSc Finance)"
}, {
  "code": "ECON42515",
  "title": "Behavioural Finance and Economics"
}, {
  "code": "ECON42915",
  "title": "Financial Statement Analysis"
}, {
  "code": "ECON43215",
  "title": "Islamic Accounting"
}, {
  "code": "ECON43315",
  "title": "Auditing and Assurance Services"
}, {
  "code": "ECON43415",
  "title": "Experimental Economics and Finance"
}, {
  "code": "ECON43515",
  "title": "Technology, Innovation and Economic Growth"
}, {
  "code": "ECON43615",
  "title": "Accounting Theory"
}, {
  "code": "ECON43715",
  "title": "Empirical Topics in Islamic Finance and Economics"
}, {
  "code": "ECON43760",
  "title": "Dissertation with Research Methods"
}, {
  "code": "ECON43915",
  "title": "Public Choice"
}, {
  "code": "ECON44015",
  "title": "Environmental Valuation"
}, {
  "code": "ECON44115",
  "title": "Game Theory"
}, {
  "code": "ECON44215",
  "title": "Industrial Organisation"
}, {
  "code": "ECON44315",
  "title": "Labour Economics"
}, {
  "code": "ECON44415",
  "title": "Development Economics"
}, {
  "code": "ECON44615",
  "title": "Natural Resource Management"
}, {
  "code": "ECON44715",
  "title": "Advanced Microeconomics"
}, {
  "code": "ECON44815",
  "title": "Advanced Macroeconomics"
}, {
  "code": "ECON45015",
  "title": "Advanced Financial Theory (Taught)"
}, {
  "code": "ECON45515",
  "title": "Financial Modelling and Business Forecasting (Online)"
}, {
  "code": "ECON45615",
  "title": "Financial Modelling and Business Forecasting (Taught)"
}, {
  "code": "ECON45815",
  "title": "Financial Risk Management (Taught)"
}, {
  "code": "ECON46315",
  "title": "Security Analysis (Taught)"
}, {
  "code": "ECON46615",
  "title": "MSc Islamic Finance - Islamic Capital Markets"
}, {
  "code": "ECON46715",
  "title": "MSc Islamic Finance - Risk Management Issues in Islamic Finance"
}, {
  "code": "ECON46815",
  "title": "Islamic Management"
}, {
  "code": "ECON46960",
  "title": "Dissertation (MSc Finance)"
}, {
  "code": "ECON47060",
  "title": "Dissertation (Economics)"
}, {
  "code": "ECON47115",
  "title": "MSc Islamic Finance - Islamic Banking and Finance"
}, {
  "code": "ECON47215",
  "title": "Islamic Law and Financial Transactions"
}, {
  "code": "ECON47315",
  "title": "Islamic Political Economy"
}, {
  "code": "ECON47415",
  "title": "Empirical Topics in Finance"
}, {
  "code": "ECON47515",
  "title": "Advanced Research Methods - Part I (for Accounting, Economics, Finance and Islamic Finance programmes)"
}, {
  "code": "ECON47615",
  "title": "Advanced Research Methods - Part II (for Accounting, Economics, Finance and Islamic Finance programmes)"
}, {
  "code": "ECON47715",
  "title": "Microeconometrics"
}, {
  "code": "ECON47815",
  "title": "MSc Finance - Econometric Methods"
}, {
  "code": "ECON47960",
  "title": "Dissertation (International) (Msc Finance)"
}, {
  "code": "ECON48060",
  "title": "Dissertation (International) (Msc Economics)"
}, {
  "code": "ECON48160",
  "title": "Dissertation (International) (MSc Accounting)"
}, {
  "code": "ECON48260",
  "title": "Dissertation (MSc Accounting)"
}, {
  "code": "ECON48315",
  "title": "Accounting Theory"
}, {
  "code": "ECON48415",
  "title": "Research Methods and Methodology in Accounting"
}, {
  "code": "ECON48515",
  "title": "Financial Planning and Control"
}, {
  "code": "ECON48615",
  "title": "Contemporary Issues in Accounting and Taxation"
}, {
  "code": "ECON5999",
  "title": "Research Program in Economics"
}, {
  "code": "ECONNEW02PG",
  "title": "New MSc - Emerging Markets in Finance"
}, {
  "code": "ECONPGWriting",
  "title": "MSc Economics and MSc  Finance - Referencing and Plagiarism Session"
}, {
  "code": "ECOS0000A",
  "title": "BSc Accounting - Student Induction (Year 1 )"
}, {
  "code": "ECOS0000B",
  "title": "BSc Accounting  - Student Induction (Years 2 and 3)"
}, {
  "code": "ECOS0000C",
  "title": "BSc Accounting - Study Week Assessment Consultation"
}, {
  "code": "ECOS0000F",
  "title": "BSc Accounting - Feedback Session (Year 1)"
}, {
  "code": "ECOS0000G",
  "title": "BSc Accounting - Feedback & Dissertation Sessions  (Years 2 and 3)"
}, {
  "code": "ECOS0000H",
  "title": "MSc Accounting - Introduction to Accounting"
}, {
  "code": "ECOS0000I",
  "title": "BSc Accounting - Academic Adviser Sessions"
}, {
  "code": "ECOS0000Q",
  "title": "MSc Accounting - Careers Sessions"
}, {
  "code": "ECOS1261",
  "title": "Law"
}, {
  "code": "ECOS1271",
  "title": "Management Information"
}, {
  "code": "ECOS2191",
  "title": "Financial Management"
}, {
  "code": "ECOS2221",
  "title": "Business Planning: Taxation"
}, {
  "code": "ECOS2271",
  "title": "Financial Accounting and Reporting"
}, {
  "code": "ECOS2281",
  "title": "Tax Compliance"
}, {
  "code": "ECOS2291",
  "title": "Financial Management"
}, {
  "code": "ECOS2301",
  "title": "Business Planning: Tax"
}, {
  "code": "ECOS40115",
  "title": "Accounting Theory (MSc Accounting)"
}, {
  "code": "ECOS40315",
  "title": "Contemporary Issues in Accounting and Taxation"
}, {
  "code": "ECOS40615",
  "title": "Financial Planning and Control (MSc Accounting)"
}, {
  "code": "ECOS40815",
  "title": "Research Methods and Methodology in Accounting"
}, {
  "code": "ECOSAcadWriting",
  "title": "BSc Accounting - Academic Writing Skills"
}, {
  "code": "ECOSPL101",
  "title": "Accreditation of Prior Learning in Economics"
}, {
  "code": "EDUC1011",
  "title": "Beauty and the Beast: Key Themes in the Artistic Culture of Europe"
}, {
  "code": "EDUC1441",
  "title": "Introduction to Modern Art: Its Meanings and Histories"
}, {
  "code": "EDUC1451",
  "title": "The History of Education from 1800 to the Present Day"
}, {
  "code": "EDUC1461",
  "title": "The Context of Education"
}, {
  "code": "EDUC1471",
  "title": "Learning and Teaching"
}, {
  "code": "EDUC1491",
  "title": "Gallery 101: Designing the Art Exhibition"
}, {
  "code": "EDUC2191",
  "title": "Philosophy of Social Science"
}, {
  "code": "EDUC2281",
  "title": "Education Placement"
}, {
  "code": "EDUC2291",
  "title": "Key Issues and Dilemmas in The UK Education System"
}, {
  "code": "EDUC2301",
  "title": "Educational Research Methods"
}, {
  "code": "EDUC2321",
  "title": "Learning in the Early Years"
}, {
  "code": "EDUC2331",
  "title": "Art and Design in Belle Epoque France 1870-1900"
}, {
  "code": "EDUC2351",
  "title": "Higher Education: Issues of Exclusion and Inclusion"
}, {
  "code": "EDUC2361",
  "title": "Identity, Culture and Education"
}, {
  "code": "EDUC2371",
  "title": "Cow on the Roof: The Visual Culture of Europe 1919-1939"
}, {
  "code": "EDUC2381",
  "title": "Harry Potter and the Age of Illusion"
}, {
  "code": "EDUC2391",
  "title": "Objects of Desire: Oriental Art and its Histories"
}, {
  "code": "EDUC2401",
  "title": "Constructing Childhood and Youth"
}, {
  "code": "EDUC30120",
  "title": "Self Directed Study"
}, {
  "code": "EDUC30130",
  "title": "Teaching and Learning  in the Curriculum - Generic Issues inSchool-Based Education"
}, {
  "code": "EDUC30140",
  "title": "Understanding Secondary Classrooms (English)"
}, {
  "code": "EDUC3021",
  "title": "PGCE Primary (English)"
}, {
  "code": "EDUC30230",
  "title": "Professional Issues in School-based Education (Int)"
}, {
  "code": "EDUC30240",
  "title": "Understanding Secondary Classrooms (Geography)"
}, {
  "code": "EDUC3031",
  "title": "PGCE Primary (Mathematics)"
}, {
  "code": "EDUC30340",
  "title": "Understanding Secondary Classrooms (History)"
}, {
  "code": "EDUC3041",
  "title": "PGCE Primary (Science)"
}, {
  "code": "EDUC30440",
  "title": "Understanding Secondary Classrooms (Mathematics)"
}, {
  "code": "EDUC3052",
  "title": "Foundation Studies"
}, {
  "code": "EDUC30540",
  "title": "Understanding Secondary Classrooms (PE)"
}, {
  "code": "EDUC30640",
  "title": "Understanding Secondary Classrooms (Humanities)"
}, {
  "code": "EDUC30740",
  "title": "Understanding Secondary Classrooms (Science)"
}, {
  "code": "EDUC3081",
  "title": "New Directions in Social Science"
}, {
  "code": "EDUC30840",
  "title": "Understanding Secondary Classrooms (Physics with Maths)"
}, {
  "code": "EDUC30940",
  "title": "Understanding Secondary Classrooms (Chemistry)"
}, {
  "code": "EDUC31040",
  "title": "Understanding Secondary Classrooms (MFL)"
}, {
  "code": "EDUC31140",
  "title": "Understanding Secondary Classrooms (Music)"
}, {
  "code": "EDUC31730",
  "title": "Professional Issues in School Based Education"
}, {
  "code": "EDUC3182",
  "title": "Double Dissertation in Theory and Philosophy of Social Science"
}, {
  "code": "EDUC3191",
  "title": "Education in a Global Age"
}, {
  "code": "EDUC3221",
  "title": "Political Sociology of Education"
}, {
  "code": "EDUC3261",
  "title": "The 'isms' of Art in Early 20th Century Europe: Critical Approaches to Art Theory and Practice"
}, {
  "code": "EDUC3271",
  "title": "Responding to Special Educational Needs"
}, {
  "code": "EDUC3281",
  "title": "The Limits of Educational Assessment"
}, {
  "code": "EDUC3291",
  "title": "Citizenship Education"
}, {
  "code": "EDUC3301",
  "title": "Single Dissertation in History of Art"
}, {
  "code": "EDUC3302",
  "title": "Double Dissertation in the History of Art"
}, {
  "code": "EDUC3311",
  "title": "The Work of Art: Professional Skills and Work Placementin the Visual Arts"
}, {
  "code": "EDUC3322",
  "title": "Double Dissertation: Disciplinary Contexts of Education"
}, {
  "code": "EDUC3983",
  "title": "Education Placement Module"
}, {
  "code": "EDUC3986",
  "title": "Educ Studies Placement Abroad"
}, {
  "code": "EDUC3996",
  "title": "Education Studies Year Abroad"
}, {
  "code": "EDUC40000",
  "title": "QTS Skills"
}, {
  "code": "EDUC40030",
  "title": "Teaching and Learning in the Curriculum - Generic Issues in School-Based Education"
}, {
  "code": "EDUC40115",
  "title": "Foundations of Learning and Teaching"
}, {
  "code": "EDUC40120",
  "title": "Self Directed Study"
}, {
  "code": "EDUC40130",
  "title": "Assessment"
}, {
  "code": "EDUC40160",
  "title": "MSc Dissertation"
}, {
  "code": "EDUC40220",
  "title": "Fundamentals of Learning and Teaching in Higher Education"
}, {
  "code": "EDUC40230",
  "title": "Curriculum Analysis"
}, {
  "code": "EDUC40320",
  "title": "Learning and Teaching in Higher Education"
}, {
  "code": "EDUC40330",
  "title": "Psychology of The Learner"
}, {
  "code": "EDUC40420",
  "title": "Student Learning As A Foundation for Reflexive Practice"
}, {
  "code": "EDUC40430",
  "title": "Special Educational Needs and Inclusion: Rhetoric or Reality?"
}, {
  "code": "EDUC40520",
  "title": "A discipline-specific project on learning and teaching"
}, {
  "code": "EDUC40530",
  "title": "Intercultural and International Education"
}, {
  "code": "EDUC40620",
  "title": "Supervising and examining postgraduate research students"
}, {
  "code": "EDUC40630",
  "title": "Education Policy and Evaluation"
}, {
  "code": "EDUC40820",
  "title": "Professional Issues in School-based Education (I)"
}, {
  "code": "EDUC40830",
  "title": "Arts in Education"
}, {
  "code": "EDUC41230",
  "title": "Leading Continual Professional Development (Cpd)"
}, {
  "code": "EDUC41420",
  "title": "Developing Funded Research"
}, {
  "code": "EDUC41730",
  "title": "Intercultural Communication"
}, {
  "code": "EDUC41830",
  "title": "Theories of Identity and Globalisation"
}, {
  "code": "EDUC41930",
  "title": "Engaging with Interpretive Research Design"
}, {
  "code": "EDUC42030",
  "title": "Analysing and Evaluation Educational Research"
}, {
  "code": "EDUC42130",
  "title": "Thesis Proposal"
}, {
  "code": "EDUC42230",
  "title": "Teaching and Learning in Science"
}, {
  "code": "EDUC42330",
  "title": "Standardised Tests and Exams"
}, {
  "code": "EDUC42430",
  "title": "Classroom Assessment"
}, {
  "code": "EDUC42530",
  "title": "Judgement-based Assessment"
}, {
  "code": "EDUC42630",
  "title": "Research Into and Using Assessments"
}, {
  "code": "EDUC42730",
  "title": "The Strategic Leadership of Continuing Professional Development (Cpd)"
}, {
  "code": "EDUC43230",
  "title": "Self Directed Study - Subject Specific Issues in School-Based Education"
}, {
  "code": "EDUC43330",
  "title": "Teaching & Learning In the Curriculum - Generic Issues inSchool Based Education (Int)"
}, {
  "code": "EDUC43400",
  "title": "Teaching Practice"
}, {
  "code": "EDUC43430",
  "title": "Self Directed Study - Subject Specific Issues inSchool Based Education (Int)"
}, {
  "code": "EDUC43530",
  "title": "Enhancing Teaching and Learning through Fostering Productive Thought"
}, {
  "code": "EDUC43630",
  "title": "Representation and Reasoning in Mathematics"
}, {
  "code": "EDUC43730",
  "title": "Chemistry As An Additional Subject Specialism (Cass)"
}, {
  "code": "EDUC43830",
  "title": "Developing Understanding in Mathematics"
}, {
  "code": "EDUC43930",
  "title": "Physics As An Additional Subject Specialism (Pass)"
}, {
  "code": "EDUC44030",
  "title": "Design and Methods in Education Research"
}, {
  "code": "EDUC44130",
  "title": "Research Methods in Education (Distance Learning)"
}, {
  "code": "EDUC44230",
  "title": "Improving Computer Education"
}, {
  "code": "EDUC44330",
  "title": "Classroom Assessment (Distance Learning)"
}, {
  "code": "EDUC44430",
  "title": "Judgement-based Assessment (Distance Learning)"
}, {
  "code": "EDUC44560",
  "title": "Msc Dissertation (Distance Learning)"
}, {
  "code": "EDUC44630",
  "title": "Standardised Tests and Exams (Distance Learning)"
}, {
  "code": "EDUC45130",
  "title": "Cpd Chemistry As An Additional Subject Specialism"
}, {
  "code": "EDUC45230",
  "title": "Cpd Physics As An Additional Subject Specialism"
}, {
  "code": "EDUC45330",
  "title": "Leading Research"
}, {
  "code": "EDUC45430",
  "title": "Designing Higher Education Enquiries"
}, {
  "code": "EDUC45530",
  "title": "Leadership of Learning and Teaching"
}, {
  "code": "EDUC45630",
  "title": "Design and Methods in Education Research (International)"
}, {
  "code": "EDUC45730",
  "title": "Critical Perspectives in Education"
}, {
  "code": "EDUC45830",
  "title": "Education Enquiry"
}, {
  "code": "EDUC45960",
  "title": "Dissertation"
}, {
  "code": "EDUC46030",
  "title": "The Case for Higher Education :  From Precarity to Empowerment"
}, {
  "code": "EDUC46130",
  "title": "International Development and Education in a Global World"
}, {
  "code": "EDUC46220",
  "title": "Introduction to Academic Practice"
}, {
  "code": "EDUC53430",
  "title": "Teaching and Learning in Higher Education - Discipline Based Assignment"
}, {
  "code": "EDUC56660",
  "title": "Postgraduate Dissertation"
}, {
  "code": "EDUC59030",
  "title": "Thesis Proposal"
}, {
  "code": "EDUC59215",
  "title": "Experiments in Education"
}, {
  "code": "EDUC59230",
  "title": "Leading Change in Education Organisations"
}, {
  "code": "EDUC59330",
  "title": "21st Century Technology: Implications for Teaching and Learning"
}, {
  "code": "EDUC59490",
  "title": "EdD Thesis"
}, {
  "code": "EDUC59560",
  "title": "Learning and Teaching in Higher Education"
}, {
  "code": "EDUC59630",
  "title": "Fundamentals of Learning and Teaching in Higher Education"
}, {
  "code": "EDUC59730",
  "title": "Reflective Learning and Teaching in Higher Education"
}, {
  "code": "EDUC5999",
  "title": "Research Program in Education"
}, {
  "code": "EDUCITEAdmissions",
  "title": "EDUCITEAdmissions"
}, {
  "code": "EDUCMAEdSupport",
  "title": "MA Ed Support Tutorials"
}, {
  "code": "EDUCNEW01",
  "title": "EDUCNEW01"
}, {
  "code": "EDUCNEW02",
  "title": "EDUCNEW02"
}, {
  "code": "EDUCNEW03",
  "title": "EDUCNEW03"
}, {
  "code": "EDUCNEW04",
  "title": "EDUCNEW04"
}, {
  "code": "EDUCPGCE/Primary",
  "title": "EDUCPGCEPrimary"
}, {
  "code": "EDUCPGCE/Secondary",
  "title": "EDUCPGCESecondary"
}, {
  "code": "EDUCPPY/QTS",
  "title": "PGCE Primary QTS lecture series"
}, {
  "code": "EDUCQTS",
  "title": "PGCE Secondary Professional Issues Lectures"
}, {
  "code": "EDUCTHEORY",
  "title": "Shotton Hall Induction"
}, {
  "code": "EDUS1431",
  "title": "Computing 1"
}, {
  "code": "EDUS1581",
  "title": "Development and Learning in the Very Early Years"
}, {
  "code": "EDUS1591",
  "title": "Science for Primary Teaching 1"
}, {
  "code": "EDUS1601",
  "title": "Humanities 1"
}, {
  "code": "EDUS1611",
  "title": "Mathematics for Primary Teaching 1"
}, {
  "code": "EDUS1621",
  "title": "Arts and Humanities 1"
}, {
  "code": "EDUS1631",
  "title": "English for Primary Teaching 1"
}, {
  "code": "EDUS1661",
  "title": "School Experience"
}, {
  "code": "EDUS1671",
  "title": "Modern Foreign Languages 1"
}, {
  "code": "EDUS1681",
  "title": "Professional and Academic Study Skills"
}, {
  "code": "EDUS2401",
  "title": "Teaching and Learning in the Primary School"
}, {
  "code": "EDUS2451",
  "title": "Computing 2"
}, {
  "code": "EDUS2481",
  "title": "Humanities 2"
}, {
  "code": "EDUS2501",
  "title": "Research Methods in Education"
}, {
  "code": "EDUS2511",
  "title": "Science for Primary Teaching 2"
}, {
  "code": "EDUS2521",
  "title": "Arts and Humanities 2"
}, {
  "code": "EDUS2531",
  "title": "Mathematics for Primary Teaching 2"
}, {
  "code": "EDUS2541",
  "title": "English for Primary Teaching 2"
}, {
  "code": "EDUS2681",
  "title": "Modern Foreign Languages 2"
}, {
  "code": "EDUS3332",
  "title": "Dissertation"
}, {
  "code": "EDUS3341",
  "title": "Science for Primary Teaching 3"
}, {
  "code": "EDUS3351",
  "title": "Science for Primary Teaching 4: Science for Specialists"
}, {
  "code": "EDUS3361",
  "title": "English for Primary Teaching 4: English For Specialists"
}, {
  "code": "EDUS3371",
  "title": "English for Primary Teaching 3"
}, {
  "code": "EDUS3381",
  "title": "Mathematics for Primary Teaching 3"
}, {
  "code": "EDUS3391",
  "title": "Maths for Primary Teaching 4: Mathematics for specialists"
}, {
  "code": "EDUS3411",
  "title": "Computing 3"
}, {
  "code": "EDUS3996",
  "title": "Education Studies year Abroad"
}, {
  "code": "EDUSQTS1",
  "title": "QTS Lectures for 1st Year BA Primary Ed"
}, {
  "code": "EDUSQTS3",
  "title": "QTS Lectures for 3rd Year BA Primary Ed"
}, {
  "code": "EDUSX100/Yr1",
  "title": "BA Primary Education Year 1 Teaching Practice"
}, {
  "code": "EDUSX100/Yr2",
  "title": "BA Primary Education Year 2 Teaching Practice"
}, {
  "code": "EDUSX100/Yr3",
  "title": "BA Primary Education Year 3 Teaching Practice"
}, {
  "code": "ENGI1091",
  "title": "Solid Mechanics and Structures 1"
}, {
  "code": "ENGI1111",
  "title": "Thermodynamics & Fluid Mechanics 1"
}, {
  "code": "ENGI1131",
  "title": "Electromagnetism and Manufacture"
}, {
  "code": "ENGI1141",
  "title": "Electronic Measurement"
}, {
  "code": "ENGI1151",
  "title": "Computational Tools for Engineers and Scientists"
}, {
  "code": "ENGI2181",
  "title": "Electronics 2"
}, {
  "code": "ENGI2191",
  "title": "Electrical Engineering 2"
}, {
  "code": "ENGI2201",
  "title": "Engineering Design 2"
}, {
  "code": "ENGI2211",
  "title": "Engineering Mathematics 2"
}, {
  "code": "ENGI2221",
  "title": "Solid Mechanics and Structures 2"
}, {
  "code": "ENGI2231",
  "title": "Thermodynamics and Fluid Mechanics 2"
}, {
  "code": "ENGI30120",
  "title": "Electronics and Communications"
}, {
  "code": "ENGI30320",
  "title": "Electrical Engineering 3"
}, {
  "code": "ENGI30420",
  "title": "Thermodynamics and Fluid Mechanics 3"
}, {
  "code": "ENGI30520",
  "title": "Solid Mechanics 3"
}, {
  "code": "ENGI30620",
  "title": "Environmental Engineering 3"
}, {
  "code": "ENGI30720",
  "title": "Structures and Geomatics 3"
}, {
  "code": "ENGI3262",
  "title": "BEng Engineering Project"
}, {
  "code": "ENGI3291",
  "title": "Thermodynamics and Fluid Mechanics 3"
}, {
  "code": "ENGI3301",
  "title": "Structures and Geomatics 3"
}, {
  "code": "ENGI3311",
  "title": "Geotechnics 3"
}, {
  "code": "ENGI3331",
  "title": "Semiconductor Physics and Devices 3"
}, {
  "code": "ENGI3341",
  "title": "Environmental Engineering 3"
}, {
  "code": "ENGI3351",
  "title": "Engineering Design 3"
}, {
  "code": "ENGI3371",
  "title": "Electrical Engineering 3"
}, {
  "code": "ENGI3391",
  "title": "Control and Signal Processing 3"
}, {
  "code": "ENGI3401",
  "title": "Civil Design 3"
}, {
  "code": "ENGI3411",
  "title": "Solid Mechanics 3"
}, {
  "code": "ENGI3451",
  "title": "Electronics and Communications 3"
}, {
  "code": "ENGI3461",
  "title": "Advanced Computer Systems and Digital Electronics 3"
}, {
  "code": "ENGI3471",
  "title": "Materials 3"
}, {
  "code": "ENGI3481",
  "title": "Power Semiconductor Devices"
}, {
  "code": "ENGI3996",
  "title": "Study at an Overseas University"
}, {
  "code": "ENGI40190",
  "title": "Research and Development Project"
}, {
  "code": "ENGI40420",
  "title": "DSP and Microwave Engineering"
}, {
  "code": "ENGI40520",
  "title": "Radio Communications"
}, {
  "code": "ENGI40720",
  "title": "Communications Systems"
}, {
  "code": "ENGI4093",
  "title": "M Eng Research and Development Project"
}, {
  "code": "ENGI41030",
  "title": "Group Design Project"
}, {
  "code": "ENGI4112",
  "title": "M.Eng Technical Project"
}, {
  "code": "ENGI4121",
  "title": "Communications Systems"
}, {
  "code": "ENGI4131",
  "title": "Advanced Semiconductor Devices"
}, {
  "code": "ENGI4141",
  "title": "Structures, Highways and Construction 4"
}, {
  "code": "ENGI4151",
  "title": "Advanced Geotechnical Engineering and Hydrology"
}, {
  "code": "ENGI42090",
  "title": "Research and Development Project"
}, {
  "code": "ENGI4211",
  "title": "Solid Mechanics 4"
}, {
  "code": "ENGI4221",
  "title": "Fluid Mechanics and Turbomachinery"
}, {
  "code": "ENGI4231",
  "title": "Aeromechanics"
}, {
  "code": "ENGI4251",
  "title": "DSP and Microwave Engineering"
}, {
  "code": "ENGI4271",
  "title": "Energy Conversion and Delivery"
}, {
  "code": "ENGI4281",
  "title": "Low Carbon Technologies"
}, {
  "code": "ENGI4321",
  "title": "L4 Engineering into Schools"
}, {
  "code": "ENGI44020",
  "title": "Energy Conversion and Delivery"
}, {
  "code": "ENGI44120",
  "title": "Low Carbon Technologies"
}, {
  "code": "ENGI44220",
  "title": "Advanced Geotechnical Engineering and Hydrology"
}, {
  "code": "ENGI44320",
  "title": "Solid Mechanics 4"
}, {
  "code": "ENGI44420",
  "title": "Fluid Mechanics and Turbomachinery"
}, {
  "code": "ENGI44520",
  "title": "Structures, Highways and Construction 4"
}, {
  "code": "ENGI44630",
  "title": "MSc Civil Design"
}, {
  "code": "ENGI5999",
  "title": "Research Program in Engineering"
}, {
  "code": "ENGINEW03",
  "title": "ENGINEW03"
}, {
  "code": "ENGINEW04",
  "title": "ENGINEW04"
}, {
  "code": "ENGINEW05",
  "title": "ENGINEW05"
}, {
  "code": "ENGIPRACL3",
  "title": "Level 3 Practicals"
}, {
  "code": "ENGITEACH",
  "title": "ENGITEACH"
}, {
  "code": "ENGL1011",
  "title": "Introduction to Drama"
}, {
  "code": "ENGL1021",
  "title": "English: Language, Use, Theory"
}, {
  "code": "ENGL1031",
  "title": "Classical and Biblical Backgrounds to English Literature"
}, {
  "code": "ENGL1041",
  "title": "Myth and Epic of the North"
}, {
  "code": "ENGL1051",
  "title": "Romance and the Literature of Chivalry"
}, {
  "code": "ENGL1061",
  "title": "Introduction to The Novel"
}, {
  "code": "ENGL1071",
  "title": "Introduction to Poetry"
}, {
  "code": "ENGL2011",
  "title": "Theory and Practice of Literary Criticism"
}, {
  "code": "ENGL2021",
  "title": "Shakespeare"
}, {
  "code": "ENGL2041",
  "title": "Renaissance Literature Level 2"
}, {
  "code": "ENGL2071",
  "title": "Victorian Literature"
}, {
  "code": "ENGL2081",
  "title": "Literature of the Modern Period"
}, {
  "code": "ENGL2091",
  "title": "Old English Level 2"
}, {
  "code": "ENGL2101",
  "title": "Old Norse Level 2"
}, {
  "code": "ENGL2111",
  "title": "Old French Level 2"
}, {
  "code": "ENGL2121",
  "title": "Chaucer"
}, {
  "code": "ENGL2141",
  "title": "American Poetry"
}, {
  "code": "ENGL2151",
  "title": "The Literature of Emotion: 1740-1814"
}, {
  "code": "ENGL2181",
  "title": "The Short Story"
}, {
  "code": "ENGL2191",
  "title": "Modern Poetry"
}, {
  "code": "ENGL2211",
  "title": "Chaucer"
}, {
  "code": "ENGL2291",
  "title": "Fin-de-siecle Fiction"
}, {
  "code": "ENGL2321",
  "title": "Irish Poetry Since Yeats"
}, {
  "code": "ENGL2371",
  "title": "Germanic Myth and Legend"
}, {
  "code": "ENGL2381",
  "title": "Arthurian Literature"
}, {
  "code": "ENGL2421",
  "title": "The Brontes"
}, {
  "code": "ENGL2471",
  "title": "George Eliot: Novelist of Ideas (Special Topic)"
}, {
  "code": "ENGL2501",
  "title": "The Australian Legend, 1890s - 1990s"
}, {
  "code": "ENGL2521",
  "title": "Toni Morrison: Texts and Contexts"
}, {
  "code": "ENGL2531",
  "title": "Literature in England and Wales, 1066-1300"
}, {
  "code": "ENGL2551",
  "title": "Landscape and 'the Condition-of-England'"
}, {
  "code": "ENGL2561",
  "title": "The Domestic Object: Home and Identity in Edwardian and Modern Fiction"
}, {
  "code": "ENGL2601",
  "title": "Literature under Charles 1 and Cromwell"
}, {
  "code": "ENGL2611",
  "title": "John Milton (1608-74)"
}, {
  "code": "ENGL2621",
  "title": "Modern Literature and the British Secret State"
}, {
  "code": "ENGL2641",
  "title": "Poetry and Poetics"
}, {
  "code": "ENGL2651",
  "title": "Literature of the Second World War"
}, {
  "code": "ENGL2691",
  "title": "Evelyn Waugh"
}, {
  "code": "ENGL2701",
  "title": "English Plays before Shakespeare"
}, {
  "code": "ENGL2711",
  "title": "Shakespeare's Problem Plays"
}, {
  "code": "ENGL2751",
  "title": "Shakespeare's History Plays"
}, {
  "code": "ENGL2761",
  "title": "Jane Austen"
}, {
  "code": "ENGL2771",
  "title": "Contemporary US Fiction and the Question of Genre"
}, {
  "code": "ENGL2781",
  "title": "Writing Women: Gendering Literature, c.800-1600"
}, {
  "code": "ENGL2791",
  "title": "Romantic Plays and Players"
}, {
  "code": "ENGL2961",
  "title": "Erasmus Exchanges Module 1"
}, {
  "code": "ENGL2971",
  "title": "Erasmus Exchanges Module 2"
}, {
  "code": "ENGL2981",
  "title": "Iceland Erasmus Exchange Module 1"
}, {
  "code": "ENGL3051",
  "title": "Restoration and Eighteenth-century Literature"
}, {
  "code": "ENGL3061",
  "title": "Literature of the Romantic Period"
}, {
  "code": "ENGL3091",
  "title": "Old English Level 3"
}, {
  "code": "ENGL3101",
  "title": "Old Norse Level 3"
}, {
  "code": "ENGL3111",
  "title": "Old French Level 3"
}, {
  "code": "ENGL3131",
  "title": "American Fiction"
}, {
  "code": "ENGL3162",
  "title": "40-credit dissertation in English"
}, {
  "code": "ENGL3171",
  "title": "Writing Prose Fiction"
}, {
  "code": "ENGL3181",
  "title": "Literature (1900 to present), Cinema and Neuroscience"
}, {
  "code": "ENGL3191",
  "title": "Shakespeare's Problem Plays"
}, {
  "code": "ENGL3201",
  "title": "W B Yeats"
}, {
  "code": "ENGL3221",
  "title": "U.S. Cold War Literature and Culture"
}, {
  "code": "ENGL3231",
  "title": "Shakespeare on Film (Special Topic)"
}, {
  "code": "ENGL3241",
  "title": "Writing Mountains in the Early Twentieth Century"
}, {
  "code": "ENGL3261",
  "title": "A Society of Equals?: Literature, Culture and Equality"
}, {
  "code": "ENGL3271",
  "title": "Creative Writing Poetry"
}, {
  "code": "ENGL3591",
  "title": "Post-War Fiction and Poetry"
}, {
  "code": "ENGL3601",
  "title": "Seamus Heaney"
}, {
  "code": "ENGL3611",
  "title": "Keats and Shelley"
}, {
  "code": "ENGL3621",
  "title": "Jewish American Fiction"
}, {
  "code": "ENGL3631",
  "title": "The Campus Novel"
}, {
  "code": "ENGL3641",
  "title": "Ballads and Popular Romance"
}, {
  "code": "ENGL3651",
  "title": "Science and the Literary Imagination, 1850-1900"
}, {
  "code": "ENGL3661",
  "title": "Medieval Literature"
}, {
  "code": "ENGL3671",
  "title": "Contemporary Short Fiction: Towards an IntersectionalWriting of the Present"
}, {
  "code": "ENGL3681",
  "title": "Renaissance Sensations: Literature, Science, and theSupernatural"
}, {
  "code": "ENGL3691",
  "title": "Nonsense Literature"
}, {
  "code": "ENGL3701",
  "title": "Reading Joyce's Ulysses"
}, {
  "code": "ENGL3711",
  "title": "Mind and Narrative"
}, {
  "code": "ENGL3721",
  "title": "Resistance in South Asian Postcolonial Literature"
}, {
  "code": "ENGL3731",
  "title": "Paradise Lost as Science Fiction"
}, {
  "code": "ENGL3741",
  "title": "The Politics of Style: From Close Reading to \"WorldLiterature\""
}, {
  "code": "ENGL3983",
  "title": "English Placement Module"
}, {
  "code": "ENGL3993",
  "title": "English Literature Study Abroad"
}, {
  "code": "ENGL3996",
  "title": "English Literature Study Abroad"
}, {
  "code": "ENGL40230",
  "title": "Twentieth-Century Jewish American Literature"
}, {
  "code": "ENGL40430",
  "title": "The Literatures of Slavery"
}, {
  "code": "ENGL40530",
  "title": "Elegy: from John Milton to Seamus Heaney"
}, {
  "code": "ENGL40730",
  "title": "Women in Victorian Poetry and Painting"
}, {
  "code": "ENGL40830",
  "title": "The Writing of Poetry"
}, {
  "code": "ENGL40930",
  "title": "Reflections on Revolution, 1789-1922"
}, {
  "code": "ENGL41030",
  "title": "James Joyce and The Limits of Literature"
}, {
  "code": "ENGL41130",
  "title": "Middle English Manuscripts and Text"
}, {
  "code": "ENGL41230",
  "title": "The Mode of Address: Writers in Peformance in Victorian Britain"
}, {
  "code": "ENGL41330",
  "title": "Warrior Poets in Heroic Societies"
}, {
  "code": "ENGL41430",
  "title": "Thomas Pynchon"
}, {
  "code": "ENGL41730",
  "title": "Romantic Forms of Grief"
}, {
  "code": "ENGL41830",
  "title": "Issues in Medieval and Renaissance Studies"
}, {
  "code": "ENGL41930",
  "title": "Women and the Novel in the Eighteenth Century"
}, {
  "code": "ENGL42030",
  "title": "Representing the Self: from Sophocles to the Sopranos"
}, {
  "code": "ENGL42130",
  "title": "Shakespeare in Context"
}, {
  "code": "ENGL42230",
  "title": "Literature of the Supernatural"
}, {
  "code": "ENGL42430",
  "title": "Post War British Drama"
}, {
  "code": "ENGL42530",
  "title": "John Milton: Life, Work and Influence"
}, {
  "code": "ENGL42730",
  "title": "The Contemporary US Novel"
}, {
  "code": "ENGL42830",
  "title": "Theory of the Novel"
}, {
  "code": "ENGL43030",
  "title": "Twentieth-Century Satire"
}, {
  "code": "ENGL43130",
  "title": "Thinking with Things in Victorian Literature"
}, {
  "code": "ENGL43330",
  "title": "Reading as a Writer"
}, {
  "code": "ENGL43430",
  "title": "Lyric Poetry of the English Renaissance and Reformation"
}, {
  "code": "ENGL43530",
  "title": "Modernism and Touch"
}, {
  "code": "ENGL43630",
  "title": "Blood and Soil: Regionalism and Contemporary US CrimeNarrative"
}, {
  "code": "ENGL43730",
  "title": "Creative Writing Poetry"
}, {
  "code": "ENGL43830",
  "title": "Creative Writing Prose Fiction"
}, {
  "code": "ENGL43930",
  "title": "The Word in the World"
}, {
  "code": "ENGL44030",
  "title": "Reading as a Writer: the Workshop"
}, {
  "code": "ENGL44160",
  "title": "Research Project"
}, {
  "code": "ENGL44230",
  "title": "Short Fiction Today"
}, {
  "code": "ENGL44330",
  "title": "T S Eliot"
}, {
  "code": "ENGL44430",
  "title": "Romanticism and the Forms of Romance"
}, {
  "code": "ENGL44530",
  "title": "Shame and Modern Writing"
}, {
  "code": "ENGL44630",
  "title": "Romantic and Victorian Labouring-Class Poetry"
}, {
  "code": "ENGL44790",
  "title": "Dissertation"
}, {
  "code": "ENGL51060",
  "title": "Dissertation"
}, {
  "code": "ENGL52230",
  "title": "Second-Generation Romantic Poetry"
}, {
  "code": "ENGL52730",
  "title": "Modern Poetry"
}, {
  "code": "ENGL53030",
  "title": "Old Norse"
}, {
  "code": "ENGL53130",
  "title": "Renaissance Humanism"
}, {
  "code": "ENGL53430",
  "title": "The Short Story"
}, {
  "code": "ENGL53530",
  "title": "Renaissance Tragedy"
}, {
  "code": "ENGL53630",
  "title": "Narrative Transformation: Medieval Romance to Renaissance Epic"
}, {
  "code": "ENGL53730",
  "title": "Edith Wharton"
}, {
  "code": "ENGL53830",
  "title": "Literary Masculinity At The Fin-de-siecle"
}, {
  "code": "ENGL5999",
  "title": "Research Program in English"
}, {
  "code": "ENGLNEW09",
  "title": "MA The Partition of India"
}, {
  "code": "FOUD0017",
  "title": "Foundation Music"
}, {
  "code": "FOUD0097",
  "title": "Modern History"
}, {
  "code": "FOUD0137",
  "title": "Foundation Psychology"
}, {
  "code": "FOUD0197",
  "title": "Ancient History"
}, {
  "code": "FOUD01A7",
  "title": "English for Scientists with Science Project"
}, {
  "code": "FOUD01B7",
  "title": "Decision Maths"
}, {
  "code": "FOUD01C7",
  "title": "Concepts, Methods & Theories in the Social Sciences 1"
}, {
  "code": "FOUD01D7",
  "title": "Concepts, Methods & Theories in the Social Sciences 2"
}, {
  "code": "FOUD01E7",
  "title": "Concepts, Methods &Theories in the Arts & Humanities 1"
}, {
  "code": "FOUD01F7",
  "title": "Concepts, Methods & Theories in the Arts & Humanities 2"
}, {
  "code": "FOUD01G7",
  "title": "Advanced Foundation Maths"
}, {
  "code": "FOUD01H7",
  "title": "Advanced Foundation Chemistry"
}, {
  "code": "FOUD01I7",
  "title": "English Literature 1b"
}, {
  "code": "FOUD01J1",
  "title": "Advanced and Further Foundation Biology"
}, {
  "code": "FOUD01K7",
  "title": "Mechanics A"
}, {
  "code": "FOUD01L7",
  "title": "Mechanics B"
}, {
  "code": "FOUD01M7",
  "title": "Mathematical Thinking 1"
}, {
  "code": "FOUD01N7",
  "title": "Mathematical Thinking 2"
}, {
  "code": "FOUD01P7",
  "title": "Further Foundation Physics"
}, {
  "code": "FOUD01Q7",
  "title": "Further Foundation Chemistry"
}, {
  "code": "FOUD01R7",
  "title": "Logical Thinking 1"
}, {
  "code": "FOUD01S7",
  "title": "Logical Thinking 2"
}, {
  "code": "FOUD01T7",
  "title": "Further Foundation Mathematics"
}, {
  "code": "FOUD01U7",
  "title": "Foundation Statistics B"
}, {
  "code": "FOUD0687",
  "title": "Understanding Language"
}, {
  "code": "FOUD0727",
  "title": "Psychology of Thinking and Learning"
}, {
  "code": "FOUD0807",
  "title": "Foundation Statistics A1"
}, {
  "code": "FOUD0817",
  "title": "Foundation Statistics A2"
}, {
  "code": "FOUD0827",
  "title": "Foundation Skills"
}, {
  "code": "FOUD0831",
  "title": "Foundation Physics"
}, {
  "code": "FOUD0847",
  "title": "Foundation Mathematics A1"
}, {
  "code": "FOUD0857",
  "title": "Foundation Mathematics A2"
}, {
  "code": "FOUD0861",
  "title": "Foundation Mathematics B"
}, {
  "code": "FOUD0877",
  "title": "Foundation Earth Science and Physical Geography"
}, {
  "code": "FOUD0887",
  "title": "Foundation Chemistry"
}, {
  "code": "FOUD0897",
  "title": "Foundation Computer Science"
}, {
  "code": "FOUD0907",
  "title": "Foundation Business 1"
}, {
  "code": "FOUD0917",
  "title": "Foundation Business 2"
}, {
  "code": "FOUD0927",
  "title": "Foundation Biology 1"
}, {
  "code": "FOUD0937",
  "title": "Foundation Biology 2"
}, {
  "code": "FOUD0947",
  "title": "English Literature 1"
}, {
  "code": "FOUD0957",
  "title": "English Literature 2"
}, {
  "code": "FOUD0967",
  "title": "Advanced Foundation Physics"
}, {
  "code": "FOUD0977",
  "title": "Academic Communication"
}, {
  "code": "FOUD0987",
  "title": "Academic Practice 1"
}, {
  "code": "FOUD0991",
  "title": "Academic Practice 2"
}, {
  "code": "FOUDNEW01",
  "title": "FOUDNEW01"
}, {
  "code": "FOUDNEW02",
  "title": "FOUDNEW02"
}, {
  "code": "FOUDNEW03",
  "title": "FOUDNEW03"
}, {
  "code": "FOUDNEW04",
  "title": "FOUDNEW04"
}, {
  "code": "FOUDNEW05",
  "title": "FOUDNEW05"
}, {
  "code": "FREN1011",
  "title": "French Language 1"
}, {
  "code": "FREN1031",
  "title": "Reading French Literature"
}, {
  "code": "FREN1041",
  "title": "Society and its Outsiders in Modern France"
}, {
  "code": "FREN1061",
  "title": "The Invention of France"
}, {
  "code": "FREN2011",
  "title": "Modernity & Disenchantment: 19th and 20th C FrenchLiterature and Culture"
}, {
  "code": "FREN2031",
  "title": "Sex, Gender and Identity in the Middle Ages and the Renaissance"
}, {
  "code": "FREN2051",
  "title": "French Language 2"
}, {
  "code": "FREN2061",
  "title": "The Francophone Imaginary: Legacies of Colonialism inLiterature and Culture"
}, {
  "code": "FREN2081",
  "title": "French Syntax and Vocabulary"
}, {
  "code": "FREN2091",
  "title": "Revolutionary Works in French Politics"
}, {
  "code": "FREN3041",
  "title": "French Language 4"
}, {
  "code": "FREN3051",
  "title": "French Translation"
}, {
  "code": "FREN3221",
  "title": "Autobiography/Fiction: Contemporary French Writers"
}, {
  "code": "FREN3271",
  "title": "French Cinema: 1930s to 1990s"
}, {
  "code": "FREN3291",
  "title": "Sexual Dissidence in French Literature"
}, {
  "code": "FREN3331",
  "title": "French Interpreting"
}, {
  "code": "FREN3361",
  "title": "Rebellion, Feud and Crusade in Medieval Texts"
}, {
  "code": "FREN3371",
  "title": "Libertinage in Ancient Regime France"
}, {
  "code": "FREN3401",
  "title": "Anthropocene Animals: Technology, 'Nature' and the End ofthe World"
}, {
  "code": "FREN3411",
  "title": "Ethics and Violence in Medieval and Early Modern French Culture"
}, {
  "code": "FREN3421",
  "title": "Fin-de-si\xE8cle bodies: Decadence and Naturalism"
}, {
  "code": "FREN3441",
  "title": "Androgynes, Witches, and Monsters in the French Renaissance"
}, {
  "code": "FREN3451",
  "title": "Genocide, Violence, and Trauma in French and FrancophoneCulture"
}, {
  "code": "FREN3461",
  "title": "The F-Word: Feminism and Intersectionality in ContemporaryFrancophone Writing"
}, {
  "code": "FREN3471",
  "title": "Migrations in Cultures of the French-Speaking World"
}, {
  "code": "FREN5999",
  "title": "Research Program in French"
}, {
  "code": "FRENNEW03",
  "title": "New French Module - 3"
}, {
  "code": "FRENNEW04",
  "title": "FRENNEW04"
}, {
  "code": "FRENNEW05",
  "title": "FRENNEW05"
}, {
  "code": "GEOG1061",
  "title": "Planet Under Pressure"
}, {
  "code": "GEOG1071",
  "title": "Human Geography"
}, {
  "code": "GEOG1081",
  "title": "Physical Geography"
}, {
  "code": "GEOG1222",
  "title": "Introduction to Geographical Research (BA)"
}, {
  "code": "GEOG1232",
  "title": "Introduction to Geographical Research (BSc)"
}, {
  "code": "GEOG1241",
  "title": "Geographies of Crisis"
}, {
  "code": "GEOG1251",
  "title": "Understanding Earth's Principles"
}, {
  "code": "GEOG2462",
  "title": "Scientific Research in Geography"
}, {
  "code": "GEOG2472",
  "title": "Social Research in Geography"
}, {
  "code": "GEOG2511",
  "title": "Urban Geography"
}, {
  "code": "GEOG2521",
  "title": "Fluvial Systems"
}, {
  "code": "GEOG2531",
  "title": "Glaciers and Glaciation"
}, {
  "code": "GEOG2541",
  "title": "Geographies of Development"
}, {
  "code": "GEOG2551",
  "title": "Contested Environments"
}, {
  "code": "GEOG2561",
  "title": "Social and Cultural Geography"
}, {
  "code": "GEOG2571",
  "title": "Reconstructing Environmental Change"
}, {
  "code": "GEOG2581",
  "title": "Political Geography"
}, {
  "code": "GEOG2591",
  "title": "Handling Geographic Information"
}, {
  "code": "GEOG2611",
  "title": "Mountain Landscapes"
}, {
  "code": "GEOG2621",
  "title": "Theory and Concepts in Contemporary Human Geography"
}, {
  "code": "GEOG2631",
  "title": "People and Environment - Pattern and Process"
}, {
  "code": "GEOG2641",
  "title": "Economic Geography"
}, {
  "code": "GEOG2651",
  "title": "Geochemistry of the Environment"
}, {
  "code": "GEOG2661",
  "title": "Climate Change: Geographical Perspectives"
}, {
  "code": "GEOG30A7",
  "title": "Race, Nature and Crisis"
}, {
  "code": "GEOG30B7",
  "title": "Global Environmental Politics"
}, {
  "code": "GEOG30C7",
  "title": "Contesting Citizenship; Activism, Advocacy, Asylum"
}, {
  "code": "GEOG30D6",
  "title": "Geography Placement Module"
}, {
  "code": "GEOG30D7",
  "title": "Europe: Geographies of Integration and Disintegration"
}, {
  "code": "GEOG3161",
  "title": "Geography, Gender and Change"
}, {
  "code": "GEOG3177",
  "title": "Water - Resource and Well-Being"
}, {
  "code": "GEOG3191",
  "title": "Sea-level Change and Coastal Evolution"
}, {
  "code": "GEOG3232",
  "title": "Dissertation in Geography A"
}, {
  "code": "GEOG3261",
  "title": "Remote Sensing"
}, {
  "code": "GEOG3367",
  "title": "Geographies of Everyday Life"
}, {
  "code": "GEOG3432",
  "title": "Dissertation (Double Module) in Geography B"
}, {
  "code": "GEOG3461",
  "title": "River Dynamics"
}, {
  "code": "GEOG3481",
  "title": "Philosophy and Geography"
}, {
  "code": "GEOG3491",
  "title": "Alpine Landscapes and Processes"
}, {
  "code": "GEOG3501",
  "title": "Berlin: Culture, Politics and Contestation"
}, {
  "code": "GEOG3511",
  "title": "Ice Age Environments"
}, {
  "code": "GEOG3521",
  "title": "The Arctic"
}, {
  "code": "GEOG3537",
  "title": "Neoliberal Life"
}, {
  "code": "GEOG3541",
  "title": "Everyday Economies"
}, {
  "code": "GEOG3551",
  "title": "Chicago: Sites of Global Change"
}, {
  "code": "GEOG3561",
  "title": "Power, Politics and Space"
}, {
  "code": "GEOG3571",
  "title": "Participation and Place"
}, {
  "code": "GEOG3581",
  "title": "Territory and Geopolitics"
}, {
  "code": "GEOG3592",
  "title": "Dissertation (Double Module) in Geography A.(Euro-Abroad)"
}, {
  "code": "GEOG3602",
  "title": "Dissertation (Double Module)  in Geography B (Euro-Abroad)"
}, {
  "code": "GEOG3621",
  "title": "Natural Hazards, Risk and Resilience"
}, {
  "code": "GEOG3631",
  "title": "Geographies of Health and Health Care"
}, {
  "code": "GEOG3641",
  "title": "Oceans Past and Present"
}, {
  "code": "GEOG3651",
  "title": "Visual Geographies: Representing Africa"
}, {
  "code": "GEOG3661",
  "title": "Politics and Space"
}, {
  "code": "GEOG3671",
  "title": "Participation and Place"
}, {
  "code": "GEOG3681",
  "title": "Environment, Culture and The Political Imaginary"
}, {
  "code": "GEOG3691",
  "title": "Iceland: Field Research in Glacial Environments"
}, {
  "code": "GEOG3701",
  "title": "Mountain Hazards"
}, {
  "code": "GEOG3721",
  "title": "Field Studies in Rural Asia"
}, {
  "code": "GEOG3731",
  "title": "Dynamic Mountain Environments"
}, {
  "code": "GEOG3741",
  "title": "Remaking Urban Landscapes"
}, {
  "code": "GEOG3777",
  "title": "Everyday Economies"
}, {
  "code": "GEOG3787",
  "title": "Unfreedom in Labour Relations"
}, {
  "code": "GEOG3797",
  "title": "Research Frontiers in Hydrology"
}, {
  "code": "GEOG3807",
  "title": "Landslides"
}, {
  "code": "GEOG3817",
  "title": "Antarctic Environments"
}, {
  "code": "GEOG3827",
  "title": "Geochemical Applications"
}, {
  "code": "GEOG3837",
  "title": "Erosion and Orogenesis"
}, {
  "code": "GEOG3847",
  "title": "The Politics of Emergency"
}, {
  "code": "GEOG3857",
  "title": "Memory: Power, Place, Identities"
}, {
  "code": "GEOG3867",
  "title": "Spaces of Health and Well-Being"
}, {
  "code": "GEOG3877",
  "title": "Postcolonialism and Development"
}, {
  "code": "GEOG3887",
  "title": "Cities and The Governing of Climate Change"
}, {
  "code": "GEOG3897",
  "title": "Martian Landscapes"
}, {
  "code": "GEOG3907",
  "title": "Visual Geographies: Representing Africa"
}, {
  "code": "GEOG3917",
  "title": "Political Economies/Ecologies of Nature"
}, {
  "code": "GEOG3927",
  "title": "Past Climates of The Low Latitudes"
}, {
  "code": "GEOG3931",
  "title": "Geography of Difference"
}, {
  "code": "GEOG3947",
  "title": "Peatland Geomorphology and Management"
}, {
  "code": "GEOG3957",
  "title": "Geographies of Money and Finance"
}, {
  "code": "GEOG3967",
  "title": "Urban Governance"
}, {
  "code": "GEOG3971",
  "title": "Cape Town: Geographies of Energy Transition"
}, {
  "code": "GEOG3986",
  "title": "Study at Overseas Institution"
}, {
  "code": "GEOG3987",
  "title": "Catchment Modelling for Management"
}, {
  "code": "GEOG3996",
  "title": "Study at Overseas Institution"
}, {
  "code": "GEOG3997",
  "title": "Feminist Geographies: Intimacy, Body, State"
}, {
  "code": "GEOG4007",
  "title": "Communicating Science in Physical Geography"
}, {
  "code": "GEOG4018",
  "title": "Advanced Methods in Physical Geography"
}, {
  "code": "GEOG4023",
  "title": "Research Project (MSci)"
}, {
  "code": "GEOG40260",
  "title": "Dissertation"
}, {
  "code": "GEOG4031",
  "title": "Practical Skills in Sea-Level Science"
}, {
  "code": "GEOG40315",
  "title": "Risk, Science and Communication"
}, {
  "code": "GEOG4041",
  "title": "Advanced Catchment Science"
}, {
  "code": "GEOG40415",
  "title": "Risk Frontiers"
}, {
  "code": "GEOG4051",
  "title": "Glacial Geology and Geomorphology: from Process toApplication"
}, {
  "code": "GEOG40530",
  "title": "Hydro-Meteorological Hazards"
}, {
  "code": "GEOG4061",
  "title": "Using Geographical Skills and Techniques"
}, {
  "code": "GEOG40630",
  "title": "Risk, Security and Society"
}, {
  "code": "GEOG4071",
  "title": "Advanced Research in Human Geography"
}, {
  "code": "GEOG40730",
  "title": "Sea-level Change Hazards"
}, {
  "code": "GEOG4083",
  "title": "Research Project (MArts)"
}, {
  "code": "GEOG40830",
  "title": "Social Risks for Populaton Health"
}, {
  "code": "GEOG4091",
  "title": "Research Frontiers in Human Geography"
}, {
  "code": "GEOG40930",
  "title": "Spatial and Temporal Dimensions of Hazards"
}, {
  "code": "GEOG4103",
  "title": "Collaborative Research Project"
}, {
  "code": "GEOG41030",
  "title": "Understanding Risk"
}, {
  "code": "GEOG4111",
  "title": "Erosion and Orogenesis"
}, {
  "code": "GEOG41160",
  "title": "Vocational Dissertation"
}, {
  "code": "GEOG41260",
  "title": "Dissertation by Research"
}, {
  "code": "GEOG41315",
  "title": "Research Frontiers of Human Geography"
}, {
  "code": "GEOG41430",
  "title": "Social Dimensions of Risk and Resilience"
}, {
  "code": "GEOG41515",
  "title": "Using Geographical Skills and Techniques"
}, {
  "code": "GEOG41630",
  "title": "Climate, Risk and Society"
}, {
  "code": "GEOG54115",
  "title": "Research Design in Physical Geography"
}, {
  "code": "GEOG55315",
  "title": "Research Practice"
}, {
  "code": "GEOG55330",
  "title": "Philosophy and Theory in Contemporary Human Geography"
}, {
  "code": "GEOG55915",
  "title": "Geographical Imaginations"
}, {
  "code": "GEOG56015",
  "title": "Using Geographical Skills and Techniques"
}, {
  "code": "GEOG56115",
  "title": "Perspectives on Research in Environmental Science"
}, {
  "code": "GEOG56215",
  "title": "Becoming an Effective Environmental Researcher"
}, {
  "code": "GEOG56315",
  "title": "Governance and Organization of Environmental Research"
}, {
  "code": "GEOG56415",
  "title": "Engagement, Influence and Impact of Environmental Research"
}, {
  "code": "GEOG5999",
  "title": "Research Program in Geography"
}, {
  "code": "GEOGNEW02",
  "title": "GEOGNEW02"
}, {
  "code": "GEOGNEW03",
  "title": "GEOGNEW03"
}, {
  "code": "GEOGNEW04",
  "title": "GEOGNEW04"
}, {
  "code": "GEOGNEW05",
  "title": "GEOGNEW05"
}, {
  "code": "GEOL1021",
  "title": "Earth Materials"
}, {
  "code": "GEOL1051",
  "title": "Field Studies"
}, {
  "code": "GEOL1061",
  "title": "Mathematical Methods in Geosciences"
}, {
  "code": "GEOL1081",
  "title": "Further Mathematics for Geosciences"
}, {
  "code": "GEOL1101",
  "title": "Understanding Earth Sciences"
}, {
  "code": "GEOL1111",
  "title": "Environment and Resources"
}, {
  "code": "GEOL1131",
  "title": "Geoinformatics"
}, {
  "code": "GEOL2011",
  "title": "Structural Geology and Tectonics"
}, {
  "code": "GEOL2031",
  "title": "Sedimentary Environments and Palaeoecology"
}, {
  "code": "GEOL2081",
  "title": "Geophysical Methods for Geoscientists"
}, {
  "code": "GEOL2171",
  "title": "Hydrology and Climate"
}, {
  "code": "GEOL2191",
  "title": "Fieldwork (Geological)"
}, {
  "code": "GEOL2201",
  "title": "Fieldwork (Environmental)"
}, {
  "code": "GEOL2231",
  "title": "Igneous and Metamorphic Geochemistry and Petrology"
}, {
  "code": "GEOL2241",
  "title": "Fieldwork (Geophysical)"
}, {
  "code": "GEOL2251",
  "title": "Modelling Earth Processes II"
}, {
  "code": "GEOL2291",
  "title": "Geophysical Data Applications"
}, {
  "code": "GEOL3011",
  "title": "Petrology, Geochemistry and Global Tectonics"
}, {
  "code": "GEOL3022",
  "title": "Dissertation"
}, {
  "code": "GEOL3031",
  "title": "Geological Evolution and Petroleum Systems of the BritishIsles"
}, {
  "code": "GEOL3041",
  "title": "Environmental Geochemistry"
}, {
  "code": "GEOL3051",
  "title": "Volcanology and Magmatism"
}, {
  "code": "GEOL3071",
  "title": "Palaeobiology"
}, {
  "code": "GEOL3091",
  "title": "Deformation Processes in the Lithosphere"
}, {
  "code": "GEOL3151",
  "title": "Earth Structure and Dynamics"
}, {
  "code": "GEOL3221",
  "title": "Advanced Geophysics"
}, {
  "code": "GEOL3231",
  "title": "Earth System and Climate"
}, {
  "code": "GEOL3251",
  "title": "Earth Sciences into Schools"
}, {
  "code": "GEOL3281",
  "title": "Environmental Management"
}, {
  "code": "GEOL4053",
  "title": "Research Project"
}, {
  "code": "GEOL4061",
  "title": "Science Communication"
}, {
  "code": "GEOL4081",
  "title": "Earth Science Field Seminar"
}, {
  "code": "GEOL4091",
  "title": "Earth Sciences into Industry"
}, {
  "code": "GEOL4101",
  "title": "Petroleum Geoscience IV"
}, {
  "code": "GEOL4111",
  "title": "Environmental Geochemistry IV"
}, {
  "code": "GEOL4121",
  "title": "Deformation Processes in the Lithosphere IV"
}, {
  "code": "GEOL4131",
  "title": "Advanced Geophysics IV"
}, {
  "code": "GEOL4141",
  "title": "Earth System and Climate IV"
}, {
  "code": "GEOL4161",
  "title": "Earth Structure and Dynamics IV"
}, {
  "code": "GEOL4171",
  "title": "Palaeobiology IV"
}, {
  "code": "GEOL5999",
  "title": "Research Program in Geology"
}, {
  "code": "GEOLNEW01",
  "title": "GEOLNEW01"
}, {
  "code": "GEOLNEW02",
  "title": "GEOLNEW02"
}, {
  "code": "GEOLNEW03",
  "title": "GEOLNEW03"
}, {
  "code": "GEOLNEW04",
  "title": "GEOLNEW04"
}, {
  "code": "GEOLNEW05",
  "title": "GEOLNEW05"
}, {
  "code": "GERM1011",
  "title": "German Language 1A"
}, {
  "code": "GERM1081",
  "title": "Identity and Politics in the German-Speaking Countries"
}, {
  "code": "GERM1091",
  "title": "Reading German Culture"
}, {
  "code": "GERM1101",
  "title": "Picturing the Past of the German-Speaking Countries"
}, {
  "code": "GERM1112",
  "title": "German Language 1B"
}, {
  "code": "GERM2021",
  "title": "German Language 2A"
}, {
  "code": "GERM2091",
  "title": "Translation"
}, {
  "code": "GERM2121",
  "title": "Sex and Identity in Germanic Cultures"
}, {
  "code": "GERM2131",
  "title": "Negotiating the Past in the German-speaking Countries"
}, {
  "code": "GERM2141",
  "title": "Violence in German Literature, Film and Visual Art"
}, {
  "code": "GERM2152",
  "title": "German Language 2B"
}, {
  "code": "GERM3041",
  "title": "German Interpreting"
}, {
  "code": "GERM3071",
  "title": "German Language 4"
}, {
  "code": "GERM3151",
  "title": "Remembering the Holocaust in Post-war German Culture"
}, {
  "code": "GERM3201",
  "title": "Photography and Modernity in The Weimar Republic"
}, {
  "code": "GERM3241",
  "title": "Doing the Right Thing: Concepts of Justice in German Literature and Film"
}, {
  "code": "GERM3261",
  "title": "Revolution and the Image"
}, {
  "code": "GERM3281",
  "title": "In Search of Happiness"
}, {
  "code": "GERM3291",
  "title": "Wanderlust and Fernweh: German Cultures of Mobility fromGoethe to Wolfsburg"
}, {
  "code": "GERM5999",
  "title": "Research Program in German"
}, {
  "code": "GERMNEW01",
  "title": "GERMNEW01"
}, {
  "code": "GERMNEW02",
  "title": "GERMNEW02"
}, {
  "code": "GERMNEW03",
  "title": "GERMNEW03"
}, {
  "code": "GERMNEW04",
  "title": "GERMNEW04"
}, {
  "code": "GERMNEW05",
  "title": "GERMNEW05"
}, {
  "code": "HEAS5999",
  "title": "Research Program in Health"
}, {
  "code": "HIST1011",
  "title": "The Birth of Western Society, 300-1050"
}, {
  "code": "HIST1041",
  "title": "Reformation Europe"
}, {
  "code": "HIST1251",
  "title": "The Mediterranean World in The Sixteenth Century"
}, {
  "code": "HIST1281",
  "title": "Wars and Welfare: English Society, 1900-1945"
}, {
  "code": "HIST1361",
  "title": "Enslavement, Exclusion, Assimilation: The Great Racial Dilemma in Nineteenth Century America"
}, {
  "code": "HIST1401",
  "title": "New Heaven, New Earth: Latin Christendom and the World, 1000-1300"
}, {
  "code": "HIST1481",
  "title": "Introduction to Chinese History"
}, {
  "code": "HIST1491",
  "title": "The Making of Modern Africa: Change and Adaptation in sub-Saharan Africa, 1880-2000"
}, {
  "code": "HIST1501",
  "title": "The Century of Revolution"
}, {
  "code": "HIST1521",
  "title": "Tensions of Empire: British Imperialism 1763-1963"
}, {
  "code": "HIST1531",
  "title": "Monarchy and Religion in The British World Since 1660"
}, {
  "code": "HIST1541",
  "title": "Modern Times: A Cultural History of Europe, c. 1860-1960"
}, {
  "code": "HIST1551",
  "title": "Early Modern England: A Social History"
}, {
  "code": "HIST1561",
  "title": "Making History"
}, {
  "code": "HIST1581",
  "title": "Introduction to Japanese History"
}, {
  "code": "HIST1591",
  "title": "Society and Culture in Early Modern France"
}, {
  "code": "HIST1601",
  "title": "Society and Culture in China under the Ming and QingDynasties"
}, {
  "code": "HIST1611",
  "title": "The Rise and Fall of American Slavery, 1607-1865"
}, {
  "code": "HIST1621",
  "title": "A United Kingdom: Great Britain and Ireland before democracy"
}, {
  "code": "HIST1631",
  "title": "Beyond the Northlands: The Vikings and their World"
}, {
  "code": "HIST1641",
  "title": "Decline and Crisis? Europe, 1300-1500"
}, {
  "code": "HIST1651",
  "title": "Imagining East Asia in the Modern World"
}, {
  "code": "HIST1661",
  "title": "Connected Histories: Early Modern Europe, c. 1450-1750"
}, {
  "code": "HIST20A1",
  "title": "Constructing Identities: Gender, Sexuality and Age in England, 1600-1850"
}, {
  "code": "HIST20B1",
  "title": "Crime and Culture in Early Modern Europe"
}, {
  "code": "HIST20C1",
  "title": "Gender and Sexuality during Britain's Long Twentieth Century"
}, {
  "code": "HIST20D1",
  "title": "The Nazi Dictatorship: Culture and Society"
}, {
  "code": "HIST20E1",
  "title": "Approaching US History"
}, {
  "code": "HIST20F1",
  "title": "Modern Russia from Emancipation to Revolution: a Cultural History"
}, {
  "code": "HIST20G1",
  "title": "The Habsburg Empire: from Enlightenment to Collapse,1740-1918"
}, {
  "code": "HIST20H1",
  "title": "International Human Rights since 1945"
}, {
  "code": "HIST20I1",
  "title": "Gregory of Tours and the Early Merovingians c.500-600"
}, {
  "code": "HIST20J1",
  "title": "Themes in Modern British History: Religion, Magic andMulticulturalism"
}, {
  "code": "HIST20K1",
  "title": "Science and Technology in History: Big Science, Small Science"
}, {
  "code": "HIST2201",
  "title": "Modern China's Transformations"
}, {
  "code": "HIST2211",
  "title": "Hard Times: British Society, 1815-1902"
}, {
  "code": "HIST2281",
  "title": "Wars, Crisis and Decline: The British Economy Since 1900"
}, {
  "code": "HIST2291",
  "title": "Soviet Socialism in the Cold War: The USSR, 1945-1991"
}, {
  "code": "HIST2321",
  "title": "Inventing France, 1300-1500: Kings and the Communities ofthe Realm"
}, {
  "code": "HIST2331",
  "title": "The King\x92s Two Bodies: Rulership in Late Medieval Europe"
}, {
  "code": "HIST2351",
  "title": "Memory and Conflict in Europe since 1918"
}, {
  "code": "HIST2411",
  "title": "The Romantic Revolution in Europe, 1770-1840"
}, {
  "code": "HIST2431",
  "title": "Civilising Peoples: Progress, Governance and The British Empire"
}, {
  "code": "HIST2441",
  "title": "Selling the Tudor Monarchy"
}, {
  "code": "HIST2471",
  "title": "The United States and the Cold War"
}, {
  "code": "HIST2481",
  "title": "The Golden Age of Northumbria, c.600-c.800"
}, {
  "code": "HIST2501",
  "title": "The World We Have Lost? Family and Household in Europe,c. 1600-1914"
}, {
  "code": "HIST2521",
  "title": "From Vikings to Crusaders: the Formation of the ScandinavianKingdoms, c. 900-1200"
}, {
  "code": "HIST2531",
  "title": "A Savage Continent? The Cultural History of Violence inModern Europe"
}, {
  "code": "HIST2541",
  "title": "Elders, Despots, Modernisers: Reimagining the State in Northeast Africa"
}, {
  "code": "HIST2611",
  "title": "Power and Primacy: Sino-Japanese relations in the Long Twentieth Century, 1894-2014"
}, {
  "code": "HIST2621",
  "title": "Political Culture in Japan since 1688"
}, {
  "code": "HIST2631",
  "title": "Treasure in Heaven: Medieval Monasticism c.1000-c.1300"
}, {
  "code": "HIST2641",
  "title": "China, the West and the Rest: Exchanges, Ideology, andPractice in Late Imperial China"
}, {
  "code": "HIST2651",
  "title": "Revolution: Cultural Change and Social Upheaval in Modern France"
}, {
  "code": "HIST2721",
  "title": "The Court: Art and Power in Early Modern Europe"
}, {
  "code": "HIST2741",
  "title": "Protest, Terrorism and Revolution 1953 to 1989/90"
}, {
  "code": "HIST2771",
  "title": "Tudor Monarchy and The Reformation"
}, {
  "code": "HIST2871",
  "title": "Native Americans and Minority Rights in the US, 1914-2000"
}, {
  "code": "HIST2886",
  "title": "Study at  Overseas University"
}, {
  "code": "HIST2922",
  "title": "Conversations With History"
}, {
  "code": "HIST2931",
  "title": "The Book of Hours in Medieval Life and Art"
}, {
  "code": "HIST2951",
  "title": "Robin Hood"
}, {
  "code": "HIST2971",
  "title": "Colonial British America, 1600-1776"
}, {
  "code": "HIST2981",
  "title": "The White Nile: Conflict, Power and Identity, 1820-2006"
}, {
  "code": "HIST2991",
  "title": "The Crusades"
}, {
  "code": "HIST3001",
  "title": "Politics and Polemics: Medieval German Kings and their Chroniclers, c. 1024-1125"
}, {
  "code": "HIST3071",
  "title": "Revolution and History"
}, {
  "code": "HIST3091",
  "title": "The Reformation and Its Historians"
}, {
  "code": "HIST30A3",
  "title": "Consumer Behaviour in Britain, 1660-1760"
}, {
  "code": "HIST30B3",
  "title": "Burning Hearts - Catholic Reform Between Mission andInquisition, 1550-1700"
}, {
  "code": "HIST30C3",
  "title": "Developing Africa"
}, {
  "code": "HIST30D1",
  "title": "Health, Wealth and Happiness: Investigating Standards ofLiving and Wellbeing in the Past"
}, {
  "code": "HIST30E3",
  "title": "Mapping Eastern Europe in the Nineteenth and TwentiethCenturies"
}, {
  "code": "HIST30G3",
  "title": "Popular Cultures in Early Modern England, 1500-1840"
}, {
  "code": "HIST30H3",
  "title": "Voice and Silence in South Africa's Liberation Struggle"
}, {
  "code": "HIST30J1",
  "title": "Sexuality and Gender in Modern Britain"
}, {
  "code": "HIST30K3",
  "title": "Sexual Revolutions: The Politics of Gender and Sexuality inBritain and Beyond, 1920s to 1970s"
}, {
  "code": "HIST30L1",
  "title": "God, Guns, and Globalization: a history of religion inAfrica"
}, {
  "code": "HIST30M1",
  "title": "The Habsburg Empire: from Enlightenment to Collapse,1740-1918"
}, {
  "code": "HIST30N3",
  "title": "The American Civil War and Reconstruction, 1850-1876"
}, {
  "code": "HIST30O3",
  "title": "The Last Romans: sixth-century Italy and the end of lateantiquity"
}, {
  "code": "HIST30P1",
  "title": "East Asia in Historical Perspective: Oriental Despotism and its Discontents"
}, {
  "code": "HIST30Q3",
  "title": "History Placement Module"
}, {
  "code": "HIST30S3",
  "title": "Encountering Abolition in the Atlantic World, c.1807-1870"
}, {
  "code": "HIST3111",
  "title": "History and Memory in East Asia, 1895-2008"
}, {
  "code": "HIST3161",
  "title": "Inheriting The North: Economy & Society 1500-1850"
}, {
  "code": "HIST3181",
  "title": "Single Module Dissertation in History"
}, {
  "code": "HIST3192",
  "title": "Double Module Dissertation in History"
}, {
  "code": "HIST3221",
  "title": "Interpreting Conflict in Post-colonial Africa"
}, {
  "code": "HIST3233",
  "title": "Stalinism"
}, {
  "code": "HIST3243",
  "title": "English Architecture in the Age of Christopher Wren"
}, {
  "code": "HIST3293",
  "title": "Politics and Welfare: England, 1880-1914"
}, {
  "code": "HIST32A1",
  "title": "Europe Reformed 1400-1600?"
}, {
  "code": "HIST3303",
  "title": "From War to Cold War: US Foreign Policy, c.1944-1948"
}, {
  "code": "HIST3313",
  "title": "English Civil Wars and Commonwealth"
}, {
  "code": "HIST3333",
  "title": "Resisting Revolution: British Political Culture, 1789-1802"
}, {
  "code": "HIST3363",
  "title": "Beyond the Holocaust: Poles, Jews, Turks and Germans,1848 to The Present"
}, {
  "code": "HIST3393",
  "title": "Propaganda in Britain and Germany, 1939-1945"
}, {
  "code": "HIST33A1",
  "title": "The Making of Modern Europe C. 1789-1989"
}, {
  "code": "HIST3403",
  "title": "The Princely Court in Northern Europe, 1350-1500"
}, {
  "code": "HIST3413",
  "title": "Public politics: protest, petition and print in England,1530-1640"
}, {
  "code": "HIST3423",
  "title": "1688: Monarchy & Revolution in Britain"
}, {
  "code": "HIST3431",
  "title": "History and Its Audiences"
}, {
  "code": "HIST3441",
  "title": "History of American Capitalism"
}, {
  "code": "HIST3451",
  "title": "Anglo-Saxon Invasion? The Search for English Origins"
}, {
  "code": "HIST34A1",
  "title": "China, Asia and the World"
}, {
  "code": "HIST35A1",
  "title": "The Metropolis: Urban Histories of Modern Europe"
}, {
  "code": "HIST3753",
  "title": "The Black Death"
}, {
  "code": "HIST3823",
  "title": "A world turned upside down: radicalism and the English Revolution"
}, {
  "code": "HIST3853",
  "title": "The World of Illuminated Manuscripts: Decorated Books and Cultural History From The Sixth to The Twelfth Century"
}, {
  "code": "HIST3873",
  "title": "Worlds Apart: The City in Late Medieval England"
}, {
  "code": "HIST3933",
  "title": "Saints and Scholars: Learning, Love and Reform, 1050-1250"
}, {
  "code": "HIST3953",
  "title": "Gender, Society and Cultural Change in China's Long Twentieth Century"
}, {
  "code": "HIST3963",
  "title": "The Wonder of the World: Frederick II (1194-1250) in Life and Legend"
}, {
  "code": "HIST3981",
  "title": "Inventing Humanity"
}, {
  "code": "HIST3983",
  "title": "British Politics and the Great War"
}, {
  "code": "HIST3993",
  "title": "History Study Abroad module"
}, {
  "code": "HIST3996",
  "title": "History Study Abroad"
}, {
  "code": "HIST40090",
  "title": "Dissertation (90 Credits)"
}, {
  "code": "HIST40160",
  "title": "Dissertation"
}, {
  "code": "HIST41430",
  "title": "The Archaeology of The Book: Codicology and Culture From Antiquity to The Renaissance"
}, {
  "code": "HIST42430",
  "title": "Power and Society in The Late Middle Ages"
}, {
  "code": "HIST42530",
  "title": "Palaeography: Scribes Script and History from Antiquity to the Renaissance"
}, {
  "code": "HIST42630",
  "title": "Courts and Power in Early-Modern Europe and the New World"
}, {
  "code": "HIST42730",
  "title": "Negotiating Life in the Early Modern England"
}, {
  "code": "HIST42830",
  "title": "The Wealth of Nations"
}, {
  "code": "HIST43230",
  "title": "Race in Modern America"
}, {
  "code": "HIST43330",
  "title": "Tribe and Nation in Africa"
}, {
  "code": "HIST43430",
  "title": "Anglo-Saxon Societies and Cultures: Interdisciplinary approaches to early medieval England"
}, {
  "code": "HIST43630",
  "title": "History and The Idea of Politics: 1500-1900"
}, {
  "code": "HIST43830",
  "title": "Media, Culture and Society in Weimar and Nazi Germany"
}, {
  "code": "HIST44330",
  "title": "Interpretations of Terror and Genocide in Modern Europe"
}, {
  "code": "HIST44430",
  "title": "History, Knowledge and Visual Culture"
}, {
  "code": "HIST44515",
  "title": "Methodology and Criticism"
}, {
  "code": "HIST44530",
  "title": "Serious Fun: A History of Sport from the Late Middle Ages to the Present"
}, {
  "code": "HIST44730",
  "title": "Work and Play in Early Modern Europe"
}, {
  "code": "HIST44830",
  "title": "Old English Language, Texts and Contexts"
}, {
  "code": "HIST44930",
  "title": "The Liberal Arts - Learning, Knowledge and Power in the High Middle Ages (c.1100-c.1300)"
}, {
  "code": "HIST45030",
  "title": "Feudalism: The Uses and Abuses of a Historical Model"
}, {
  "code": "HIST45130",
  "title": "Intellectuals and Public Opinion in Global History"
}, {
  "code": "HIST45230",
  "title": "Elections in Africa: A Cultural and Political History,c. 1950-2016"
}, {
  "code": "HIST45330",
  "title": "Themes, Readings and Sources"
}, {
  "code": "HIST45430",
  "title": "Reading the Medieval and Early Modern Past"
}, {
  "code": "HIST45530",
  "title": "Writing the Medieval and Early Modern Past"
}, {
  "code": "HIST45630",
  "title": "The Four Horsemen: Pestilence, War, Famine and Death"
}, {
  "code": "HIST45730",
  "title": "A Safe Democracy? Constitutionalism, Extremism, and Political Violence in Modern England, c."
}, {
  "code": "HIST45930",
  "title": "Visualizing Revolution: The Image in French Political Culture, c. 1789-1914"
}, {
  "code": "HIST46030",
  "title": "An Exhibitionary Complex: Museums Collecting and the Historical Imagination"
}, {
  "code": "HIST50060",
  "title": "Dissertation"
}, {
  "code": "HIST51890",
  "title": "Dissertation for MA in Modern History"
}, {
  "code": "HIST5999",
  "title": "Research Module in History"
}, {
  "code": "HISTLEVEL1",
  "title": "Year Tutor Class Level 1"
}, {
  "code": "HISTLEVEL2",
  "title": "Year Tutor Class Level 2"
}, {
  "code": "HISTLEVEL3",
  "title": "Year Tutor Class Level 3"
}, {
  "code": "HISTSSMT",
  "title": "Staff Senior Team"
}, {
  "code": "HISTSTAFFSEM",
  "title": "History Staff Seminar"
}, {
  "code": "INSACADSKILLS",
  "title": "Academic Language and Communication - Academic Skills"
}, {
  "code": "INSCULTURE",
  "title": "Academic Language and Communication - Academic Culture"
}, {
  "code": "INSLANGUAGE",
  "title": "Academic Language and Communication - Academic Language"
}, {
  "code": "INSWRITING",
  "title": "Academic Language and Communication - Academic Writing"
}, {
  "code": "ITAL1061",
  "title": "Understanding Italy From The 1960s to Today"
}, {
  "code": "ITAL1071",
  "title": "Italian Language 1A"
}, {
  "code": "ITAL1081",
  "title": "Italy and the Arts"
}, {
  "code": "ITAL1091",
  "title": "Introduction to Italian Literary Culture and Theory"
}, {
  "code": "ITAL1102",
  "title": "Italian Language 1B"
}, {
  "code": "ITAL2031",
  "title": "Italian Language 2B"
}, {
  "code": "ITAL2041",
  "title": "The World of Dante"
}, {
  "code": "ITAL2061",
  "title": "Narratives of Fascist and Post-War Italy"
}, {
  "code": "ITAL2071",
  "title": "Anatomy of Italian Culture"
}, {
  "code": "ITAL2081",
  "title": "The Languages of Italy"
}, {
  "code": "ITAL2111",
  "title": "Italian Language 2A"
}, {
  "code": "ITAL2121",
  "title": "The Making of Modern Italy"
}, {
  "code": "ITAL2131",
  "title": "Languages, Literature & Culture of the Italian Renaissance"
}, {
  "code": "ITAL3021",
  "title": "Italian Language 4"
}, {
  "code": "ITAL3061",
  "title": "Italian Cinema"
}, {
  "code": "ITAL3071",
  "title": "The Italian Renaissance in Literature and Art"
}, {
  "code": "ITAL3151",
  "title": "From the Middle Ages to Modernity: the World of Petrarch"
}, {
  "code": "ITAL3161",
  "title": "Science and Culture in Renaissance and Early Modern Italy"
}, {
  "code": "ITAL3171",
  "title": "Writing the Modern Self"
}, {
  "code": "ITAL3181",
  "title": "Italian Travellers' Tales"
}, {
  "code": "ITAL5999",
  "title": "Italian Literature"
}, {
  "code": "ITALNEW02",
  "title": "ITALNEW02"
}, {
  "code": "ITALNEW03",
  "title": "ITALNEW03"
}, {
  "code": "ITALNEW04",
  "title": "ITALNEW04"
}, {
  "code": "ITALNEW05",
  "title": "ITALNEW05"
}, {
  "code": "JPNS1012",
  "title": "Japanese Language 1B"
}, {
  "code": "JPNS1041",
  "title": "Introduction to Japanese Culture through Masterpieces"
}, {
  "code": "JPNS1051",
  "title": "Introduction to Japanese History through Objects"
}, {
  "code": "JPNS1062",
  "title": "Japanese Language 1A"
}, {
  "code": "JPNS2012",
  "title": "Japanese Language 2B"
}, {
  "code": "JPNS2041",
  "title": "The Body and the Extremity of the Senses: Through JapaneseLiterature, Performance and Media"
}, {
  "code": "JPNS2161",
  "title": "Japanese Language 2A"
}, {
  "code": "JPNS2171",
  "title": "Exploring Japanese Culture"
}, {
  "code": "JPNS2996",
  "title": "Japanese Study Abroad"
}, {
  "code": "JPNS3012",
  "title": "Japanese Language 4"
}, {
  "code": "JPNS3021",
  "title": "Japanese Historical and Literary Texts"
}, {
  "code": "JPNS3031",
  "title": "Dissertation in Japanese Studies (20 Credits)"
}, {
  "code": "JPNS3032",
  "title": "Dissertation in Japanese Studies (40 Credits)"
}, {
  "code": "JPNSNEW01",
  "title": "JPNSNEW01"
}, {
  "code": "JPNSNEW02",
  "title": "JPNSNEW02"
}, {
  "code": "JPNSNEW03",
  "title": "New Japanese Module - 3"
}, {
  "code": "JPNSNEW04",
  "title": "JPNSNEW04"
}, {
  "code": "JPNSNEW05",
  "title": "JPNSNEW05"
}, {
  "code": "LANG10115",
  "title": "Expert English"
}, {
  "code": "LANG1441",
  "title": "English Past and Present"
}, {
  "code": "LANG2161",
  "title": "Everyday English Discourse"
}, {
  "code": "LANG2171",
  "title": "English Language Teaching"
}, {
  "code": "LANG40130",
  "title": "Language Teaching Methods and Practice"
}, {
  "code": "LANG40160",
  "title": "Dissertation"
}, {
  "code": "LANG40260",
  "title": "Dissertation"
}, {
  "code": "LANG40315",
  "title": "Language Teaching Methodology"
}, {
  "code": "LANG40715",
  "title": "Syllabus Design and Assessment"
}, {
  "code": "LANG40730",
  "title": "Syllabus Design and Assessment"
}, {
  "code": "LANG40815",
  "title": "Advanced Research Methods"
}, {
  "code": "LANG40915",
  "title": "Global Englishes: Policy and Power"
}, {
  "code": "LANG41215",
  "title": "Second Language Development: Perspectives for Teaching"
}, {
  "code": "LANG41315",
  "title": "Discourse, Texts and TESOL"
}, {
  "code": "LANG41415",
  "title": "English Language Teaching Materials, Development and Evaluation"
}, {
  "code": "LANG41515",
  "title": "English for Specific Purposes"
}, {
  "code": "LANG41615",
  "title": "Language for Teaching"
}, {
  "code": "LANG41715",
  "title": "English Language Teaching Management"
}, {
  "code": "LANG41815",
  "title": "Teaching Young Learners"
}, {
  "code": "LANG41915",
  "title": "Pragmatics and the Language Classroom"
}, {
  "code": "LANG42015",
  "title": "Advanced Teaching Practice: The Reflective Practitioner"
}, {
  "code": "LANG42115",
  "title": "Teaching English for Academic Purposes (TEAP)"
}, {
  "code": "LANG42260",
  "title": "Dissertation: English for Specific Purposes (ESP)"
}, {
  "code": "LANG42360",
  "title": "Dissertation: Young Learners"
}, {
  "code": "LANG42460",
  "title": "Dissertation: English for Academic Purposes"
}, {
  "code": "LANG42515",
  "title": "Evaluation and Assessment"
}, {
  "code": "LANG42615",
  "title": "Second Language Teacher Education in Practice"
}, {
  "code": "LANG42715",
  "title": "Fundamentals of ELT"
}, {
  "code": "LANG42815",
  "title": "Language Teaching Methodology (Applied Linguistics Students)"
}, {
  "code": "LANGALLSTAFF",
  "title": "All Staff Meeting"
}, {
  "code": "LANGNEW02",
  "title": "New English Language Module - 2"
}, {
  "code": "LANGNEW03",
  "title": "New English Language Module - 3"
}, {
  "code": "LANGNEW04",
  "title": "LANGNEW04"
}, {
  "code": "LANGNEW05",
  "title": "LANGNEW05"
}, {
  "code": "LANGTEACHDEV",
  "title": "Teacher Development Courses"
}, {
  "code": "LAW1051",
  "title": "Tort Law"
}, {
  "code": "LAW1061",
  "title": "EU Constitutional Law"
}, {
  "code": "LAW1071",
  "title": "Contract Law"
}, {
  "code": "LAW1081",
  "title": "The Individual and the State"
}, {
  "code": "LAW1091",
  "title": "UK Constitutional Law"
}, {
  "code": "LAW1121",
  "title": "Introduction to English Law and Legal Method"
}, {
  "code": "LAW2011",
  "title": "Land Law"
}, {
  "code": "LAW2021",
  "title": "Advanced Issues in Public Law"
}, {
  "code": "LAW2031",
  "title": "Administrative Law"
}, {
  "code": "LAW2061",
  "title": "Religion and Law"
}, {
  "code": "LAW2081",
  "title": "Contemporary Issues in the Law of the European InternalMarket"
}, {
  "code": "LAW2111",
  "title": "Employment Law"
}, {
  "code": "LAW2121",
  "title": "Law of Family Relationships"
}, {
  "code": "LAW2131",
  "title": "Public International Law"
}, {
  "code": "LAW2201",
  "title": "Law, Gender and Society"
}, {
  "code": "LAW2211",
  "title": "Trusts Law"
}, {
  "code": "LAW2221",
  "title": "Criminal Law"
}, {
  "code": "LAW2241",
  "title": "Commercial Law"
}, {
  "code": "LAW2271",
  "title": "Legal Frontiers"
}, {
  "code": "LAW2281",
  "title": "Evidence and Criminal Process"
}, {
  "code": "LAW2291",
  "title": "Contemporary Issues in Biolaw"
}, {
  "code": "LAW2301",
  "title": "Philosophy of Human Rights Law"
}, {
  "code": "LAW3011",
  "title": "Competition Law"
}, {
  "code": "LAW3022",
  "title": "Dissertation"
}, {
  "code": "LAW3031",
  "title": "Company Law"
}, {
  "code": "LAW3061",
  "title": "Intellectual Property Law"
}, {
  "code": "LAW3071",
  "title": "Law and Medicine"
}, {
  "code": "LAW3141",
  "title": "Advanced Issues in International Legal Governance"
}, {
  "code": "LAW3151",
  "title": "International Human Rights"
}, {
  "code": "LAW3191",
  "title": "Interscholastic Mooting"
}, {
  "code": "LAW3241",
  "title": "International Criminal Law"
}, {
  "code": "LAW3271",
  "title": "Law, Sex and Crime"
}, {
  "code": "LAW3291",
  "title": "Jurisprudence"
}, {
  "code": "LAW3311",
  "title": "Advanced Issues in Employment and Discrimination Law"
}, {
  "code": "LAW3321",
  "title": "Legal History"
}, {
  "code": "LAW3337",
  "title": "Counterterrorism Law and Policy"
}, {
  "code": "LAW3347",
  "title": "Corporate Finance"
}, {
  "code": "LAW3351",
  "title": "Comparative Constitutional Law"
}, {
  "code": "LAW3367",
  "title": "Free Speech Problems in Comparative Perspective"
}, {
  "code": "LAW3377",
  "title": "Issues in Commercial and Corporate Law"
}, {
  "code": "LAW3387",
  "title": "Law in Practice"
}, {
  "code": "LAW3397",
  "title": "Law and Literature"
}, {
  "code": "LAW3407",
  "title": "Law and Economics"
}, {
  "code": "LAW3421",
  "title": "Law of the European Convention on Human Rights"
}, {
  "code": "LAW3431",
  "title": "Chinese Legal System"
}, {
  "code": "LAW3447",
  "title": "Pensions Law"
}, {
  "code": "LAW3457",
  "title": "Introduction to Private International Law"
}, {
  "code": "LAW3461",
  "title": "Media Law"
}, {
  "code": "LAW3471",
  "title": "Introduction to the Philosophy of Private Law - New Level 3 (20 credits)"
}, {
  "code": "LAW3481",
  "title": "Access to Justice"
}, {
  "code": "LAW3996",
  "title": "Study at Overseas University"
}, {
  "code": "LAW40115",
  "title": "Advanced Issues in The Constitutional Law of The EU"
}, {
  "code": "LAW40130",
  "title": "EU Trade Law"
}, {
  "code": "LAW40215",
  "title": "Introduction to European Union Law"
}, {
  "code": "LAW40230",
  "title": "Competition Law"
}, {
  "code": "LAW40315",
  "title": "International Human Rights Law, Development, and Commerce"
}, {
  "code": "LAW40330",
  "title": "International Criminal Law"
}, {
  "code": "LAW40415",
  "title": "Corporate Social Responsibility"
}, {
  "code": "LAW40515",
  "title": "International and Comparative Corporate Insolvency Law"
}, {
  "code": "LAW40530",
  "title": "Current Issues in Commercial Law"
}, {
  "code": "LAW40615",
  "title": "Introduction to Corporate Insolvency Law"
}, {
  "code": "LAW40715",
  "title": "Competition Law"
}, {
  "code": "LAW40730",
  "title": "International Trade Law & Policy"
}, {
  "code": "LAW40830",
  "title": "The European Union and International Trade"
}, {
  "code": "LAW40915",
  "title": "Mergers and Acquisitions"
}, {
  "code": "LAW40930",
  "title": "International Banking Law"
}, {
  "code": "LAW41015",
  "title": "Law of Oil and Gas Contracts"
}, {
  "code": "LAW41115",
  "title": "Applied Research Methods in Law"
}, {
  "code": "LAW41130",
  "title": "Advanced Issues in International Economic Law"
}, {
  "code": "LAW41215",
  "title": "Carriage of Goods By Sea"
}, {
  "code": "LAW41330",
  "title": "Fundamentals of International Law"
}, {
  "code": "LAW41530",
  "title": "International Commercial Dispute Resolution"
}, {
  "code": "LAW41730",
  "title": "Current Problems of International Law"
}, {
  "code": "LAW41830",
  "title": "International Investment Law"
}, {
  "code": "LAW42030",
  "title": "Unjust Enrichment"
}, {
  "code": "LAW42230",
  "title": "International Protection of Human Rights"
}, {
  "code": "LAW42330",
  "title": "International and Comparative Advertisement"
}, {
  "code": "LAW42415",
  "title": "Law and Conflict (E2)"
}, {
  "code": "LAW42715",
  "title": "Corporate Compliance"
}, {
  "code": "LAW42830",
  "title": "Introduction to International Criminal Justice"
}, {
  "code": "LAW43015",
  "title": "International Perspectives on Law and Gender"
}, {
  "code": "LAW43115",
  "title": "Introduction to Intellectual Property Law"
}, {
  "code": "LAW43215",
  "title": "Advanced Issues of International Intellectual Property Law"
}, {
  "code": "LAW43315",
  "title": "Free Speech Problems in International and Comparative Perspective"
}, {
  "code": "LAW43630",
  "title": "Corporations in an EU Context"
}, {
  "code": "LAW43730",
  "title": "Corporate Taxation"
}, {
  "code": "LAW43830",
  "title": "Fundamental Issues in International Legal Governance"
}, {
  "code": "LAW43930",
  "title": "Global Institutions"
}, {
  "code": "LAW44030",
  "title": "International Humanitarian Law"
}, {
  "code": "LAW44130",
  "title": "Law of the Sea"
}, {
  "code": "LAW44215",
  "title": "Comparative Law in a Global Context"
}, {
  "code": "LAW44330",
  "title": "Securities Law and Capital Markets"
}, {
  "code": "LAW44415",
  "title": "Takeover Regulation in the EU"
}, {
  "code": "LAW44530",
  "title": "Global Financial Law"
}, {
  "code": "LAW44630",
  "title": "US Business Associations"
}, {
  "code": "LAW44715",
  "title": "Fundamentals of International Law"
}, {
  "code": "LAW44815",
  "title": "Fundamental Issues in International Legal Governance"
}, {
  "code": "LAW44915",
  "title": "Global Environmental Law"
}, {
  "code": "LAW45015",
  "title": "International Counter-Terrorism: Theory and Practice"
}, {
  "code": "LAW45115",
  "title": "Private International Law and China"
}, {
  "code": "LAW45215",
  "title": "Horizontal Human Rights"
}, {
  "code": "LAW45315",
  "title": "Advanced Issues in Human Rights"
}, {
  "code": "LAW45415",
  "title": "Fundamentals of Corporate Law"
}, {
  "code": "LAW45515",
  "title": "Advanced Issues in Corporate Law"
}, {
  "code": "LAW45615",
  "title": "Medical Law and Ethics"
}, {
  "code": "LAW45715",
  "title": "Frontiers in Biolaw"
}, {
  "code": "LAW45830",
  "title": "The Protection of Human Rights in Europe - New Level 4/PG (30 credits)"
}, {
  "code": "LAW45915",
  "title": "International Tax Law"
}, {
  "code": "LAW46015",
  "title": "Consumption Tax Law and Policy"
}, {
  "code": "LAW46115",
  "title": "China & the International Legal Order"
}, {
  "code": "LAW52730",
  "title": "International Sales Law"
}, {
  "code": "LAW53015",
  "title": "Electronic Commerce"
}, {
  "code": "LAW53430",
  "title": "European Discrimination Law"
}, {
  "code": "LAW53630",
  "title": "Comparative Corporate Governance"
}, {
  "code": "LAW53730",
  "title": "Advanced Law of Obligations"
}, {
  "code": "LAW53815",
  "title": "Introduction to Corporate Governance"
}, {
  "code": "LAW54015",
  "title": "Commercial Fraud"
}, {
  "code": "LAW54660",
  "title": "Dissertation"
}, {
  "code": "LAW54675",
  "title": "Dissertation"
}, {
  "code": "LAW54690",
  "title": "Dissertation"
}, {
  "code": "LAW5999",
  "title": "Research Program in Law"
}, {
  "code": "LAWResearchSEM",
  "title": "Brexit: changes and challenges"
}, {
  "code": "LFA Accelerator",
  "title": "Languages for All Accelerator Courses"
}, {
  "code": "LFA Development",
  "title": "Languages for All Development Courses"
}, {
  "code": "LFA Intensive",
  "title": "Languages for All Intensive Courses"
}, {
  "code": "LFA Introductory",
  "title": "Languages for All Introductory Courses"
}, {
  "code": "LFA Progression",
  "title": "Languages for All Progression Courses"
}, {
  "code": "LIBA3996",
  "title": "Liberal Arts Abroad"
}, {
  "code": "MATH1031",
  "title": "Discrete Mathematics"
}, {
  "code": "MATH1051",
  "title": "Analysis I"
}, {
  "code": "MATH1061",
  "title": "Calculus I"
}, {
  "code": "MATH1071",
  "title": "Linear Algebra I"
}, {
  "code": "MATH1551",
  "title": "Maths For Engineers and Scientists"
}, {
  "code": "MATH1561",
  "title": "Single Mathematics A"
}, {
  "code": "MATH1571",
  "title": "Single Mathematics B"
}, {
  "code": "MATH1587",
  "title": "Programming I"
}, {
  "code": "MATH1597",
  "title": "Probability I"
}, {
  "code": "MATH1607",
  "title": "Dynamics I"
}, {
  "code": "MATH1617",
  "title": "Statistics I"
}, {
  "code": "MATH2011",
  "title": "Complex Analysis II"
}, {
  "code": "MATH2031",
  "title": "Analysis in Many Variables II"
}, {
  "code": "MATH2041",
  "title": "Statistical Concepts II"
}, {
  "code": "MATH2051",
  "title": "Numerical Analysis II"
}, {
  "code": "MATH2071",
  "title": "Mathematical Physics II"
}, {
  "code": "MATH2581",
  "title": "Algebra II"
}, {
  "code": "MATH2617",
  "title": "Elementary Number Theory II"
}, {
  "code": "MATH2627",
  "title": "Geometric Topology II"
}, {
  "code": "MATH2637",
  "title": "Mathematical Modelling II"
}, {
  "code": "MATH2647",
  "title": "Probability II"
}, {
  "code": "MATH2657",
  "title": "Special Relativity and Electromagnetism II"
}, {
  "code": "MATH2667",
  "title": "Monte Carlo II"
}, {
  "code": "MATH3011",
  "title": "Analysis Iii"
}, {
  "code": "MATH3021",
  "title": "Differential Geometry III"
}, {
  "code": "MATH3031",
  "title": "Number Theory Iii"
}, {
  "code": "MATH3041",
  "title": "Galois Theory III"
}, {
  "code": "MATH3051",
  "title": "Statistical Methods III"
}, {
  "code": "MATH3071",
  "title": "Decision Theory III"
}, {
  "code": "MATH3081",
  "title": "Numerical Differential Equations Iii"
}, {
  "code": "MATH3091",
  "title": "Dynamical Systems III"
}, {
  "code": "MATH3101",
  "title": "Continuum Mechanics III"
}, {
  "code": "MATH3111",
  "title": "Quantum Mechanics III"
}, {
  "code": "MATH3121",
  "title": "Mathematics Teaching III"
}, {
  "code": "MATH3141",
  "title": "Operations Research III"
}, {
  "code": "MATH3171",
  "title": "Mathematical Biology"
}, {
  "code": "MATH3201",
  "title": "Geometry Iii"
}, {
  "code": "MATH3211",
  "title": "Probability Iii"
}, {
  "code": "MATH3231",
  "title": "Solitons III"
}, {
  "code": "MATH3251",
  "title": "Stochastic Processes III"
}, {
  "code": "MATH3281",
  "title": "Topology III"
}, {
  "code": "MATH3291",
  "title": "Partial Differential Equations III"
}, {
  "code": "MATH3301",
  "title": "Mathematical Finance III"
}, {
  "code": "MATH3341",
  "title": "Bayesian Statistics III"
}, {
  "code": "MATH3351",
  "title": "Statistical Mechanics Iii"
}, {
  "code": "MATH3361",
  "title": "Topics in Statistics Iii"
}, {
  "code": "MATH3371",
  "title": "Representation Theory III"
}, {
  "code": "MATH3382",
  "title": "Project III"
}, {
  "code": "MATH3391",
  "title": "Quantum Information III"
}, {
  "code": "MATH3401",
  "title": "Cryptography and Codes III"
}, {
  "code": "MATH3976",
  "title": "Mathematics Placement module"
}, {
  "code": "MATH3986",
  "title": "Math (Euro) Level 3 Year Abroad"
}, {
  "code": "MATH3996",
  "title": "Study at Overseas University"
}, {
  "code": "MATH4031",
  "title": "Bayesian Statistics IV"
}, {
  "code": "MATH40340",
  "title": "Biomathematics Iii"
}, {
  "code": "MATH4041",
  "title": "Partial Differential Equations IV"
}, {
  "code": "MATH40415",
  "title": "Communicating Science"
}, {
  "code": "MATH4051",
  "title": "General Relativity IV"
}, {
  "code": "MATH40515",
  "title": "Mathematical Tools"
}, {
  "code": "MATH4061",
  "title": "Advanced Quantum Theory IV"
}, {
  "code": "MATH40615",
  "title": "Systems Biology and Bayesian Inference"
}, {
  "code": "MATH4071",
  "title": "Topics in Statistics Iv"
}, {
  "code": "MATH40715",
  "title": "Macrobiomolecule Dynamics"
}, {
  "code": "MATH4072",
  "title": "Project IV"
}, {
  "code": "MATH4081",
  "title": "Continuum Mechanics IV"
}, {
  "code": "MATH4091",
  "title": "Stochastic Processes IV"
}, {
  "code": "MATH4121",
  "title": "Solitons IV"
}, {
  "code": "MATH4131",
  "title": "Probability Iv"
}, {
  "code": "MATH4141",
  "title": "Geometry Iv"
}, {
  "code": "MATH4151",
  "title": "Topics in Algebra and Geometry IV"
}, {
  "code": "MATH4161",
  "title": "Algebraic Topology IV"
}, {
  "code": "MATH4171",
  "title": "Riemannian Geometry IV"
}, {
  "code": "MATH4181",
  "title": "Mathematical Finance IV"
}, {
  "code": "MATH4201",
  "title": "Analysis IV"
}, {
  "code": "MATH4221",
  "title": "Numerical Differential Equations Iv"
}, {
  "code": "MATH4231",
  "title": "Statistical Mechanics Iv"
}, {
  "code": "MATH4241",
  "title": "Representation Theory IV"
}, {
  "code": "MATH51260",
  "title": "Elementary Particle Theory II"
}, {
  "code": "MATH51360",
  "title": "Elementary Particle Theory Dissertation"
}, {
  "code": "MATH51460",
  "title": "Dissertation"
}, {
  "code": "MATH51760",
  "title": "Math Sciences II"
}, {
  "code": "MATH51860",
  "title": "Math Sciences I"
}, {
  "code": "MATH51930",
  "title": "Core IIA : Advanced Statistics and Machine Learning"
}, {
  "code": "MATH5999",
  "title": "Research Program in Mathematics"
}, {
  "code": "MATHNEW01",
  "title": "MATHNEW01"
}, {
  "code": "MATHNEW02",
  "title": "MATHNEW02"
}, {
  "code": "MATHNEW03",
  "title": "MATHNEW03"
}, {
  "code": "MATHNEW04",
  "title": "MATHNEW04"
}, {
  "code": "MATHNEW05",
  "title": "MATHNEW05"
}, {
  "code": "MATHSTAFF",
  "title": "Maths Staff Seminars"
}, {
  "code": "MEIS5999",
  "title": "Research Program in Middle East Stud"
}, {
  "code": "MELA10030",
  "title": "German Reading Skills for Research 1"
}, {
  "code": "MELA10130",
  "title": "French Reading Skills for Research 1"
}, {
  "code": "MELA10230",
  "title": "German Reading Skills for Research 2"
}, {
  "code": "MELA10330",
  "title": "French Reading Skills for Research 2"
}, {
  "code": "MELA10415",
  "title": "French for Business and Commerce"
}, {
  "code": "MELA10515",
  "title": "German for Business and Commerce"
}, {
  "code": "MELA10615",
  "title": "Spanish for Business and Commerce"
}, {
  "code": "MELA20040",
  "title": "Intensive Arabic"
}, {
  "code": "MELA2996",
  "title": "Modern Languages Study Abroad"
}, {
  "code": "MELA3152",
  "title": "Extended Dissertation in Modern Languages and Cultures"
}, {
  "code": "MELA3161",
  "title": "Dissertation in Modern Languages and Cultures"
}, {
  "code": "MELA3956",
  "title": "Target Language Research Project (Japanese)"
}, {
  "code": "MELA3966",
  "title": "Target Language Research Project (Chinese)"
}, {
  "code": "MELA3976",
  "title": "Target Language Research Project (Two Languages)"
}, {
  "code": "MELA3986",
  "title": "Target Language Research Project (Single Language)"
}, {
  "code": "MELA40112",
  "title": "Dissertation"
}, {
  "code": "MELA40130",
  "title": "Modes of Representation and Aesthetic Renewal in Modern French/Francophone Cultures"
}, {
  "code": "MELA40160",
  "title": "Translation Studies Dissertation"
}, {
  "code": "MELA40230",
  "title": "Conflict and Crisis in Modern French/Francophone Cultures"
}, {
  "code": "MELA40260",
  "title": "Extended Translation Project"
}, {
  "code": "MELA40330",
  "title": "Personal and Public Identities in 20th Century French/Francophone Cultures"
}, {
  "code": "MELA40360",
  "title": "Dissertation"
}, {
  "code": "MELA40430",
  "title": "Translation Theory"
}, {
  "code": "MELA40490",
  "title": "Dissertation"
}, {
  "code": "MELA40530",
  "title": "Modern French/Francophone Cultures and Theory"
}, {
  "code": "MELA40730",
  "title": "Photography and Otherness"
}, {
  "code": "MELA40760",
  "title": "Dissertation"
}, {
  "code": "MELA40930",
  "title": "Saints and Sinners: Praise and Blame of Women in Medieval and Renaissance Literature"
}, {
  "code": "MELA41230",
  "title": "Issues in Seventeenth Century Studies"
}, {
  "code": "MELA41290",
  "title": "Dissertation"
}, {
  "code": "MELA41330",
  "title": "Cultural Exchange in Seventeenth-century Europe"
}, {
  "code": "MELA41430",
  "title": "Translation Project <> First Language"
}, {
  "code": "MELA41530",
  "title": "Translation Project <> Second Language"
}, {
  "code": "MELA41630",
  "title": "Translation and Technology"
}, {
  "code": "MELA41730",
  "title": "Specialised Translation Chinese <> English"
}, {
  "code": "MELA41830",
  "title": "Specialised Translation French <> English"
}, {
  "code": "MELA41930",
  "title": "Specialised Translation German <> English"
}, {
  "code": "MELA42030",
  "title": "Specialised Translation Italian <> English"
}, {
  "code": "MELA42130",
  "title": "Specialised Translation Russian <> English"
}, {
  "code": "MELA42230",
  "title": "Specialised Translation Spanish <> English"
}, {
  "code": "MELA42330",
  "title": "Thinking Otherness"
}, {
  "code": "MELA42430",
  "title": "Representing Otherness"
}, {
  "code": "MELA42530",
  "title": "Negotiating the Human"
}, {
  "code": "MELA42630",
  "title": "Religion, Ethnicity and Otherness"
}, {
  "code": "MELA43215",
  "title": "Online Translation Resources"
}, {
  "code": "MELA43415",
  "title": "Translation Work Placement"
}, {
  "code": "MELA43515",
  "title": "Translation Memories"
}, {
  "code": "MELA43615",
  "title": "Editing and Revising for Translators"
}, {
  "code": "MELA43930",
  "title": "Specialised Translation Japanese<>English"
}, {
  "code": "MELA44230",
  "title": "Research Skills in the Digital Humanities (MA in Culture & Difference (Interdisciplinary))"
}, {
  "code": "MELA44615",
  "title": "Research Skills for Translation Studies"
}, {
  "code": "MELA44715",
  "title": "History of Translation"
}, {
  "code": "MELA45015",
  "title": "Conference Interpreting (Chinese<>English)"
}, {
  "code": "MELA45115",
  "title": "Consecutive/Liaison Interpreting (Chinese>English / English>Chinese)"
}, {
  "code": "MELA45230",
  "title": "Critical Curatorship"
}, {
  "code": "MELA45360",
  "title": "Visual Culture: Theory and Practice"
}, {
  "code": "MELA45460",
  "title": "Dissertation in Visual Arts and Culture"
}, {
  "code": "MELA45515",
  "title": "Translation Ethics and Intercultural Project Management"
}, {
  "code": "MELA45630",
  "title": "Visual Modernities"
}, {
  "code": "MELA45715",
  "title": "Interpreting (Arabic>English/English>Arabic)"
}, {
  "code": "MELA45830",
  "title": "Specialised Translation Arabic<>English"
}, {
  "code": "MELA45930",
  "title": "Critical Theory and Frameworks"
}, {
  "code": "MELA46015",
  "title": "Work Placement"
}, {
  "code": "MELA46130",
  "title": "Selected Topics of World Literature"
}, {
  "code": "MELA46230",
  "title": "Science, Technology and The Remaking of 'nature'"
}, {
  "code": "MELA46360",
  "title": "Dissertation (60 Credit)"
}, {
  "code": "MELA46490",
  "title": "Dissertation (90 Credit)"
}, {
  "code": "MELA46530",
  "title": "World Literature and Translation"
}, {
  "code": "MELA46630",
  "title": "Transnational Cinema"
}, {
  "code": "MELA46715",
  "title": "Introduction to Linguistics for Translation"
}, {
  "code": "MELA46830",
  "title": "Crossing Cultures: Word, Text and Image in Translation"
}, {
  "code": "MELA53560",
  "title": "Dissertation"
}, {
  "code": "MELA53730",
  "title": "Theorising History and Historicising Theory: An Introduction to Photographic Studies"
}, {
  "code": "MELA53830",
  "title": "Research Methods & Resources"
}, {
  "code": "MELA5999",
  "title": "Modern Languages Research"
}, {
  "code": "MELANEW03",
  "title": "MELANEW03"
}, {
  "code": "MELANEW04",
  "title": "MELANEW04"
}, {
  "code": "MELANEW05",
  "title": "MELANEW05"
}, {
  "code": "MELAOngoingInd1",
  "title": "On Going Induction - Level 1"
}, {
  "code": "MELAOngoingInd2",
  "title": "On Going Induction - Level 2"
}, {
  "code": "MELAStaffSem",
  "title": "MELA Staff Seminar"
}, {
  "code": "MELAStratGrp",
  "title": "Strategy Group"
}, {
  "code": "MUSI1211",
  "title": "Musical Techniques"
}, {
  "code": "MUSI1241",
  "title": "Performance 1: Practice through History"
}, {
  "code": "MUSI1251",
  "title": "Introduction to Ethnomusicology"
}, {
  "code": "MUSI1261",
  "title": "Historical Studies 1"
}, {
  "code": "MUSI1271",
  "title": "Composition 1: 20th Century Innovations"
}, {
  "code": "MUSI1281",
  "title": "Analysis 1: Elements of Tonal Theory and Practice"
}, {
  "code": "MUSI1291",
  "title": "Performance 1: Practice through History (with essay)"
}, {
  "code": "MUSI2311",
  "title": "Composition 2: New Directions in Art Music"
}, {
  "code": "MUSI2541",
  "title": "Orchestration"
}, {
  "code": "MUSI2581",
  "title": "Conducting"
}, {
  "code": "MUSI2601",
  "title": "Advanced Musical Techniques"
}, {
  "code": "MUSI2611",
  "title": "Theory and Analysis"
}, {
  "code": "MUSI2641",
  "title": "Creative Music Technology"
}, {
  "code": "MUSI2651",
  "title": "Studies in the History of Opera"
}, {
  "code": "MUSI2661",
  "title": "World Music Traditions"
}, {
  "code": "MUSI2671",
  "title": "Studies in Popular Music"
}, {
  "code": "MUSI2691",
  "title": "Historical Studies 2"
}, {
  "code": "MUSI2711",
  "title": "Performance 2: Practice as Research"
}, {
  "code": "MUSI2731",
  "title": "Music and Science"
}, {
  "code": "MUSI2751",
  "title": "Philosophy, Music and Improvisation"
}, {
  "code": "MUSI2761",
  "title": "Late 19th- and Early 20th-century English Song"
}, {
  "code": "MUSI2771",
  "title": "The Music of India"
}, {
  "code": "MUSI3041",
  "title": "Dissertation (Single Module)"
}, {
  "code": "MUSI3071",
  "title": "Composition (Single Module)"
}, {
  "code": "MUSI3312",
  "title": "Folio of Compositions"
}, {
  "code": "MUSI3332",
  "title": "Dissertation in Music (Double)"
}, {
  "code": "MUSI3601",
  "title": "The Music of India"
}, {
  "code": "MUSI3611",
  "title": "Contemporary Music Performance"
}, {
  "code": "MUSI3621",
  "title": "Performance 3: Recorded Performance Project (single)"
}, {
  "code": "MUSI3631",
  "title": "Time and Rhythm"
}, {
  "code": "MUSI3651",
  "title": "Britten's Chamber Operas"
}, {
  "code": "MUSI3661",
  "title": "Arts Management (Music)"
}, {
  "code": "MUSI3672",
  "title": "Performance 3: Public Performance Project (double)"
}, {
  "code": "MUSI3681",
  "title": "Studies in Electronic Music"
}, {
  "code": "MUSI3691",
  "title": "Advanced Ethnomusicology"
}, {
  "code": "MUSI3701",
  "title": "Psychology of Music"
}, {
  "code": "MUSI3711",
  "title": "Music Theology"
}, {
  "code": "MUSI3721",
  "title": "Studies in Symphonic Analysis"
}, {
  "code": "MUSI3731",
  "title": "Words and Music"
}, {
  "code": "MUSI3741",
  "title": "Music and Politics in France, 1789-1815"
}, {
  "code": "MUSI3751",
  "title": "Techniques Portfolio (single)"
}, {
  "code": "MUSI3762",
  "title": "Techniques Portfolio (double)"
}, {
  "code": "MUSI3771",
  "title": "Music and Empire"
}, {
  "code": "MUSI3976",
  "title": "Music Placement Module"
}, {
  "code": "MUSI3986",
  "title": "Study at Overseas University"
}, {
  "code": "MUSI3993",
  "title": "Music Study Abroad Module"
}, {
  "code": "MUSI40590",
  "title": "Dissertation"
}, {
  "code": "MUSI40830",
  "title": "Research Methods and Resources"
}, {
  "code": "MUSI40930",
  "title": "Core Research Seminars"
}, {
  "code": "MUSI41030",
  "title": "Contemporary Musicology"
}, {
  "code": "MUSI41130",
  "title": "Ethnomusicology in Practice and Theory"
}, {
  "code": "MUSI41230",
  "title": "Compositional Techniques"
}, {
  "code": "MUSI41330",
  "title": "Music Performance"
}, {
  "code": "MUSI41430",
  "title": "British Music 1850 - 1950"
}, {
  "code": "MUSI41530",
  "title": "Advanced Musical Analysis"
}, {
  "code": "MUSI41630",
  "title": "Practice and Theory of Choral Conducting"
}, {
  "code": "MUSI41730",
  "title": "Advanced Organ Studies"
}, {
  "code": "MUSI41830",
  "title": "Electronic Music"
}, {
  "code": "MUSI41930",
  "title": "Orchestration and Arranging"
}, {
  "code": "MUSI42030",
  "title": "Indian Music"
}, {
  "code": "MUSI42130",
  "title": "World Music Analyses"
}, {
  "code": "MUSI42230",
  "title": "Music, Mind and Culture"
}, {
  "code": "MUSI42330",
  "title": "Audiovisual Doc & Analysis"
}, {
  "code": "MUSI42460",
  "title": "Dissertation"
}, {
  "code": "MUSI42560",
  "title": "Portfolio of Compositions"
}, {
  "code": "MUSI42660",
  "title": "Performance Project"
}, {
  "code": "MUSI42760",
  "title": "Orchestration and Arranging Project"
}, {
  "code": "MUSI42830",
  "title": "Special Topic in Music"
}, {
  "code": "MUSI5999",
  "title": "Research Program in Music"
}, {
  "code": "MUSINEW03",
  "title": "New Music Module - 3"
}, {
  "code": "MUSINEW04",
  "title": "MUSINEW04"
}, {
  "code": "MUSINEW05",
  "title": "MUSINEW05"
}, {
  "code": "NSCI3976",
  "title": "Natural Sciences Placement BSc"
}, {
  "code": "NSCI3986",
  "title": "Natural Sciences Overseas BSc"
}, {
  "code": "NSCI3996",
  "title": "Natural Sciences Overseas"
}, {
  "code": "PHAR2016",
  "title": "Pharmacy Level 2"
}, {
  "code": "PHAR3016",
  "title": "Pharmacy Level 3"
}, {
  "code": "PHAR4023",
  "title": "Pharmacy Level 4 - A"
}, {
  "code": "PHAR4033",
  "title": "Pharmacy Level 4 - B"
}, {
  "code": "PHIL1011",
  "title": "Ethics and Values"
}, {
  "code": "PHIL1021",
  "title": "Knowledge and Reality"
}, {
  "code": "PHIL1041",
  "title": "Reading Philosophy"
}, {
  "code": "PHIL1091",
  "title": "The Philosophical Traditions"
}, {
  "code": "PHIL1101",
  "title": "European Philosophy"
}, {
  "code": "PHIL1111",
  "title": "Science, Medicine, and Society"
}, {
  "code": "PHIL2011",
  "title": "Philosophy of Mind"
}, {
  "code": "PHIL2021",
  "title": "Language, Logic and Reality"
}, {
  "code": "PHIL2031",
  "title": "Modern Philosophy I"
}, {
  "code": "PHIL2041",
  "title": "Moral Theory"
}, {
  "code": "PHIL2081",
  "title": "Political Philosophy"
}, {
  "code": "PHIL2091",
  "title": "Philosophy of Religion"
}, {
  "code": "PHIL2151",
  "title": "Philosophy of Science"
}, {
  "code": "PHIL2171",
  "title": "The Philosophy of Economics and Politics: Theory, Methods,and Values"
}, {
  "code": "PHIL2181",
  "title": "Fundamentals of Logics"
}, {
  "code": "PHIL2191",
  "title": "History, Science and Medicine"
}, {
  "code": "PHIL3011",
  "title": "Modern Philosophy II"
}, {
  "code": "PHIL3021",
  "title": "Philosophical Issues in Contemporary Science"
}, {
  "code": "PHIL3031",
  "title": "Aesthetics"
}, {
  "code": "PHIL3051",
  "title": "20th-Century European Philosophy"
}, {
  "code": "PHIL3071",
  "title": "Applied Ethics"
}, {
  "code": "PHIL3101",
  "title": "Philosophy Short Dissertation"
}, {
  "code": "PHIL3112",
  "title": "Philosophy Long Dissertation"
}, {
  "code": "PHIL3131",
  "title": "Issues in Contemporary Ethics"
}, {
  "code": "PHIL3171",
  "title": "Metaphysics"
}, {
  "code": "PHIL3181",
  "title": "History and Philosophy of Psychiatry"
}, {
  "code": "PHIL3191",
  "title": "Ethics in Business Practice"
}, {
  "code": "PHIL3201",
  "title": "Formal and Philosophical Logic"
}, {
  "code": "PHIL3211",
  "title": "Biomedical Ethics Past and Present"
}, {
  "code": "PHIL3993",
  "title": "Philosophy Study Abroad Module"
}, {
  "code": "PHIL3996",
  "title": "Study at Overseas University"
}, {
  "code": "PHIL40130",
  "title": "Philosophy, Science and Medicine in The Seventeenth Century"
}, {
  "code": "PHIL40230",
  "title": "Research Methods in History and Philosophy of Science and Medicine"
}, {
  "code": "PHIL40330",
  "title": "Science and the Enlightenment"
}, {
  "code": "PHIL40430",
  "title": "Philosophical Issues in Science and Medicine"
}, {
  "code": "PHIL40560",
  "title": "Dissertation"
}, {
  "code": "PHIL40630",
  "title": "Philosophy and Religion"
}, {
  "code": "PHIL40730",
  "title": "Current Issues in Metaphysics"
}, {
  "code": "PHIL40830",
  "title": "Current Issues in Ethics"
}, {
  "code": "PHIL40930",
  "title": "Gender Theory and Feminist Philosophy"
}, {
  "code": "PHIL41030",
  "title": "Phenomenology and The Sciences of Mind"
}, {
  "code": "PHIL41130",
  "title": "Current Issues in Aesthetics and Theory of Art"
}, {
  "code": "PHIL41330",
  "title": "Ethics, Medicine and History"
}, {
  "code": "PHIL41430",
  "title": "Mind and Action"
}, {
  "code": "PHIL41515",
  "title": "Business Ethics 1 : Ethical Leadership"
}, {
  "code": "PHIL41615",
  "title": "Business Ethics 2 : Society and Sustainability"
}, {
  "code": "PHIL41730",
  "title": "Philosophy of the Social Sciences"
}, {
  "code": "PHIL41830",
  "title": "Ethics of Cultural Heritage"
}, {
  "code": "PHIL41915",
  "title": "Moral and Corporate Trust: Trust and Accountability"
}, {
  "code": "PHIL42015",
  "title": "Moral and Corporate Trust: Trust and Business Ethics"
}, {
  "code": "PHIL42130",
  "title": "Environmental Philosophy"
}, {
  "code": "PHIL42230",
  "title": "Research Ethics"
}, {
  "code": "PHIL42330",
  "title": "Special Topic in Philosophy"
}, {
  "code": "PHIL51030",
  "title": "Philosophical Perspectives"
}, {
  "code": "PHIL52160",
  "title": "Philosophy Dissertation"
}, {
  "code": "PHIL5999",
  "title": "Research Program in Philosophy"
}, {
  "code": "PHILALLSTAFF",
  "title": "Department Research Seminar"
}, {
  "code": "PHILNEW05",
  "title": "PHILNEW05"
}, {
  "code": "PHYS1081",
  "title": "Introduction to Astronomy"
}, {
  "code": "PHYS1101",
  "title": "Discovery Skills in Physics"
}, {
  "code": "PHYS1122",
  "title": "Foundations of Physics 1"
}, {
  "code": "PHYS1141",
  "title": "Maths Toolkit for Scientists"
}, {
  "code": "PHYS2581",
  "title": "Foundations of Physics 2A"
}, {
  "code": "PHYS2591",
  "title": "Foundations of Physics 2B"
}, {
  "code": "PHYS2611",
  "title": "Mathematical Methods in Physics"
}, {
  "code": "PHYS2621",
  "title": "Stars and Galaxies"
}, {
  "code": "PHYS2631",
  "title": "Theoretical Physics 2"
}, {
  "code": "PHYS2641",
  "title": "Laboratory Skills and Electronics"
}, {
  "code": "PHYS2651",
  "title": "Physics in Society"
}, {
  "code": "PHYS3561",
  "title": "Computing Project"
}, {
  "code": "PHYS3581",
  "title": "Team Project"
}, {
  "code": "PHYS3591",
  "title": "Mathematics Workshop"
}, {
  "code": "PHYS3601",
  "title": "Laboratory Project"
}, {
  "code": "PHYS3611",
  "title": "Physics into Schools"
}, {
  "code": "PHYS3621",
  "title": "Foundations of Physics 3A"
}, {
  "code": "PHYS3631",
  "title": "Foundations of Physics 3B"
}, {
  "code": "PHYS3651",
  "title": "Planets and Cosmology 3"
}, {
  "code": "PHYS3661",
  "title": "Theoretical Physics 3"
}, {
  "code": "PHYS3671",
  "title": "Foundations of Physics 3C"
}, {
  "code": "PHYS3681",
  "title": "Laboratory Skills and Electronics 3"
}, {
  "code": "PHYS3691",
  "title": "Physics in Society 3"
}, {
  "code": "PHYS3701",
  "title": "BSc Project"
}, {
  "code": "PHYS3711",
  "title": "Condensed Matter Physics 3"
}, {
  "code": "PHYS3721",
  "title": "Modern Atomic and Optical Physics 3"
}, {
  "code": "PHYS3976",
  "title": "Physics Placement"
}, {
  "code": "PHYS3986",
  "title": "Physics (with year abroad)"
}, {
  "code": "PHYS3996",
  "title": "Physics Study Abroad"
}, {
  "code": "PHYS40115",
  "title": "Experimental Design and Analysis"
}, {
  "code": "PHYS4121",
  "title": "Atoms, Lasers and Qubits"
}, {
  "code": "PHYS4141",
  "title": "Advanced Theoretical Physics"
}, {
  "code": "PHYS4151",
  "title": "Advanced Condensed Matter Physics"
}, {
  "code": "PHYS4161",
  "title": "Advanced Astrophysics"
}, {
  "code": "PHYS4181",
  "title": "Particle Theory"
}, {
  "code": "PHYS4201",
  "title": "Theoretical Astrophysics"
}, {
  "code": "PHYS4213",
  "title": "Project"
}, {
  "code": "PHYS4231",
  "title": "Planets and Cosmology 4"
}, {
  "code": "PHYS4241",
  "title": "Theoretical Physics 4"
}, {
  "code": "PHYS4261",
  "title": "Foundations of Physics 4B"
}, {
  "code": "PHYS4271",
  "title": "Condensed Matter Physics 4"
}, {
  "code": "PHYS4281",
  "title": "Modern Atomic and Optical Physics 4"
}, {
  "code": "PHYS51160",
  "title": "Elementary Particle Theory I"
}, {
  "code": "PHYS51360",
  "title": "Elementary Particle Theory Dissertation"
}, {
  "code": "PHYS51430",
  "title": "Core I: Statistics, Machine Learning, Scientific and High Performance Computing"
}, {
  "code": "PHYS51545",
  "title": "Astrophysics"
}, {
  "code": "PHYS51645",
  "title": "Particle Physics"
}, {
  "code": "PHYS51715",
  "title": "Software Development Project"
}, {
  "code": "PHYS5999",
  "title": "Research Program in Physics"
}, {
  "code": "PHYSNEW02",
  "title": "PHYSNEW02"
}, {
  "code": "PHYSNEW03",
  "title": "PHYSNEW03"
}, {
  "code": "PHYSNEW04",
  "title": "PHYSNEW04"
}, {
  "code": "PHYSNEW05",
  "title": "PHYSNEW05"
}, {
  "code": "PPE3986",
  "title": "Philosophy, Politics and Economics with Work Placement"
}, {
  "code": "PPE3996",
  "title": "Philosophy, Politics and Economics Study Abroad"
}, {
  "code": "PRESESSSUMMER2019",
  "title": "Pre-sessional Teacher Collaboration (Summer 2019)"
}, {
  "code": "PRESESSSUMMER2020",
  "title": "Pre-sessional Teacher Collaboration (Summer 2020)"
}, {
  "code": "PRSEAP05",
  "title": "Pre-sessional 5 Week Course (Summer)"
}, {
  "code": "PRSEAP10",
  "title": "Pre-sessional 10 Week Course (Summer)"
}, {
  "code": "PRSEAP20",
  "title": "Pre-sessional 20 Week Course"
}, {
  "code": "PRSEAP30",
  "title": "Pre-sessional 30 Week Course"
}, {
  "code": "PSYC1061",
  "title": "Classic Papers: A Tutorial Introduction to Psychological Science"
}, {
  "code": "PSYC1062",
  "title": "Introduction to Psychological Research"
}, {
  "code": "PSYC1071",
  "title": "Introduction to Psychology I: Cognitive and BiologicalPsychology"
}, {
  "code": "PSYC1081",
  "title": "Introduction to Psychology 2: Developmental and SocialPsychology"
}, {
  "code": "PSYC2091",
  "title": "Research Methods in Psychology"
}, {
  "code": "PSYC2101",
  "title": "Statistics for Psychology"
}, {
  "code": "PSYC2121",
  "title": "Contemporary and Conceptual Issues in Psychology"
}, {
  "code": "PSYC2147",
  "title": "Social Psychology"
}, {
  "code": "PSYC2157",
  "title": "Individual Differences"
}, {
  "code": "PSYC2167",
  "title": "Historical and Conceptual Issues in Psychology"
}, {
  "code": "PSYC2177",
  "title": "Cognitive Psychology"
}, {
  "code": "PSYC2187",
  "title": "Biological Psychology"
}, {
  "code": "PSYC2197",
  "title": "Abnormal Psychology"
}, {
  "code": "PSYC2207",
  "title": "Developmental Psychology"
}, {
  "code": "PSYC2217",
  "title": "Statistics and Project Design for Non-Single Honours"
}, {
  "code": "PSYC3102",
  "title": "Psychology Dissertation"
}, {
  "code": "PSYC3151",
  "title": "Brain and Cognition"
}, {
  "code": "PSYC3171",
  "title": "Emotion and Social Cognition"
}, {
  "code": "PSYC3181",
  "title": "The Visual Brain"
}, {
  "code": "PSYC3201",
  "title": "Learning and Animal Cognition"
}, {
  "code": "PSYC3211",
  "title": "Psychology Literature Review"
}, {
  "code": "PSYC3247",
  "title": "Cognitive Neuropsychology"
}, {
  "code": "PSYC3257",
  "title": "Child Health in a Social Context"
}, {
  "code": "PSYC3267",
  "title": "Fetal Development"
}, {
  "code": "PSYC3277",
  "title": "Human Evolutionary Psychology"
}, {
  "code": "PSYC3287",
  "title": "Neuropsychology of Memory Beyond Amnesia"
}, {
  "code": "PSYC3297",
  "title": "Neuropsychology of Amnesia"
}, {
  "code": "PSYC3337",
  "title": "The Multisensory Body"
}, {
  "code": "PSYC3347",
  "title": "Cognitive Development"
}, {
  "code": "PSYC3357",
  "title": "Applied Social Psychology"
}, {
  "code": "PSYC3367",
  "title": "Fallacies and Biases: Social Cognitive Perspectives"
}, {
  "code": "PSYC3398",
  "title": "Psychology Project and Statistics"
}, {
  "code": "PSYC3401",
  "title": "Emotion and Social Perception"
}, {
  "code": "PSYC3411",
  "title": "Clinical Neuropsychology"
}, {
  "code": "PSYC3427",
  "title": "Face Recognition"
}, {
  "code": "PSYC3983",
  "title": "Psychology Placement Module"
}, {
  "code": "PSYC3993",
  "title": "Psychology Study Abroad Module"
}, {
  "code": "PSYC3996",
  "title": "Study at Overseas University"
}, {
  "code": "PSYC40130",
  "title": "Applied Statistics"
}, {
  "code": "PSYC40215",
  "title": "Research Practice"
}, {
  "code": "PSYC40315",
  "title": "Research Design in Child and Clinical Psychology"
}, {
  "code": "PSYC40515",
  "title": "Critical Analysis"
}, {
  "code": "PSYC41330",
  "title": "Techniques in Cognitive Neuroscience"
}, {
  "code": "PSYC41430",
  "title": "Current Issues in Developmental Psychology & Psychopathology"
}, {
  "code": "PSYC41630",
  "title": "Current Issues in Cognitive Neuroscience"
}, {
  "code": "PSYC41715",
  "title": "Advanced Developmental Psychology Review"
}, {
  "code": "PSYC41730",
  "title": "Advanced Developmental Psychology Review"
}, {
  "code": "PSYC41830",
  "title": "Advanced Topics in Behavioural Science"
}, {
  "code": "PSYC41915",
  "title": "Behavioural Insights for Public Policy"
}, {
  "code": "PSYC42015",
  "title": "Diversity and Inclusion in Practice"
}, {
  "code": "PSYC42115",
  "title": "Power and Influence"
}, {
  "code": "PSYC50260",
  "title": "Dissertation"
}, {
  "code": "PSYC5999",
  "title": "Research Program in Psychology"
}, {
  "code": "PSYCNEW01",
  "title": "PSYCNEW01"
}, {
  "code": "PSYCNEW02",
  "title": "PSYCNEW02"
}, {
  "code": "PSYCNEW03",
  "title": "PSYCNEW03"
}, {
  "code": "PSYCNEW04",
  "title": "PSYCNEW04"
}, {
  "code": "PSYCNEW05",
  "title": "PSYCNEW05"
}, {
  "code": "PSYCSTAFF",
  "title": "PSYC Staff Seminar"
}, {
  "code": "PSYS2111",
  "title": "Abnormal and Social Psychology"
}, {
  "code": "PSYS2121",
  "title": "Neuropsychology and Perceptual Processes"
}, {
  "code": "PSYS2131",
  "title": "Development and Cognition"
}, {
  "code": "PSYS2171",
  "title": "Differential Psychology"
}, {
  "code": "PSYS3012",
  "title": "Applied Psychology Dissertation"
}, {
  "code": "PSYS3031",
  "title": "Applications of Cognitive Psychology"
}, {
  "code": "PSYS3111",
  "title": "Advanced Research Methods for Applied Psychology"
}, {
  "code": "PSYS3161",
  "title": "The Science of Consciousness"
}, {
  "code": "PSYS3221",
  "title": "Psychology into Schools"
}, {
  "code": "PSYS3251",
  "title": "Psychology in the Workplace"
}, {
  "code": "PSYS3277",
  "title": "Forensic Psychology"
}, {
  "code": "PSYS3287",
  "title": "Mind, Brain and Consciousness"
}, {
  "code": "PSYS3297",
  "title": "Psychology and Health Promotion"
}, {
  "code": "PSYS3307",
  "title": "Psychopathy"
}, {
  "code": "PSYS3327",
  "title": "Sport & Exercise Psychology"
}, {
  "code": "PSYS3347",
  "title": "The Psychology of Illness"
}, {
  "code": "PSYS3357",
  "title": "Advanced Statistical Approaches"
}, {
  "code": "PSYS3367",
  "title": "Reward and Addiction"
}, {
  "code": "PSYS3377",
  "title": "Psychological Practice"
}, {
  "code": "PSYS3996",
  "title": "Study at Overseas University"
}, {
  "code": "RUSS1042",
  "title": "Russian Language 1B"
}, {
  "code": "RUSS1151",
  "title": "Introduction to Russian History & Culture"
}, {
  "code": "RUSS1161",
  "title": "Russian Language 1A"
}, {
  "code": "RUSS1171",
  "title": "Understanding Russia: Arts and Ideologies"
}, {
  "code": "RUSS2012",
  "title": "Russian Language 2B"
}, {
  "code": "RUSS2191",
  "title": "Russian Language 2A"
}, {
  "code": "RUSS2231",
  "title": "Reading Russian Literature"
}, {
  "code": "RUSS2241",
  "title": "Russian and Soviet Cinema"
}, {
  "code": "RUSS2261",
  "title": "St Petersburg-Petrograd-Leningrad:Culture, Memory, Mythology"
}, {
  "code": "RUSS2271",
  "title": "Russia\x92s Linguistic Journey Through Texts and Patterns"
}, {
  "code": "RUSS3031",
  "title": "Russian Language 4"
}, {
  "code": "RUSS3371",
  "title": "The Poet and the State"
}, {
  "code": "RUSS3381",
  "title": "Russian for Professional Communication"
}, {
  "code": "RUSS3391",
  "title": "The Making of the Russian Intelligentsia (1762-1917)"
}, {
  "code": "RUSS3411",
  "title": "Screening the Nation: Russian Cinema and the National Question"
}, {
  "code": "RUSS3421",
  "title": "Literature and Society in the Age of Pushkin"
}, {
  "code": "RUSS5999",
  "title": "Research Program in Russian"
}, {
  "code": "RUSSNEW01",
  "title": "RUSSNEW01"
}, {
  "code": "RUSSNEW02",
  "title": "RUSSNEW02"
}, {
  "code": "RUSSNEW03",
  "title": "RUSSNEW03"
}, {
  "code": "RUSSNEW04",
  "title": "RUSSNEW04"
}, {
  "code": "RUSSNEW05",
  "title": "RUSSNEW05"
}, {
  "code": "SGIA1071",
  "title": "International Security, Interdependence and Organisation"
}, {
  "code": "SGIA1081",
  "title": "Global Regions in International Relations"
}, {
  "code": "SGIA1191",
  "title": "Democratic Political Systems"
}, {
  "code": "SGIA1201",
  "title": "Researching Politics and International Relations"
}, {
  "code": "SGIA1211",
  "title": "Introduction to Comparative Politics"
}, {
  "code": "SGIA1221",
  "title": "Introduction to International Relations"
}, {
  "code": "SGIA1231",
  "title": "Political Theory"
}, {
  "code": "SGIA2131",
  "title": "International Theory"
}, {
  "code": "SGIA2161",
  "title": "The Politics of Pacific Asia"
}, {
  "code": "SGIA2171",
  "title": "Foundations of Western Political Thought"
}, {
  "code": "SGIA2261",
  "title": "International Organisations"
}, {
  "code": "SGIA2281",
  "title": "Sovereignty, State and Empire"
}, {
  "code": "SGIA2301",
  "title": "Global Political Economy"
}, {
  "code": "SGIA2311",
  "title": "Middle East in the International System"
}, {
  "code": "SGIA2321",
  "title": "DemocraticTheory"
}, {
  "code": "SGIA2341",
  "title": "Research Project"
}, {
  "code": "SGIA2351",
  "title": "Class, Nation and British Politics"
}, {
  "code": "SGIA2361",
  "title": "Analytical Politics"
}, {
  "code": "SGIA2371",
  "title": "Crises and Conflict in European Politics"
}, {
  "code": "SGIA3142",
  "title": "Dissertation in Politics"
}, {
  "code": "SGIA3271",
  "title": "Muslims and Politics in the Modern World"
}, {
  "code": "SGIA3381",
  "title": "China in Global Political Economy"
}, {
  "code": "SGIA3421",
  "title": "Israel: Politics and Society"
}, {
  "code": "SGIA3441",
  "title": "Elections and British Politics"
}, {
  "code": "SGIA3461",
  "title": "Parties, MPs, and Parliamentary Politics in Britain"
}, {
  "code": "SGIA3501",
  "title": "Advanced Topics in International Political Theory"
}, {
  "code": "SGIA3511",
  "title": "Political Psychology in International Relations"
}, {
  "code": "SGIA3521",
  "title": "Special Topic on Pacific Asia"
}, {
  "code": "SGIA3531",
  "title": "Special Topic on US Politics"
}, {
  "code": "SGIA3541",
  "title": "Advanced Topics in International Relations"
}, {
  "code": "SGIA3551",
  "title": "Origins of Political Institutions"
}, {
  "code": "SGIA3561",
  "title": "Social and Political Philosophy"
}, {
  "code": "SGIA3571",
  "title": "Special Topic on European Union Politics"
}, {
  "code": "SGIA3591",
  "title": "Politics into Schools"
}, {
  "code": "SGIA3611",
  "title": "Women in Politics: from Past to Present"
}, {
  "code": "SGIA3621",
  "title": "Not running in 1920 - Youth and Youth Policy in the Global Political Economy"
}, {
  "code": "SGIA3631",
  "title": "Expanding Sphere of Justice: The Ethics of Race, Disability, Species and Children"
}, {
  "code": "SGIA3641",
  "title": "The Theory and Ethics of Political Violence"
}, {
  "code": "SGIA3661",
  "title": "International Relations Theory in International Practice: History, Geography and Ideas"
}, {
  "code": "SGIA3993",
  "title": "SGIA Study Abroad module"
}, {
  "code": "SGIA3996",
  "title": "Politics Study Abroad"
}, {
  "code": "SGIA40115",
  "title": "German Foreign Policy"
}, {
  "code": "SGIA40145",
  "title": "Dissertation"
}, {
  "code": "SGIA40160",
  "title": "Dissertation (Arab World Studies With Arabic)"
}, {
  "code": "SGIA40215",
  "title": "Collective Identities and Political Thought in Britain since 1850"
}, {
  "code": "SGIA40315",
  "title": "Just War in Political Theory and Practice"
}, {
  "code": "SGIA40475",
  "title": "Dissertation"
}, {
  "code": "SGIA40515",
  "title": "Political Ideology"
}, {
  "code": "SGIA40560",
  "title": "Dissertation"
}, {
  "code": "SGIA40815",
  "title": "Human Rights"
}, {
  "code": "SGIA41015",
  "title": "Strategic Asia: Policy and Analysis"
}, {
  "code": "SGIA41115",
  "title": "International Relations and Security in the Middle East"
}, {
  "code": "SGIA41415",
  "title": "America and the World: The Making of US Foreign Policy"
}, {
  "code": "SGIA41715",
  "title": "Methodology in The Social Sciences"
}, {
  "code": "SGIA42015",
  "title": "European Institutions and the Policy Process"
}, {
  "code": "SGIA42215",
  "title": "European Security"
}, {
  "code": "SGIA42315",
  "title": "Political Economy and Development of Chinese Business"
}, {
  "code": "SGIA42415",
  "title": "Capstone Exercise: Humanitarian Intervention Simulation (M5)"
}, {
  "code": "SGIA42515",
  "title": "Defence, Development and Diplomacy in Conflict: EvolvingActors, Factors and Paradigms"
}, {
  "code": "SGIA42615",
  "title": "Conflict Prevention and Sustainable Peace"
}, {
  "code": "SGIA42715",
  "title": "International Law and Conflict Intervention"
}, {
  "code": "SGIA42815",
  "title": "Peace Processes and Everyday Political Negotiation"
}, {
  "code": "SGIA42915",
  "title": "Post-Conflict Reconstruction and State-Building"
}, {
  "code": "SGIA43015",
  "title": "Consolidating Peace After Violence"
}, {
  "code": "SGIA43215",
  "title": "Field Trip (E10)"
}, {
  "code": "SGIA43315",
  "title": "Religion, Culture and Conflict"
}, {
  "code": "SGIA43415",
  "title": "International Negotiation"
}, {
  "code": "SGIA43515",
  "title": "Conflict Mediation (E6)"
}, {
  "code": "SGIA43715",
  "title": "Conflict Sensitive Programme Management"
}, {
  "code": "SGIA43815",
  "title": "Urban Violence - Urban Peacebuilding"
}, {
  "code": "SGIA43915",
  "title": "Approaches to the Study of Modern Muslim Societies"
}, {
  "code": "SGIA44015",
  "title": "Contemporary Sociopolitical Issues and Muslim ReligiousThought"
}, {
  "code": "SGIA44615",
  "title": "Research Methods and Dissertation Production"
}, {
  "code": "SGIA45015",
  "title": "Nationalism, Revolution and Reform in Contemporary China"
}, {
  "code": "SGIA45315",
  "title": "The Contemporary Politics of the Middle East"
}, {
  "code": "SGIA45615",
  "title": "The Political Economy of Development in the Middle East"
}, {
  "code": "SGIA46015",
  "title": "Collective Memory and Identity in Postwar Europe"
}, {
  "code": "SGIA46115",
  "title": "The European Union as a Global Actor"
}, {
  "code": "SGIA46315",
  "title": "Issues in the Politics of Military Occupation"
}, {
  "code": "SGIA46515",
  "title": "Theories of Capitalism"
}, {
  "code": "SGIA46715",
  "title": "Theoretical Approaches to Global Governance"
}, {
  "code": "SGIA46815",
  "title": "Global Governance Institutions"
}, {
  "code": "SGIA46915",
  "title": "Ethical Aspects of Global Governance"
}, {
  "code": "SGIA47015",
  "title": "Theories of Global Justice"
}, {
  "code": "SGIA47160",
  "title": "Dissertation"
}, {
  "code": "SGIA47315",
  "title": "Policing Post-Conflict Cities"
}, {
  "code": "SGIA47415",
  "title": "Conflict Analysis"
}, {
  "code": "SGIA47515",
  "title": "Participatory Approaches to Peace and Development"
}, {
  "code": "SGIA47615",
  "title": "Model United Nations"
}, {
  "code": "SGIA47730",
  "title": "International Relations Theory"
}, {
  "code": "SGIA47815",
  "title": "Defence Engagement: Policies and Strategies"
}, {
  "code": "SGIA47960",
  "title": "Dissertation (Research Methods)"
}, {
  "code": "SGIA48030",
  "title": "Core Concepts in Political Science"
}, {
  "code": "SGIA48115",
  "title": "Empirical Research in Politics, International Relations andSecurity"
}, {
  "code": "SGIA48215",
  "title": "Ethnicity and Nation in East Asia"
}, {
  "code": "SGIA48315",
  "title": "Transitory Lives - Migration, Research and Advocacy"
}, {
  "code": "SGIA48415",
  "title": "Gender, Security and Postconflict Reconstruction"
}, {
  "code": "SGIA48515",
  "title": "'Curating Human Remains' : Dealing with the Legacy of War and Disaster from Archaeological Perspectives"
}, {
  "code": "SGIA48615",
  "title": "Introduction to the Law and Practice of International Criminal Justice"
}, {
  "code": "SGIA48715",
  "title": "Capturing and Counting Peace and Conflict"
}, {
  "code": "SGIA48815",
  "title": "Contemporary Challenges in United Nations Peacekeeping"
}, {
  "code": "SGIA48930",
  "title": "Designing Political Inquiry"
}, {
  "code": "SGIA49030",
  "title": "Debating the European Union"
}, {
  "code": "SGIA49130",
  "title": "Global Governance"
}, {
  "code": "SGIA49230",
  "title": "Global Political Theory"
}, {
  "code": "SGIA49330",
  "title": "Ideologies and Political Thought"
}, {
  "code": "SGIA49430",
  "title": "International Organisations"
}, {
  "code": "SGIA49530",
  "title": "International Politics of the Middle East"
}, {
  "code": "SGIA49630",
  "title": "International Relations Theory"
}, {
  "code": "SGIA49730",
  "title": "The Politics of East Asia"
}, {
  "code": "SGIA49830",
  "title": "Contemporary Political Philosophy"
}, {
  "code": "SGIA49860",
  "title": "Dissertation"
}, {
  "code": "SGIA5999",
  "title": "Dissertation"
}, {
  "code": "SGIACHSTUD",
  "title": "Contemporary Chinese Studies"
}, {
  "code": "SGIADGSI",
  "title": "DGSI Additional"
}, {
  "code": "SGIALEVEL1",
  "title": "Year Tutor Class Level 1"
}, {
  "code": "SGIALEVEL2",
  "title": "Year Tutor Class Level 2"
}, {
  "code": "SGIALEVEL3",
  "title": "Year Tutor Class Level 3"
}, {
  "code": "SGIANERD",
  "title": "North East Researcher Development"
}, {
  "code": "SGIAPOLITH",
  "title": "Political Thought"
}, {
  "code": "SGIAResSem",
  "title": "PG Research Seminars"
}, {
  "code": "SOCI1312",
  "title": "Societies in Transition"
}, {
  "code": "SOCI1321",
  "title": "Social Research Methods"
}, {
  "code": "SOCI1331",
  "title": "Classical Sociological Society"
}, {
  "code": "SOCI1391",
  "title": "Introduction to Criminological Theory"
}, {
  "code": "SOCI1411",
  "title": "Critical Scholarship in Social Sciences"
}, {
  "code": "SOCI1421",
  "title": "The Criminal Justice Landscape"
}, {
  "code": "SOCI2111",
  "title": "Self, Identity and Society"
}, {
  "code": "SOCI2221",
  "title": "Policing and Police"
}, {
  "code": "SOCI2231",
  "title": "Contemporary Criminological Theory"
}, {
  "code": "SOCI2252",
  "title": "Research Methods in Action"
}, {
  "code": "SOCI2261",
  "title": "Modern and Contemporary Sociological Theory"
}, {
  "code": "SOCI2271",
  "title": "Sociology of Education"
}, {
  "code": "SOCI2281",
  "title": "Violence and Abuse in Society"
}, {
  "code": "SOCI2291",
  "title": "Social Dimensions of Disaster"
}, {
  "code": "SOCI2301",
  "title": "Communities and Social Justice"
}, {
  "code": "SOCI2996",
  "title": "Sociology Study Abroad"
}, {
  "code": "SOCI30220",
  "title": "Practice Education (stage 1)"
}, {
  "code": "SOCI3112",
  "title": "Dissertation"
}, {
  "code": "SOCI3271",
  "title": "Sociology of Health and Medicine"
}, {
  "code": "SOCI3341",
  "title": "Issues in Criminal Justice"
}, {
  "code": "SOCI3351",
  "title": "Rural Sociology and Social Policy"
}, {
  "code": "SOCI3381",
  "title": "Sociology of Forensic Science and Criminal Investigation"
}, {
  "code": "SOCI3421",
  "title": "Social Policy: Principles and Current Issues"
}, {
  "code": "SOCI3461",
  "title": "Cyberculture and Cybercrime"
}, {
  "code": "SOCI3481",
  "title": "Drugs, Crime and Society"
}, {
  "code": "SOCI3491",
  "title": "Sociology of Work and Professions"
}, {
  "code": "SOCI3501",
  "title": "Crime, Justice and the Sex Industry"
}, {
  "code": "SOCI3511",
  "title": "Community Placement"
}, {
  "code": "SOCI3521",
  "title": "Young People, Crime and Justice"
}, {
  "code": "SOCI3541",
  "title": "Communities and Social Justice"
}, {
  "code": "SOCI3966",
  "title": "Sociology Abroad Module"
}, {
  "code": "SOCI3993",
  "title": "Sociology Study Abroad module"
}, {
  "code": "SOCI40030",
  "title": "Social Work Practice 1"
}, {
  "code": "SOCI40245",
  "title": "Research in Professional Practice"
}, {
  "code": "SOCI40345",
  "title": "Research in Social Work"
}, {
  "code": "SOCI40530",
  "title": "Theorising Crime and Criminal Justice"
}, {
  "code": "SOCI40630",
  "title": "Gender, Violence and Abuse"
}, {
  "code": "SOCI41030",
  "title": "Cybercrime and Cyberculture"
}, {
  "code": "SOCI41160",
  "title": "Dissertation in Criminology"
}, {
  "code": "SOCI41615",
  "title": "Practitioner Research"
}, {
  "code": "SOCI41730",
  "title": "Sociology of Forensic Science and Criminal Investigation"
}, {
  "code": "SOCI41940",
  "title": "Social Work in Context"
}, {
  "code": "SOCI42040",
  "title": "Social Work in Practice"
}, {
  "code": "SOCI42150",
  "title": "Social Work Practice 1"
}, {
  "code": "SOCI42230",
  "title": "Advanced Social Work"
}, {
  "code": "SOCI42370",
  "title": "Social Work Practice 2"
}, {
  "code": "SOCI42530",
  "title": "Drugs, Crime and Society"
}, {
  "code": "SOCI42610",
  "title": "Practice Education (stage 2)"
}, {
  "code": "SOCI42930",
  "title": "Crime, Justice and the Sex Industry"
}, {
  "code": "SOCI43030",
  "title": "Professional and Personal Development"
}, {
  "code": "SOCI43330",
  "title": "Social Work: Context and Practice"
}, {
  "code": "SOCI43460",
  "title": "Dissertation"
}, {
  "code": "SOCI43530",
  "title": "Prisons, Crime and Justice"
}, {
  "code": "SOCI43615",
  "title": "Intermediate Statistics for Social Science Research"
}, {
  "code": "SOCI43715",
  "title": "Participatory Action Research"
}, {
  "code": "SOCI43830",
  "title": "Young People, Crime and Justice"
}, {
  "code": "SOCI51315",
  "title": "Community Development and Organising"
}, {
  "code": "SOCI54630",
  "title": "Contemporary Sociological Theory and Social Transformation"
}, {
  "code": "SOCI57515",
  "title": "Policy Related and Evaluation Research"
}, {
  "code": "SOCI57615",
  "title": "Categorical Data Analysis with SPSS and R"
}, {
  "code": "SOCI57815",
  "title": "Quantitative Research Methods"
}, {
  "code": "SOCI58815",
  "title": "Qualitative Methods in Social Science"
}, {
  "code": "SOCI59215",
  "title": "Statistical Exploration and Reasoning"
}, {
  "code": "SOCI59415",
  "title": "Research design and process"
}, {
  "code": "SOCI59515",
  "title": "Perspectives on Social Research"
}, {
  "code": "SOCI59630",
  "title": "Social Policy and Society"
}, {
  "code": "SOCI5999",
  "title": "Research Program in Sociology"
}, {
  "code": "SOCINEW02",
  "title": "SOCINEW02"
}, {
  "code": "SOCINEW03",
  "title": "SOCINEW03"
}, {
  "code": "SOCINEW04",
  "title": "SOCINEW04"
}, {
  "code": "SOCINEW05",
  "title": "SOCINEW05"
}, {
  "code": "SPAN1011",
  "title": "Spanish Language 1A"
}, {
  "code": "SPAN1072",
  "title": "Spanish Language 1B"
}, {
  "code": "SPAN1131",
  "title": "Conflict and Violence in the Spanish Speaking World"
}, {
  "code": "SPAN1141",
  "title": "Identity in the Spanish Speaking World"
}, {
  "code": "SPAN1161",
  "title": "Introduction to Hispanic Literature and Culture (postA-level)"
}, {
  "code": "SPAN1171",
  "title": "Introduction to Hispanic Literature and Culture (ab initio)"
}, {
  "code": "SPAN2011",
  "title": "Spanish Language 2A"
}, {
  "code": "SPAN2061",
  "title": "Catalan (Beginners)"
}, {
  "code": "SPAN2071",
  "title": "Latin American Texts"
}, {
  "code": "SPAN2081",
  "title": "Spanish Texts"
}, {
  "code": "SPAN2111",
  "title": "Spanish Language 2B"
}, {
  "code": "SPAN2151",
  "title": "Icons and Myths of the Hispanic World"
}, {
  "code": "SPAN2161",
  "title": "Race and Gender in Latin American Cinema"
}, {
  "code": "SPAN2171",
  "title": "Love and Death in Spanish Texts"
}, {
  "code": "SPAN3011",
  "title": "Spanish Language 4"
}, {
  "code": "SPAN3041",
  "title": "Modern Spanish Literature"
}, {
  "code": "SPAN3131",
  "title": "Spanish Translation"
}, {
  "code": "SPAN3151",
  "title": "Sex and Society in Spanish Literature to 1700"
}, {
  "code": "SPAN3181",
  "title": "Contemporary Spanish Cinema"
}, {
  "code": "SPAN3211",
  "title": "Catalan [Advanced]"
}, {
  "code": "SPAN3221",
  "title": "Epic and Chronicle: The Making of History inMedieval Spain"
}, {
  "code": "SPAN3291",
  "title": "Transnationalism and Linguistic Contact in theHispanic World"
}, {
  "code": "SPAN3301",
  "title": "The Cultures of the Hispanic Caribbean: Texts andTheoretical Frameworks"
}, {
  "code": "SPAN3311",
  "title": "Representing Women: Sex and Power in Colonial Latin America"
}, {
  "code": "SPAN3321",
  "title": "Kino-Texts: Atlantic Avant-Gardes and Visual Cultures"
}, {
  "code": "SPAN3331",
  "title": "Tilting at Windmills: Cervantes in Context"
}, {
  "code": "SPAN3341",
  "title": "Modern Latin American Literature"
}, {
  "code": "SPAN3351",
  "title": "Latin American Environmental Politics: Cinema and VisualCulture"
}, {
  "code": "SPAN5999",
  "title": "Research Program in Spanish"
}, {
  "code": "SPANNEW03",
  "title": "New Spanish Module - 3"
}, {
  "code": "SPANNEW04",
  "title": "SPANNEW04"
}, {
  "code": "SPANNEW05",
  "title": "SPANNEW05"
}, {
  "code": "SPRT1261",
  "title": "Introduction to Sport Psychology"
}, {
  "code": "SPRT1271",
  "title": "Sport, Culture and Society"
}, {
  "code": "SPRT1281",
  "title": "Introduction to Exercise Physiology"
}, {
  "code": "SPRT1311",
  "title": "Introduction to Physical Activity, Diet and Health"
}, {
  "code": "SPRT1321",
  "title": "Critical Skills for Sport and Exercise Sciences"
}, {
  "code": "SPRT1331",
  "title": "Introduction to Sport and Exercise Industries"
}, {
  "code": "SPRT2231",
  "title": "Sports Development"
}, {
  "code": "SPRT2251",
  "title": "Sport and Exercise Physiology"
}, {
  "code": "SPRT2271",
  "title": "Physical Activity and Health Psychology"
}, {
  "code": "SPRT2291",
  "title": "Sport, Crime and Deviance"
}, {
  "code": "SPRT2301",
  "title": "Sport, Physical Activity and Society"
}, {
  "code": "SPRT2311",
  "title": "Media, Sport and Society"
}, {
  "code": "SPRT2411",
  "title": "Developing Movement Skills"
}, {
  "code": "SPRT2432",
  "title": "Contemporary Research in Sport and Exercise Sciences"
}, {
  "code": "SPRT3141",
  "title": "Sport Policy in Action"
}, {
  "code": "SPRT3151",
  "title": "Exercise Programmes for Health and Performance"
}, {
  "code": "SPRT3172",
  "title": "Dissertation"
}, {
  "code": "SPRT3191",
  "title": "Applied Sport Psychology"
}, {
  "code": "SPRT3201",
  "title": "Sport in the Community Placement"
}, {
  "code": "SPRT3211",
  "title": "Nutrition for Sport, Physical Activity and Health"
}, {
  "code": "SPRT3221",
  "title": "Advanced Sociological Perspectives on Sport, Exercise andPhysical Activity"
}, {
  "code": "SPRT3986",
  "title": "Sport Placement Module"
}, {
  "code": "SPRT3996",
  "title": "Sport Study Abroad"
}, {
  "code": "SPRT5999",
  "title": "Research Program in Sport"
}, {
  "code": "SPRTNEW03",
  "title": "SPRTNEW03"
}, {
  "code": "SPRTNEW04",
  "title": "SPRTNEW04"
}, {
  "code": "SPRTNEW05",
  "title": "SPRTNEW05"
}, {
  "code": "THEO1011",
  "title": "Old Testament"
}, {
  "code": "THEO1121",
  "title": "Introduction to The New Testament"
}, {
  "code": "THEO1131",
  "title": "Worldview, Faith and Identity"
}, {
  "code": "THEO1151",
  "title": "Biblical Hebrew"
}, {
  "code": "THEO1161",
  "title": "New Testament Greek"
}, {
  "code": "THEO1171",
  "title": "Introduction to the History of Christianity"
}, {
  "code": "THEO1191",
  "title": "Introduction to Christian Theology"
}, {
  "code": "THEO1901",
  "title": "God and Evil"
}, {
  "code": "THEO1911",
  "title": "Reading Biblical Texts"
}, {
  "code": "THEO1921",
  "title": "God and the Good; Philosophy of Religion and Ethics"
}, {
  "code": "THEO1931",
  "title": "Introduction to Biblical Study"
}, {
  "code": "THEO1951",
  "title": "Islam Observed: Ethnographic Accounts of Muslim Practice"
}, {
  "code": "THEO2011",
  "title": "Literature and Theology of the Old Testament"
}, {
  "code": "THEO2051",
  "title": "New Testament Theology"
}, {
  "code": "THEO2061",
  "title": "Syriac"
}, {
  "code": "THEO2171",
  "title": "Hebrew Prose Texts"
}, {
  "code": "THEO2211",
  "title": "Philosophy and The Christian Tradition 100-500"
}, {
  "code": "THEO2231",
  "title": "Death, Ritual and Belief"
}, {
  "code": "THEO2241",
  "title": "Creation and New Creation: Imaging God"
}, {
  "code": "THEO2251",
  "title": "Church and Society in Late Antiquity"
}, {
  "code": "THEO2271",
  "title": "Passion Narratives (In Greek)"
}, {
  "code": "THEO2291",
  "title": "Science and Theology: Exploring the Interface"
}, {
  "code": "THEO2301",
  "title": "The Making of Modern Christianity: Medieval and Reformation Europe"
}, {
  "code": "THEO2321",
  "title": "Religion in Contemporary Britain"
}, {
  "code": "THEO2361",
  "title": "Atheism, Belief, and the Edge of Reason"
}, {
  "code": "THEO2381",
  "title": "Topics in Christian Ethics"
}, {
  "code": "THEO2391",
  "title": "Early Christian Doctrine: Trinity and Christology"
}, {
  "code": "THEO2401",
  "title": "Christ and the Human Mystery: Imaging God"
}, {
  "code": "THEO2451",
  "title": "Myth and Meaning. The Structural Analysis of Mythology"
}, {
  "code": "THEO2461",
  "title": "Research Project and Colloquium in Theology and Religion"
}, {
  "code": "THEO2471",
  "title": "God and The Universe of Faiths"
}, {
  "code": "THEO2491",
  "title": "Catholic Theology in the Modern World"
}, {
  "code": "THEO2501",
  "title": "Sacred India: Land, Politics and Identity"
}, {
  "code": "THEO2511",
  "title": "The Reformation and its Legacy"
}, {
  "code": "THEO2521",
  "title": "Medieval Theology and Spirituality"
}, {
  "code": "THEO2531",
  "title": "Sects, Prophets and Gurus"
}, {
  "code": "THEO2541",
  "title": "Jewish Religion in Antiquity: Belief Systems, Ethics, Political Conflicts"
}, {
  "code": "THEO2551",
  "title": "Create, Image, Enact: Christian Theology and the Arts"
}, {
  "code": "THEO2561",
  "title": "Augustine of Hippo"
}, {
  "code": "THEO2571",
  "title": "Faith, Identity and Power in Latin America"
}, {
  "code": "THEO30140",
  "title": "Graduate Diploma Dissertation"
}, {
  "code": "THEO3031",
  "title": "Aramaic"
}, {
  "code": "THEO3041",
  "title": "Biblical Theology"
}, {
  "code": "THEO3051",
  "title": "Advanced Greek Texts"
}, {
  "code": "THEO3232",
  "title": "Dissertation in Theology (Double)"
}, {
  "code": "THEO3291",
  "title": "Issues in Old Testament Study"
}, {
  "code": "THEO3341",
  "title": "New Testament Ethics"
}, {
  "code": "THEO3391",
  "title": "The First Urban Churches"
}, {
  "code": "THEO3441",
  "title": "Religion and Film"
}, {
  "code": "THEO3461",
  "title": "Emotion and Identity in Religion"
}, {
  "code": "THEO3501",
  "title": "Christian Fundamentalism and the Modern World"
}, {
  "code": "THEO3511",
  "title": "The Postmodern God"
}, {
  "code": "THEO3521",
  "title": "The Apostle Peter and Petrine Literature inside and outside the New Testament (English)"
}, {
  "code": "THEO3531",
  "title": "The Apostle Peter and Petrine Literature inside and outside the New Testament (With Greek)"
}, {
  "code": "THEO3571",
  "title": "THEO3571"
}, {
  "code": "THEO3581",
  "title": "Christian Tradition and the Practice of Politics"
}, {
  "code": "THEO3591",
  "title": "John and the Archheretics: The Gospel of John, the Letters of John and the Origins of Gnosticism (in Greek)"
}, {
  "code": "THEO3601",
  "title": "John and the Archheretics: The Gospel of John, the Letters of John and the Origins of Gnosticism (English)"
}, {
  "code": "THEO3611",
  "title": "Jesus Christ in the Twentieth Century"
}, {
  "code": "THEO3621",
  "title": "Reading Greek Sources About The Historical Jesus"
}, {
  "code": "THEO3631",
  "title": "The Historical Jesus"
}, {
  "code": "THEO3661",
  "title": "Religious Diversity in African Contexts"
}, {
  "code": "THEO3691",
  "title": "Thomas Aquinas: Background, Context and Legacy"
}, {
  "code": "THEO3701",
  "title": "Religion, Media and Popular Culture"
}, {
  "code": "THEO3721",
  "title": "The Globalisation of Christianity"
}, {
  "code": "THEO3731",
  "title": "Theology, Nature, Environment"
}, {
  "code": "THEO3741",
  "title": "Faith and the Experience of War: Byzantium and EasternOrthodoxy"
}, {
  "code": "THEO3751",
  "title": "Medieval Theology and Spirituality"
}, {
  "code": "THEO3771",
  "title": "Competing Gospels: Jesus Inside and Outside the Canon"
}, {
  "code": "THEO3993",
  "title": "Study Abroad Module"
}, {
  "code": "THEO3996",
  "title": "Study at Overseas Institute"
}, {
  "code": "THEO40130",
  "title": "Paul and His Interpreters"
}, {
  "code": "THEO40230",
  "title": "Conceiving Change in Contemporary Catholicism"
}, {
  "code": "THEO40630",
  "title": "Liturgy and Sacramentality"
}, {
  "code": "THEO41030",
  "title": "Christian Gender"
}, {
  "code": "THEO41230",
  "title": "Principles of Theological Ethics"
}, {
  "code": "THEO41330",
  "title": "Social Scientific Methods in the Study of Religion"
}, {
  "code": "THEO41630",
  "title": "Twentieth-Century Catholic Theology"
}, {
  "code": "THEO41930",
  "title": "Anglican Theology in Context"
}, {
  "code": "THEO42330",
  "title": "Practical Theology: Context, Practice and Methodology"
}, {
  "code": "THEO42530",
  "title": "The Theological Task: Contemporary Perspectives"
}, {
  "code": "THEO42630",
  "title": "Gospels and Canon"
}, {
  "code": "THEO42830",
  "title": "Middle Egyptian"
}, {
  "code": "THEO43130",
  "title": "Spirituality, Religion and Health"
}, {
  "code": "THEO43230",
  "title": "Patristic Ecclesiology"
}, {
  "code": "THEO43330",
  "title": "Patristic Exegesis"
}, {
  "code": "THEO43430",
  "title": "Classic Texts in Christian Theology"
}, {
  "code": "THEO43530",
  "title": "The Old Testament Pseudepigrapha and the New Testament"
}, {
  "code": "THEO43630",
  "title": "The Bible and Hermeneutics"
}, {
  "code": "THEO43710",
  "title": "Extended Study in Theology and Religion"
}, {
  "code": "THEO43830",
  "title": "Ecclesiology and Ethnography"
}, {
  "code": "THEO43930",
  "title": "Catholic Social Thought"
}, {
  "code": "THEO44030",
  "title": "Doctrine of Creation"
}, {
  "code": "THEO44130",
  "title": "England's Religious Revolution 1640-62"
}, {
  "code": "THEO44230",
  "title": "Death, Sacrifice, and Prayer"
}, {
  "code": "THEO44330",
  "title": "Method in Practical Theology"
}, {
  "code": "THEO44430",
  "title": "Understanding Practice in Theology and Religion"
}, {
  "code": "THEO44530",
  "title": "Scripture, Art and Theology"
}, {
  "code": "THEO44630",
  "title": "The Thought of Thomas Aquinas in Context"
}, {
  "code": "THEO44830",
  "title": "Christianity in the Second Century"
}, {
  "code": "THEO44930",
  "title": "Faith and Reason"
}, {
  "code": "THEO45130",
  "title": "Introductory New Testament Greek"
}, {
  "code": "THEO45230",
  "title": "Introductory Biblical Hebrew"
}, {
  "code": "THEO50190",
  "title": "Foundations for the Research Project"
}, {
  "code": "THEO50460",
  "title": "Short Dissertation for Integrated PhD"
}, {
  "code": "THEO50A90",
  "title": "Foundations for the Research Project"
}, {
  "code": "THEO53160",
  "title": "Theological Research Dissertation"
}, {
  "code": "THEO53230",
  "title": "Advanced Hebrew Prose Texts"
}, {
  "code": "THEO53430",
  "title": "Advanced Aramaic"
}, {
  "code": "THEO55130",
  "title": "Literature and Religion"
}, {
  "code": "THEO56730",
  "title": "Ritual, Symbolism and Belief in the Anthropology of Religion"
}, {
  "code": "THEO56930",
  "title": "Theology, Ethics and Medicine"
}, {
  "code": "THEO57630",
  "title": "Christian Northumbria 600-750"
}, {
  "code": "THEO5999",
  "title": "Research Program in Theology"
}, {
  "code": "THEONEW06",
  "title": "THEONEW06"
}, {
  "code": "THEONEW07",
  "title": "THEONEW07"
}, {
  "code": "THEONEW08",
  "title": "THEONEW08"
}, {
  "code": "THEONEW09",
  "title": "THEONEW09"
}, {
  "code": "THEOPG",
  "title": "PG Research Seminars"
}, {
  "code": "THMN1011",
  "title": "Introduction to the Old and New Testaments"
}, {
  "code": "THMN1021",
  "title": "Introduction to the Christian Tradition"
}, {
  "code": "THMN1061",
  "title": "Mission"
}, {
  "code": "THMN1081",
  "title": "Sexuality, Gender and Christian Ministry"
}, {
  "code": "THMN1091",
  "title": "Practical Theology"
}, {
  "code": "THMN1107",
  "title": "Christian Worship"
}, {
  "code": "THMN1117",
  "title": "New Testament Greek"
}, {
  "code": "THMN1127",
  "title": "Biblical Hebrew"
}, {
  "code": "THMN1137",
  "title": "Christian Spirituality"
}, {
  "code": "THMN1147",
  "title": "Formational Theology; Ordained Ministry Today"
}, {
  "code": "THMN1157",
  "title": "Initial Supervised Pastoral Placement"
}, {
  "code": "THMN1167",
  "title": "Preaching and Presentation"
}, {
  "code": "THMN1177",
  "title": "Methodism"
}, {
  "code": "THMN1187",
  "title": "Literature Review"
}, {
  "code": "THMN1197",
  "title": "Reader Ministry Today"
}, {
  "code": "THMN1227",
  "title": "Introduction to Church History"
}, {
  "code": "THMN1237",
  "title": "Theology and Pastoral Care"
}, {
  "code": "THMN1261",
  "title": "Preaching Placement and Portfolio"
}, {
  "code": "THMN1277",
  "title": "Christian Perspectives"
}, {
  "code": "THMN1287",
  "title": "Introduction to Leading Worship and Preaching"
}, {
  "code": "THMN1307",
  "title": "Living Faith"
}, {
  "code": "THMN1327",
  "title": "Introduction to Studying Theology"
}, {
  "code": "THMN1337",
  "title": "Introduction to the Interpretation of Biblical Texts"
}, {
  "code": "THMN1341",
  "title": "Preaching Level 1: An Introduction to Preaching in theContemporary World"
}, {
  "code": "THMN2011",
  "title": "Old Testament Texts: Prophets, Psalms and Wisdom"
}, {
  "code": "THMN2021",
  "title": "New Testament Texts: Johannine and Pauline Literature"
}, {
  "code": "THMN2031",
  "title": "Systematic Theology"
}, {
  "code": "THMN2041",
  "title": "Death and Dying"
}, {
  "code": "THMN2057",
  "title": "Practical Theology (2)"
}, {
  "code": "THMN2061",
  "title": "Mission"
}, {
  "code": "THMN2077",
  "title": "Themes in Church History"
}, {
  "code": "THMN2087",
  "title": "Liturgies of Initiation and Eucharist"
}, {
  "code": "THMN2097",
  "title": "Formational Theology: Leadership and Ministry"
}, {
  "code": "THMN2107",
  "title": "Christian Education"
}, {
  "code": "THMN2117",
  "title": "Supervised Pastoral Placement"
}, {
  "code": "THMN2127",
  "title": "Mission Studies Block"
}, {
  "code": "THMN2157",
  "title": "Special Study"
}, {
  "code": "THMN2167",
  "title": "Methodism"
}, {
  "code": "THMN2177",
  "title": "Christian Ethics"
}, {
  "code": "THMN2187",
  "title": "Anglicanism"
}, {
  "code": "THMN2227",
  "title": "Pastoral Experiences and Reflection"
}, {
  "code": "THMN2257",
  "title": "Themes in Christian Doctrine"
}, {
  "code": "THMN2277",
  "title": "Pastoral Experience and Reflection"
}, {
  "code": "THMN2291",
  "title": "Pioneer Ministry and Fresh Expressions of Church"
}, {
  "code": "THMN2337",
  "title": "Reflective Practice in Ministry"
}, {
  "code": "THMN2341",
  "title": "Preaching Level 2: Developing a Preaching Ministry in theContemporary World"
}, {
  "code": "THMN2996",
  "title": "Study year abroad"
}, {
  "code": "THMN3011",
  "title": "The Bible in Christian Ministry"
}, {
  "code": "THMN3021",
  "title": "Church and Ministry in Ecumenical Setting"
}, {
  "code": "THMN3037",
  "title": "Issues in Pastoral Ministry"
}, {
  "code": "THMN3047",
  "title": "Selected Questions In Ethics"
}, {
  "code": "THMN3067",
  "title": "Anglicanism"
}, {
  "code": "THMN3101",
  "title": "Contemporary Issues in Methodist Ecclesiology and Practice"
}, {
  "code": "THMN3117",
  "title": "Practical Theology (3)"
}, {
  "code": "THMN3132",
  "title": "Dissertation"
}, {
  "code": "THMN3141",
  "title": "Short Dissertation"
}, {
  "code": "THMN3167",
  "title": "Christianity and Other Faiths"
}, {
  "code": "THMN3177",
  "title": "Supervised Pastoral Placement"
}, {
  "code": "THMN3187",
  "title": "Preaching in a Pastoral Context"
}, {
  "code": "THMN3197",
  "title": "Imagining Jesus"
}, {
  "code": "THMN3207",
  "title": "Conflict Transformation in the Church"
}, {
  "code": "THMN40115",
  "title": "THMN40115"
}, {
  "code": "THMN40130",
  "title": "Theological and Practical Reflection on Ministry and Mission"
}, {
  "code": "THMN40230",
  "title": "Preaching from the Old Testament"
}, {
  "code": "THMN40330",
  "title": "THMN40330"
}, {
  "code": "THMN40430",
  "title": "The History and Theology of the Charismatic Movement"
}, {
  "code": "THMN40530",
  "title": "Issues of Authority within Anglicanism"
}, {
  "code": "THMN41030",
  "title": "Intellect and Imagination: Apologetics in the Mass Media"
}, {
  "code": "THMN41230",
  "title": "Psychology and Christian Ministry"
}, {
  "code": "THMN41330",
  "title": "THMN41330"
}, {
  "code": "THMN41830",
  "title": "Preaching from the Synoptic Gospels"
}, {
  "code": "THMN42230",
  "title": "Leadership in Christian Ministry"
}, {
  "code": "THMN42630",
  "title": "Theological Approaches to Spiritual Direction"
}, {
  "code": "THMN42730",
  "title": "Scripture and Hermeneutics: The Role of the Bible in Ministry"
}, {
  "code": "THMN42930",
  "title": "The Dialogue of Science and Technology in Mission and Ministry"
}, {
  "code": "THMN43630",
  "title": "Mission and Ecclesiology: Critical Frameworks for Pioneering"
}, {
  "code": "THMN44130",
  "title": "Biblical Literacy in a Media Culture"
}, {
  "code": "THMN44230",
  "title": "Growth and Decline in British Christianity, from 1945 to thepresent day"
}, {
  "code": "THMN44330",
  "title": "Forgiveness in Pastoral Ministry Today"
}, {
  "code": "THMN44430",
  "title": "Holiness, Wholeness and Ministry"
}, {
  "code": "THMN44530",
  "title": "Practices of spiritual formation in the Catholic Tradition"
}, {
  "code": "THMN44830",
  "title": "THMN44830"
}, {
  "code": "THMN44930",
  "title": "Digitally Mediated Christianity: Aspects of DigitalTheology"
}, {
  "code": "THMN45030",
  "title": "Digital Theology : Theological Reflection on Digital Culture"
}, {
  "code": "THMN45160",
  "title": "Dissertation"
}, {
  "code": "THMN45230",
  "title": "Mission and Ministry in the Johannine Literature"
}, {
  "code": "THMN45330",
  "title": "Consultancy for Mission and Ministry"
}, {
  "code": "THMN45430",
  "title": "Early Christian Perspectives on Mission and Ministry"
}, {
  "code": "THMN45530",
  "title": "Studying Contemporary Worship"
}, {
  "code": "THMN49960",
  "title": "Dissertation"
}, {
  "code": "THMNPL430",
  "title": "Accreditation to Prior Learning in THMN"
}, {
  "code": "THMNPL460",
  "title": "Accreditation of Prior Learning in THMN"
}, {
  "code": "TMMC1011",
  "title": "Introduction to the Bible"
}, {
  "code": "TMMC1027",
  "title": "Methods of Reading the Bible"
}, {
  "code": "TMMC1037",
  "title": "Elementary New Testament Greek"
}, {
  "code": "TMMC1047",
  "title": "Continuing New Testament Greek"
}, {
  "code": "TMMC1057",
  "title": "Elementary Biblical Hebrew"
}, {
  "code": "TMMC1067",
  "title": "Continuing Biblical Hebrew"
}, {
  "code": "TMMC1071",
  "title": "Introduction to Christian Doctrine and History"
}, {
  "code": "TMMC1081",
  "title": "Introduction to Preaching in the Contemporary World"
}, {
  "code": "TMMC1091",
  "title": "Mission and Evangelism"
}, {
  "code": "TMMC1107",
  "title": "Introduction to Aspects of Pastoral Care"
}, {
  "code": "TMMC1117",
  "title": "Introducing Theological Reflection"
}, {
  "code": "TMMC1127",
  "title": "TMMC1127"
}, {
  "code": "TMMC1137",
  "title": "Introduction to Spirituality and Discipleship"
}, {
  "code": "TMMC1147",
  "title": "Introduction to Christian Worship"
}, {
  "code": "TMMC1157",
  "title": "Sexuality, Gender and Christian Ministry (Integrative Learning for Collaborative Practice)"
}, {
  "code": "TMMC1167",
  "title": "Independent Learning Project (Short)"
}, {
  "code": "TMMC1171",
  "title": "Independent Learning Project (Long)"
}, {
  "code": "TMMC1181",
  "title": "TMMC1181"
}, {
  "code": "TMMC1191",
  "title": "Foundations for Denominational Ministry"
}, {
  "code": "TMMC1207",
  "title": "Elements of Ministry and Mission in Context"
}, {
  "code": "TMMC1217",
  "title": "Foundations for Leadership and Theology for Ministry andMission"
}, {
  "code": "TMMC1227",
  "title": "Introduction to Studying the Bible in its Original Languages"
}, {
  "code": "TMMC1237",
  "title": "Independent Learning Project Short (2)"
}, {
  "code": "TMMC1241",
  "title": "Corporate Engagement with Context A"
}, {
  "code": "TMMC1251",
  "title": "Engaging with Leadership and Theology for Ministry and Mission"
}, {
  "code": "TMMC2011",
  "title": "Old Testament Studies"
}, {
  "code": "TMMC2021",
  "title": "New Testament Studies"
}, {
  "code": "TMMC2031",
  "title": "Topics in Christian Doctrine"
}, {
  "code": "TMMC2047",
  "title": "Topics in Church History"
}, {
  "code": "TMMC2051",
  "title": "Mission and Evangelism"
}, {
  "code": "TMMC2061",
  "title": "Developing Preaching in the Contemporary World"
}, {
  "code": "TMMC2077",
  "title": "Preparing for Public Ministry"
}, {
  "code": "TMMC2087",
  "title": "Exploring Leadership and Theology for Ministry and Mission"
}, {
  "code": "TMMC2097",
  "title": "Mission Entrepreneurship - Principles"
}, {
  "code": "TMMC2107",
  "title": "Mission Entrepreneurship - Practice"
}, {
  "code": "TMMC2117",
  "title": "Education for a Learning Church"
}, {
  "code": "TMMC2121",
  "title": "Extended Integrative Learning for Collaborative Practice:Death and Dying"
}, {
  "code": "TMMC2137",
  "title": "Reflective Practice in Context (Short)"
}, {
  "code": "TMMC2157",
  "title": "Independent Learning Project (Short)"
}, {
  "code": "TMMC2161",
  "title": "Independent Learning Project (Long)"
}, {
  "code": "TMMC2171",
  "title": "Leadership and Theology for Ministry and Mission"
}, {
  "code": "TMMC2181",
  "title": "Missional Ecclesiology"
}, {
  "code": "TMMC2191",
  "title": "Christian Faith and Ethical Living"
}, {
  "code": "TMMC2996",
  "title": "TMMC2996"
}, {
  "code": "TMMC3017",
  "title": "Independent Learning Project (Short)"
}, {
  "code": "TMMC3021",
  "title": "Independent Learning Project (Long)"
}, {
  "code": "TMMC3032",
  "title": "TMMC3032"
}, {
  "code": "TMMC3042",
  "title": "Dissertation"
}, {
  "code": "TMMC3057",
  "title": "Further Reflective Practice in Context (Short)"
}, {
  "code": "TMMC3067",
  "title": "Key Issues in Christian Faith and Ethical Living"
}, {
  "code": "TMMC3071",
  "title": "Denominational Ministry"
}, {
  "code": "TMMC3087",
  "title": "Conflict Transformation"
}, {
  "code": "TMMC3091",
  "title": "Further Biblical Studies"
}, {
  "code": "TMMC3107",
  "title": "Issues in Pastoral Ministry"
}, {
  "code": "TMMC3111",
  "title": "Leadership and Theology for Ministry and Mission"
}, {
  "code": "TMMC3141",
  "title": "TMMC3141"
}, {
  "code": "TMMC3151",
  "title": "Church History in Focus"
}, {
  "code": "TMMPL101",
  "title": "Accreditation of Prior Learning in Theology, Ministry and Mission"
}, {
  "code": "VALI1999",
  "title": "Validation Programme Dummy Module"
}, {
  "code": "VISU1011",
  "title": "Art and Film Writing in Context"
}, {
  "code": "VISU1012",
  "title": "Introduction to Visual Culture Studies"
}, {
  "code": "VISU1021",
  "title": "The Art of the Moving Image 1: Key Concepts"
}, {
  "code": "VISU2001",
  "title": "Digital Skills for Visual Culture Research"
}, {
  "code": "VISU2011",
  "title": "Introduction to Museums and Curating"
}, {
  "code": "VISU2021",
  "title": "The Art of the Moving Image 2: Theories and Contexts"
}, {
  "code": "VISU3001",
  "title": "Advanced Curating: Theory and Practice"
}, {
  "code": "VISU3011",
  "title": "Filmmaking"
}, {
  "code": "VISU3022",
  "title": "Special Subject: Photography and Modernity between the Wars"
}, {
  "code": "VISU3041",
  "title": "Photography in East Asia"
}];
exports.MODULES = MODULES;
},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/noty/lib/noty.js":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
/* 
  @package NOTY - Dependency-free notification library 
  @version version: 3.2.0-beta 
  @contributors https://github.com/needim/noty/graphs/contributors 
  @documentation Examples and Documentation - https://ned.im/noty 
  @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php 
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("Noty", [], factory);else if (typeof exports === 'object') exports["Noty"] = factory();else root["Noty"] = factory();
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // identity function for calling harmony imports with the correct context

      /******/

      __webpack_require__.i = function (value) {
        return value;
      };
      /******/

      /******/
      // define getter function for harmony exports

      /******/


      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 6);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.css = exports.deepExtend = exports.animationEndEvents = undefined;

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      exports.inArray = inArray;
      exports.stopPropagation = stopPropagation;
      exports.generateID = generateID;
      exports.outerHeight = outerHeight;
      exports.addListener = addListener;
      exports.hasClass = hasClass;
      exports.addClass = addClass;
      exports.removeClass = removeClass;
      exports.remove = remove;
      exports.classList = classList;
      exports.visibilityChangeFlow = visibilityChangeFlow;
      exports.createAudioElements = createAudioElements;

      var _api = __webpack_require__(1);

      var API = _interopRequireWildcard(_api);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      var animationEndEvents = exports.animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      function inArray(needle, haystack, argStrict) {
        var key = void 0;
        var strict = !!argStrict;

        if (strict) {
          for (key in haystack) {
            if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
              return true;
            }
          }
        } else {
          for (key in haystack) {
            if (haystack.hasOwnProperty(key) && haystack[key] === needle) {
              return true;
            }
          }
        }

        return false;
      }

      function stopPropagation(evt) {
        evt = evt || window.event;

        if (typeof evt.stopPropagation !== 'undefined') {
          evt.stopPropagation();
        } else {
          evt.cancelBubble = true;
        }
      }

      var deepExtend = exports.deepExtend = function deepExtend(out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
          var obj = arguments[i];
          if (!obj) continue;

          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (Array.isArray(obj[key])) {
                out[key] = obj[key];
              } else if (_typeof(obj[key]) === 'object' && obj[key] !== null) {
                out[key] = deepExtend(out[key], obj[key]);
              } else {
                out[key] = obj[key];
              }
            }
          }
        }

        return out;
      };

      function generateID() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var id = 'noty_' + prefix + '_';
        id += 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0;
          var v = c === 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
        return id;
      }

      function outerHeight(el) {
        var height = el.offsetHeight;
        var style = window.getComputedStyle(el);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
      }

      var css = exports.css = function () {
        var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'];
        var cssProps = {};

        function camelCase(string) {
          return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (match, letter) {
            return letter.toUpperCase();
          });
        }

        function getVendorProp(name) {
          var style = document.body.style;
          if (name in style) return name;
          var i = cssPrefixes.length;
          var capName = name.charAt(0).toUpperCase() + name.slice(1);
          var vendorName = void 0;

          while (i--) {
            vendorName = cssPrefixes[i] + capName;
            if (vendorName in style) return vendorName;
          }

          return name;
        }

        function getStyleProp(name) {
          name = camelCase(name);
          return cssProps[name] || (cssProps[name] = getVendorProp(name));
        }

        function applyCss(element, prop, value) {
          prop = getStyleProp(prop);
          element.style[prop] = value;
        }

        return function (element, properties) {
          var args = arguments;
          var prop = void 0;
          var value = void 0;

          if (args.length === 2) {
            for (prop in properties) {
              if (properties.hasOwnProperty(prop)) {
                value = properties[prop];

                if (value !== undefined && properties.hasOwnProperty(prop)) {
                  applyCss(element, prop, value);
                }
              }
            }
          } else {
            applyCss(element, args[1], args[2]);
          }
        };
      }();

      function addListener(el, events, cb) {
        var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        events = events.split(' ');

        for (var i = 0; i < events.length; i++) {
          if (document.addEventListener) {
            el.addEventListener(events[i], cb, useCapture);
          } else if (document.attachEvent) {
            el.attachEvent('on' + events[i], cb);
          }
        }
      }

      function hasClass(element, name) {
        var list = typeof element === 'string' ? element : classList(element);
        return list.indexOf(' ' + name + ' ') >= 0;
      }

      function addClass(element, name) {
        var oldList = classList(element);
        var newList = oldList + name;
        if (hasClass(oldList, name)) return; // Trim the opening space.

        element.className = newList.substring(1);
      }

      function removeClass(element, name) {
        var oldList = classList(element);
        var newList = void 0;
        if (!hasClass(element, name)) return; // Replace the class name.

        newList = oldList.replace(' ' + name + ' ', ' '); // Trim the opening and closing spaces.

        element.className = newList.substring(1, newList.length - 1);
      }

      function remove(element) {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }

      function classList(element) {
        return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
      }

      function visibilityChangeFlow() {
        var hidden = void 0;
        var visibilityChange = void 0;

        if (typeof document.hidden !== 'undefined') {
          // Opera 12.10 and Firefox 18 and later support
          hidden = 'hidden';
          visibilityChange = 'visibilitychange';
        } else if (typeof document.msHidden !== 'undefined') {
          hidden = 'msHidden';
          visibilityChange = 'msvisibilitychange';
        } else if (typeof document.webkitHidden !== 'undefined') {
          hidden = 'webkitHidden';
          visibilityChange = 'webkitvisibilitychange';
        }

        function onVisibilityChange() {
          API.PageHidden = document[hidden];
          handleVisibilityChange();
        }

        function onBlur() {
          API.PageHidden = true;
          handleVisibilityChange();
        }

        function onFocus() {
          API.PageHidden = false;
          handleVisibilityChange();
        }

        function handleVisibilityChange() {
          if (API.PageHidden) stopAll();else resumeAll();
        }

        function stopAll() {
          setTimeout(function () {
            Object.keys(API.Store).forEach(function (id) {
              if (API.Store.hasOwnProperty(id)) {
                if (API.Store[id].options.visibilityControl) {
                  API.Store[id].stop();
                }
              }
            });
          }, 100);
        }

        function resumeAll() {
          setTimeout(function () {
            Object.keys(API.Store).forEach(function (id) {
              if (API.Store.hasOwnProperty(id)) {
                if (API.Store[id].options.visibilityControl) {
                  API.Store[id].resume();
                }
              }
            });
            API.queueRenderAll();
          }, 100);
        }

        if (visibilityChange) {
          addListener(document, visibilityChange, onVisibilityChange);
        }

        addListener(window, 'blur', onBlur);
        addListener(window, 'focus', onFocus);
      }

      function createAudioElements(ref) {
        if (ref.hasSound) {
          var audioElement = document.createElement('audio');
          ref.options.sounds.sources.forEach(function (s) {
            var source = document.createElement('source');
            source.src = s;
            source.type = 'audio/' + getExtension(s);
            audioElement.appendChild(source);
          });

          if (ref.barDom) {
            ref.barDom.appendChild(audioElement);
          } else {
            document.querySelector('body').appendChild(audioElement);
          }

          audioElement.volume = ref.options.sounds.volume;

          if (!ref.soundPlayed) {
            audioElement.play();
            ref.soundPlayed = true;
          }

          audioElement.onended = function () {
            remove(audioElement);
          };
        }
      }

      function getExtension(fileName) {
        return fileName.match(/\.([^.]+)$/)[1];
      }
      /***/

    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Defaults = exports.Store = exports.Queues = exports.DefaultMaxVisible = exports.docTitle = exports.DocModalCount = exports.PageHidden = undefined;
      exports.getQueueCounts = getQueueCounts;
      exports.addToQueue = addToQueue;
      exports.removeFromQueue = removeFromQueue;
      exports.queueRender = queueRender;
      exports.queueRenderAll = queueRenderAll;
      exports.ghostFix = ghostFix;
      exports.build = build;
      exports.hasButtons = hasButtons;
      exports.handleModal = handleModal;
      exports.handleModalClose = handleModalClose;
      exports.queueClose = queueClose;
      exports.dequeueClose = dequeueClose;
      exports.fire = fire;
      exports.openFlow = openFlow;
      exports.closeFlow = closeFlow;

      var _utils = __webpack_require__(0);

      var Utils = _interopRequireWildcard(_utils);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      var PageHidden = exports.PageHidden = false;
      var DocModalCount = exports.DocModalCount = 0;
      var DocTitleProps = {
        originalTitle: null,
        count: 0,
        changed: false,
        timer: -1
      };
      var docTitle = exports.docTitle = {
        increment: function increment() {
          DocTitleProps.count++;

          docTitle._update();
        },
        decrement: function decrement() {
          DocTitleProps.count--;

          if (DocTitleProps.count <= 0) {
            docTitle._clear();

            return;
          }

          docTitle._update();
        },
        _update: function _update() {
          var title = document.title;

          if (!DocTitleProps.changed) {
            DocTitleProps.originalTitle = title;
            document.title = '(' + DocTitleProps.count + ') ' + title;
            DocTitleProps.changed = true;
          } else {
            document.title = '(' + DocTitleProps.count + ') ' + DocTitleProps.originalTitle;
          }
        },
        _clear: function _clear() {
          if (DocTitleProps.changed) {
            DocTitleProps.count = 0;
            document.title = DocTitleProps.originalTitle;
            DocTitleProps.changed = false;
          }
        }
      };
      var DefaultMaxVisible = exports.DefaultMaxVisible = 5;
      var Queues = exports.Queues = {
        global: {
          maxVisible: DefaultMaxVisible,
          queue: []
        }
      };
      var Store = exports.Store = {};
      var Defaults = exports.Defaults = {
        type: 'alert',
        layout: 'topRight',
        theme: 'mint',
        text: '',
        timeout: false,
        progressBar: true,
        closeWith: ['click'],
        animation: {
          open: 'noty_effects_open',
          close: 'noty_effects_close'
        },
        id: false,
        force: false,
        killer: false,
        queue: 'global',
        container: false,
        buttons: [],
        callbacks: {
          beforeShow: null,
          onShow: null,
          afterShow: null,
          onClose: null,
          afterClose: null,
          onClick: null,
          onHover: null,
          onTemplate: null
        },
        sounds: {
          sources: [],
          volume: 1,
          conditions: []
        },
        titleCount: {
          conditions: []
        },
        modal: false,
        visibilityControl: false
        /**
         * @param {string} queueName
         * @return {object}
         */

      };

      function getQueueCounts() {
        var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';
        var count = 0;
        var max = DefaultMaxVisible;

        if (Queues.hasOwnProperty(queueName)) {
          max = Queues[queueName].maxVisible;
          Object.keys(Store).forEach(function (i) {
            if (Store[i].options.queue === queueName && !Store[i].closed) count++;
          });
        }

        return {
          current: count,
          maxVisible: max
        };
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function addToQueue(ref) {
        if (!Queues.hasOwnProperty(ref.options.queue)) {
          Queues[ref.options.queue] = {
            maxVisible: DefaultMaxVisible,
            queue: []
          };
        }

        Queues[ref.options.queue].queue.push(ref);
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function removeFromQueue(ref) {
        if (Queues.hasOwnProperty(ref.options.queue)) {
          var queue = [];
          Object.keys(Queues[ref.options.queue].queue).forEach(function (i) {
            if (Queues[ref.options.queue].queue[i].id !== ref.id) {
              queue.push(Queues[ref.options.queue].queue[i]);
            }
          });
          Queues[ref.options.queue].queue = queue;
        }
      }
      /**
       * @param {string} queueName
       * @return {void}
       */


      function queueRender() {
        var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

        if (Queues.hasOwnProperty(queueName)) {
          var noty = Queues[queueName].queue.shift();
          if (noty) noty.show();
        }
      }
      /**
       * @return {void}
       */


      function queueRenderAll() {
        Object.keys(Queues).forEach(function (queueName) {
          queueRender(queueName);
        });
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function ghostFix(ref) {
        var ghostID = Utils.generateID('ghost');
        var ghost = document.createElement('div');
        ghost.setAttribute('id', ghostID);
        Utils.css(ghost, {
          height: Utils.outerHeight(ref.barDom) + 'px'
        });
        ref.barDom.insertAdjacentHTML('afterend', ghost.outerHTML);
        Utils.remove(ref.barDom);
        ghost = document.getElementById(ghostID);
        Utils.addClass(ghost, 'noty_fix_effects_height');
        Utils.addListener(ghost, Utils.animationEndEvents, function () {
          Utils.remove(ghost);
        });
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function build(ref) {
        findOrCreateContainer(ref);
        var markup = '<div class="noty_body">' + ref.options.text + '</div>' + buildButtons(ref) + '<div class="noty_progressbar"></div>';
        ref.barDom = document.createElement('div');
        ref.barDom.setAttribute('id', ref.id);
        Utils.addClass(ref.barDom, 'noty_bar noty_type__' + ref.options.type + ' noty_theme__' + ref.options.theme);
        ref.barDom.innerHTML = markup;
        fire(ref, 'onTemplate');
      }
      /**
       * @param {Noty} ref
       * @return {boolean}
       */


      function hasButtons(ref) {
        return !!(ref.options.buttons && Object.keys(ref.options.buttons).length);
      }
      /**
       * @param {Noty} ref
       * @return {string}
       */


      function buildButtons(ref) {
        if (hasButtons(ref)) {
          var buttons = document.createElement('div');
          Utils.addClass(buttons, 'noty_buttons');
          Object.keys(ref.options.buttons).forEach(function (key) {
            buttons.appendChild(ref.options.buttons[key].dom);
          });
          ref.options.buttons.forEach(function (btn) {
            buttons.appendChild(btn.dom);
          });
          return buttons.outerHTML;
        }

        return '';
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function handleModal(ref) {
        if (ref.options.modal) {
          if (DocModalCount === 0) {
            createModal(ref);
          }

          exports.DocModalCount = DocModalCount += 1;
        }
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function handleModalClose(ref) {
        if (ref.options.modal && DocModalCount > 0) {
          exports.DocModalCount = DocModalCount -= 1;

          if (DocModalCount <= 0) {
            var modal = document.querySelector('.noty_modal');

            if (modal) {
              Utils.removeClass(modal, 'noty_modal_open');
              Utils.addClass(modal, 'noty_modal_close');
              Utils.addListener(modal, Utils.animationEndEvents, function () {
                Utils.remove(modal);
              });
            }
          }
        }
      }
      /**
       * @return {void}
       */


      function createModal() {
        var body = document.querySelector('body');
        var modal = document.createElement('div');
        Utils.addClass(modal, 'noty_modal');
        body.insertBefore(modal, body.firstChild);
        Utils.addClass(modal, 'noty_modal_open');
        Utils.addListener(modal, Utils.animationEndEvents, function () {
          Utils.removeClass(modal, 'noty_modal_open');
        });
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function findOrCreateContainer(ref) {
        if (ref.options.container) {
          ref.layoutDom = document.querySelector(ref.options.container);
          return;
        }

        var layoutID = 'noty_layout__' + ref.options.layout;
        ref.layoutDom = document.querySelector('div#' + layoutID);

        if (!ref.layoutDom) {
          ref.layoutDom = document.createElement('div');
          ref.layoutDom.setAttribute('id', layoutID);
          ref.layoutDom.setAttribute('role', 'alert');
          ref.layoutDom.setAttribute('aria-live', 'polite');
          Utils.addClass(ref.layoutDom, 'noty_layout');
          document.querySelector('body').appendChild(ref.layoutDom);
        }
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function queueClose(ref) {
        if (ref.options.timeout) {
          if (ref.options.progressBar && ref.progressDom) {
            Utils.css(ref.progressDom, {
              transition: 'width ' + ref.options.timeout + 'ms linear',
              width: '0%'
            });
          }

          clearTimeout(ref.closeTimer);
          ref.closeTimer = setTimeout(function () {
            ref.close();
          }, ref.options.timeout);
        }
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function dequeueClose(ref) {
        if (ref.options.timeout && ref.closeTimer) {
          clearTimeout(ref.closeTimer);
          ref.closeTimer = -1;

          if (ref.options.progressBar && ref.progressDom) {
            Utils.css(ref.progressDom, {
              transition: 'width 0ms linear',
              width: '100%'
            });
          }
        }
      }
      /**
       * @param {Noty} ref
       * @param {string} eventName
       * @return {void}
       */


      function fire(ref, eventName) {
        if (ref.listeners.hasOwnProperty(eventName)) {
          ref.listeners[eventName].forEach(function (cb) {
            if (typeof cb === 'function') {
              cb.apply(ref);
            }
          });
        }
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function openFlow(ref) {
        fire(ref, 'afterShow');
        queueClose(ref);
        Utils.addListener(ref.barDom, 'mouseenter', function () {
          dequeueClose(ref);
        });
        Utils.addListener(ref.barDom, 'mouseleave', function () {
          queueClose(ref);
        });
      }
      /**
       * @param {Noty} ref
       * @return {void}
       */


      function closeFlow(ref) {
        delete Store[ref.id];
        ref.closing = false;
        fire(ref, 'afterClose');
        Utils.remove(ref.barDom);

        if (ref.layoutDom.querySelectorAll('.noty_bar').length === 0 && !ref.options.container) {
          Utils.remove(ref.layoutDom);
        }

        if (Utils.inArray('docVisible', ref.options.titleCount.conditions) || Utils.inArray('docHidden', ref.options.titleCount.conditions)) {
          docTitle.decrement();
        }

        queueRender(ref.options.queue);
      }
      /***/

    },
    /* 2 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.NotyButton = undefined;

      var _utils = __webpack_require__(0);

      var Utils = _interopRequireWildcard(_utils);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var NotyButton = exports.NotyButton = function NotyButton(html, classes, cb) {
        var _this = this;

        var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, NotyButton);

        this.dom = document.createElement('button');
        this.dom.innerHTML = html;
        this.id = attributes.id = attributes.id || Utils.generateID('button');
        this.cb = cb;
        Object.keys(attributes).forEach(function (propertyName) {
          _this.dom.setAttribute(propertyName, attributes[propertyName]);
        });
        Utils.addClass(this.dom, classes || 'noty_btn');
        return this;
      };
      /***/

    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Push = exports.Push = function () {
        function Push() {
          var workerPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/service-worker.js';

          _classCallCheck(this, Push);

          this.subData = {};
          this.workerPath = workerPath;
          this.listeners = {
            onPermissionGranted: [],
            onPermissionDenied: [],
            onSubscriptionSuccess: [],
            onSubscriptionCancel: [],
            onWorkerError: [],
            onWorkerSuccess: [],
            onWorkerNotSupported: []
          };
          return this;
        }
        /**
         * @param {string} eventName
         * @param {function} cb
         * @return {Push}
         */


        _createClass(Push, [{
          key: 'on',
          value: function on(eventName) {
            var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
              this.listeners[eventName].push(cb);
            }

            return this;
          }
        }, {
          key: 'fire',
          value: function fire(eventName) {
            var _this = this;

            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (this.listeners.hasOwnProperty(eventName)) {
              this.listeners[eventName].forEach(function (cb) {
                if (typeof cb === 'function') {
                  cb.apply(_this, params);
                }
              });
            }
          }
        }, {
          key: 'create',
          value: function create() {
            console.log('NOT IMPLEMENTED YET');
          }
          /**
           * @return {boolean}
           */

        }, {
          key: 'isSupported',
          value: function isSupported() {
            var result = false;

            try {
              result = window.Notification || window.webkitNotifications || navigator.mozNotification || window.external && window.external.msIsSiteMode() !== undefined;
            } catch (e) {}

            return result;
          }
          /**
           * @return {string}
           */

        }, {
          key: 'getPermissionStatus',
          value: function getPermissionStatus() {
            var perm = 'default';

            if (window.Notification && window.Notification.permissionLevel) {
              perm = window.Notification.permissionLevel;
            } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
              switch (window.webkitNotifications.checkPermission()) {
                case 1:
                  perm = 'default';
                  break;

                case 0:
                  perm = 'granted';
                  break;

                default:
                  perm = 'denied';
              }
            } else if (window.Notification && window.Notification.permission) {
              perm = window.Notification.permission;
            } else if (navigator.mozNotification) {
              perm = 'granted';
            } else if (window.external && window.external.msIsSiteMode() !== undefined) {
              perm = window.external.msIsSiteMode() ? 'granted' : 'default';
            }

            return perm.toString().toLowerCase();
          }
          /**
           * @return {string}
           */

        }, {
          key: 'getEndpoint',
          value: function getEndpoint(subscription) {
            var endpoint = subscription.endpoint;
            var subscriptionId = subscription.subscriptionId; // fix for Chrome < 45

            if (subscriptionId && endpoint.indexOf(subscriptionId) === -1) {
              endpoint += '/' + subscriptionId;
            }

            return endpoint;
          }
          /**
           * @return {boolean}
           */

        }, {
          key: 'isSWRegistered',
          value: function isSWRegistered() {
            try {
              return navigator.serviceWorker.controller.state === 'activated';
            } catch (e) {
              return false;
            }
          }
          /**
           * @return {void}
           */

        }, {
          key: 'unregisterWorker',
          value: function unregisterWorker() {
            var self = this;

            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function (registrations) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                  for (var _iterator = registrations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var registration = _step.value;
                    registration.unregister();
                    self.fire('onSubscriptionCancel');
                  }
                } catch (err) {
                  _didIteratorError = true;
                  _iteratorError = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                    }
                  } finally {
                    if (_didIteratorError) {
                      throw _iteratorError;
                    }
                  }
                }
              });
            }
          }
          /**
           * @return {void}
           */

        }, {
          key: 'requestSubscription',
          value: function requestSubscription() {
            var _this2 = this;

            var userVisibleOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var self = this;
            var current = this.getPermissionStatus();

            var cb = function cb(result) {
              if (result === 'granted') {
                _this2.fire('onPermissionGranted');

                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.register(_this2.workerPath).then(function () {
                    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                      self.fire('onWorkerSuccess');
                      serviceWorkerRegistration.pushManager.subscribe({
                        userVisibleOnly: userVisibleOnly
                      }).then(function (subscription) {
                        var key = subscription.getKey('p256dh');
                        var token = subscription.getKey('auth');
                        self.subData = {
                          endpoint: self.getEndpoint(subscription),
                          p256dh: key ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(key))) : null,
                          auth: token ? window.btoa(String.fromCharCode.apply(null, new Uint8Array(token))) : null
                        };
                        self.fire('onSubscriptionSuccess', [self.subData]);
                      }).catch(function (err) {
                        self.fire('onWorkerError', [err]);
                      });
                    });
                  });
                } else {
                  self.fire('onWorkerNotSupported');
                }
              } else if (result === 'denied') {
                _this2.fire('onPermissionDenied');

                _this2.unregisterWorker();
              }
            };

            if (current === 'default') {
              if (window.Notification && window.Notification.requestPermission) {
                window.Notification.requestPermission(cb);
              } else if (window.webkitNotifications && window.webkitNotifications.checkPermission) {
                window.webkitNotifications.requestPermission(cb);
              }
            } else {
              cb(current);
            }
          }
        }]);

        return Push;
      }();
      /***/

    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (process, global) {
        var require;
        /*!
        * @overview es6-promise - a tiny implementation of Promises/A+.
        * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
        * @license   Licensed under MIT license
        *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
        * @version   4.1.1
        */


        (function (global, factory) {
          true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
        })(this, function () {
          'use strict';

          function objectOrFunction(x) {
            var type = typeof x;
            return x !== null && (type === 'object' || type === 'function');
          }

          function isFunction(x) {
            return typeof x === 'function';
          }

          var _isArray = undefined;

          if (Array.isArray) {
            _isArray = Array.isArray;
          } else {
            _isArray = function (x) {
              return Object.prototype.toString.call(x) === '[object Array]';
            };
          }

          var isArray = _isArray;
          var len = 0;
          var vertxNext = undefined;
          var customSchedulerFn = undefined;

          var asap = function asap(callback, arg) {
            queue[len] = callback;
            queue[len + 1] = arg;
            len += 2;

            if (len === 2) {
              // If len is 2, that means that we need to schedule an async flush.
              // If additional callbacks are queued before the queue is flushed, they
              // will be processed by this flush that we are scheduling.
              if (customSchedulerFn) {
                customSchedulerFn(flush);
              } else {
                scheduleFlush();
              }
            }
          };

          function setScheduler(scheduleFn) {
            customSchedulerFn = scheduleFn;
          }

          function setAsap(asapFn) {
            asap = asapFn;
          }

          var browserWindow = typeof window !== 'undefined' ? window : undefined;
          var browserGlobal = browserWindow || {};
          var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
          var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]'; // test for web worker but not in IE10

          var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined'; // node

          function useNextTick() {
            // node version 0.10.x displays a deprecation warning when nextTick is used recursively
            // see https://github.com/cujojs/when/issues/410 for details
            return function () {
              return process.nextTick(flush);
            };
          } // vertx


          function useVertxTimer() {
            if (typeof vertxNext !== 'undefined') {
              return function () {
                vertxNext(flush);
              };
            }

            return useSetTimeout();
          }

          function useMutationObserver() {
            var iterations = 0;
            var observer = new BrowserMutationObserver(flush);
            var node = document.createTextNode('');
            observer.observe(node, {
              characterData: true
            });
            return function () {
              node.data = iterations = ++iterations % 2;
            };
          } // web worker


          function useMessageChannel() {
            var channel = new MessageChannel();
            channel.port1.onmessage = flush;
            return function () {
              return channel.port2.postMessage(0);
            };
          }

          function useSetTimeout() {
            // Store setTimeout reference so es6-promise will be unaffected by
            // other code modifying setTimeout (like sinon.useFakeTimers())
            var globalSetTimeout = setTimeout;
            return function () {
              return globalSetTimeout(flush, 1);
            };
          }

          var queue = new Array(1000);

          function flush() {
            for (var i = 0; i < len; i += 2) {
              var callback = queue[i];
              var arg = queue[i + 1];
              callback(arg);
              queue[i] = undefined;
              queue[i + 1] = undefined;
            }

            len = 0;
          }

          function attemptVertx() {
            try {
              var r = require;

              var vertx = __webpack_require__(9);

              vertxNext = vertx.runOnLoop || vertx.runOnContext;
              return useVertxTimer();
            } catch (e) {
              return useSetTimeout();
            }
          }

          var scheduleFlush = undefined; // Decide what async method to use to triggering processing of queued callbacks:

          if (isNode) {
            scheduleFlush = useNextTick();
          } else if (BrowserMutationObserver) {
            scheduleFlush = useMutationObserver();
          } else if (isWorker) {
            scheduleFlush = useMessageChannel();
          } else if (browserWindow === undefined && "function" === 'function') {
            scheduleFlush = attemptVertx();
          } else {
            scheduleFlush = useSetTimeout();
          }

          function then(onFulfillment, onRejection) {
            var _arguments = arguments;
            var parent = this;
            var child = new this.constructor(noop);

            if (child[PROMISE_ID] === undefined) {
              makePromise(child);
            }

            var _state = parent._state;

            if (_state) {
              (function () {
                var callback = _arguments[_state - 1];
                asap(function () {
                  return invokeCallback(_state, child, callback, parent._result);
                });
              })();
            } else {
              subscribe(parent, child, onFulfillment, onRejection);
            }

            return child;
          }
          /**
            `Promise.resolve` returns a promise that will become resolved with the
            passed `value`. It is shorthand for the following:
          
            ```javascript
            let promise = new Promise(function(resolve, reject){
              resolve(1);
            });
          
            promise.then(function(value){
              // value === 1
            });
            ```
          
            Instead of writing the above, your code now simply becomes the following:
          
            ```javascript
            let promise = Promise.resolve(1);
          
            promise.then(function(value){
              // value === 1
            });
            ```
          
            @method resolve
            @static
            @param {Any} value value that the returned promise will be resolved with
            Useful for tooling.
            @return {Promise} a promise that will become fulfilled with the given
            `value`
          */


          function resolve$1(object) {
            /*jshint validthis:true */
            var Constructor = this;

            if (object && typeof object === 'object' && object.constructor === Constructor) {
              return object;
            }

            var promise = new Constructor(noop);
            resolve(promise, object);
            return promise;
          }

          var PROMISE_ID = Math.random().toString(36).substring(16);

          function noop() {}

          var PENDING = void 0;
          var FULFILLED = 1;
          var REJECTED = 2;
          var GET_THEN_ERROR = new ErrorObject();

          function selfFulfillment() {
            return new TypeError("You cannot resolve a promise with itself");
          }

          function cannotReturnOwn() {
            return new TypeError('A promises callback cannot return that same promise.');
          }

          function getThen(promise) {
            try {
              return promise.then;
            } catch (error) {
              GET_THEN_ERROR.error = error;
              return GET_THEN_ERROR;
            }
          }

          function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
            try {
              then$$1.call(value, fulfillmentHandler, rejectionHandler);
            } catch (e) {
              return e;
            }
          }

          function handleForeignThenable(promise, thenable, then$$1) {
            asap(function (promise) {
              var sealed = false;
              var error = tryThen(then$$1, thenable, function (value) {
                if (sealed) {
                  return;
                }

                sealed = true;

                if (thenable !== value) {
                  resolve(promise, value);
                } else {
                  fulfill(promise, value);
                }
              }, function (reason) {
                if (sealed) {
                  return;
                }

                sealed = true;
                reject(promise, reason);
              }, 'Settle: ' + (promise._label || ' unknown promise'));

              if (!sealed && error) {
                sealed = true;
                reject(promise, error);
              }
            }, promise);
          }

          function handleOwnThenable(promise, thenable) {
            if (thenable._state === FULFILLED) {
              fulfill(promise, thenable._result);
            } else if (thenable._state === REJECTED) {
              reject(promise, thenable._result);
            } else {
              subscribe(thenable, undefined, function (value) {
                return resolve(promise, value);
              }, function (reason) {
                return reject(promise, reason);
              });
            }
          }

          function handleMaybeThenable(promise, maybeThenable, then$$1) {
            if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
              handleOwnThenable(promise, maybeThenable);
            } else {
              if (then$$1 === GET_THEN_ERROR) {
                reject(promise, GET_THEN_ERROR.error);
                GET_THEN_ERROR.error = null;
              } else if (then$$1 === undefined) {
                fulfill(promise, maybeThenable);
              } else if (isFunction(then$$1)) {
                handleForeignThenable(promise, maybeThenable, then$$1);
              } else {
                fulfill(promise, maybeThenable);
              }
            }
          }

          function resolve(promise, value) {
            if (promise === value) {
              reject(promise, selfFulfillment());
            } else if (objectOrFunction(value)) {
              handleMaybeThenable(promise, value, getThen(value));
            } else {
              fulfill(promise, value);
            }
          }

          function publishRejection(promise) {
            if (promise._onerror) {
              promise._onerror(promise._result);
            }

            publish(promise);
          }

          function fulfill(promise, value) {
            if (promise._state !== PENDING) {
              return;
            }

            promise._result = value;
            promise._state = FULFILLED;

            if (promise._subscribers.length !== 0) {
              asap(publish, promise);
            }
          }

          function reject(promise, reason) {
            if (promise._state !== PENDING) {
              return;
            }

            promise._state = REJECTED;
            promise._result = reason;
            asap(publishRejection, promise);
          }

          function subscribe(parent, child, onFulfillment, onRejection) {
            var _subscribers = parent._subscribers;
            var length = _subscribers.length;
            parent._onerror = null;
            _subscribers[length] = child;
            _subscribers[length + FULFILLED] = onFulfillment;
            _subscribers[length + REJECTED] = onRejection;

            if (length === 0 && parent._state) {
              asap(publish, parent);
            }
          }

          function publish(promise) {
            var subscribers = promise._subscribers;
            var settled = promise._state;

            if (subscribers.length === 0) {
              return;
            }

            var child = undefined,
                callback = undefined,
                detail = promise._result;

            for (var i = 0; i < subscribers.length; i += 3) {
              child = subscribers[i];
              callback = subscribers[i + settled];

              if (child) {
                invokeCallback(settled, child, callback, detail);
              } else {
                callback(detail);
              }
            }

            promise._subscribers.length = 0;
          }

          function ErrorObject() {
            this.error = null;
          }

          var TRY_CATCH_ERROR = new ErrorObject();

          function tryCatch(callback, detail) {
            try {
              return callback(detail);
            } catch (e) {
              TRY_CATCH_ERROR.error = e;
              return TRY_CATCH_ERROR;
            }
          }

          function invokeCallback(settled, promise, callback, detail) {
            var hasCallback = isFunction(callback),
                value = undefined,
                error = undefined,
                succeeded = undefined,
                failed = undefined;

            if (hasCallback) {
              value = tryCatch(callback, detail);

              if (value === TRY_CATCH_ERROR) {
                failed = true;
                error = value.error;
                value.error = null;
              } else {
                succeeded = true;
              }

              if (promise === value) {
                reject(promise, cannotReturnOwn());
                return;
              }
            } else {
              value = detail;
              succeeded = true;
            }

            if (promise._state !== PENDING) {// noop
            } else if (hasCallback && succeeded) {
              resolve(promise, value);
            } else if (failed) {
              reject(promise, error);
            } else if (settled === FULFILLED) {
              fulfill(promise, value);
            } else if (settled === REJECTED) {
              reject(promise, value);
            }
          }

          function initializePromise(promise, resolver) {
            try {
              resolver(function resolvePromise(value) {
                resolve(promise, value);
              }, function rejectPromise(reason) {
                reject(promise, reason);
              });
            } catch (e) {
              reject(promise, e);
            }
          }

          var id = 0;

          function nextId() {
            return id++;
          }

          function makePromise(promise) {
            promise[PROMISE_ID] = id++;
            promise._state = undefined;
            promise._result = undefined;
            promise._subscribers = [];
          }

          function Enumerator$1(Constructor, input) {
            this._instanceConstructor = Constructor;
            this.promise = new Constructor(noop);

            if (!this.promise[PROMISE_ID]) {
              makePromise(this.promise);
            }

            if (isArray(input)) {
              this.length = input.length;
              this._remaining = input.length;
              this._result = new Array(this.length);

              if (this.length === 0) {
                fulfill(this.promise, this._result);
              } else {
                this.length = this.length || 0;

                this._enumerate(input);

                if (this._remaining === 0) {
                  fulfill(this.promise, this._result);
                }
              }
            } else {
              reject(this.promise, validationError());
            }
          }

          function validationError() {
            return new Error('Array Methods must be provided an Array');
          }

          Enumerator$1.prototype._enumerate = function (input) {
            for (var i = 0; this._state === PENDING && i < input.length; i++) {
              this._eachEntry(input[i], i);
            }
          };

          Enumerator$1.prototype._eachEntry = function (entry, i) {
            var c = this._instanceConstructor;
            var resolve$$1 = c.resolve;

            if (resolve$$1 === resolve$1) {
              var _then = getThen(entry);

              if (_then === then && entry._state !== PENDING) {
                this._settledAt(entry._state, i, entry._result);
              } else if (typeof _then !== 'function') {
                this._remaining--;
                this._result[i] = entry;
              } else if (c === Promise$2) {
                var promise = new c(noop);
                handleMaybeThenable(promise, entry, _then);

                this._willSettleAt(promise, i);
              } else {
                this._willSettleAt(new c(function (resolve$$1) {
                  return resolve$$1(entry);
                }), i);
              }
            } else {
              this._willSettleAt(resolve$$1(entry), i);
            }
          };

          Enumerator$1.prototype._settledAt = function (state, i, value) {
            var promise = this.promise;

            if (promise._state === PENDING) {
              this._remaining--;

              if (state === REJECTED) {
                reject(promise, value);
              } else {
                this._result[i] = value;
              }
            }

            if (this._remaining === 0) {
              fulfill(promise, this._result);
            }
          };

          Enumerator$1.prototype._willSettleAt = function (promise, i) {
            var enumerator = this;
            subscribe(promise, undefined, function (value) {
              return enumerator._settledAt(FULFILLED, i, value);
            }, function (reason) {
              return enumerator._settledAt(REJECTED, i, reason);
            });
          };
          /**
            `Promise.all` accepts an array of promises, and returns a new promise which
            is fulfilled with an array of fulfillment values for the passed promises, or
            rejected with the reason of the first passed promise to be rejected. It casts all
            elements of the passed iterable to promises as it runs this algorithm.
          
            Example:
          
            ```javascript
            let promise1 = resolve(1);
            let promise2 = resolve(2);
            let promise3 = resolve(3);
            let promises = [ promise1, promise2, promise3 ];
          
            Promise.all(promises).then(function(array){
              // The array here would be [ 1, 2, 3 ];
            });
            ```
          
            If any of the `promises` given to `all` are rejected, the first promise
            that is rejected will be given as an argument to the returned promises's
            rejection handler. For example:
          
            Example:
          
            ```javascript
            let promise1 = resolve(1);
            let promise2 = reject(new Error("2"));
            let promise3 = reject(new Error("3"));
            let promises = [ promise1, promise2, promise3 ];
          
            Promise.all(promises).then(function(array){
              // Code here never runs because there are rejected promises!
            }, function(error) {
              // error.message === "2"
            });
            ```
          
            @method all
            @static
            @param {Array} entries array of promises
            @param {String} label optional string for labeling the promise.
            Useful for tooling.
            @return {Promise} promise that is fulfilled when all `promises` have been
            fulfilled, or rejected if any of them become rejected.
            @static
          */


          function all$1(entries) {
            return new Enumerator$1(this, entries).promise;
          }
          /**
            `Promise.race` returns a new promise which is settled in the same way as the
            first passed promise to settle.
          
            Example:
          
            ```javascript
            let promise1 = new Promise(function(resolve, reject){
              setTimeout(function(){
                resolve('promise 1');
              }, 200);
            });
          
            let promise2 = new Promise(function(resolve, reject){
              setTimeout(function(){
                resolve('promise 2');
              }, 100);
            });
          
            Promise.race([promise1, promise2]).then(function(result){
              // result === 'promise 2' because it was resolved before promise1
              // was resolved.
            });
            ```
          
            `Promise.race` is deterministic in that only the state of the first
            settled promise matters. For example, even if other promises given to the
            `promises` array argument are resolved, but the first settled promise has
            become rejected before the other promises became fulfilled, the returned
            promise will become rejected:
          
            ```javascript
            let promise1 = new Promise(function(resolve, reject){
              setTimeout(function(){
                resolve('promise 1');
              }, 200);
            });
          
            let promise2 = new Promise(function(resolve, reject){
              setTimeout(function(){
                reject(new Error('promise 2'));
              }, 100);
            });
          
            Promise.race([promise1, promise2]).then(function(result){
              // Code here never runs
            }, function(reason){
              // reason.message === 'promise 2' because promise 2 became rejected before
              // promise 1 became fulfilled
            });
            ```
          
            An example real-world use case is implementing timeouts:
          
            ```javascript
            Promise.race([ajax('foo.json'), timeout(5000)])
            ```
          
            @method race
            @static
            @param {Array} promises array of promises to observe
            Useful for tooling.
            @return {Promise} a promise which settles in the same way as the first passed
            promise to settle.
          */


          function race$1(entries) {
            /*jshint validthis:true */
            var Constructor = this;

            if (!isArray(entries)) {
              return new Constructor(function (_, reject) {
                return reject(new TypeError('You must pass an array to race.'));
              });
            } else {
              return new Constructor(function (resolve, reject) {
                var length = entries.length;

                for (var i = 0; i < length; i++) {
                  Constructor.resolve(entries[i]).then(resolve, reject);
                }
              });
            }
          }
          /**
            `Promise.reject` returns a promise rejected with the passed `reason`.
            It is shorthand for the following:
          
            ```javascript
            let promise = new Promise(function(resolve, reject){
              reject(new Error('WHOOPS'));
            });
          
            promise.then(function(value){
              // Code here doesn't run because the promise is rejected!
            }, function(reason){
              // reason.message === 'WHOOPS'
            });
            ```
          
            Instead of writing the above, your code now simply becomes the following:
          
            ```javascript
            let promise = Promise.reject(new Error('WHOOPS'));
          
            promise.then(function(value){
              // Code here doesn't run because the promise is rejected!
            }, function(reason){
              // reason.message === 'WHOOPS'
            });
            ```
          
            @method reject
            @static
            @param {Any} reason value that the returned promise will be rejected with.
            Useful for tooling.
            @return {Promise} a promise rejected with the given `reason`.
          */


          function reject$1(reason) {
            /*jshint validthis:true */
            var Constructor = this;
            var promise = new Constructor(noop);
            reject(promise, reason);
            return promise;
          }

          function needsResolver() {
            throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
          }

          function needsNew() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }
          /**
            Promise objects represent the eventual result of an asynchronous operation. The
            primary way of interacting with a promise is through its `then` method, which
            registers callbacks to receive either a promise's eventual value or the reason
            why the promise cannot be fulfilled.
          
            Terminology
            -----------
          
            - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
            - `thenable` is an object or function that defines a `then` method.
            - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
            - `exception` is a value that is thrown using the throw statement.
            - `reason` is a value that indicates why a promise was rejected.
            - `settled` the final resting state of a promise, fulfilled or rejected.
          
            A promise can be in one of three states: pending, fulfilled, or rejected.
          
            Promises that are fulfilled have a fulfillment value and are in the fulfilled
            state.  Promises that are rejected have a rejection reason and are in the
            rejected state.  A fulfillment value is never a thenable.
          
            Promises can also be said to *resolve* a value.  If this value is also a
            promise, then the original promise's settled state will match the value's
            settled state.  So a promise that *resolves* a promise that rejects will
            itself reject, and a promise that *resolves* a promise that fulfills will
            itself fulfill.
          
          
            Basic Usage:
            ------------
          
            ```js
            let promise = new Promise(function(resolve, reject) {
              // on success
              resolve(value);
          
              // on failure
              reject(reason);
            });
          
            promise.then(function(value) {
              // on fulfillment
            }, function(reason) {
              // on rejection
            });
            ```
          
            Advanced Usage:
            ---------------
          
            Promises shine when abstracting away asynchronous interactions such as
            `XMLHttpRequest`s.
          
            ```js
            function getJSON(url) {
              return new Promise(function(resolve, reject){
                let xhr = new XMLHttpRequest();
          
                xhr.open('GET', url);
                xhr.onreadystatechange = handler;
                xhr.responseType = 'json';
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.send();
          
                function handler() {
                  if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                      resolve(this.response);
                    } else {
                      reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
                    }
                  }
                };
              });
            }
          
            getJSON('/posts.json').then(function(json) {
              // on fulfillment
            }, function(reason) {
              // on rejection
            });
            ```
          
            Unlike callbacks, promises are great composable primitives.
          
            ```js
            Promise.all([
              getJSON('/posts'),
              getJSON('/comments')
            ]).then(function(values){
              values[0] // => postsJSON
              values[1] // => commentsJSON
          
              return values;
            });
            ```
          
            @class Promise
            @param {function} resolver
            Useful for tooling.
            @constructor
          */


          function Promise$2(resolver) {
            this[PROMISE_ID] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];

            if (noop !== resolver) {
              typeof resolver !== 'function' && needsResolver();
              this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
            }
          }

          Promise$2.all = all$1;
          Promise$2.race = race$1;
          Promise$2.resolve = resolve$1;
          Promise$2.reject = reject$1;
          Promise$2._setScheduler = setScheduler;
          Promise$2._setAsap = setAsap;
          Promise$2._asap = asap;
          Promise$2.prototype = {
            constructor: Promise$2,

            /**
              The primary way of interacting with a promise is through its `then` method,
              which registers callbacks to receive either a promise's eventual value or the
              reason why the promise cannot be fulfilled.
            
              ```js
              findUser().then(function(user){
                // user is available
              }, function(reason){
                // user is unavailable, and you are given the reason why
              });
              ```
            
              Chaining
              --------
            
              The return value of `then` is itself a promise.  This second, 'downstream'
              promise is resolved with the return value of the first promise's fulfillment
              or rejection handler, or rejected if the handler throws an exception.
            
              ```js
              findUser().then(function (user) {
                return user.name;
              }, function (reason) {
                return 'default name';
              }).then(function (userName) {
                // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
                // will be `'default name'`
              });
            
              findUser().then(function (user) {
                throw new Error('Found user, but still unhappy');
              }, function (reason) {
                throw new Error('`findUser` rejected and we're unhappy');
              }).then(function (value) {
                // never reached
              }, function (reason) {
                // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
                // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
              });
              ```
              If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
            
              ```js
              findUser().then(function (user) {
                throw new PedagogicalException('Upstream error');
              }).then(function (value) {
                // never reached
              }).then(function (value) {
                // never reached
              }, function (reason) {
                // The `PedgagocialException` is propagated all the way down to here
              });
              ```
            
              Assimilation
              ------------
            
              Sometimes the value you want to propagate to a downstream promise can only be
              retrieved asynchronously. This can be achieved by returning a promise in the
              fulfillment or rejection handler. The downstream promise will then be pending
              until the returned promise is settled. This is called *assimilation*.
            
              ```js
              findUser().then(function (user) {
                return findCommentsByAuthor(user);
              }).then(function (comments) {
                // The user's comments are now available
              });
              ```
            
              If the assimliated promise rejects, then the downstream promise will also reject.
            
              ```js
              findUser().then(function (user) {
                return findCommentsByAuthor(user);
              }).then(function (comments) {
                // If `findCommentsByAuthor` fulfills, we'll have the value here
              }, function (reason) {
                // If `findCommentsByAuthor` rejects, we'll have the reason here
              });
              ```
            
              Simple Example
              --------------
            
              Synchronous Example
            
              ```javascript
              let result;
            
              try {
                result = findResult();
                // success
              } catch(reason) {
                // failure
              }
              ```
            
              Errback Example
            
              ```js
              findResult(function(result, err){
                if (err) {
                  // failure
                } else {
                  // success
                }
              });
              ```
            
              Promise Example;
            
              ```javascript
              findResult().then(function(result){
                // success
              }, function(reason){
                // failure
              });
              ```
            
              Advanced Example
              --------------
            
              Synchronous Example
            
              ```javascript
              let author, books;
            
              try {
                author = findAuthor();
                books  = findBooksByAuthor(author);
                // success
              } catch(reason) {
                // failure
              }
              ```
            
              Errback Example
            
              ```js
            
              function foundBooks(books) {
            
              }
            
              function failure(reason) {
            
              }
            
              findAuthor(function(author, err){
                if (err) {
                  failure(err);
                  // failure
                } else {
                  try {
                    findBoooksByAuthor(author, function(books, err) {
                      if (err) {
                        failure(err);
                      } else {
                        try {
                          foundBooks(books);
                        } catch(reason) {
                          failure(reason);
                        }
                      }
                    });
                  } catch(error) {
                    failure(err);
                  }
                  // success
                }
              });
              ```
            
              Promise Example;
            
              ```javascript
              findAuthor().
                then(findBooksByAuthor).
                then(function(books){
                  // found books
              }).catch(function(reason){
                // something went wrong
              });
              ```
            
              @method then
              @param {Function} onFulfilled
              @param {Function} onRejected
              Useful for tooling.
              @return {Promise}
            */
            then: then,

            /**
              `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
              as the catch block of a try/catch statement.
            
              ```js
              function findAuthor(){
                throw new Error('couldn't find that author');
              }
            
              // synchronous
              try {
                findAuthor();
              } catch(reason) {
                // something went wrong
              }
            
              // async with promises
              findAuthor().catch(function(reason){
                // something went wrong
              });
              ```
            
              @method catch
              @param {Function} onRejection
              Useful for tooling.
              @return {Promise}
            */
            'catch': function _catch(onRejection) {
              return this.then(null, onRejection);
            }
          };
          /*global self*/

          function polyfill$1() {
            var local = undefined;

            if (typeof global !== 'undefined') {
              local = global;
            } else if (typeof self !== 'undefined') {
              local = self;
            } else {
              try {
                local = Function('return this')();
              } catch (e) {
                throw new Error('polyfill failed because global object is unavailable in this environment');
              }
            }

            var P = local.Promise;

            if (P) {
              var promiseToString = null;

              try {
                promiseToString = Object.prototype.toString.call(P.resolve());
              } catch (e) {// silently ignored
              }

              if (promiseToString === '[object Promise]' && !P.cast) {
                return;
              }
            }

            local.Promise = Promise$2;
          } // Strange compat..


          Promise$2.polyfill = polyfill$1;
          Promise$2.Promise = Promise$2;
          return Promise$2;
        });
        /* WEBPACK VAR INJECTION */

      }).call(exports, __webpack_require__(7), __webpack_require__(8));
      /***/
    },
    /* 5 */

    /***/
    function (module, exports) {// removed by extract-text-webpack-plugin

      /***/
    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      /* global VERSION */


      __webpack_require__(5);

      var _es6Promise = __webpack_require__(4);

      var _es6Promise2 = _interopRequireDefault(_es6Promise);

      var _utils = __webpack_require__(0);

      var Utils = _interopRequireWildcard(_utils);

      var _api = __webpack_require__(1);

      var API = _interopRequireWildcard(_api);

      var _button = __webpack_require__(2);

      var _push = __webpack_require__(3);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};

          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }

          newObj.default = obj;
          return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var Noty = function () {
        /**
         * @param {object} options
         * @return {Noty}
         */
        function Noty() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, Noty);

          this.options = Utils.deepExtend({}, API.Defaults, options);

          if (API.Store[this.options.id]) {
            return API.Store[this.options.id];
          }

          this.id = this.options.id || Utils.generateID('bar');
          this.closeTimer = -1;
          this.barDom = null;
          this.layoutDom = null;
          this.progressDom = null;
          this.showing = false;
          this.shown = false;
          this.closed = false;
          this.closing = false;
          this.killable = this.options.timeout || this.options.closeWith.length > 0;
          this.hasSound = this.options.sounds.sources.length > 0;
          this.soundPlayed = false;
          this.listeners = {
            beforeShow: [],
            onShow: [],
            afterShow: [],
            onClose: [],
            afterClose: [],
            onClick: [],
            onHover: [],
            onTemplate: []
          };
          this.promises = {
            show: null,
            close: null
          };
          this.on('beforeShow', this.options.callbacks.beforeShow);
          this.on('onShow', this.options.callbacks.onShow);
          this.on('afterShow', this.options.callbacks.afterShow);
          this.on('onClose', this.options.callbacks.onClose);
          this.on('afterClose', this.options.callbacks.afterClose);
          this.on('onClick', this.options.callbacks.onClick);
          this.on('onHover', this.options.callbacks.onHover);
          this.on('onTemplate', this.options.callbacks.onTemplate);
          return this;
        }
        /**
         * @param {string} eventName
         * @param {function} cb
         * @return {Noty}
         */


        _createClass(Noty, [{
          key: 'on',
          value: function on(eventName) {
            var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (typeof cb === 'function' && this.listeners.hasOwnProperty(eventName)) {
              this.listeners[eventName].push(cb);
            }

            return this;
          }
          /**
           * @return {Noty}
           */

        }, {
          key: 'show',
          value: function show() {
            var _this = this;

            if (this.showing || this.shown) {
              return this; // preventing multiple show
            }

            if (this.options.killer === true) {
              Noty.closeAll();
            } else if (typeof this.options.killer === 'string') {
              Noty.closeAll(this.options.killer);
            }

            var queueCounts = API.getQueueCounts(this.options.queue);

            if (queueCounts.current >= queueCounts.maxVisible || API.PageHidden && this.options.visibilityControl) {
              API.addToQueue(this);

              if (API.PageHidden && this.hasSound && Utils.inArray('docHidden', this.options.sounds.conditions)) {
                Utils.createAudioElements(this);
              }

              if (API.PageHidden && Utils.inArray('docHidden', this.options.titleCount.conditions)) {
                API.docTitle.increment();
              }

              return this;
            }

            API.Store[this.id] = this;
            API.fire(this, 'beforeShow');
            this.showing = true;

            if (this.closing) {
              this.showing = false;
              return this;
            }

            API.build(this);
            API.handleModal(this);

            if (this.options.force) {
              this.layoutDom.insertBefore(this.barDom, this.layoutDom.firstChild);
            } else {
              this.layoutDom.appendChild(this.barDom);
            }

            if (this.hasSound && !this.soundPlayed && Utils.inArray('docVisible', this.options.sounds.conditions)) {
              Utils.createAudioElements(this);
            }

            if (Utils.inArray('docVisible', this.options.titleCount.conditions)) {
              API.docTitle.increment();
            }

            this.shown = true;
            this.closed = false; // bind button events if any

            if (API.hasButtons(this)) {
              Object.keys(this.options.buttons).forEach(function (key) {
                var btn = _this.barDom.querySelector('#' + _this.options.buttons[key].id);

                Utils.addListener(btn, 'click', function (e) {
                  Utils.stopPropagation(e);

                  _this.options.buttons[key].cb(_this);
                });
              });
            }

            this.progressDom = this.barDom.querySelector('.noty_progressbar');

            if (Utils.inArray('click', this.options.closeWith)) {
              Utils.addClass(this.barDom, 'noty_close_with_click');
              Utils.addListener(this.barDom, 'click', function (e) {
                Utils.stopPropagation(e);
                API.fire(_this, 'onClick');

                _this.close();
              }, false);
            }

            Utils.addListener(this.barDom, 'mouseenter', function () {
              API.fire(_this, 'onHover');
            }, false);
            if (this.options.timeout) Utils.addClass(this.barDom, 'noty_has_timeout');

            if (this.options.progressBar) {
              Utils.addClass(this.barDom, 'noty_has_progressbar');
            }

            if (Utils.inArray('button', this.options.closeWith)) {
              Utils.addClass(this.barDom, 'noty_close_with_button');
              var closeButton = document.createElement('div');
              Utils.addClass(closeButton, 'noty_close_button');
              closeButton.innerHTML = '×';
              this.barDom.appendChild(closeButton);
              Utils.addListener(closeButton, 'click', function (e) {
                Utils.stopPropagation(e);

                _this.close();
              }, false);
            }

            API.fire(this, 'onShow');

            if (this.options.animation.open === null) {
              this.promises.show = new _es6Promise2.default(function (resolve) {
                resolve();
              });
            } else if (typeof this.options.animation.open === 'function') {
              this.promises.show = new _es6Promise2.default(this.options.animation.open.bind(this));
            } else {
              Utils.addClass(this.barDom, this.options.animation.open);
              this.promises.show = new _es6Promise2.default(function (resolve) {
                Utils.addListener(_this.barDom, Utils.animationEndEvents, function () {
                  Utils.removeClass(_this.barDom, _this.options.animation.open);
                  resolve();
                });
              });
            }

            this.promises.show.then(function () {
              var _t = _this;
              setTimeout(function () {
                API.openFlow(_t);
              }, 100);
            });
            return this;
          }
          /**
           * @return {Noty}
           */

        }, {
          key: 'stop',
          value: function stop() {
            API.dequeueClose(this);
            return this;
          }
          /**
           * @return {Noty}
           */

        }, {
          key: 'resume',
          value: function resume() {
            API.queueClose(this);
            return this;
          }
          /**
           * @param {int|boolean} ms
           * @return {Noty}
           */

        }, {
          key: 'setTimeout',
          value: function (_setTimeout) {
            function setTimeout(_x) {
              return _setTimeout.apply(this, arguments);
            }

            setTimeout.toString = function () {
              return _setTimeout.toString();
            };

            return setTimeout;
          }(function (ms) {
            this.stop();
            this.options.timeout = ms;

            if (this.barDom) {
              if (this.options.timeout) {
                Utils.addClass(this.barDom, 'noty_has_timeout');
              } else {
                Utils.removeClass(this.barDom, 'noty_has_timeout');
              }

              var _t = this;

              setTimeout(function () {
                // ugly fix for progressbar display bug
                _t.resume();
              }, 100);
            }

            return this;
          })
          /**
           * @param {string} html
           * @param {boolean} optionsOverride
           * @return {Noty}
           */

        }, {
          key: 'setText',
          value: function setText(html) {
            var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.barDom) {
              this.barDom.querySelector('.noty_body').innerHTML = html;
            }

            if (optionsOverride) this.options.text = html;
            return this;
          }
          /**
           * @param {string} type
           * @param {boolean} optionsOverride
           * @return {Noty}
           */

        }, {
          key: 'setType',
          value: function setType(type) {
            var _this2 = this;

            var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.barDom) {
              var classList = Utils.classList(this.barDom).split(' ');
              classList.forEach(function (c) {
                if (c.substring(0, 11) === 'noty_type__') {
                  Utils.removeClass(_this2.barDom, c);
                }
              });
              Utils.addClass(this.barDom, 'noty_type__' + type);
            }

            if (optionsOverride) this.options.type = type;
            return this;
          }
          /**
           * @param {string} theme
           * @param {boolean} optionsOverride
           * @return {Noty}
           */

        }, {
          key: 'setTheme',
          value: function setTheme(theme) {
            var _this3 = this;

            var optionsOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.barDom) {
              var classList = Utils.classList(this.barDom).split(' ');
              classList.forEach(function (c) {
                if (c.substring(0, 12) === 'noty_theme__') {
                  Utils.removeClass(_this3.barDom, c);
                }
              });
              Utils.addClass(this.barDom, 'noty_theme__' + theme);
            }

            if (optionsOverride) this.options.theme = theme;
            return this;
          }
          /**
           * @return {Noty}
           */

        }, {
          key: 'close',
          value: function close() {
            var _this4 = this;

            if (this.closed) return this;

            if (!this.shown) {
              // it's in the queue
              API.removeFromQueue(this);
              return this;
            }

            API.fire(this, 'onClose');
            this.closing = true;

            if (this.options.animation.close === null || this.options.animation.close === false) {
              this.promises.close = new _es6Promise2.default(function (resolve) {
                resolve();
              });
            } else if (typeof this.options.animation.close === 'function') {
              this.promises.close = new _es6Promise2.default(this.options.animation.close.bind(this));
            } else {
              Utils.addClass(this.barDom, this.options.animation.close);
              this.promises.close = new _es6Promise2.default(function (resolve) {
                Utils.addListener(_this4.barDom, Utils.animationEndEvents, function () {
                  if (_this4.options.force) {
                    Utils.remove(_this4.barDom);
                  } else {
                    API.ghostFix(_this4);
                  }

                  resolve();
                });
              });
            }

            this.promises.close.then(function () {
              API.closeFlow(_this4);
              API.handleModalClose(_this4);
            });
            this.closed = true;
            return this;
          } // API functions

          /**
           * @param {boolean|string} queueName
           * @return {Noty}
           */

        }], [{
          key: 'closeAll',
          value: function closeAll() {
            var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            Object.keys(API.Store).forEach(function (id) {
              if (queueName) {
                if (API.Store[id].options.queue === queueName && API.Store[id].killable) {
                  API.Store[id].close();
                }
              } else if (API.Store[id].killable) {
                API.Store[id].close();
              }
            });
            return this;
          }
          /**
           * @param {string} queueName
           * @return {Noty}
           */

        }, {
          key: 'clearQueue',
          value: function clearQueue() {
            var queueName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'global';

            if (API.Queues.hasOwnProperty(queueName)) {
              API.Queues[queueName].queue = [];
            }

            return this;
          }
          /**
           * @return {API.Queues}
           */

        }, {
          key: 'overrideDefaults',

          /**
           * @param {Object} obj
           * @return {Noty}
           */
          value: function overrideDefaults(obj) {
            API.Defaults = Utils.deepExtend({}, API.Defaults, obj);
            return this;
          }
          /**
           * @param {int} amount
           * @param {string} queueName
           * @return {Noty}
           */

        }, {
          key: 'setMaxVisible',
          value: function setMaxVisible() {
            var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : API.DefaultMaxVisible;
            var queueName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'global';

            if (!API.Queues.hasOwnProperty(queueName)) {
              API.Queues[queueName] = {
                maxVisible: amount,
                queue: []
              };
            }

            API.Queues[queueName].maxVisible = amount;
            return this;
          }
          /**
           * @param {string} innerHtml
           * @param {String} classes
           * @param {Function} cb
           * @param {Object} attributes
           * @return {NotyButton}
           */

        }, {
          key: 'button',
          value: function button(innerHtml) {
            var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var cb = arguments[2];
            var attributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            return new _button.NotyButton(innerHtml, classes, cb, attributes);
          }
          /**
           * @return {string}
           */

        }, {
          key: 'version',
          value: function version() {
            return "3.2.0-beta";
          }
          /**
           * @param {String} workerPath
           * @return {Push}
           */

        }, {
          key: 'Push',
          value: function Push(workerPath) {
            return new _push.Push(workerPath);
          }
        }, {
          key: 'Queues',
          get: function get() {
            return API.Queues;
          }
          /**
           * @return {API.PageHidden}
           */

        }, {
          key: 'PageHidden',
          get: function get() {
            return API.PageHidden;
          }
        }]);

        return Noty;
      }(); // Document visibility change controller


      exports.default = Noty;

      if (typeof window !== 'undefined') {
        Utils.visibilityChangeFlow();
      }

      module.exports = exports['default'];
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      // shim for using process in browser
      var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }

      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }

      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        } // if setTimeout wasn't available but was latter defined


        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        } // if clearTimeout wasn't available but was latter defined


        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      }; // v8 likes predictible objects


      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = 'browser';
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues

      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };

      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };

      process.umask = function () {
        return 0;
      };
      /***/

    },
    /* 8 */

    /***/
    function (module, exports) {
      var g; // This works in non-strict mode

      g = function () {
        return this;
      }();

      try {
        // This works if eval is allowed (see CSP)
        g = g || Function("return this")() || (1, eval)("this");
      } catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
      } // g can still be undefined, but nothing to do about it...
      // We return undefined, instead of nothing here, so it's
      // easier to handle this case. if(!global) { ...}


      module.exports = g;
      /***/
    },
    /* 9 */

    /***/
    function (module, exports) {
      /* (ignored) */

      /***/
    }
    /******/
    ])
  );
}); //# sourceMappingURL=noty.js.map
},{"process":"node_modules/process/browser.js"}],"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = H;
exports.hydrate = I;
exports.h = exports.createElement = h;
exports.Fragment = d;
exports.createRef = p;
exports.Component = m;
exports.cloneElement = L;
exports.createContext = M;
exports.toChildArray = x;
exports._unmount = D;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f,
    e = {},
    c = [],
    a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function v(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return y(n, o, l && l.key, l && l.ref, null);
}

function y(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o
  };
  return null == o && (r.__v = r), n.vnode && n.vnode(r), r;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function m(n, l) {
  this.props = n, this.context = l;
}

function w(n, l) {
  if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? w(n) : null;
}

function k(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return k(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !i++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || t)(_);
}

function _() {
  for (var n; i = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r, f;
    n.__d && (r = (o = (l = n).__v).__e, (f = l.__P) && (u = [], (i = s({}, o)).__v = i, t = z(f, o, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == r ? w(o) : r), T(u, o), t != r && k(o)));
  });
}

function b(n, l, u, i, t, o, r, f, a, s) {
  var h,
      p,
      m,
      k,
      g,
      _,
      b,
      x,
      A,
      P = i && i.__k || c,
      C = P.length;

  for (a == e && (a = null != r ? r[0] : C ? w(i, 0) : null), u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k ? y(null, k, null, null, k) : Array.isArray(k) ? y(d, {
    children: k
  }, null, null, null) : null != k.__e || null != k.__c ? y(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (m = P[h]) || m && k.key == m.key && k.type === m.type) P[h] = void 0;else for (p = 0; p < C; p++) {
      if ((m = P[p]) && k.key == m.key && k.type === m.type) {
        P[p] = void 0;
        break;
      }

      m = null;
    }

    if (g = z(n, k, m = m || e, t, o, r, f, a, s), (p = k.ref) && m.ref != p && (x || (x = []), m.ref && x.push(m.ref, null, k), x.push(p, k.__c || g, k)), null != g) {
      if (null == b && (b = g), A = void 0, void 0 !== k.__d) A = k.__d, k.__d = void 0;else if (r == m || g != a || null == g.parentNode) {
        n: if (null == a || a.parentNode !== n) n.appendChild(g), A = null;else {
          for (_ = a, p = 0; (_ = _.nextSibling) && p < C; p += 2) if (_ == g) break n;

          n.insertBefore(g, a), A = a;
        }

        "option" == u.type && (n.value = "");
      }
      a = void 0 !== A ? A : g.nextSibling, "function" == typeof u.type && (u.__d = a);
    } else a && m.__e == a && a.parentNode != n && (a = w(m));
  }

  if (u.__e = b, null != r && "function" != typeof u.type) for (h = r.length; h--;) null != r[h] && v(r[h]);

  for (h = C; h--;) null != P[h] && D(P[h], P[h]);

  if (x) for (h = 0; h < x.length; h++) j(x[h], x[++h], x[++h]);
}

function x(n) {
  return null == n || "boolean" == typeof n ? [] : Array.isArray(n) ? c.concat.apply([], n.map(x)) : [n];
}

function A(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === a.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var o, r, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (e in i) u && e in u || P(o, e, "");
      if (u) for (c in u) i && u[c] === i[c] || P(o, c, u[c]);
    }
  } else "o" === l[0] && "n" === l[1] ? (r = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, N, r), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, r)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      y,
      p,
      w,
      k,
      g,
      _,
      x,
      A,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, _ = (a = P.contextType) && t[a.__c], x = a ? _ ? _.props.value : a.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new m(g, x), v.constructor = P, v.render = E), _ && _.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(g, v.__s))), y = v.props, p = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== y && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          for (v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(y, p, w);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(y, p)), A = null != a && a.type == d && null == a.key ? a.props.children : a, b(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = $(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, i);
  }

  return u.__e;
}

function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function $(n, l, u, i, t, o, r, f) {
  var a,
      s,
      v,
      h,
      y,
      p = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != o) for (a = 0; a < o.length; a++) if (null != (s = o[a]) && ((null === l.type ? 3 === s.nodeType : s.localName === l.type) || n == s)) {
    n = s, o[a] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), o = null, f = !1;
  }

  if (null === l.type) p !== d && n.data != d && (n.data = d);else {
    if (null != o && (o = c.slice.call(n.childNodes)), v = (p = u.props || e).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !f) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    A(n, d, p, t, f), h ? l.__k = [] : (a = l.props.children, b(n, Array.isArray(a) ? a : [a], l, u, i, "foreignObject" !== l.type && t, o, r, e, f)), f || ("value" in d && void 0 !== (a = d.value) && a !== n.value && C(n, "value", a, p.value, !1), "checked" in d && void 0 !== (a = d.checked) && a !== n.checked && C(n, "checked", a, p.checked, !1));
  }
  return n;
}

function j(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function D(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && D(t[r], u, i);
  null != o && v(o);
}

function E(n, l, u) {
  return this.constructor(n, u);
}

function H(l, u, i) {
  var t, o, f;
  n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = h(d, null, [l]), f = [], z(u, (t ? u : i || u).__k = l, o || e, e, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : u.childNodes.length ? c.slice.call(u.childNodes) : null, f, i || e, t), T(f, l);
}

function I(n, l) {
  H(n, l, r);
}

function L(n, l) {
  var u, i;

  for (i in l = s(s({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), u = {}, l) "key" !== i && "ref" !== i && (u[i] = l[i]);

  return y(n.type, u, l.key || n.key, l.ref || n.ref, null);
}

function M(n) {
  var l = {},
      u = {
    __c: "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (n) {
        t.props.value !== n.value && i.some(function (l) {
          l.context = n.value, g(l);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u.Provider.__ = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, m.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), g(this));
}, m.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, m.prototype.render = d, u = [], i = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, r = e, f = 0;
},{}],"node_modules/luxon/build/cjs-browser/luxon.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(offset / 60),
      minutes = Math.abs(offset % 60),
      sign = hours >= 0 && !Object.is(hours, -0) ? "+" : "-",
      base = "" + sign + Math.abs(hours);

  switch (format) {
    case "short":
      return "" + sign + padStart(Math.abs(hours), 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return minutes > 0 ? base + ":" + minutes : base;

    case "techie":
      return "" + sign + padStart(Math.abs(hours), 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var _dur;

  var keys = Object.keys(dur.values);

  if (keys.indexOf("milliseconds") === -1) {
    keys.push("milliseconds");
  }

  dur = (_dur = dur).shiftTo.apply(_dur, keys);
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.local().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;


},{}],"js/activity_select.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _luxon = require("luxon");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Activity = /*#__PURE__*/function (_Component) {
  _inherits(Activity, _Component);

  var _super = _createSuper(Activity);

  function Activity(props) {
    var _this;

    _classCallCheck(this, Activity);

    _this = _super.call(this, props);
    _this.state = {
      dropdown: false,
      delete_sure: false,
      day_object: _luxon.DateTime.fromISO(props.day)
    };
    return _this;
  }

  _createClass(Activity, [{
    key: "toggleDropdown",
    value: function toggleDropdown() {
      this.setState(function (_ref) {
        var dropdown = _ref.dropdown;
        return {
          dropdown: !dropdown
        };
      });
    }
  }, {
    key: "setDeleteSure",
    value: function setDeleteSure() {
      this.setState({
        delete_sure: true
      });
    } // TODO: Actual delete

  }, {
    key: "render",
    value: function render(_ref2, _ref3) {
      var _this2 = this;

      var code = _ref2.code,
          code_long = _ref2.code_long,
          code_info = _ref2.code_info,
          description = _ref2.description,
          room = _ref2.room,
          staff = _ref2.staff,
          planned_size = _ref2.planned_size,
          start = _ref2.start,
          weeks = _ref2.weeks,
          delete_activity = _ref2.delete_activity;
      var dropdown = _ref3.dropdown,
          day_object = _ref3.day_object,
          delete_sure = _ref3.delete_sure;
      return (0, _preact.h)("div", {
        className: "border-bottom border-secondary"
      }, (0, _preact.h)("div", {
        className: "d-flex align-items-stretch"
      }, (0, _preact.h)("div", {
        className: "mr-auto pl-3 pr-3 d-flex flex-column justify-content-center align-items-start"
      }, code, code_info && (0, _preact.h)("small", {
        className: "text-muted"
      }, code_info)), delete_sure ? (0, _preact.h)("div", {
        className: "activity-select-delete p-3",
        onClick: function onClick() {
          return delete_activity();
        }
      }, (0, _preact.h)("span", null, "You sure?")) : (0, _preact.h)("div", {
        className: "activity-select-delete p-3",
        onClick: function onClick() {
          return _this2.setDeleteSure();
        }
      }, (0, _preact.h)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-trash-fill",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0, _preact.h)("path", {
        "fill-rule": "evenodd",
        d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
      }))), (0, _preact.h)("div", {
        className: "activity-select-dropdown p-3",
        onClick: function onClick() {
          return _this2.toggleDropdown();
        }
      }, dropdown ? (0, _preact.h)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-caret-up-fill",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0, _preact.h)("path", {
        d: "M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
      })) : (0, _preact.h)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-caret-down-fill",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0, _preact.h)("path", {
        d: "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
      })))), dropdown && (0, _preact.h)("div", {
        className: "border-top border-primary pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Long name:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, code_long)), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Description:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, description)), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Day:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, day_object.toFormat('cccc'))), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Time:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, start)), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Weeks*:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, weeks.join(', '))), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Room:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, room)), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Staff:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, staff)), (0, _preact.h)("div", {
        className: "row m-0 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "col-sm-3 text-muted"
      }, "Size:"), (0, _preact.h)("div", {
        className: "col-sm-9"
      }, planned_size)), (0, _preact.h)("div", {
        className: "small text-muted pl-3"
      }, "Something not seem right? You can edit this info later. *Where ", day_object.toFormat('cccc'), " of Week 0 is ", day_object.toFormat('DD'), ".")));
    }
  }]);

  return Activity;
}(_preact.Component);

var ActivitySelect = /*#__PURE__*/function (_Component2) {
  _inherits(ActivitySelect, _Component2);

  var _super2 = _createSuper(ActivitySelect);

  function ActivitySelect(props) {
    var _this3;

    _classCallCheck(this, ActivitySelect);

    _this3 = _super2.call(this, props);
    _this3.state = {
      modules: props.modules
    };
    return _this3;
  }

  _createClass(ActivitySelect, [{
    key: "delete_activity",
    value: function delete_activity(moduleCode, activityIndex) {
      this.setState(function (_ref4) {
        var modules = _ref4.modules;
        return {
          modules: modules.map(function (module) {
            return module.code !== moduleCode ? module : _objectSpread(_objectSpread({}, module), {}, {
              activities: module.activities.filter(function (activity, index) {
                return index !== activityIndex;
              })
            });
          })
        };
      });
    }
  }, {
    key: "continue_click",
    value: function continue_click() {
      this.props.continue_callback(this.state.modules);
    }
  }, {
    key: "render",
    value: function render(_, _ref5) {
      var _this4 = this;

      var modules = _ref5.modules;
      return (0, _preact.h)("div", {
        className: "mb-5"
      }, modules.map(function (_ref6) {
        var code = _ref6.code,
            title = _ref6.title,
            activities = _ref6.activities;
        return (0, _preact.h)("div", {
          className: "mb-5",
          key: code
        }, title ? (0, _preact.h)("h3", {
          className: "border-left pl-3 text-light mb-2"
        }, title, " ", (0, _preact.h)("small", {
          className: "text-muted"
        }, code)) : (0, _preact.h)("h3", {
          className: "border-left pl-3 text-light mb-2"
        }, code), (0, _preact.h)("div", {
          className: "rounded-lg bg-light overflow-hidden"
        }, !activities.length && (0, _preact.h)("div", {
          className: "p-3"
        }, "This module has no activities."), activities.map(function (activity, index) {
          return (0, _preact.h)(Activity, _extends({
            key: activity.id,
            delete_activity: function delete_activity() {
              return _this4.delete_activity(code, index);
            }
          }, activity));
        })));
      }), (0, _preact.h)("button", {
        className: "btn btn-lg btn-primary",
        onClick: function onClick() {
          return _this4.continue_click();
        }
      }, "Continue"), (0, _preact.h)("div", {
        className: "small text-muted"
      }, "Once you click continue you cannot go back. To restart you must refresh the page."));
    }
  }]);

  return ActivitySelect;
}(_preact.Component);

exports.default = ActivitySelect;
},{"preact":"node_modules/preact/dist/preact.module.js","luxon":"node_modules/luxon/build/cjs-browser/luxon.js"}],"js/activity_edit.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _luxon = require("luxon");

var _noty = _interopRequireDefault(require("noty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EditableActivity = /*#__PURE__*/function (_Component) {
  _inherits(EditableActivity, _Component);

  var _super = _createSuper(EditableActivity);

  function EditableActivity(props) {
    var _this;

    _classCallCheck(this, EditableActivity);

    _this = _super.call(this, props);
    _this.state = {
      delete_sure: false,
      edit_timings: false,
      unique_id: props.module_code.replace('/', '-').replace(' ', '') + '-' + props.id,
      day_object: _luxon.DateTime.fromISO(props.day)
    };
    return _this;
  }

  _createClass(EditableActivity, [{
    key: "setDeleteSure",
    value: function setDeleteSure() {
      this.setState({
        delete_sure: true
      });
    }
  }, {
    key: "setEditTimings",
    value: function setEditTimings() {
      this.setState({
        edit_timings: true
      });
    }
  }, {
    key: "render",
    value: function render(_ref, _ref2) {
      var _this2 = this;

      var id = _ref.id,
          title = _ref.title,
          room = _ref.room,
          cal_description = _ref.cal_description,
          code_info = _ref.code_info,
          weeks = _ref.weeks,
          max_week = _ref.max_week,
          start = _ref.start,
          end = _ref.end,
          timings = _ref.timings,
          change_property = _ref.change_property,
          delete_activity = _ref.delete_activity;
      var delete_sure = _ref2.delete_sure,
          edit_timings = _ref2.edit_timings,
          unique_id = _ref2.unique_id,
          day_object = _ref2.day_object;
      return (0, _preact.h)("div", {
        className: "rounded-lg bg-light overflow-hidden mb-3 pt-2 pb-2"
      }, (0, _preact.h)("div", {
        className: "form-group row m-0 pt-2 pb-2"
      }, (0, _preact.h)("label", {
        for: "activity-edit-title-".concat(unique_id),
        className: "col-sm-2"
      }, "Title:"), (0, _preact.h)("div", {
        className: "col-sm-10"
      }, (0, _preact.h)("input", {
        type: "text",
        className: "form-control",
        id: "activity-edit-title-".concat(unique_id),
        value: title,
        onInput: function onInput(e) {
          return change_property('title', e.target.value);
        }
      }))), (0, _preact.h)("div", {
        className: "form-group row m-0 pt-2 pb-2"
      }, (0, _preact.h)("label", {
        htmlFor: "activity-edit-room-".concat(unique_id),
        className: "col-sm-2"
      }, "Room:"), (0, _preact.h)("div", {
        className: "col-sm-10"
      }, (0, _preact.h)("input", {
        type: "text",
        className: "form-control",
        id: "activity-edit-room-".concat(unique_id),
        value: room,
        onInput: function onInput(e) {
          return change_property('room', e.target.value);
        }
      }))), (0, _preact.h)("div", {
        className: "form-group row m-0 pt-2 pb-2"
      }, (0, _preact.h)("label", {
        htmlFor: "activity-edit-description-".concat(unique_id),
        className: "col-sm-2"
      }, "Description:"), (0, _preact.h)("div", {
        className: "col-sm-10"
      }, (0, _preact.h)("textarea", {
        rows: 5,
        type: "text",
        className: "form-control",
        id: "activity-edit-description-".concat(unique_id),
        value: cal_description,
        onInput: function onInput(e) {
          return change_property('cal_description', e.target.value);
        }
      }))), edit_timings && (0, _preact.h)("div", {
        className: "form-group row m-0 pt-2 pb-2"
      }, (0, _preact.h)("label", {
        htmlFor: "activity-edit-timings-".concat(unique_id),
        className: "col-sm-2"
      }, "Timings:"), (0, _preact.h)("div", {
        className: "col-sm-10"
      }, (0, _preact.h)("textarea", {
        rows: 5,
        type: "text",
        className: "form-control",
        id: "activity-edit-timings-".concat(unique_id),
        value: timings,
        onInput: function onInput(e) {
          return change_property('timings', e.target.value);
        }
      }), (0, _preact.h)("small", {
        className: "form-text text-muted"
      }, "The format of the timings must be EXACTLY correct. For example, times must be in 24 hour format. The information below won't change as you edit the timings. However, it will be changed in the calendar."))), code_info && (0, _preact.h)("div", {
        className: "d-flex"
      }, (0, _preact.h)("div", {
        className: "p-3 pl-4"
      }, (0, _preact.h)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-exclamation-diamond-fill",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0, _preact.h)("path", {
        "fill-rule": "evenodd",
        d: "M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      }))), (0, _preact.h)("div", {
        className: "mr-auto p-3 pl-0"
      }, code_info)), (0, _preact.h)("div", {
        className: "d-flex"
      }, (0, _preact.h)("div", {
        className: "p-3 pl-4"
      }, (0, _preact.h)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-clock-fill",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0, _preact.h)("path", {
        "fill-rule": "evenodd",
        d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
      }))), (0, _preact.h)("div", {
        className: "mr-auto p-3 pl-0"
      }, "This activity runs from ", (0, _preact.h)("b", null, start), " to ", (0, _preact.h)("b", null, end))), (0, _preact.h)("div", {
        className: "d-flex"
      }, (0, _preact.h)("div", {
        className: "p-3 pl-4"
      }, (0, _preact.h)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 16 16",
        className: "bi bi-calendar2-week",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0, _preact.h)("path", {
        "fill-rule": "evenodd",
        d: "M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm-2 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
      }))), (0, _preact.h)("div", {
        className: "mr-auto p-3 pl-0"
      }, "The activity takes place on a ", (0, _preact.h)("b", null, day_object.toFormat('cccc')), ".", (0, _preact.h)("br", null), day_object.toFormat('cccc'), " of Week 0 is ", day_object.toFormat('DD'), ".", (0, _preact.h)("br", null), "The activity is on weeks:", (0, _preact.h)("div", {
        className: "d-flex flex-wrap mt-2"
      }, _toConsumableArray(Array(max_week).keys()).map(function (i) {
        return (0, _preact.h)("div", {
          key: i,
          className: "activity-edit-week" + (weeks.includes(i) ? ' activity-active-week' : '')
        }, i);
      })))), (0, _preact.h)("div", {
        className: "p-3"
      }, (0, _preact.h)("button", {
        className: "btn btn-warning mr-3",
        onClick: function onClick() {
          return _this2.setEditTimings();
        }
      }, "Edit Timings"), delete_sure ? (0, _preact.h)("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return delete_activity();
        }
      }, "You sure?") : (0, _preact.h)("button", {
        className: "btn btn-danger",
        onClick: function onClick() {
          return _this2.setDeleteSure();
        }
      }, "Delete Activity")));
    }
  }]);

  return EditableActivity;
}(_preact.Component);

function youFuckedIt() {
  new _noty.default({
    type: 'error',
    text: "The timings aren't formatted correctly. You cannot continue until you fix it. (I warned you...)",
    layout: "bottomLeft",
    timeout: 3000
  }).show();
}

var ActivityEdit = /*#__PURE__*/function (_Component2) {
  _inherits(ActivityEdit, _Component2);

  var _super2 = _createSuper(ActivityEdit);

  function ActivityEdit(props) {
    var _this3;

    _classCallCheck(this, ActivityEdit);

    _this3 = _super2.call(this, props);
    var max_week = Math.max.apply(Math, _toConsumableArray(props.modules.map(function (module) {
      return Math.max.apply(Math, _toConsumableArray(module.activities.map(function (activity) {
        return Math.max.apply(Math, _toConsumableArray(activity.weeks));
      })));
    }))) + 1;
    _this3.state = {
      modules: props.modules,
      max_week: max_week
    };
    return _this3;
  }

  _createClass(ActivityEdit, [{
    key: "continue_click",
    value: function continue_click() {
      // First convert and check the dates are okay
      console.log('registered click!');
      var incorrect_datetime = false;
      var output_modules = this.state.modules.map(function (module) {
        return _objectSpread(_objectSpread({}, module), {}, {
          activities: module.activities.map(function (activity) {
            return _objectSpread(_objectSpread({}, activity), {}, {
              final_timings: activity.timings.split('\n').map(function (line) {
                var split_line = line.split('UNTIL');

                if (split_line.length !== 2 || split_line[1].trim().length !== 5) {
                  incorrect_datetime = true;
                  console.log('SPLIT LINE ISSUE');
                  return;
                }

                var start = _luxon.DateTime.fromISO(split_line[0].trim(), {
                  zone: 'Europe/London'
                });

                var end = _luxon.DateTime.fromISO(split_line[0].trim().slice(0, -5) + split_line[1].trim(), {
                  zone: 'Europe/London'
                });

                if (!start.isValid || !end.isValid || start.toMillis() >= end.toMillis()) {
                  console.log('OTHER ISSUE');
                  incorrect_datetime = true;
                  return;
                }

                return {
                  start: {
                    dateTime: start.toISO({
                      suppressMilliseconds: true
                    }),
                    timeZone: 'Europe/London'
                  },
                  end: {
                    dateTime: end.toISO({
                      suppressMilliseconds: true
                    }),
                    timeZone: 'Europe/London'
                  }
                };
              })
            });
          })
        });
      });

      if (incorrect_datetime) {
        youFuckedIt();
        return;
      }

      this.props.continue_callback(output_modules);
    }
  }, {
    key: "change_property",
    value: function change_property(module_code, activity_id, property, new_value) {
      this.setState(function (_ref3) {
        var modules = _ref3.modules;
        return {
          modules: modules.map(function (module) {
            return module.code !== module_code ? module : _objectSpread(_objectSpread({}, module), {}, {
              activities: module.activities.map(function (activity) {
                return activity.id !== activity_id ? activity : _objectSpread(_objectSpread({}, activity), {}, _defineProperty({}, property, new_value));
              })
            });
          })
        };
      });
    }
  }, {
    key: "delete_activity",
    value: function delete_activity(module_code, activity_id) {
      this.setState(function (_ref4) {
        var modules = _ref4.modules;
        return {
          modules: modules.map(function (module) {
            return module.code !== module_code ? module : _objectSpread(_objectSpread({}, module), {}, {
              activities: module.activities.filter(function (activity) {
                return activity.id !== activity_id;
              })
            });
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render(_, _ref5) {
      var _this4 = this;

      var modules = _ref5.modules,
          max_week = _ref5.max_week;
      return (0, _preact.h)("div", {
        className: "mb-5"
      }, modules.map(function (_ref6) {
        var code = _ref6.code,
            title = _ref6.title,
            activities = _ref6.activities;
        return (0, _preact.h)("div", {
          className: "mb-5",
          key: code
        }, title ? (0, _preact.h)("h3", {
          className: "border-left pl-3 text-light mb-2"
        }, title, " ", (0, _preact.h)("small", {
          className: "text-muted"
        }, code)) : (0, _preact.h)("h3", {
          className: "border-left pl-3 text-light mb-2"
        }, code), activities.map(function (activity) {
          return (0, _preact.h)(EditableActivity, _extends({
            key: activity.id,
            max_week: max_week,
            module_code: code,
            change_property: function change_property(property, new_value) {
              return _this4.change_property(code, activity.id, property, new_value);
            },
            delete_activity: function delete_activity() {
              return _this4.delete_activity(code, activity.id);
            }
          }, activity));
        }));
      }), (0, _preact.h)("button", {
        className: "btn btn-lg btn-primary",
        onClick: function onClick() {
          return _this4.continue_click();
        }
      }, "Continue"), (0, _preact.h)("div", {
        className: "small text-muted"
      }, "Once you click continue you cannot go back. To restart you must refresh the page."));
    }
  }]);

  return ActivityEdit;
}(_preact.Component);

exports.default = ActivityEdit;
},{"preact":"node_modules/preact/dist/preact.module.js","luxon":"node_modules/luxon/build/cjs-browser/luxon.js","noty":"node_modules/noty/lib/noty.js"}],"node_modules/preact/test-utils/dist/testUtils.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupRerender = r;
exports.act = u;
exports.teardown = e;

var _preact = require("preact");

function r() {
  return _preact.options.t = _preact.options.debounceRendering, _preact.options.debounceRendering = function (r) {
    return _preact.options.o = r;
  }, function () {
    return _preact.options.o && _preact.options.o();
  };
}

var t = function (n) {
  return null != n && "function" == typeof n.then;
},
    o = 0;

function u(u) {
  if (++o > 1) {
    var i = u();
    return t(i) ? i.then(function () {
      --o;
    }) : (--o, Promise.resolve());
  }

  var f,
      c,
      a = _preact.options.requestAnimationFrame,
      l = r();

  _preact.options.requestAnimationFrame = function (n) {
    return f = n;
  };

  var v,
      d,
      h = function () {
    try {
      for (l(); f;) c = f, f = null, c(), l();

      e();
    } catch (n) {
      v || (v = n);
    }

    _preact.options.requestAnimationFrame = a, --o;
  };

  try {
    d = u();
  } catch (n) {
    v = n;
  }

  if (t(d)) return d.then(h, function (n) {
    throw h(), n;
  });
  if (h(), v) throw v;
  return Promise.resolve();
}

function e() {
  _preact.options.o && (_preact.options.o(), delete _preact.options.o), void 0 !== _preact.options.t ? (_preact.options.debounceRendering = _preact.options.t, delete _preact.options.t) : _preact.options.debounceRendering = void 0;
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _consts = require("./consts");

var _noty = _interopRequireDefault(require("noty"));

var _activity_select = _interopRequireDefault(require("./activity_select"));

var _activity_edit = _interopRequireDefault(require("./activity_edit"));

var _preact = require("preact");

var _luxon = require("luxon");

var _testUtils = require("preact/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO: Make module selection work by selecting what to add, not deleting
// TODO: Check browser compatibility
// TODO: Remove "D/" from location
// TODO: Better timings using start + duration
// Relevant elements
var start_fieldset = $('#start-fieldset');
var start_form = $('#start-form');
var module_select = $('#module-select');
var loading_box = $('#loading-box');
var activity_select_box = $('#activity-select-box');
var activity_select_container = document.getElementById('activity-select-container');
var activity_select_fieldset = $('#activity-select-fieldset');
var activity_edit_box = $('#activity-edit-box');
var activity_edit_container = document.getElementById('activity-edit-container');
var activity_edit_fieldset = $('#activity-edit-fieldset');
var final_box = $('#final-box'); // State transition code

var STATES = [{
  // State 0: Start Form
  before: function before() {
    return start_fieldset.attr('disabled', true);
  },
  on: function on() {
    return start_fieldset.attr('disabled', false);
  },
  after: function after() {
    return start_fieldset.attr('disabled', true);
  }
}, {
  // State 1: Loading
  before: function before() {
    return loading_box.css('display', 'none');
  },
  on: function on() {
    return loading_box.css('display', 'flex');
  },
  after: function after() {
    return loading_box.css('display', 'none');
  }
}, {
  // State 2: Activity Select
  before: function before() {
    activity_select_box.css('display', 'block');
    activity_select_fieldset.attr('disabled', true);
  },
  on: function on() {
    activity_select_box.css('display', 'block');
    activity_select_fieldset.attr('disabled', false);
  },
  after: function after() {
    activity_select_box.css('display', 'none');
    activity_select_fieldset.attr('disabled', false);
  }
}, {
  // State 3: Activity Edit
  before: function before() {
    activity_edit_box.css('display', 'block');
    activity_edit_fieldset.attr('disabled', true);
  },
  on: function on() {
    activity_edit_box.css('display', 'block');
    activity_edit_fieldset.attr('disabled', false);
  },
  after: function after() {
    activity_edit_box.css('display', 'none');
    activity_edit_fieldset.attr('disabled', false);
  }
}, {
  // State 4: Final box!
  before: function before() {
    return final_box.css('display', 'flex');
  },
  // Not going to happen
  on: function on() {
    return final_box.css('display', 'flex');
  },
  after: function after() {
    return final_box.css('display', 'none');
  }
}];

function goToState(state_index) {
  // Turn off all except
  STATES.slice(0, state_index).forEach(function (state) {
    return state.before();
  });
  STATES[state_index].on();
  STATES.slice(state_index + 1).forEach(function (state) {
    return state.after();
  });
}

window.goToState = goToState; // Code that runs on page load
// Add the modules to the select

Object.values(_consts.MODULES).forEach(function (_ref) {
  var code = _ref.code,
      title = _ref.title;
  return module_select.append($('<option>', {
    value: code,
    text: code + (title ? ' - ' + title : '')
  }));
});
module_select.multi({
  non_selected_header: 'Modules',
  selected_header: 'Selected Modules',
  search_placeholder: 'Search Modules... Try MATH1 or ANTH3...'
}); // Activate multiselect magic
// Form callback

start_form.on('submit', function (event) {
  event.preventDefault();
  var term = $("input[name='check-term']:checked").val();
  var module_codes = $(module_select).val();

  if (!module_codes.length) {
    new _noty.default({
      type: 'error',
      text: "You must select at least one module to continue.",
      layout: "bottomLeft",
      timeout: 3000
    }).show();
    return;
  }

  var module_promises = module_codes.map(function (module_code) {
    return fetch("data/module_".concat(module_code.replace('/', '_'), ".json")).then(function (r) {
      return r.json();
    });
  });
  goToState(1); // Try to load all the modules

  Promise.all(module_promises).then(function (modules) {
    return displayActivitySelect(modules, term);
  }).catch(function (err) {
    console.log(err);
    new _noty.default({
      type: 'error',
      text: "There was an error loading the modules. Please try again.",
      layout: "bottomLeft",
      timeout: 3000
    }).show();
    goToState(0);
  });
});

function displayActivitySelect(modules, term) {
  var new_modules = modules.map(function (_ref2) {
    var code = _ref2.code,
        title = _ref2.title,
        module = _objectWithoutProperties(_ref2, ["code", "title"]);

    return {
      code: code,
      title: title,
      activities: module["activities_".concat(term)]
    };
  });
  (0, _preact.render)((0, _preact.h)(_activity_select.default, {
    modules: new_modules,
    continue_callback: displayActivityEdit
  }, null), activity_select_container);
  goToState(2);
  window.scrollBy(0, 60);
}

function displayActivityEdit(selected_modules) {
  selected_modules = selected_modules.filter(function (activity) {
    return activity.length !== 0;
  }).map(function (module) {
    return _objectSpread(_objectSpread({}, module), {}, {
      activities: module.activities.map(function (activity) {
        return _objectSpread(_objectSpread({}, activity), {}, {
          title: "".concat(activity.type, " ").concat(activity.description || module.title || (!activity.type.includes(module.code) ? '' : module.code)),
          cal_description: "Staff: ".concat(activity.staff, "\nPlanned size: ").concat(activity.planned_size, "\nCode: ").concat(activity.code_long, "\nDescription: ").concat(activity.description),
          timings: activity.weeks.map(function (week) {
            return _luxon.DateTime.fromISO(activity.day + 'T' + activity.start, {
              zone: 'Europe/London'
            }).plus({
              weeks: week
            }).toISO({
              suppressMilliseconds: true,
              suppressSeconds: true,
              includeOffset: false
            }) + ' UNTIL ' + activity.end;
          }).join('\n')
        });
      })
    });
  });

  if (selected_modules.length === 0) {
    new _noty.default({
      type: 'error',
      text: 'There are no activities to add to the calendar. If this was a mistake, refresh the page.',
      layout: 'bottomLeft'
    }).show();
    return;
  }

  (0, _preact.render)((0, _preact.h)(_activity_edit.default, {
    modules: selected_modules,
    continue_callback: almostThere
  }, null), activity_edit_container);
  goToState(3);
  window.scrollBy(0, 60);
}

var final_module_list;

function almostThere(modules) {
  final_module_list = modules;
  goToState(4);
  window.scrollBy(0, 60);
} // Google shit


var CLIENT_ID = '441729039045-0lrc1sftdpb99imsgffs3r0962qd9r5v.apps.googleusercontent.com';
var API_KEY = 'AIzaSyCqa7dvJqL3nU-L8QkfVaD4NmmlC7QbydU';
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
var SCOPES = "https://www.googleapis.com/auth/calendar";
var select_notif = $('#select-notifications');
var btn_authorize = $('#btn-authorize');
var btn_magic = $('#btn-magic');
var btn_sign_out = $('#btn-sign-out');

function updateGoogleSignInStatus(isSignedIn) {
  if (!isSignedIn) {
    btn_authorize.attr('disabled', false);
    btn_magic.attr('disabled', true);
    btn_sign_out.attr('disabled', true);
  } else {
    btn_authorize.attr('disabled', true);
    btn_magic.attr('disabled', false);
    btn_sign_out.attr('disabled', false);
  }
}

function handleGoogleClientLoad() {
  gapi.load('client:auth2', initGoogleClient);
}

setTimeout(handleGoogleClientLoad, 0);

function initGoogleClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Set the button to listen for signed in state changes
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateGoogleSignInStatus); // Update it to the current signed in state

    updateGoogleSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    btn_authorize.on('click', function () {
      gapi.auth2.getAuthInstance().signIn().catch(function () {
        new _noty.default({
          type: 'error',
          layout: 'bottomLeft',
          text: 'Google sign in failed. Please try again.',
          timeout: 2000
        }).show();
      });
    });
    btn_magic.on('click', handleMagicClick);
    btn_sign_out.on('click', function () {
      gapi.auth2.getAuthInstance().signOut();
    });
  }).catch(function (err) {
    console.log(err);
    new _noty.default({
      type: 'error',
      layout: 'bottomLeft',
      text: 'Google magic failed. Please refresh the page.'
    }).show();
  });
}

function handleMagicClick() {
  btn_magic.attr('disabled', true);
  var generatedCalendar;
  gapi.client.calendar.calendars.insert({
    summary: 'Durham Timetable',
    timeZone: 'Europe/London'
  }).then(function (json) {
    generatedCalendar = json.result;
    new _noty.default({
      type: 'success',
      layout: 'bottomLeft',
      text: 'New calendar successfully created!',
      timeout: 4000
    }).show(); // Deal with setting notifications

    if (select_notif.val() !== 'none') {
      gapi.client.calendar.calendarList.patch({
        calendarId: generatedCalendar.id,
        defaultReminders: [{
          method: 'popup',
          minutes: parseInt(select_notif.val())
        }]
      }).then(function (json) {
        new _noty.default({
          type: 'success',
          layout: 'bottomLeft',
          text: 'Sucessfully changed the notification settings!',
          timeout: 4000
        }).show();
      }).catch(function (err) {
        console.log(err);
        new _noty.default({
          type: 'error',
          layout: 'bottomLeft',
          text: 'Some error setting the notification settings, you will have to set it manually.',
          timeout: 4000
        }).show();
      });
    } // Now add the events


    var eventBatch = gapi.client.newBatch();
    final_module_list.forEach(function (module) {
      return module.activities.forEach(function (_ref3) {
        var title = _ref3.title,
            room = _ref3.room,
            cal_description = _ref3.cal_description,
            final_timings = _ref3.final_timings;
        return final_timings.forEach(function (timing) {
          var event = _objectSpread(_objectSpread({
            calendarId: generatedCalendar.id,
            summary: title,
            location: room,
            description: cal_description
          }, timing), {}, {
            reminders: {
              useDefault: true
            }
          });

          console.log(event);
          var request = gapi.client.calendar.events.insert(event);
          eventBatch.add(request);
        });
      });
    });
    eventBatch.then(function (json) {
      console.log(json);
      new _noty.default({
        type: 'success',
        layout: 'bottomLeft',
        text: 'It worked!!!!',
        timeout: 2000
      }).show();
    }).catch(function (err) {
      console.log(err);
      btn_magic.attr('disabled', false);
      new _noty.default({
        type: 'error',
        layout: 'bottomLeft',
        text: 'Error creating the events. I would recommend manual deletion of the calendar and trying again.',
        timeout: 2000
      }).show();
    });
  }).catch(function (err) {
    console.log(err);
    new _noty.default({
      type: 'error',
      layout: 'bottomLeft',
      text: 'Some problem creating the calendar :S',
      timeout: 2000
    }).show();
    btn_magic.attr('disabled', false);
  });
}
},{"./consts":"js/consts.js","noty":"node_modules/noty/lib/noty.js","./activity_select":"js/activity_select.jsx","./activity_edit":"js/activity_edit.jsx","preact":"node_modules/preact/dist/preact.module.js","luxon":"node_modules/luxon/build/cjs-browser/luxon.js","preact/test-utils":"node_modules/preact/test-utils/dist/testUtils.module.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63074" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map